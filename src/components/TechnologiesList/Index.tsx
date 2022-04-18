import { useEffect } from "react";
import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Data from '../../data.json'

export default function TechnologiesList() {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView]);

    const cardsAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1, 
                duration: 0.5
            },
        },
    };

    return (
        <>
        <ContainerGrid>
            { Data.map(technology => {
                return (
                    <CardTechnology ref={ref} initial="hidden" animate={controls} variants={cardsAnimation}>
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