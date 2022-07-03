import { EditProduct } from "components/editProduct";
import { Header } from "components/header";
import { Footer } from "components/footer";
import type { NextPage } from "next";
import Root from "./styled";

const UploadProd: NextPage = () => {
	return (
		<Root>
			<Header></Header>
                <EditProduct />
			<Footer></Footer>
		</Root>
	);
};

export default UploadProd;