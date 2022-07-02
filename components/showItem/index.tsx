import { MostrarProductos, CatalogueLink, Spinner } from "./styled";
import { WhatsappButton } from "ui/buttons";
import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { Item } from "ui/card";

export function ShowItem() {
	const router = useRouter();
	const itemId = router.query;
	const product = useProducts(itemId.itemId);

	function goToCatalogue(e: any) {
		e.preventDefault();
		router.push(`/catalogue/${product.object.UserId}`);
	}

	if (product) {
		return (
			<MostrarProductos>
				<Item
					key={product.object.objectID}
					nombre={product.object.Name}
					imagen={product.object.Images[0].url}
					precio={product.object["Unit cost"]}
					description={product.object.Description}
				></Item>

				<CatalogueLink onClick={goToCatalogue}> Ver más prductos del vendedor </CatalogueLink>
				{/* <WhatsappButton number={} /> */}
			</MostrarProductos>
		);
	} else {
		return <Spinner>
			<div className="spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Spinner>;
	}
}
