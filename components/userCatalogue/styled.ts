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

export const Root = styled.form`
	flex-direction: column;
	align-items: center;
	display: flex;
	width: 100%;
`;

export const Spinner = styled.div`

	display: flex;
	min-height: 800px;
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
