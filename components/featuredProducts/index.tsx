import { useRouter } from "next/router";
import { useSearchProducts, useProducts, useFeaturedProducts } from "lib/hooks";
import { Card, Item } from "components/ui/card";
import { PageButton } from "components/ui/buttons";
import { MostrarProductos, Root } from "./styled";
import { Pagination } from "components/ui/pagination";
import { Subtitle, Title } from "components/ui/texts";

export function FeaturedProducts() {
	const router = useRouter();
	const itemId = router.query;
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
		return <div></div>;
	}
}
