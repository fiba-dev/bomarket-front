import { Footer } from "components/footer";
import { HeaderSearch } from "components/headerSearch";
import { BuyItem } from "components/buyItem";
import type { NextPage } from "next";
import Root, { ContainerProduct } from "./styled";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProduct>
				<BuyItem></BuyItem>
			</ContainerProduct>

			<Footer></Footer>
		</Root>
	);
};

export default Home;
