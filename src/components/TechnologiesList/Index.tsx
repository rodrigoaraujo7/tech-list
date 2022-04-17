import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import Data from '../../data.json'

export default function TechnologiesList() {
    return (
        <>
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
                                <StyledLink to={technology.title}>{technology.title}</StyledLink>
                            </Button>
                        </CenterContent>  
                    </CardTechnology>
                )}) }
        </ContainerGrid>
        </>
    )
}