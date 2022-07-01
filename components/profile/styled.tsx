import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top:20px;
`;

export const UserPhoto: any = styled.div`
	border-radius: 50%;
	width: 200px;
	height: 200px;
	background-position: center;
	background-size: cover;
	margin: 20px 0;
	background-image: url(${(props: any) => props.src};);
`
