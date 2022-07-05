import styled, { css } from "styled-components";

export const Label = styled.label`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 12px;
	font-weight: 400;
	margin-left: 5px;
`;
export const Placeholder = styled.input<{ profile?: any }>`
	border-radius: 8px;
	border: solid 3px;
	min-width: 350px;
	height: 37px;
	margin: 5px;

	::placeholder {
		color: gray;
	}

	@media (min-width: 1080px) {
		${(props) =>
		props.profile &&
		css`
				width: 447px;
			`}
	}
`;
export const Textarea = styled.textarea<{ profile?: any }>`
	border-radius: 8px;
	margin-bottom: 8px;
	border: solid 3px;
	min-width: 350px;
	height: 70px;
	resize: none;
	padding: 8px;

	::placeholder {
		color: gray;
	}

	@media (min-width: 1080px) {
		${(props) =>
		props.profile &&
		css`
				width: 447px;
			`}
	}
`;

export const LabelFilter = styled.label`
  padding: 10px;
  padding-right: 50px;
  border: 1px solid #e8e8e8;
  font-size: 13px;
  font-weight: 300;
`;

export const Select = styled.select`
  padding: 9px;
  padding-right: 60px;
  border-left: none;
  border: 1px solid #e8e8e8;
  background-color: #fafafa;
`;

export const Option = styled.option`
  font-size: 13px;
  font-weight: 300;
`;

export function Filter({ label, onChange }: any) {
	return (
		<label>
			<LabelFilter>{label}</LabelFilter>
			<Select onChange={onChange}>
				<Option value="Seleccionar">Seleccionar </Option>
				<Option value="Mayor">Mayor precio</Option>
				<Option value="Menor">Menor precio</Option>
			</Select>
		</label>
	);
}