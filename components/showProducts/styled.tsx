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

export const Root = styled.div`
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-height: 800px;
	margin-top: 20px;
	display: flex;
	width: 100%;
`;

export const SpinnerContainer = styled.div`

	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	display: flex;
`;

export const Total = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-around;
  align-items: center;
  min-width: 90px;
`;