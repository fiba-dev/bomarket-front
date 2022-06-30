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

    .error-style {
        flex-direction: column;
        margin-bottom: 25px;
        align-items: center;
        display: flex;
        color: red;
    }
`;