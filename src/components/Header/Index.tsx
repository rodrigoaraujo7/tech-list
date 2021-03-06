import React, { useContext } from "react";
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch';
import { Container, Searchbar } from "./styles";

export interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext)

    return(
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={65}
                handleDiameter={12}
                offColor={colors.secondary}
                onColor={colors.secondary}
            />
        </Container>
    )
};

export default Header;