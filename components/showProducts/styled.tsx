import styled from "styled-components";

export const MostrarProductos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 20px;
	min-height: 800px;
	@media (min-width: 1080px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 800px;
	}
`;
export const Root = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	min-height: 800px;
`;
