import usePersistedState from '../utils/usePersistedState'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import TechnologiesList from '../components/TechnologiesList/Index'

export default function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <TechnologiesList />  
    </ThemeProvider>
  )
  // return <h1>dwaydwa</h1>
}