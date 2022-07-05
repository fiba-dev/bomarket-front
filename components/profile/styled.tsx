import styled from "styled-components";

export const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Form = styled.form`

	flex-direction: column;
	align-items: center;
	display: flex;

	.error-style {
        flex-direction: column;
        margin-bottom: 25px;
        align-items: center;
        display: flex;
        color: red;
    }
`;

export const UserPhoto: any = styled.div`
	background-image: url(${(props: any) => props.src});
	background-position: center;
	background-size: cover;
	border-radius: 50%;
	border: solid 1px;
	margin: 20px 0;
	height: 200px;
	width: 200px;
`;
