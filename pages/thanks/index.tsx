import type { NextPage } from "next";
import { Root } from "./styled";
import { ThanksWindows } from "components/thanks";

const Thanks: NextPage = () => {
	return (
		<Root>
			<ThanksWindows></ThanksWindows>
		</Root>
	);
};

export default Thanks;
