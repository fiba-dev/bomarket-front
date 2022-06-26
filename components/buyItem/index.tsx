import { useRouter } from "next/router";
import { useProducts, createOrder, useMe } from "lib/hooks";
import { BuyItemCard } from "components/ui/card";
import { useForm } from "react-hook-form";
import { ErrorMessage, MostrarProductos, Root, RootTotal } from "./styled";
import { Subtitle, Title } from "components/ui/texts";
import { Placeholder } from "components/ui/textFields";
import { BotonCeleste } from "components/ui/buttons";

export function BuyItem() {
	const {
		watch,
		setError,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const itemId = router.query;
	const watchFields = watch("cantidad");
	const product = useProducts(itemId.itemId);
	const user = useMe();
	async function Comprar() {
		let quantity = 1;
		if (!user) {
			window.alert("DEBES ESTAR LOGEADO PARA COMPRAR");
			router.push("/signin");
		}
		if (user && watchFields <= 10) {
			quantity = watchFields >= 1 ? parseInt(watchFields) : 1;
		} else {
			window.alert("NO HAY STOCK");
		}
		if (
			window.confirm(
				"seguro desea comprar " + quantity + " " + product.object.Name
			)
		) {
			let res = await createOrder(itemId.itemId, quantity);
			router.replace("/thanks");
			window.open(res.url);
		}
	}

	if (product) {
		let precio =
			watchFields >= 1
				? product.object["Unit cost"] * watchFields
				: product.object["Unit cost"];

		return (
			<MostrarProductos>
				<BuyItemCard
					key={product.object.objectID}
					nombre={product.object.Name}
					imagen={product.object.Images[0].url}
					precio={product.object["Unit cost"]}
				></BuyItemCard>
				<Root onSubmit={handleSubmit(Comprar)}>
					<RootTotal>Total:{precio}</RootTotal>
					<Placeholder
						type="number"
						{...register("cantidad", { max: 10 })}
						placeholder="1"
					></Placeholder>

					<BotonCeleste
						onClick={() => {
							setError("cantidad", { type: "max", message: "custom message" });
						}}
					>
						<Subtitle>Finalizar Compra </Subtitle>
					</BotonCeleste>
					<ErrorMessage>
						{errors.cantidad && <h2>{"NO HAY STOCK"}</h2>}
					</ErrorMessage>
				</Root>
			</MostrarProductos>
		);
	} else {
		return <div></div>;
	}
}
