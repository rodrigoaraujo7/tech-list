import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import Data from '../../data.json'

import { BrowserRouter as Router, Link } from "react-router-dom"

export default function TechnologiesList() {
    return (
        <Router>
            <ContainerGrid>
                { Data.map(technology => {
                    return (
                        <CardTechnology>
                            <CenterContent>
                                <img
                                style={{
                                    width: '130px',
                                    marginTop: '1.75rem'
                                }}
                                src={technology.image} />
                                <Button>
                                    <StyledLink to={technology.routeLink}>{technology.title}</StyledLink>
                                </Button>
                            </CenterContent>  
                        </CardTechnology>
                    )}) }
            </ContainerGrid>
        </Router> 
    )
}