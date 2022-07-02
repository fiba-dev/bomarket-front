import styled from "styled-components";

export const CatalogueLink = styled.div`
	text-decoration: underline 1px;
	align-self: flex-start;
	margin-bottom: 50px;
	margin-left: 120px;
	color: goldenrod;
	margin-top: 50px;
	cursor: pointer;
	font-size: 18px;

	@media(min-width: 1080px) {
		margin-left: 80px;
		font-size: 20px;
	}
`;

export const MostrarProductos = styled.div`
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 20px;
	display: flex;
	
	@media (min-width: 1080px) {
		justify-content: center;
		align-items: center;
	}
`;
