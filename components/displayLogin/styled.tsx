import styled, { keyframes, css } from "styled-components";
import { Large } from "../../ui/texts";

export const Root = styled.div`
  display: none;
  @media (min-width: 1080px) {
    padding-right:10px;
		display: flex
	}
`
const animation = keyframes`
  from {
    transform: translateY(5px)  }

  to {
    transform: translateY(0px);
  }
`;

export const Dropdown = styled.div`
  animation: ${animation} 0.3s ease-in;
  flex-direction: column;
  border-radius: 10px;
  position: absolute;
  border: 5px outset;
  cursor: pointer;
  display: flex;
  right: 0px;
  top: 84px;

  :hover {
    border-color: #edae49;
  }
`;

export const Body = styled(Large)<{ white?: any }>`
	font-size: 16px;

  :hover {
    text-decoration: underline;
  }

	${(props) =>
		props.white &&
		css`
			color: white;
		`}
`;

export const MenuOption = styled.a`
  border-bottom: 1px solid #e0e0e0;
  background-color: #FEFEFE;
  padding: 12px 30px;
`;

export const UserDisplay = styled.div`

  align-items: center;
  display: flex;
  gap: 15px;
`;

export const ProfilePicture = styled.img`

  border-radius: 50%;
  height: 60px;
  width: 60px;
`;