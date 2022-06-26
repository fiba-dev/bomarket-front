import styled from "styled-components";

export const MostrarProductos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	width: 100%;
	padding-top: 40px;
	@media (min-width: 1080px) {
		justify-content: space-evenly;
		flex-direction: row;
	}
`;
export const Root = styled.div`
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 800px;
	background-color: var(--fucsia);
	justify-content: center;
	@media (min-width: 1080px) {
		background-color: var(--celeste);
	}
`;
