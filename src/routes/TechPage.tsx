import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import GlobalStyle from '../styles/global'
import { Header, Box, Content, Title, Text, StyledLink } from "./styles";

import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import returnDark from '../icons/return-dark.png'

import data from '../data.json'
import { useNavigate, useParams } from "react-router-dom";

type Icontent = {
    id: Number,
    title: string,
    image: string,
    content: string,
    link: string
}

export default function TechPage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    let navigate = useNavigate()
    let {techname} = useParams()

    const [content, setContent] = useState({})

    useEffect(() => {
        const aux = data.filter(item => {
            if(item.title === techname) {
                return item
            }
        })
        setContent(aux)
        console.log(aux)
    },[])

    console.log(content)

    return (
        <div className="container" style={{margin: '1rem'}}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: .5, duration: .35 }} 
                >
                    <div className="left" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }} onClick={() => {
                        navigate('/')
                    }}>
                        <img src={returnDark} style={{
                            width: '2.5rem'
                        }} />
                        <h2 style={{ marginLeft: '1rem' }}>Return</h2>
                    </div>
                    <div className="right">
                        {/* <Box /> */}
                    </div>
                </Header>

                <Content>
                    <Title
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: .85, duration: .35 }} 
                    >
                        <motion.img 
                        src={content[0]?.image} 
                        style={{width: '3rem'}} 
                        initial={{ opacity: 0, rotate: 0 }} 
                        animate={{ opacity: 1, rotate: 360 }} 
                        transition={{ delay: .65, duration: .75 }} 
                        /> {content[0]?.title}
                    </Title>
                    <br />
                    <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1, duration: .35 }}>
                        <Text>{content[0]?.fcontent}</Text>
                        <br />
                        <Text>{content[0]?.scontent}</Text>
                    </motion.div>
                </Content>
            </ThemeProvider>
        </div>
    )
}