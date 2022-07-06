import Image from "next/image";
import { Body, Large, LargeBold, Subtitle, Title } from "ui/texts";
import styled from "styled-components";

export const Root = styled.div`
	background-color: #fff;
	flex-direction: column;
	border-radius: 0.25rem;
	height: 380px;
	display: flex;
	padding: 15px;
	width: 300px;

	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
	:hover {
		box-shadow: 0px 0px 38px 0px rgb(41 44 58 / 15%);
	}
`;

export const Info = styled.div`
	flex-direction: column;
	padding-top: 8px;
	display: flex;
`;

export const Media: any = styled.div`
	background-image: url(${(props: any) => props.src};);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 300px;
	width: 280px;
`;


export function Card({ imagen = "", precio = "", nombre = "", onClick }: any) {
	return (
		<Root style={{ cursor: "pointer" }} onClick={onClick}>
			<Media src={imagen}></Media>
			<Info>
				<LargeBold> {nombre.slice(0, -nombre.length/2)} </LargeBold>
				<Large> {precio} Bs. </Large>
			</Info>
		</Root>
	);
}

const ItemContainer = styled.div`
	flex-direction: column;
	align-items: center;
	max-width: 500px;
	display: flex;
	padding: 15px;
	height: auto;

	@media (min-width: 1080px) {
		max-width: 1080px;
		flex-direction: row;
	}
`;

export const ItemMedia: any = styled.div`
	background-image: url(${(props: any) => props.src};);
	background-position: center;
	background-size: cover;
	margin-bottom: 30px;
	height: 300px;
	width: 280px;

	@media(min-width: 650px) {
		min-height: 350px;
		width: 400px;
	}
`;

const ItemInfo = styled.div`
	align-items: flex-start;
	flex-direction: column;
	align-items: baseline;
	padding-left: 25px;
	display: flex;
	gap: 20px;

	@media (min-width: 1080px) {
		max-width: 700px;
	}
`;

export function Item({
	imagen = "",
	precio = "",
	nombre = "",
	description = "",
}: any) {
	return (
		<ItemContainer>
			<ItemMedia src={imagen} />
			<ItemInfo>
				<Subtitle> {nombre} </Subtitle>
				<Subtitle> {precio} Bs. </Subtitle>
				<Body> {description} </Body>
			</ItemInfo>
		</ItemContainer>
	);
}

const BuyItemInfo = styled.div`

	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	display: flex;

	p {
		height: 40px;
		overflow: scroll;
	}
	@media (min-width: 1080px) {

		flex-direction: row;
		width: 600px;
		padding: 10px;

		p {
			height: 80px;
			overflow: hidden;
		}
	}
`;
const BuyItemContainer = styled.div`

	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	max-width: 500px;
	padding: 15px;
	height: 500px;
	display: flex;

	@media (min-width: 1080px) {
		max-width: 600px;
		height: 384px;
		width: 600px;
	}
`;

export function BuyItemCard({ imagen = "", precio = "", nombre = "" }: any) {
	return (
		<BuyItemContainer>
			<Image alt="Item to Buy" src={imagen} width={"808px"} height={"384px"} />
			<BuyItemInfo>
				<Title>{nombre}</Title>
				<Subtitle>{precio} Bs.</Subtitle>
			</BuyItemInfo>
		</BuyItemContainer>
	);
}
