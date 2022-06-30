import { FeaturedProducts } from "components/featuredProducts";
import backImg from "../components/ui/logos/pic.jpg";
import Root, { ContainerProduct } from "./styled";
import { Buscar } from "components/InputSearch";
import { Title } from "ui/texts";
import { Footer } from "components/footer";
import { Header } from "components/header";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Root>
			<Header></Header>
			<ContainerProduct>
				<Title> El mejor e-commerce </Title>
				<Buscar></Buscar>
			</ContainerProduct>
			<FeaturedProducts></FeaturedProducts>
			<Footer></Footer>
		</Root>
	);
};

export default Home;
