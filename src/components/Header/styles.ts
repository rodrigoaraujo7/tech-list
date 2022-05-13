import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    color: ${props => props.theme.colors.text};
    height: 1.45rem;
`

export const Searchbar = styled(motion.input)`
    background-color: ${props => props.theme.colors.secondary};

    height: 2.75rem;
    width: 100%;
    margin-top: 0.5rem;
    padding: 1.75rem;

    border: 0;
    border-radius: 15px;

    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;

    ::placeholder {
        color: ${props => props.theme.colors.primary};
    }
`