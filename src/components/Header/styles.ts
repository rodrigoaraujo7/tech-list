import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.colors.text};
    height: 5rem;
`

export const Searchbar = styled.input`
    background-color: ${props => props.theme.colors.secondary};

    height: 2.75rem;
    width: 100%;
    margin-top: 0.5rem;
    padding: 1.75rem;

    border: 0;
    border-radius: 15px;

    font-size: 1.5rem;
    font-weight: bold;

    ::placeholder {
        color: ${props => props.theme.colors.primary};
    }

    :focus {
        border-radius: 0;
    }
`