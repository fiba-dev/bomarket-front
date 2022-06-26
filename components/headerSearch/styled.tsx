import styled from "styled-components";

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 84px;

	background-color: black;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`;
export const HeaderContainerSearch = styled.div`
	display: flex;
	flex-direction: column;
	background-color: black;
	width: 100%;
	@media (min-width: 1080px) {
		justify-content: space-between;
		padding: 10px;
		flex-direction: row;
		align-items: center;
	}
`;
