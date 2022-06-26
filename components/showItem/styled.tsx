import styled from "styled-components";

export const MostrarProductos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 20px;
	min-height: 800px;
	@media (min-width: 1080px) {
		justify-content: center;
		align-items: center;
	}
`;
