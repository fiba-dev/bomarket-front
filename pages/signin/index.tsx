import type { NextPage } from "next";
import { Login } from "components/loginEmail";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { ContainerLogin } from "./styled";

const LoginPage: NextPage = () => {
	return (
		<div>
			<Header></Header>
			<ContainerLogin>
				{" "}
				<Login></Login>
			</ContainerLogin>

			<Footer></Footer>
		</div>
	);
};

export default LoginPage;
