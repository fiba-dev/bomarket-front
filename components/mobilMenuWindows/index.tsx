import styled from "styled-components";
import { BotonCerrarMobil, BotonMobil } from "ui/buttons";

import { useRouter } from "next/router";

import { LoginDisplay } from "components/displayLogin";
import { useMe } from "lib/hooks";

const MobileWindows = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: black;

	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;

	display: flex;
	z-index: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export function MobileMenuWindows(props: any) {
	const router = useRouter();
	let user = useMe();

	return (
		props.estado && (
			<MobileWindows>
				<BotonCerrarMobil
					onClick={() => {
						props.cambiarEstado(!props.estado);
					}}
				></BotonCerrarMobil>

				{!user.email ? <BotonMobil
					onClick={() => {
						router.push("/signin"), props.cambiarEstado(!props.estado);
					}}
				>
					Ingresar
				</BotonMobil> : null}

				<BotonMobil
					onClick={() => {
						router.push("/profile"), props.cambiarEstado(!props.estado);
					}}
				>
					Mi Perfil
				</BotonMobil>
				<BotonMobil
					onClick={() => {
						router.push("/search"), props.cambiarEstado(!props.estado);
					}}
				>
					Buscar
				</BotonMobil>
				{ user ? <BotonMobil
					onClick={() => {
						router.push("/upload-product"), props.cambiarEstado(!props.estado);
					}}
				>
					Publicar Producto
				</BotonMobil> : false }
				<LoginDisplay />
			</MobileWindows>
		)
	);
}
