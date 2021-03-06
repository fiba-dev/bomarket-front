import { FeaturedProducts } from "components/featuredProducts";
import Root, { ContainerProduct } from "./styled";
import { Buscar } from "components/InputSearch";
import { Footer } from "components/footer";
import { Header } from "components/header";
import type { NextPage } from "next";
import React from "react";
import { Title } from "ui/texts";

const Home: NextPage = () => {

	return (
		<Root>
			<Header></Header>
			<ContainerProduct>
				<Title> El mejor catálogo gratuito de Bolivia </Title>
				<Buscar></Buscar>
			</ContainerProduct>
			<FeaturedProducts></FeaturedProducts>
			<Footer></Footer>
		</Root>
	);
};

export default Home;
