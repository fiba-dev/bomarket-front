import { Spinner } from "./styled";

export function SpinnerLoader() {
    return <Spinner>
		<div className="spinner">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</Spinner>;
}
