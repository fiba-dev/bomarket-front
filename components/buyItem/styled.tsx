import { Title } from "components/ui/texts";
import styled from "styled-components";

export const MostrarProductos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 20px;
	min-height: 800px;
	@media (min-width: 1080px) {
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}
`;
export const ErrorMessage = styled.div`
	h2 {
		color: red;
	}
	height: 30px;
`;
export const Root = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`;
const MostrarTotal = styled.div`
	display: flex;
	width: 350px;
	flex-direction: row;
	align-items: flex-start;
`;
export function RootTotal(props: any) {
	return (
		<MostrarTotal>
			<Title> {props.children}</Title>
		</MostrarTotal>
	);
}
