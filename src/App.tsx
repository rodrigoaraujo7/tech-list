import usePersistedState from './utils/usePersistedState'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Footer from './components/Footer/Index'
import Header from './components/Header/Index'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <div className='container'>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

        <Header toggleTheme={toggleTheme} />

        {/* Route Here!!!!! */}

        {/* <Footer /> */}
    </ThemeProvider>
    </div>
  )
}

export default App
