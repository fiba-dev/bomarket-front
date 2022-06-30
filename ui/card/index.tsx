import Image from "next/image";
import styled from "styled-components";
import { Body, BodyBold, Large, LargeBold, Subtitle, Title } from "ui/texts";
import { BotonCeleste } from "../buttons";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 315px;
	height: 321px;
	border: solid 4px;
	border-radius: 8px;
	margin-bottom: 20px;
	cursor: pointer;
	:hover {
		background-color: var(--celeste);
	}
`;
const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

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
		<Root onClick={onClick}>
			<Media src={imagen}></Media>
			<Info>
				<LargeBold>{nombre}</LargeBold>
				<Large>$ {precio}</Large>
			</Info>
		</Root>
		// <CardContainer onClick={onClick}>
		// 	<Image alt="Card Imagen" src={imagen} width={328} height={237} />
		// 	<CardInfo>
		// 		<LargeBold>{nombre}</LargeBold>
		// 		<Large>{precio} Bs.</Large>
		// 	</CardInfo>
		// </CardContainer>
	);
}

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
	height: 600px;
	max-width: 500px;
	justify-content: space-evenly;
	cursor: pointer;

	@media (min-width: 1080px) {
		max-width: 1080px;
		height: 384px;

		flex-direction: row;
	}
`;
const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	align-items: flex-start;
	height: 250px;
	p {
	}
	@media (min-width: 1080px) {
		width: 421px;

		padding: 10px;
	}
`;

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

export function Item({
	imagen = "",
	precio = "",
	nombre = "",
	description = "",
	onClick,
}: any) {
	return (
		<ItemContainer>
			<Image alt="Item to Buy" src={imagen} width={"808px"} height={"384px"} />
			<ItemInfo>
				<Subtitle>{nombre}</Subtitle>
				<Title>{precio} Bs.</Title>
				<BotonCeleste onClick={onClick}>
					<Subtitle>Comprar </Subtitle>
				</BotonCeleste>
				<Body>{description}</Body>
			</ItemInfo>
		</ItemContainer>
	);
}
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
