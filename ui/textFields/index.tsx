import styled, { css } from "styled-components";

export const Label = styled.label`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 12px;
	font-weight: 400;
	margin-left: 5px;
`;
export const Placeholder = styled.input<{ profile?: any }>`
	border-radius: 8px;
	border: solid 3px;
	min-width: 350px;
	height: 37px;
	margin: 5px;

	::placeholder {
		color: gray;
	}

	@media (min-width: 1080px) {
		${(props) =>
		props.profile &&
		css`
				width: 447px;
			`}
	}
`;
export const Textarea = styled.textarea<{ profile?: any }>`
	border-radius: 8px;
	margin-bottom: 8px;
	border: solid 3px;
	min-width: 350px;
	height: 70px;
	resize: none;
	padding: 8px;

	::placeholder {
		color: gray;
	}

	@media (min-width: 1080px) {
		${(props) =>
		props.profile &&
		css`
				width: 447px;
			`}
	}
`;
