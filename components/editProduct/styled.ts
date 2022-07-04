import styled from "styled-components";

export const FormProd = styled.form`

    display: flex;
    margin: 20px 0;
    align-items: center;
    flex-direction: column;

    .container {
        margin-bottom: 10px;
        border-radius: 8px;
        align-self: start;
        margin-left: 8px;
        margin-top: 5px;
        padding: 10px;
        height: 100px;
        border: solid;
        width: 350px;
    }

    @media(min-width: 1080px) {
        .container {
            width: 450px;
        }
    }

    .error-style {
        flex-direction: column;
        margin-bottom: 25px;
        align-items: center;
        display: flex;
        color: red;
    }
`;

export const Select = styled.select`
    background-color: #FEFEFE;
    margin-bottom: 10px;
    border-radius: 5px;
    width: fit-content;
    border: 2px solid;
    margin-left: 5px;
    cursor: pointer;
    height: 35px;

    .option {
        cursor: pointer;
    }

    @media(min-width: 1080px) {
        width: 447px;
    }
`;