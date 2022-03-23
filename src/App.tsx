import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import GlobalStyle from './styles/global'
import Header from './components/Header/Index'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <div className="container">
        <Header />
        <h1>123</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
