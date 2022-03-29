import styled from "styled-components";

export const ContainerGrid = styled.div`
    width: 100%;
    min-height: 25vh;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 1.5rem;
`

export const CardTechnology = styled.div`
    background-color: ${props  => props.theme.colors.primary};
    
    margin-top: 3.75rem;
    width: 21.87rem;
    height: 12.5rem;
    border-radius: 15px;
`