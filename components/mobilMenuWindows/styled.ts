import styled from "styled-components";

export const MobilBoton = styled.button`
	background-color: transparent;
	margin-bottom: 31px;
    font-size: 22px;
	border: none;
    
	cursor: pointer;
	h2 {
		:hover {
			color: var(--fucsia);
		}
	}
`;

export const BotonCerrar = styled.img`

    position: absolute;
	border: none;
    height: 50px;
    width: 50px;
	right: 12px;
	top: 15px;
`;

export const UserDisplay = styled.div`

    flex-direction: column;
    margin-bottom: 40px;
    align-items: center;
    display: flex;
    gap: 15px;
`;

export const ProfilePicture = styled.img`

    border-radius: 50%;
    border: 1px solid;
    margin-left: 10px;
    height: 80px;
    width: 80px;
`;
