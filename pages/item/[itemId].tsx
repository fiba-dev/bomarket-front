import { HeaderSearch } from "components/headerSearch";
import Root, { ContainerProduct } from "./styled";
import { ShowItem } from "components/showItem";
import { Footer } from "components/footer";
import type { NextPage } from "next";

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
