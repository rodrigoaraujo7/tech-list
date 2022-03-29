import styled from "styled-components";

export const Container = styled.div`
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
    margin-top: 3.75rem;
`

export const Socialmedia = styled.i`
    font-size: 1.75rem;

    cursor: pointer;
    :nth-child(1) {
        margin-right: 0.75rem;
    }
    :hover {
        color: ${props => props.theme.colors.secondary};
    }
`