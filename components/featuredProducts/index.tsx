import { MostrarProductos, Root } from "./styled";
import { useFeaturedProducts } from "lib/hooks";
import { SpinnerLoader } from "ui/loaders";
import { useRouter } from "next/router";
import { Subtitle } from "ui/texts";
import { Card } from "ui/card";

export function FeaturedProducts() {
	const router = useRouter();
	const product = useFeaturedProducts();

	if (product) {
		console.log("SOY PRODUCT", product);

		return (
			<Root>
				<Subtitle>Productos destacados</Subtitle>
				<MostrarProductos>
					{product.map((r: any) => (
						<Card
							onClick={() => {
								router.push("/item/" + r.objectID);
							}}
							key={r.objectID}
							nombre={r.Name}
							imagen={r.Images[0].url}
							precio={r["Unit cost"]}
						></Card>
					))}
				</MostrarProductos>
			</Root>
		);
	} else {
		return <SpinnerLoader />
	}
}
