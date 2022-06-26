import styled from "styled-components";
import { useMe } from "lib/hooks";
import { Body, Large } from "../ui/texts";
import { useRouter } from "next/router";

import { BotonFucsia } from "../ui/buttons";

const DisplayLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1080px) {
		display: none;
	}
`;
const DisplayLoginDesktop = styled.div`
	display: none;
	flex-direction: column;
	align-items: center;
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
				<Body white>{user.email}</Body>
				<a
					onClick={() => {
						router.push("/logout");
					}}
				>
					{" "}
					<Large fucsia>Cerrar Sesion</Large>{" "}
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
					<Large fucsia>Cerrar Sesion</Large>{" "}
				</a>
			</DisplayLoginDesktop>
		);
	} else {
		return (
			<DisplayLoginDesktop>
				<BotonFucsia
					onClick={() => {
						router.push("/signin");
					}}
				>
					Ingresar
				</BotonFucsia>
			</DisplayLoginDesktop>
		);
	}
}
