import { MostrarProductos, CatalogueLink, Spinner } from "./styled";
import { BotonCeleste, WhatsappButton } from "ui/buttons";
import { useProducts, useMe } from "lib/hooks";
import { useRouter } from "next/router";
import { Item } from "ui/card";

export function ShowItem() {
	const user = useMe();
	const router = useRouter();
	const itemId = router.query;
	const product = useProducts(itemId.itemId);

	console.log("ESTO ES USER: ", user)
	console.log("ESTO ES PRODUCT: ", product)

	function goToCatalogue(e: any) {
		e.preventDefault();
		router.push(`/catalogue/${product.object.UserId}`);
	}

	function goToEditarProducto(e: any) {
		e.preventDefault();
		router.push("/edit-product/" + itemId.itemId);
	}

	if (product) {
		return (
			<MostrarProductos>
				<WhatsappButton number={product.object?.phone.toString()} />
				<Item
					key={product.object.objectID}
					nombre={product.object.Name}
					imagen={product.object.Images[0].url}
					precio={product.object["Unit cost"]}
					description={product.object.Description}
				></Item>
				{ user.userId == product.object.UserId ? <BotonCeleste style={{ color: "black" }} onClick={goToEditarProducto}> Editar </BotonCeleste> : false }
				<CatalogueLink onClick={goToCatalogue}> Ver más prductos del vendedor </CatalogueLink>
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
