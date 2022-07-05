import styled, { css } from "styled-components";
import { Large } from "../../ui/texts";

export const Body = styled(Large) <{ white?: any }>`

    margin-bottom: 40px;
	font-size: 20px;

    :hover {
        text-decoration: underline;
    }

	${(props) =>
        props.white &&
        css`
			color: white;
		`}
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
    height: 150px;
    width: 150px;
`;
