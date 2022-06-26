import { LogoPrincipal, MenuBurger } from "components/ui/logos";
import { useState } from "react";
import { MobileMenuWindows } from "components/mobilMenuWindows";
import { BuscarOscuro } from "components/InputSearch";
import { HeaderContainer, HeaderContainerSearch } from "./styled";
import { LoginDisplayAndButton } from "components/displayLogin";

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
