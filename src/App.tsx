import usePersistedState from './utils/usePersistedState'
import { useState } from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { motion } from 'framer-motion'

import GlobalStyle from './styles/global'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import TechnologiesList from './components/TechnologiesList/Index'

import data from './data.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if(searchTerm !== '') {
      const newTechList = data.filter((technologies) => {
        return Object.values(technologies)
        .join('  ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase)
      });
      setSearchResults(newTechList['']);
    } else {
      setSearchResults(data['']);
    }
  }

  return (
    <motion.div 
      className="container" 
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      exit={{ x: -8000, transition: { duration: 0.7 } }}
    >
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <TechnologiesList 
          term={searchTerm} 
          searchKeyword={searchHandler} 
          data={searchTerm.length < 1 ? data : searchResults}
          />
          <Footer />
      </ThemeProvider>
    </motion.div>
  )
}

export default App
