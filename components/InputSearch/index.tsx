import { Root, RootOscuro } from "./styled";
import { Placeholder } from "ui/textFields";
import { BotonNaranja } from "ui/buttons";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export function Buscar() {
	const {
		reset,
		register,
		handleSubmit,
		formState,
		formState: { isSubmitSuccessful }
	} = useForm();

	const router = useRouter();
	const onSubmit = (data: any) => {
		router.push("/search?q=" + data.q + "&offset=0&limit=5");
		const q = data.q;
		
		if (formState.isSubmitSuccessful) {
			reset({ q: '' });
		}
	};

	return (
		<Root onSubmit={handleSubmit(onSubmit)}>
			<Placeholder
				placeholder="Encontra tu producto ideal"
				{...register("q")}
			></Placeholder>
			<BotonNaranja> Buscar </BotonNaranja>
		</Root>
	);
}

export function BuscarOscuro() {
	const {
		reset,
		register,
		handleSubmit,
		formState,
		formState: { isSubmitSuccessful }
	} = useForm();
	const router = useRouter();
	
	const onSubmit = (data: any) => {
		router.push("/search?q=" + data.q + "&offset=0&limit=5");
		const q = data.q;

		if (formState.isSubmitSuccessful) {
			reset({ q: '' });
		}
	};


	return (
		<RootOscuro onSubmit={handleSubmit(onSubmit)}>
			<Placeholder
				placeholder="Encontra tu producto ideal"
				{...register("q")}
			></Placeholder>
			<BotonNaranja onClick={handleSubmit(onSubmit)} buscar> Buscar </BotonNaranja>
		</RootOscuro>
	);
}
