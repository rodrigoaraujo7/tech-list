import React from "react";
import Switch from 'react-switch';
import { Container } from "./styles";

const Header = () => {
    return(
        <Container>
            <Switch 
                onChange={() => {}}
                checked={false}
                checkedIcon={false}
                uncheckedIcon={false}
                height={18}
                width={50}
                handleDiameter={28}
                offColor=""
                onColor=""
            />
            <br />
            Search box
        </Container>
    )
};

export default Header;