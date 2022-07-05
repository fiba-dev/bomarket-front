import styled from "styled-components";

export const HeaderContainer = styled.div`
	flex-direction: row;
	display: flex;
	height: 84px;

	justify-content: space-between;
	background-color: black;
	align-items: center;
	padding: 10px;
`;

export const HeaderContainerSearch = styled.div`

	background-color: black;
	width: 100%;

	@media(min-width: 1080px) {

		form {
			position: absolute;
			left: 50vh;
			top: 10px;
		}
	}

	@media(min-width: 1150px) {

		form {
			position: absolute;
			left: 55vh;
			top: 10px;
		}
	}

	@media(min-width: 1260px) {

		form {
			position: absolute;
			left: 60vh;
			top: 10px;
		}
	}
`;
