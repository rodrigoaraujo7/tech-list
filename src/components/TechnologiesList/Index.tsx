import { useEffect } from "react";
import { ContainerGrid, CardTechnology, CenterContent, Button, StyledLink } from "./styles"
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Data from '../../data.json'

const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: .5, 
            duration: 0.25
        },
    },
  };

const AnimatedCard = (props:any) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
        <>
        <CardTechnology ref={ref} initial="hidden" animate={controls} variants={cardVariants}>
        </CardTechnology>
        </>
        
    );
  }

export default function TechnologiesList() {
    return (
        <ContainerGrid>
            { Data.map(technology => {
                return (
                    <AnimatedCard>
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
                    </AnimatedCard>
                )}) }
        </ContainerGrid>
    )
}