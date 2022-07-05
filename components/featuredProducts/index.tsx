import { MostrarProductos, Root } from "./styled";
import { featuredProducts } from "lib/hooks";
import { useEffect, useState } from "react";
import { SpinnerLoader } from "ui/loaders";
import { useRouter } from "next/router";
import { Subtitle } from "ui/texts";
import { Card } from "ui/card";

export function FeaturedProducts() {
	const router = useRouter();
	const [ products, setProducts ] = useState(null as any);

	const productos = async () => {
		const res = await featuredProducts();
		setProducts(res);
	}

	useEffect(() => {
		productos();
	}, []);

	if (products) {

		return (
			<Root>
				<Subtitle>Productos destacados</Subtitle>
				<MostrarProductos>
					{products?.map((r: any) => (
						<Card
							onClick={() => {
								router.push("/item/" + r.objectId);
							}}
							key={r.objectId}
							nombre={r.Name}
							imagen={r.Images[0].url}
							precio={r["Unit cost"]}
						></Card>
					))}
				</MostrarProductos>
			</Root>
		);
	} else {
		return	<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<Subtitle style={{ paddingTop: 40 }}> Productos destacados! </Subtitle>
			<SpinnerLoader />
		</div>
	}
}
