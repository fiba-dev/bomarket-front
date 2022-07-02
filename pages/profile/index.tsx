import { HeaderSearch } from "components/headerSearch";
import Root, { ContainerProfile } from "./styled";
import { Profile } from "components/profile";
import { Footer } from "components/footer";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Root>
			<HeaderSearch></HeaderSearch>
			<ContainerProfile>
				<Profile />
			</ContainerProfile>
			<Footer></Footer>
		</Root>
	);
};

export default Home;
