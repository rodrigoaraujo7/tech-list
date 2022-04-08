import { ContainerGrid, CardTechnology, CenterContent, Button } from "./styles"
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
                                <Button><Link to="/php">{technology.title}</Link></Button>
                            </CenterContent>  
                        </CardTechnology>
                    )}) }
            </ContainerGrid>
        </Router> 
    )
}