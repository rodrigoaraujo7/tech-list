import { Header, Box, Content, Title, Text } from "./styles";
import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

export default function TechPage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    return (
        <ThemeProvider theme={theme}>
        <Header>
            <div className="left" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="../icons/return-dark.png" />
                <h2 style={{ marginLeft: '1rem' }}>Return</h2>
            </div>
            <div className="right">
                <Box />
            </div>
        </Header>

        <Content>
            <Title>Tech Title</Title><br />
            <Text>lorem</Text>
        </Content>
        </ThemeProvider>
    )
}