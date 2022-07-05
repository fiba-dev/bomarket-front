import { MostrarProductos, CatalogueLink } from "./styled";
import { BotonCeleste, WhatsappButton } from "ui/buttons";
import { useProducts, useMe } from "lib/hooks";
import { SpinnerLoader } from "ui/loaders";
import { useRouter } from "next/router";
import { Item } from "ui/card";

export function ShowItem() {
	const user = useMe();
	const router = useRouter();
	const itemId = router.query;
	const product = useProducts(itemId.itemId);

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
				<WhatsappButton number={product.object?.phone.toString()} />
				<CatalogueLink onClick={goToCatalogue}> Ver más prductos del vendedor </CatalogueLink>
			</MostrarProductos>
		);
	} else {
		return <SpinnerLoader />
	}
}
