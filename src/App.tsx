import usePersistedState from './utils/usePersistedState'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import TechnologiesList from './components/TechnologiesList/Index'

import { AppRoutes } from './Routes'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
    <AppRoutes />

    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="container">
        <Header toggleTheme={toggleTheme} />
        <TechnologiesList />
        <Footer />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
