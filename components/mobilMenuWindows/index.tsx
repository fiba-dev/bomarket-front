import { MobilBoton, BotonCerrar, UserDisplay, ProfilePicture } from "./styled";
import { LoginDisplay } from "components/displayLogin";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMe } from "lib/hooks";

const MobileWindows = styled.div`

	background-image: url("https://res.cloudinary.com/dx1fmmltu/image/upload/v1656541757/pic_sj6lgm.jpg");
	background-size: cover;
	border-radius: 15px;
	height: 100vh;
	width: 100%;

	position: absolute;
	right: 0px;
	top: 0px;

	justify-content: center;
	flex-direction: column;
	align-items: center;
	display: flex;
	z-index: 1;

	@media(min-width: 500px) {
		display: none;
	}
`;

export function MobileMenuWindows(props: any) {
	const router = useRouter();
	let user = useMe();

	return (
		props.estado && (
			<MobileWindows>
				<BotonCerrar src="https://res.cloudinary.com/dx1fmmltu/image/upload/v1657028072/x_f18nw7.svg"
					onClick={() => {
						props.cambiarEstado(!props.estado);
					}}
				/>

				{ user ?
				
					<UserDisplay>
						{ user?.photo ?
							<ProfilePicture src={user?.photo["secure_url"]} />
							:
							<ProfilePicture src="https://res.cloudinary.com/matitoledo/image/upload/v1656633326/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg_iwuwwy.jpg" />
						}
					</UserDisplay>
				:
					false
				}

				{!user ? <MobilBoton
					onClick={() => {
						router.push("/signin"), props.cambiarEstado(!props.estado);
					}}
				>
					Ingresar
				</MobilBoton> : null}

				<MobilBoton
					onClick={() => {
						router.push("/profile"), props.cambiarEstado(!props.estado);
					}}
				>
					Mi Perfil
				</MobilBoton>
				<MobilBoton
					onClick={() => {
						router.push("/search"), props.cambiarEstado(!props.estado);
					}}
				>
					Buscar
				</MobilBoton>
				{ user ? <MobilBoton
					onClick={() => {
						router.push(`/catalogue/${user?.userId}`), props.cambiarEstado(!props.estado);
					}}
				>
					Mi Catálogo
				</MobilBoton> : false }

				{ user ? <MobilBoton
					onClick={() => {
						router.push("/upload-product"), props.cambiarEstado(!props.estado);
					}}
				>
					Publicar Producto
				</MobilBoton> : false }
				<LoginDisplay />
			</MobileWindows>
		)
	);
}
