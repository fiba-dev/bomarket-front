import styled, { keyframes } from "styled-components";

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

export const MenuOption = styled.a`
  background-color: #ffffff;
  padding: 12px 30px;
  border-bottom: 1px solid #e0e0e0;
`;