import styled from "styled-components";

export const CatalogueLink = styled.div`
	text-decoration: underline 1px;
	margin-bottom: 50px;
	align-self: center;
	color: goldenrod;
	margin-top: 50px;
	cursor: pointer;
	font-size: 18px;

	@media(min-width: 1080px) {
		align-self: center;
		font-size: 20px;
	}
`;

export const MostrarProductos = styled.div`
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	margin-top: 20px;
	display: flex;
	width: 100%;
	
	@media (min-width: 1080px) {
		justify-content: center;
		align-items: center;
	}
`;
