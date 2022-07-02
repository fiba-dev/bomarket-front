import { HeaderContainer, HeaderContainerSearch } from "./styled";
import { MobileMenuWindows } from "components/mobilMenuWindows";
import { LoginDisplayAndButton } from "components/displayLogin";
import { BuscarOscuro } from "components/InputSearch";
import { LogoPrincipal, MenuBurger } from "ui/logos";
import { useState } from "react";

export function HeaderSearch() {
	const [stateWindows, setStateWindows] = useState(false);
	return (
		<HeaderContainerSearch>
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
			</HeaderContainer>
			<BuscarOscuro></BuscarOscuro>
			<LoginDisplayAndButton></LoginDisplayAndButton>
		</HeaderContainerSearch>
	);
}
