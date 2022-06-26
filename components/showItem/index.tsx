import { useRouter } from "next/router";
import { useSearchProducts, useProducts } from "lib/hooks";
import { Card, Item } from "components/ui/card";
import { PageButton } from "components/ui/buttons";
import { MostrarProductos } from "./styled";
import { Pagination } from "components/ui/pagination";
import { Subtitle } from "components/ui/texts";

export function ShowItem() {
	const router = useRouter();
	const itemId = router.query;
	const product = useProducts(itemId.itemId);

	if (product) {
		return (
			<MostrarProductos>
				<Item
					key={product.object.objectID}
					nombre={product.object.Name}
					imagen={product.object.Images[0].url}
					precio={product.object["Unit cost"]}
					description={product.object.Description}
					onClick={() => {
						router.replace("/checkout/" + product.object.objectID);
					}}
				></Item>
			</MostrarProductos>
		);
	} else {
		return <div></div>;
	}
}
