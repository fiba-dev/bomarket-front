import styled from "styled-components";

export const Root = styled.div`
	justify-content: space-around;
	background-color: black;
	flex-direction: column;
	align-items: left;
	position: static;
	display: flex;
	padding: 30px;
	height: 648px;
	width: 100%;
	bottom: 0px;

	@media (min-width: 1080px) {
		padding: 50px;
		height: 400px;
	}
`;

export const RootMenu = styled.div`
	justify-content: space-evenly;
	flex-direction: column;
	align-items: left;
	display: flex;
	height: 50%;
	width: 100px;

	a {
		margin: 5px 0;
	}

	p {
		:hover {
			color: var(--fucsia);
			cursor: pointer;
		}
	}
`;

export const RootRedes = styled.div`
	justify-content: space-evenly;
	flex-direction: column;
	align-items: left;
	display: flex;
	width: 100px;
	height: 50%;
`;

export const RootLinks = styled.div`

	justify-content: space-around;
	background-color: black;
	flex-direction: column;
	align-items: left;
	display: flex;
	height: 60%;
	width: 100%;

	@media (min-width: 1080px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
