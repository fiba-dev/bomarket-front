import styled from "styled-components";

export const DropzoneDiv = styled.div`
    flex-direction: column;
    margin-bottom: 30px;
    align-items: center;
    cursor: pointer;
    display: flex;

    .text {
        align-self: "center";
        width: 350px;
    }

    @media(min-width: 1080px) {
        .text {
            width: 450px;
            margin-left: 25px;
        }
    }
`