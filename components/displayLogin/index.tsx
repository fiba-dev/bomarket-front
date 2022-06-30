import { BotonFucsia } from "../../ui/buttons";
import { Body, Large } from "../../ui/texts";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMe } from "lib/hooks";


const DisplayLogin = styled.div`
	flex-direction: column;
	align-items: center;
	display: flex;

	@media (min-width: 1080px) {
		background-color: red;
		display: none;
	}
`;
const DisplayLoginDesktop = styled.div`
	flex-direction: column;
	align-items: center;
	display: none;

	@media (min-width: 1080px) {
		display: flex;
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
	let user = useMe();

	if (user) {
		return (
			<DisplayLoginDesktop>
				<Body white>{user.email}</Body>
				<a
					onClick={() => {
						router.push("/logout");
					}}
				>
					{" "}
					<Large fucsia> Cerrar Sesion </Large>{" "}
				</a>
			</DisplayLoginDesktop>
		);
	} else {
		return (
			<DisplayLoginDesktop>
				<h3 style={{ color: "#FEFEFE", marginRight: 10, cursor: "pointer" }} onClick={() => {
					router.push("/signin");
				}}>
					Ingresar
				</h3>
			</DisplayLoginDesktop>
		);
	}
}
