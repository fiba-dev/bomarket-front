import styled from "styled-components";

export const ContainerProduct = styled.div`
	background-repeat: no-repeat;
	/* background-position: top; */
	justify-content: center;
	flex-direction: column;
	background-size: 20%;
	min-height: 85vh;
	display: flex;
	width: 100%;

	@media (min-width: 780px) {
		background: no-repeat;
		background-size: cover;
		background-position: center;
		background-image: url("https://res.cloudinary.com/dx1fmmltu/image/upload/v1656541757/pic_sj6lgm.jpg");
	}
`;

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default Root;
