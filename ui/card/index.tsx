import Image from "next/image";
import styled from "styled-components";
import { Body, BodyBold, Large, LargeBold, Subtitle, Title } from "ui/texts";
import { BotonCeleste } from "../buttons";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 15px;
	background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  :hover {
    box-shadow: 0px 0px 38px 0px rgb(41 44 58 / 15%);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

export const Media: any = styled.div`
  background-image: url(${(props: any) => props.src};);
  min-width: 160px;
  height: 270px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


export function Card({ imagen = "", precio = "", nombre = "", onClick }: any) {
	return (
		<Root style={{ cursor: "pointer" }} onClick={onClick}>
			<Media src={imagen}></Media>
			<Info>
				<LargeBold>{nombre}</LargeBold>
				<Large>$ {precio}</Large>
			</Info>
		</Root>
	);
}

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: auto;
	max-width: 500px;
	justify-content: space-evenly;
	cursor: pointer;

	@media (min-width: 1080px) {
		max-width: 1080px;
		flex-direction: row;
	}
`;

export const ItemMedia: any = styled.div`
  background-image: url(${(props: any) => props.src};);
  min-width: 300px;
  background-size: cover;
  background-position: center;
	height: 500px;
	min-width: 400px;
`;

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 20px;
	min-height: 500px;
	align-items: center;
	align-items: flex-start;
	padding-left: 25px;
	@media (min-width: 1080px) {
		max-width: 700px;
	}
`;

export function Item({
	imagen = "",
	precio = "",
	nombre = "",
	description = "",
	onClick,
}: any) {
	return (
		<ItemContainer>
			<ItemMedia src={imagen} />
			<ItemInfo>
				<Subtitle>{nombre}</Subtitle>
				<Subtitle>{precio} Bs.</Subtitle>
				<BotonCeleste onClick={onClick}>
					<Subtitle>Comprar </Subtitle>
				</BotonCeleste>
				<Body>{description}</Body>
			</ItemInfo>
		</ItemContainer>
	);
}

const BuyItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	p {
		height: 40px;
		overflow: scroll;
	}
	@media (min-width: 1080px) {
		width: 600px;
		flex-direction: row;
		padding: 10px;
		p {
			height: 80px;
			overflow: hidden;
		}
	}
`;
const BuyItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: 500px;
	max-width: 500px;
	justify-content: space-evenly;

	@media (min-width: 1080px) {
		max-width: 600px;
		width: 600px;
		height: 384px;
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
