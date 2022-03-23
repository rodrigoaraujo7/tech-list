import React, { useContext } from "react";
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch';
import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext)

    return(
        <Container>
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={18}
                width={50}
                handleDiameter={28}
                offColor={colors.secondary}
                onColor={colors.secondary}
            />
            <br />
            Search box
        </Container>
    )
};

export default Header;