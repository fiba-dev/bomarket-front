import { HeaderSearch } from "components/headerSearch";
import { ShowProducts } from "components/showProducts";
import Root, { ContainerProduct } from "./styled";
import { Footer } from "components/footer";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProduct>
				<ShowProducts></ShowProducts>{" "}
			</ContainerProduct>
			<Footer></Footer>
		</Root>
	);
};

export default Home;
