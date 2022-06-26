import { Footer } from "components/footer";
import { Header } from "components/header";
import { HeaderSearch } from "components/headerSearch";
import { ShowItem } from "components/showItem";
import type { NextPage } from "next";
import Root, { ContainerProduct } from "./styled";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProduct>
				<ShowItem></ShowItem>
			</ContainerProduct>

			<Footer></Footer>
		</Root>
	);
};

export default Home;
