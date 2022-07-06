import { Root, RootLinks, RootMenu } from "components/footer/styled";
import { useRouter } from "next/router";
import { useMe } from "lib/hooks";
import { Body } from "ui/texts";

export function Footer() {
	const user = useMe();
	const router = useRouter();
	const login = user == false ? "Ingresar" : " ";

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
			</RootLinks>

			<Body white> ©2022 BoMarket </Body>
		</Root>
	);
}
