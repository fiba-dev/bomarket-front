import styled from "styled-components";

export const ContainerProduct = styled.div`
	min-height: 85vh;
	display: flex;

	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-repeat: no-repeat;
	background-position: top;
	background-size: 20%;
	background-image: url("https://res.cloudinary.com/fiba06-dev/image/upload/v1653917861/m10/Pngtree_shopping_cart_mobile_shopping_5407927_kvauol.png");
	@media (min-width: 680px) {
		background-size: 25%;
		background-position: left;
	}
`;
export const imagen = styled.img`
	position: absolute;
	left: 20px;
	height: 200px;
`;
const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export default Root;
