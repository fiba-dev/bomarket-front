import React, { useState, useEffect } from "react";
import { sendCode, getToken } from "lib/api";
import router from "next/router";
import { Placeholder } from "components/ui/textFields";
import { Root, RootCode } from "./styled";
import { useForm } from "react-hook-form";
import { BotonNaranja } from "components/ui/buttons";
import { Body, Subtitle } from "components/ui/texts";

export function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [email, setEmail] = useState("");
	function handlerEmailForm(e: any) {
		const email = e.email;
		sendCode(email);
		setEmail(email);
	}
	async function handlerCodeForm(e: any) {
		const code = e.code;
		try {
			getToken(email, code).then((res) => {
				if (res != undefined) {
					if (res == false) {
						window.alert("Codigo Incorrecto");
					} else {
						window.alert("Logeado con EXITO");
						router.push("/");
					}
				} else {
					window.alert("Codigo Incorrecto");
				}
			});
		} catch (error) {
			throw error;
		}
	}
	const [styleEmail, setStyleEmail] = useState({
		display: email ? "none" : "",
	});
	const [styleCode, setStyleCode] = useState({
		display: email ? "" : "none",
	});
	useEffect(() => {
		setStyleCode({
			display: email ? "" : "none",
		});
		setStyleEmail({
			display: email ? "none" : "",
		});
	}, [email]);

	return (
		<div>
			<Root style={styleEmail} onSubmit={handleSubmit(handlerEmailForm)}>
				<Subtitle>Ingresar</Subtitle>
				<Placeholder
					placeholder="Email"
					type="email"
					{...register("email")}
				></Placeholder>
				<BotonNaranja>Ingresar</BotonNaranja>
			</Root>
			<RootCode style={styleCode} onSubmit={handleSubmit(handlerCodeForm)}>
				<Subtitle>Código</Subtitle>
				<Placeholder
					placeholder="CODE"
					type="number"
					{...register("code")}
				></Placeholder>
				<Body>Te enviamos un codigo a tu email</Body>
				<BotonNaranja>ENVIAR</BotonNaranja>
			</RootCode>
		</div>
	);
}
