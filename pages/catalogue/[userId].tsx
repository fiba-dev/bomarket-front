import { ShowCatalogue } from "components/userCatalogue";
import { Header } from "components/header";
import { Footer } from "components/footer";
import type { NextPage } from "next";
import Root from "./styled";

const UserCatalog: NextPage = () => {
	return (
		<Root>
			<Header></Header>
                <ShowCatalogue />
			<Footer></Footer>
		</Root>
	);
};

export default UserCatalog;