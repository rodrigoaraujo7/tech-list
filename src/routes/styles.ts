import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
    height: 5rem;
    width: 100%;

    margin: 0 0 4.75rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme.colors.secondary};

    @media(max-width: 1023px) {
        margin: 0 0 2.75rem  0;
        width: 85%;
    }
`

export const Box = styled.div`
    height: 1.25rem;
    width: 2rem;

    background: ${props => props.theme.colors.secondary};
`

export const Content = styled.div`
    min-height: 1.5rem;
    max-width: 68.5rem;
    padding-bottom: 2rem;

    @media(max-width: 1023px) {
        max-width: 85%;
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    color: ${props => props.theme.colors.text};
    text-transform: capitalize
`

export const Text = styled.p`
    font-size: 1.35rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};

    @media(max-width: 1023px) {
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const StyledLink = styled(Link)`
  color: ${props  => props.theme.colors.secondary};
`;