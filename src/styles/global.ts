import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #DAD7CD;

        margin: 0;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        font-family: 'Roboto';
        font-size: 1.25rem;
        font-weight: bold;
    }
`;