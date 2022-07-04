import styled from "styled-components";

export const CatalogueLink = styled.div`
	text-decoration: underline 1px;
	margin-bottom: 50px;
	align-self: center;
	color: goldenrod;
	margin-top: 50px;
	cursor: pointer;
	font-size: 18px;

	@media(min-width: 1080px) {
		align-self: center;
		font-size: 20px;
	}
`;

export const MostrarProductos = styled.div`
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	margin-top: 20px;
	display: flex;
	width: 100%;
	
	@media (min-width: 1080px) {
		justify-content: center;
		align-items: center;
	}
`;

export const Spinner = styled.div`

	display: flex;
	min-height: 500px;
	flex-direction: column;
	justify-content: center;


	.spinner {
		width: 57.6px;
		height: 57.6px;
		animation: spinner-y0fdc1 2s infinite ease;
		transform-style: preserve-3d;
	}

	.spinner > div {
		background-color: rgba(255,194,55,0.2);
		height: 100%;
		position: absolute;
		width: 100%;
		border: 2.9px solid #ffc237;
	}

	.spinner div:nth-of-type(1) {
		transform: translateZ(-28.8px) rotateY(180deg);
	}

	.spinner div:nth-of-type(2) {
		transform: rotateY(-270deg) translateX(50%);
		transform-origin: top right;
	}

	.spinner div:nth-of-type(3) {
		transform: rotateY(270deg) translateX(-50%);
		transform-origin: center left;
	}

	.spinner div:nth-of-type(4) {
		transform: rotateX(90deg) translateY(-50%);
		transform-origin: top center;
	}

	.spinner div:nth-of-type(5) {
		transform: rotateX(-90deg) translateY(50%);
		transform-origin: bottom center;
	}

	.spinner div:nth-of-type(6) {
		transform: translateZ(28.8px);
	}

	@keyframes spinner-y0fdc1 {
		0% {
			transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
		}

		50% {
			transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
		}

		100% {
			transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
		}
	}
`;
