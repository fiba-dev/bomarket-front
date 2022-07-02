import styled from "styled-components";

export const DropzoneDiv = styled.div`
    flex-direction: column;
    margin-bottom: 30px;
    align-items: center;
    cursor: pointer;
    display: flex;
    
    .text {
        border: 2px dotted;
        padding: 5px;
        width: 350px;
    }

    @media(min-width: 1080px) {
        .text {
            width: 450px;
        }
    }
`