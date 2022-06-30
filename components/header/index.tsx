import { LoginDisplayAndButton } from "components/displayLogin";
import { LogoPrincipal, MenuBurger } from "ui/logos";
import { MobileMenuWindows } from "components/mobilMenuWindows";
import styled from "styled-components";
import { useState } from "react";

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 84px;
	width: 100%;
	background-color: black;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`;

export function Header() {
	const [stateWindows, setStateWindows] = useState(false);

	return (
		<HeaderContainer>
			<MobileMenuWindows
				estado={stateWindows}
				cambiarEstado={setStateWindows}
			></MobileMenuWindows>
			<LogoPrincipal></LogoPrincipal>
			<MenuBurger
				onClick={() => {
					setStateWindows(!stateWindows);
				}}
			></MenuBurger>
			<LoginDisplayAndButton></LoginDisplayAndButton>
		</HeaderContainer>
	);
}
