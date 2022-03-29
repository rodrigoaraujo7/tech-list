import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 25vh;
    margin: 3.75rem 0;
    
    background: ${props => props.theme.colors.secondary};

    display: grid;
    grid-template-columns: repeat(3, 2fr);
`

export const CardTechnology = styled.div`
    background-color: ${props  => props.theme.colors.primary};
    
    width: 21.87rem;
    height: 12.5rem;
    border-radius: 15px;
`