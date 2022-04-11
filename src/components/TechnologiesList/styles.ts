import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerGrid = styled.div`
    width: 100%;
    min-height: 25vh;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 0.5rem 1.5rem;

    @media(max-width: 1023px) {
        grid-template-columns: 1fr;
        margin-bottom: 2.25rem;
    }
`

export const CardTechnology = styled.div`
    background-color: ${props  => props.theme.colors.primary};
    box-shadow: 0 0 12.5px ${props => props.theme.colors.secondary};

    margin-top: 3.75rem;
    width: 21.87rem;
    height: 12.5rem;
    border-radius: 15px;

    position: relative;

    @media(max-width: 1023px) {
        width: 100%;
    }
`

export const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`

export const Button = styled.button`
    background-color: ${props  => props.theme.colors.secondary};

    width: 65%;
    height: 3.5rem;
    margin-top: 0.5rem;

    cursor: pointer;

    border: 0;
    border-radius: 10px;

    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.45rem;
    font-style: italic;
    text-transform: capitalize
`

export const StyledLink = styled(Link)`
  color: ${props  => props.theme.colors.text};
  text-decoration: none;
  outline: none;
`;

