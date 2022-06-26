import type { NextPage } from "next";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { ContainerLogin } from "./styled";
import { LogoutWindows } from "components/logout";

const LoginPage: NextPage = () => {
	return (
		<div>
			<Header></Header>
			<ContainerLogin>
				<LogoutWindows></LogoutWindows>
			</ContainerLogin>

			<Footer></Footer>
		</div>
	);
};

export default LoginPage;
