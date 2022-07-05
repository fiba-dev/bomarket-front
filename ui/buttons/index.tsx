import styled, { css } from "styled-components";
import ReactWhatsapp from 'react-whatsapp';
import { Subtitle, Title } from "../texts";

export const MainButton = styled.button`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	border-radius: 8px;
	text-align: center;
	font-weight: 700;
	font-size: 16px;
	cursor: pointer;
	color: white;
	width: 350px;
	height: 37px;
	margin: 5px;
	border: none;
`;

export const BotonAzul = styled(MainButton)`
	background-color: var(--azul);

	:hover {
		background-color: var(--fucsia);
	}
`;
export const BotonCeleste = styled(MainButton)`
	background-color: var(--celeste);
	cursor: pointer;
	height: 63px;

	:hover {
		background-color: var(--fucsia);
	}
`;
export const BotonNaranja = styled(MainButton)<{ buscar?: any; profile?: any }>`
	background-color: var(--naranja);
	color: black;

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
	font-size: 30px;
	cursor: pointer;
	height: auto;
	padding: 8px;

	:hover {
		background-color: var(--celeste);
	}
	@media (min-width: 1080px) {
		display: block;
		width: 175px;
	}
`;

export const MobilBoton = styled.button`
	background-color: transparent;
	margin-bottom: 31px;
	border: none;

	cursor: pointer;
	h2 {
		:hover {
			color: var(--fucsia);
		}
	}
`;
export const MobilBotonClose = styled.button`
	background-color: transparent;
	margin-bottom: 31px;
	position: absolute;
	border: none;
	right: 20px;
	top: 20px;

	cursor: pointer;
	h1 {
		:hover {
			color: var(--fucsia);
		}
	}
`;
export const PageButton = styled.a`
	color: var(--naranja);
	text-align: center;
	min-width: 100px;
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

const Styles = styled(ReactWhatsapp)`

	margin-right: 10px;
	position: inherit;
	margin-top: 10px;
	cursor: pointer;
	align-self: end;
	height: 45px;
	width: 45px;
`;

export function WhatsappButton({ number }: any) {

	return <Styles number={number.toString()} message="Trying from the web" element="img" src="https://res.cloudinary.com/dx1fmmltu/image/upload/v1656622795/whatsapp_rjprep.png" />
}
