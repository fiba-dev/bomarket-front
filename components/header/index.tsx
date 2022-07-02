import { LoginDisplayAndButton } from "components/displayLogin";
import { MobileMenuWindows } from "components/mobilMenuWindows";
import { LogoPrincipal, MenuBurger } from "ui/logos";
import styled from "styled-components";
import { useState } from "react";

const HeaderContainer = styled.div`
	justify-content: space-between;
	background-color: black;
	flex-direction: row;
	align-items: center;
	display: flex;
	padding: 10px;
	height: 84px;
	width: 100%;
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
