import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import TechPage from './pages/TechPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/:techname' element={<TechPage />} />
      </Routes>
    </Router>
  )
}

export default App
