import { Footer } from "components/footer";
import { HeaderSearch } from "components/headerSearch";
import { ShowProducts } from "components/showProducts";
import type { NextPage } from "next";
import Root, { ContainerProduct } from "./styled";

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
