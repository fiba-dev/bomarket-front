import styled from "styled-components";
import { BotonCerrarMobil, BotonMobil } from "components/ui/buttons";

import { useRouter } from "next/router";

import { LoginDisplay } from "components/displayLogin";

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

	return (
		props.estado && (
			<MobileWindows>
				<BotonCerrarMobil
					onClick={() => {
						props.cambiarEstado(!props.estado);
					}}
				></BotonCerrarMobil>
				<BotonMobil
					onClick={() => {
						router.push("/signin"), props.cambiarEstado(!props.estado);
					}}
				>
					Ingresar
				</BotonMobil>
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
				<LoginDisplay />
			</MobileWindows>
		)
	);
}
