import React, { useState } from "react";
import { useMe, editMe } from "lib/hooks";
import router from "next/router";
import { Placeholder, Textarea } from "ui/textFields";
import { Form, Root, UserPhoto } from "./styled";
import { useForm } from "react-hook-form";
import { BotonNaranja } from "ui/buttons";
import { Body, Large, Subtitle, Title } from "ui/texts";
import { MyDropzone } from "components/dropzone";

export function Profile() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	let user = useMe();

	const [image, setImage] = useState(null as any);

	const getImage = (img: any) => {
		setImage(img);
	}

	async function handlerUserForm(e: any) {
		const name = e.name ? e.name : user.name;
		const adress = e.adress ? e.adress : user.adress;
		const phone = e.phone ? e.phone : user.phone;
		const description = e.description ? e.description : user.description;



		let res = await editMe({ name, adress, phone: parseInt(phone), photo: image, description });

		if (res == true) {
			window.alert("MODIFICADO CON EXITO");
			router.push("/");
		} else {
			window.alert("NO SE PUDO MODIFICAR EL USUARIO");
		}
	}

	if (user) {
		const { name, phone, adress, description } = user
		let userPhoto = user.photo ? user.photo.secure_url : "https://res.cloudinary.com/matitoledo/image/upload/v1656633326/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg_iwuwwy.jpg"

		return (
			<Root>
				<Subtitle>Perfil</Subtitle>
				<UserPhoto src={userPhoto} ></UserPhoto>
				<Large>{user.email}</Large>
				<Form onSubmit={handleSubmit(handlerUserForm)}>
					<Placeholder
						profile="true"
						placeholder={"Nombre: " + `${name ? name : "Sin informacíon"}`}
						type="text"
						{...register("name")}
					></Placeholder>
					<Placeholder
						profile="true"
						placeholder={"Dirección: " + `${adress ? adress : "Sin informacíon"}`}
						type="text"
						{...register("adress")}
					></Placeholder>
					<Placeholder
						profile="true"
						placeholder={"Telefono: " + `${phone ? phone : "Sin informacíon"}`}
						type="tel"
						{...register("phone")}
					></Placeholder>
					<MyDropzone img={getImage}></MyDropzone>
					<Textarea
						profile="true"
						placeholder={"Descripción: " + `${description ? description : "Sin informacíon"}`}
						{...register("description")}
					></Textarea>
					<BotonNaranja profile="true" >Guardar</BotonNaranja>
				</Form>
			</Root>
		);
	} else {
		return <Title>Cargando ...</Title>
		// return (
		// 	<div>
		// 		<Root onSubmit={handleSubmit(handlerUserForm)}>
		// 			<Subtitle>Perfil</Subtitle>
		// 			<Placeholder
		// 				placeholder="Nombre"
		// 				type="text"
		// 				{...register("name")}
		// 			></Placeholder>
		// 			<Placeholder
		// 				placeholder="Direccion"
		// 				type="text"
		// 				{...register("direccion")}
		// 			></Placeholder>
		// 			<Placeholder
		// 				placeholder="Telefono"
		// 				type="tel"
		// 				{...register("phone")}
		// 			></Placeholder>


		// 			<BotonNaranja profile="true">Guardar</BotonNaranja>
		// 		</Root>
		// 	</div>
		// );
	}
}
