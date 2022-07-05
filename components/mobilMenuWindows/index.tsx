import { BotonCerrarMobil, BotonMobil } from "ui/buttons";
import { LoginDisplay } from "components/displayLogin";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMe } from "lib/hooks";

const MobileWindows = styled.div`
	background-color: black;
	height: 100vh;
	width: 100vw;

	position: absolute;
	bottom: 0px;
	right: 0px;
	left: 0px;
	top: 0px;

	justify-content: center;
	flex-direction: column;
	align-items: center;
	display: flex;
	z-index: 1;
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
