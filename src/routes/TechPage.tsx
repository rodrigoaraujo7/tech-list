import { useState, useEffect } from "react";

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
                <Header>
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
                    <Title><img src={content[0]?.image} style={{width: '3rem'}} /> {content[0]?.title}</Title>
                    <br />
                    <Text>{content[0]?.fcontent}</Text>
                    <br />
                    <Text>{content[0]?.scontent}</Text>
                </Content>
            </ThemeProvider>
        </div>
    )
}