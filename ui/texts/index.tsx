import styled, { css } from "styled-components";

export const Title = styled.h1<{ white?: any }>`
	font-size: 48px;
	text-align: center;
	font-weight: 700;
	margin: 0px;
	${(props) =>
		props.white &&
		css`
			color: white;
		`}
`;
export const Subtitle = styled.h2<{ white?: any }>`
	font-size: 32px;
	font-weight: 700 bold;
	margin: 0px;

	${(props) =>
		props.white &&
		css`
			color: white;
		`}
`;
export const Large = styled.p<{ fucsia?: any; white?: any }>`
	font-size: 20px;
	font-weight: 400;
	margin: 0px;
	${(props) =>
		props.fucsia &&
		css`
			color: var(--fucsia);
			cursor: pointer;
		`}
	${(props) =>
		props.white &&
		css`
			color: white;
		`}
`;
export const LargeBold = styled(Large)`
	font-weight: 700;
`;
export const Body = styled(Large)<{ white?: any }>`
	font-size: 16px;
	${(props) =>
		props.white &&
		css`
			color: white;
		`}
`;
export const BodyBold = styled(LargeBold)`
	font-size: 16px;
`;
export const Tiny = styled(Large)`
	font-size: 12px;
`;
