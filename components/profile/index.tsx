import React from "react";
import { useMe, editMe } from "lib/hooks";
import router from "next/router";
import { Placeholder } from "components/ui/textFields";
import { Root } from "./styled";
import { useForm } from "react-hook-form";
import { BotonNaranja } from "components/ui/buttons";
import { Body, Subtitle } from "components/ui/texts";

export function Profile() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	let user = useMe();

	async function handlerUserForm(e: any) {
		const nombre = e.name ? e.name : user.nombre;
		const direccion = e.direccion ? e.direccion : user.direccion;
		const telefono = e.phone ? e.phone : user.telefono;

		let res = await editMe({ nombre, direccion, telefono });

		if (res == true) {
			window.alert("MODIFICADO CON EXITO");
			router.push("/");
		} else {
			window.alert("NO SE PUDO MODIFICAR EL USUARIO");
		}
	}
	if (user) {
		const name = user.nombre;
		const telefono = user.telefono;
		const direccion = user.direccion;
		return (
			<Root onSubmit={handleSubmit(handlerUserForm)}>
				<Subtitle>Perfil</Subtitle>
				<Body>Estos son los datos guardados en su perfil</Body>
				<Placeholder
					profile="true"
					placeholder={"Nombre: " + `${name}`}
					type="text"
					{...register("name")}
				></Placeholder>
				<Placeholder
					profile="true"
					placeholder={"Dirección: " + `${direccion}`}
					type="text"
					{...register("direccion")}
				></Placeholder>
				<Placeholder
					profile="true"
					placeholder={"Telefono: " + `${telefono}`}
					type="tel"
					{...register("phone")}
				></Placeholder>

				<BotonNaranja profile="true">Guardar</BotonNaranja>
			</Root>
		);
	} else {
		return (
			<div>
				<Root onSubmit={handleSubmit(handlerUserForm)}>
					<Subtitle>Perfil</Subtitle>
					<Placeholder
						placeholder="Nombre"
						type="text"
						{...register("name")}
					></Placeholder>
					<Placeholder
						placeholder="Direccion"
						type="text"
						{...register("direccion")}
					></Placeholder>
					<Placeholder
						placeholder="Telefono"
						type="tel"
						{...register("phone")}
					></Placeholder>

					<BotonNaranja profile="true">Guardar</BotonNaranja>
				</Root>
			</div>
		);
	}
}
