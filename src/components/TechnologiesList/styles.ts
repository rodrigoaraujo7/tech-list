import styled from "styled-components";

export const ContainerGrid = styled.div`
    width: 100%;
    min-height: 25vh;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 0.5rem 1.5rem;
`

export const CardTechnology = styled.div`
    background-color: ${props  => props.theme.colors.primary};
    
    margin-top: 3.75rem;
    width: 21.87rem;
    height: 12.5rem;
    border-radius: 15px;

    position: relative;
`

export const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
`

export const Button = styled.button`
    background-color: ${props  => props.theme.colors.secondary};

    width: 65%;
    height: 3.5rem;
    margin-top: 10.5rem;

    cursor: pointer;

    border: 0;
    border-radius: 10px;

    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.45rem;
    font-style: italic;
    color: ${props  => props.theme.colors.text};
`