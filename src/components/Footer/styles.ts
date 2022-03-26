import styled from "styled-components";

export const Container = styled.footer`
    background-color: none;
    font-family: 'Caveat', cursive;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    color: ${props => props.theme.colors.text};

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 4.75rem;
    width: 100%;
`

export const Socialmedia = styled.i`
    font-size: 1.75rem;
`