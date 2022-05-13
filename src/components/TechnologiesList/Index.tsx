import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import Data from '../../data.json'

const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1, 
            duration: 0.25
        },
    },
  };

interface ListProp {
    term: any,
    searchKeyword: any
}

export default function TechnologiesList(props: ListProp) {
    console.log(props)

    return (
        <ContainerGrid>
            { Data.map(technology => {
                return (
                    <CardTechnology initial="hidden" animate="visible" variants={cardVariants}>
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
    )
}