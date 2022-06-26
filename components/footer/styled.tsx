import styled from "styled-components";
export const Root = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	width: 100%;
	align-items: left;
	padding: 30px;
	height: 648px;
	justify-content: space-around;
	position: static;
	bottom: 0px;

	@media (min-width: 1080px) {
		padding: 50px;
		height: 400px;
	}
`;
export const RootMenu = styled.div`
	display: flex;
	flex-direction: column;
	height: 50%;
	align-items: left;
	justify-content: space-evenly;

	p {
		:hover {
			color: var(--fucsia);
			cursor: pointer;
		}
	}
`;
export const RootRedes = styled.div`
	display: flex;
	flex-direction: column;
	height: 50%;
	align-items: left;
	justify-content: space-evenly;
`;
export const RootLinks = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	width: 100%;
	height: 60%;
	align-items: left;
	justify-content: space-around;
	@media (min-width: 1080px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
