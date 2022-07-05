import { Placeholder, Textarea } from "ui/textFields";
import { Form, Root, UserPhoto } from "./styled";
import { MyDropzone } from "components/dropzone";
import { SpinnerLoader } from "ui/loaders";
import { Large, Subtitle } from "ui/texts";
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
		const img = image ? image : user.photo?.url;
		const description = e.description ? e.description : user.description;

		let res = await editMe({ name, adress, phone: parseInt(phone), photo: img, description });
		
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
						{...register("name", { maxLength: 12 } )}
						></Placeholder>
						{ errors["name"] && <span className="error-style"> Hasta 12 caracteres! </span> }

					<Placeholder
						profile="true"
						placeholder={"Dirección: " + `${adress ? adress : "Sin información"}`}
						type="text"
						{...register("adress")}
					></Placeholder>
					{ errors["adress"] && <span className="error-style"> Ocurrió un error </span> }

					<Placeholder
						profile="true"
						placeholder={"Telefono: " + `${phone ? phone : "Sin información"}`}
						type="tel"
						{...register("phone")}
					></Placeholder>
					{ errors["phone"] && <span className="error-style"> Ocurrió un error </span> }

					<MyDropzone img={getImage}></MyDropzone>

					<Textarea
						profile="true"
						placeholder={"Descripción: " + `${description ? description : "Sin información"}`}
						{...register("description")}
					></Textarea>
					{ errors["description"] && <span className="error-style"> Ocurrió un error </span> }

					<BotonNaranja profile="true" >Guardar</BotonNaranja>
				</Form>
			</Root>
		);

	} else {
		return <SpinnerLoader />
	}
}
