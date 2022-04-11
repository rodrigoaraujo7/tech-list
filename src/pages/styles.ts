import styled from "styled-components";

export const Header = styled.div`
    height: 5rem;
    width: 100%;

    margin: 4.75rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme.colors.secondary}
`

export const Box = styled.div`
    height: 1.25rem;
    width: 2rem;

    background: ${props => props.theme.colors.secondary};
`

export const Content = styled.div`
    min-height: 1.5rem;
    max-width: 68.5rem;
`

export const Title = styled.h1`
    font-size: 4rem;
    color: ${props => props.theme.colors.text};
    text-transform: capitalize
`

export const Text = styled.p`
    font-size: 1.85rem;
    color: ${props => props.theme.colors.text};
`