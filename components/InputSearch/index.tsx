import { BotonAzul, BotonNaranja } from "components/ui/buttons";
import { Placeholder } from "components/ui/textFields";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Root, RootOscuro } from "./styled";

export function Buscar() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const q = router.query;
	const onSubmit = (data: any) => {
		router.push("/search?q=" + data.q + "&offset=0&limit=5");
	};

	return (
		<Root onSubmit={handleSubmit(onSubmit)}>
			<Placeholder
				placeholder="Encontra tu producto ideal"
				{...register("q")}
			></Placeholder>
			<BotonAzul>Buscar</BotonAzul>
		</Root>
	);
}

export function BuscarOscuro() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const router = useRouter();
	const q = router.query;
	const onSubmit = (data: any) => {
		router.push("/search?q=" + data.q + "&offset=0&limit=5");
	};

	return (
		<RootOscuro onSubmit={handleSubmit(onSubmit)}>
			<Placeholder
				placeholder="Encontra tu producto ideal"
				{...register("q")}
			></Placeholder>
			<BotonNaranja buscar>Buscar</BotonNaranja>
		</RootOscuro>
	);
}
