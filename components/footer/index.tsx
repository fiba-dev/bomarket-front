import { Root, RootLinks, RootMenu, RootRedes } from "components/footer/styled";
import { InstagramLogo, TwitterLogo } from "ui/logos";
import { useRouter } from "next/router";
import { Body, Large } from "ui/texts";
import { useMe } from "lib/hooks";

export function Footer() {
	const user = useMe();
	console.log("SOY USER", user);

	const login = user == false ? "Ingresar" : " ";

	const router = useRouter();
	return (
		<Root>
			<RootLinks>
				<RootMenu>
					<a
						onClick={() => {
							router.push("/signin");
						}}
					>
						<Body white> {login} </Body>
					</a>

					<a>
						<Body
							white
							onClick={() => {
								router.push("/profile");
							}}
						>
							Mi Perfil
						</Body>
					</a>

					<a>
						<Body
							white
							onClick={() => {
								router.push("/");
							}}
						>
							Buscar
						</Body>
					</a>

					{ user ? <a>
						<Body
							white
							onClick={() => {
								router.push(`/catalogue/${user?.userId}`);
							}}
						>
							Mi Catálogo
						</Body>
					</a> : false }

					{ user ? <a>
						<Body
							white
							onClick={() => {
								router.push("/upload-product");
							}}
						>
							Publicar Producto
						</Body>
					</a> : false }

					<a>
						<Body
							white
							onClick={() => {
								router.push("/logout");
							}}
						>
							Logout
						</Body>
					</a>
				</RootMenu>

				<RootRedes>
					<Large white>Redes</Large>
					<TwitterLogo></TwitterLogo>
					<InstagramLogo></InstagramLogo>
				</RootRedes>
			</RootLinks>

			<Body white>©2022 BoMarket</Body>
		</Root>
	);
}
