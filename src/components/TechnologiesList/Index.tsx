import { useRef } from 'react'
import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import { Searchbar } from "../Header/styles";
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
    searchKeyword: any,
    value: string
}

export default function TechnologiesList(props: ListProp) {
    console.log(props)

    const inputEl = useRef('')
        
    const getSearchTerm = () => {
        console.log(inputEl.current.value)
    }

    return (
        <>
        <Searchbar
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.75, duration: .5 }}
        type="text" placeholder="Tech Name" className="prompt"
        ref={inputEl} value={props.term} onChange={getSearchTerm} />
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
        </>
    )
}