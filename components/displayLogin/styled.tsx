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
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 84px;
  left: 0px;
  animation: ${animation} 0.3s ease-in;
`;
export const MenuOption = styled.a`
  background-color: #ffffff;
  padding: 12px 30px;
  border-bottom: 1px solid #e0e0e0;
`;