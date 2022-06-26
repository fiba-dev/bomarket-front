import { Footer } from "components/footer";
import { Header } from "components/header";
import { HeaderSearch } from "components/headerSearch";
import { Profile } from "components/profile";
import type { NextPage } from "next";
import Root, { ContainerProduct } from "./styled";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProduct>
				<Profile />
			</ContainerProduct>

			<Footer></Footer>
		</Root>
	);
};

export default Home;
