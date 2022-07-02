import styled from "styled-components";

export const MostrarProductos = styled.div`
	gap: 30px;
	width: 100%;
	display: grid;
    align-items: center;
    justify-items: center;
	padding: 40px 0 40px 0;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));

	@media(min-width: 1390px) {
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
	}
`;

export const Root = styled.form`
	flex-direction: column;
	align-items: center;
	display: flex;
	width: 100%;
`;