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
	width: 80px;

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
