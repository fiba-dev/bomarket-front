import { Placeholder, Textarea } from "ui/textFields";
import { Large, Subtitle, Title } from "ui/texts";
import { MyDropzone } from "components/dropzone";
import { Form, Root, UserPhoto } from "./styled";
import { useMe, editMe } from "lib/hooks";
import { useForm } from "react-hook-form";
import { BotonNaranja } from "ui/buttons";
import React, { useState } from "react";
import router from "next/router";
import swal from 'sweetalert';

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
			swal({ title: "Yes!", text: "Modificado con éxito!", icon: "success" });
			router.push("/");
		} else {
			swal({ title: "Ups...", text: "No se pudo modificar", icon: "error" });
		}
	}

	if (user) {
		const { name, phone, adress, description } = user
		let userPhoto = user.photo ? user.photo.secure_url : "https://res.cloudinary.com/matitoledo/image/upload/v1656633326/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg_iwuwwy.jpg"

		return (
			<Root style={{ marginTop: 50, marginBottom: 50 }}>
				<Subtitle> Perfil </Subtitle>
				<UserPhoto src={userPhoto} ></UserPhoto>
				<Large> {user.email} </Large>
				<Form onSubmit={handleSubmit(handlerUserForm)}>
					<Placeholder
						profile="true"
						placeholder={"Nombre: " + `${name ? name : "Sin información"}`}
						type="text"
						{...register("name")}
					></Placeholder>
					<Placeholder
						profile="true"
						placeholder={"Dirección: " + `${adress ? adress : "Sin información"}`}
						type="text"
						{...register("adress")}
					></Placeholder>
					<Placeholder
						profile="true"
						placeholder={"Telefono: " + `${phone ? phone : "Sin información"}`}
						type="tel"
						{...register("phone")}
					></Placeholder>
					<MyDropzone img={getImage}></MyDropzone>
					<Textarea
						profile="true"
						placeholder={"Descripción: " + `${description ? description : "Sin información"}`}
						{...register("description")}
					></Textarea>
					<BotonNaranja profile="true" >Guardar</BotonNaranja>
				</Form>
			</Root>
		);

	} else {
		return <Title> Cargando ... </Title>
	}
}
