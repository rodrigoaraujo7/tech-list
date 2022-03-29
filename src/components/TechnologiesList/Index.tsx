import { ContainerGrid, CardTechnology, CenterContent, Button } from "./styles"

export default function TechnologiesList() {
    return (
        <>
        <ContainerGrid>
            <CardTechnology>
                <CenterContent>
                    <img
                    style={{
                        width: '130px',
                        marginTop: '1.75rem'
                    }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <Button>React</Button>
                </CenterContent>  
            </CardTechnology>

            <CardTechnology>
                <CenterContent>
                    <img
                    style={{
                        width: '130px',
                        marginTop: '1.75rem'
                    }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg" />
                    <Button>React</Button>
                </CenterContent>  
            </CardTechnology>

            <CardTechnology>
                <CenterContent>
                    <img
                    style={{
                        width: '130px',
                        marginTop: '1.75rem'
                    }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <Button>React</Button>
                </CenterContent>  
            </CardTechnology>

            <CardTechnology>
                <CenterContent>
                    <img
                    style={{
                        width: '130px',
                        marginTop: '1.75rem'
                    }}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <Button>React</Button>
                </CenterContent>  
            </CardTechnology>
        </ContainerGrid>
        </> 
    )
}