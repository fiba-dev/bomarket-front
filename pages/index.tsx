import { FeaturedProducts } from "components/featuredProducts";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { Buscar } from "components/InputSearch";
import { Title } from "components/ui/texts";
import Image from "next/image";
import type { NextPage } from "next";
import styled from "styled-components";
import Root, { ContainerProduct, imagen } from "./styled";
const HomeStyle = styled.h1`
	display: flex;
	flex-direction: column;
`;
const Home: NextPage = () => {
	return (
		<Root>
			<Header></Header>
			<ContainerProduct>
				<Title>El mejor e-commerce</Title>
				<Buscar></Buscar>
			</ContainerProduct>
			<FeaturedProducts></FeaturedProducts>
			<Footer></Footer>
		</Root>
	);
};

export default Home;
