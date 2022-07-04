import { Dropdown, MenuOption, Root, Body } from "./styled";
import { BotonFucsia } from "../../ui/buttons";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Large } from "../../ui/texts";
import { UserIcon } from "ui/logos";
import { useMe } from "lib/hooks";
import { useState } from "react";


const DisplayLogin = styled.div`
	flex-direction: column;
	align-items: center;
	display: flex;

	@media (min-width: 1080px) {
		background-color: red;
		display: none;
	}
`;

export function LoginDisplay() {
	const router = useRouter();
	let user = useMe();

	if (user.email) {
		return (
			<DisplayLogin>
				<Body white> {user.email} </Body>
				<a
					onClick={() => {
						router.push("/logout");
					}}
				>
					{" "}
					<Large fucsia> Cerrar Sesion </Large>{" "}
				</a>
			</DisplayLogin>
		);
	} else {
		return (
			<DisplayLogin>
				<BotonFucsia
					onClick={() => {
						router.push("/signin");
					}}
				>
					Ingresar
				</BotonFucsia>
			</DisplayLogin>
		);
	}
}

export function LoginDisplayAndButton() {
	const router = useRouter();
	const [userActive, setUserActive] = useState(false)
	let user = useMe();

	function handleClick() {
		if (!user) {
			router.push({ pathname: "/signin" });
		} else {

			setUserActive(!userActive)
		}
	}

	return (
		<Root>
			<UserIcon onClick={handleClick}></UserIcon>
			{userActive ? (
				<Dropdown>
					<MenuOption
						onClick={() => {
							router.push({ pathname: "/profile" });
							setUserActive(!userActive);
						}}
					>
						<Body color="#343538">MI PERFIL</Body>
					</MenuOption>
					<MenuOption
						onClick={() => {
							router.push({ pathname: "/search" });
							setUserActive(!userActive);
						}}
					>
						<Body color="#343538"> BUSCAR </Body>
					</MenuOption>
					<MenuOption
						onClick={() => {
							router.push({ pathname: "/upload-product" });
							setUserActive(!userActive);
						}}
					>
						<Body color="#343538"> PUBLICAR PRODUCTO </Body>
					</MenuOption>
					<MenuOption
						onClick={() => {
							setUserActive(!userActive);
							router.push({ pathname: "/logout" });
						}}
					>
						<Body color="#343538">CERRAR SESION</Body>
					</MenuOption>
				</Dropdown>
			) : null}
		</Root>
	);
}
