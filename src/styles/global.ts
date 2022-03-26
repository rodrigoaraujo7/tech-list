import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        transition: 0.25s;
    }

    body {
        background-color: ${props => props.theme.colors.background};

        margin: 0;
        padding: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .container {
        width: 68.5rem;
        min-height: 30rem;

        margin: 4.75rem 0;
    }
`;