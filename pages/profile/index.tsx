import { HeaderSearch } from "components/headerSearch";
import Root, { ContainerProduct } from "./styled";
import { Profile } from "components/profile";
import { Footer } from "components/footer";
import type { NextPage } from "next";

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
