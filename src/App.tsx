import usePersistedState from './utils/usePersistedState'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="container">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      {/* Router Here */}
      <Footer />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
