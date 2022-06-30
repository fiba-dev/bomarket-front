import styled from "styled-components";

export const MostrarProductos = styled.div`

	gap: 30px;
	width: 100%;
	display: grid;
    align-items: center;
    justify-items: center;
	padding: 40px 0 40px 0;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

export const Root = styled.div`
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 800px;
	background-color: #f7f7f7;
	justify-content: center;
	padding-bottom: 20px;
`;
