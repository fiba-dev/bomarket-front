import { getSaveitem } from "lib/api";
import { useMe } from "lib/hooks";
import styled, { css } from "styled-components";
import { BodyBold, Subtitle, Title } from "../texts";

export const MainButton = styled.button`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 16px;
	font-weight: 700;
	width: 350px;
	height: 37px;
	text-align: center;
	color: white;
	border-radius: 8px;
	margin: 5px;
	border: none;
	cursor: pointer;
`;

export const BotonAzul = styled(MainButton)`
	background-color: var(--azul);
	:hover {
		background-color: var(--fucsia);
	}
`;
export const BotonCeleste = styled(MainButton)`
	cursor: pointer;
	background-color: var(--celeste);
	height: 63px;
	:hover {
		background-color: var(--fucsia);
	}
`;
export const BotonNaranja = styled(MainButton)<{ buscar?: any; profile?: any }>`
	color: black;
	background-color: var(--naranja);
	:hover {
		background-color: var(--fucsia);
	}
	@media (min-width: 1080px) {
		${(props) =>
			props.buscar &&
			css`
				width: 150px;
			`}
		${(props) =>
			props.profile &&
			css`
				width: 447px;
			`}
	}
`;
export const BotonFucsia = styled(MainButton)`
	background-color: var(--fucsia);
	cursor: pointer;
	:hover {
		background-color: var(--celeste);
	}
	@media (min-width: 1080px) {
		width: 175px;
		display: block;
	}
`;

export const MobilBoton = styled.button`
	background-color: transparent;
	border: none;
	margin-bottom: 31px;
	cursor: pointer;
	h2 {
		:hover {
			color: var(--fucsia);
		}
	}
`;
export const MobilBotonClose = styled.button`
	background-color: transparent;
	border: none;
	margin-bottom: 31px;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
	h1 {
		:hover {
			color: var(--fucsia);
		}
	}
`;
export const PageButton = styled.a`
	color: var(--naranja);
	min-width: 100px;
	text-align: center;
	cursor: pointer;
	:hover {
		color: var(--fucsia);
	}
`;

export function BotonMobil({ onClick, children }: any) {
	return (
		<MobilBoton onClick={onClick}>
			<Subtitle white>{children}</Subtitle>
		</MobilBoton>
	);
}

export function BotonCerrarMobil({ onClick }: any) {
	return (
		<MobilBotonClose onClick={onClick}>
			<Title white>x</Title>
		</MobilBotonClose>
	);
}
