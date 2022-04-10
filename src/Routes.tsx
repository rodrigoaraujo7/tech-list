import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import TechPage from './pages/TechPage';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/tech' element={<TechPage />} />
            </Routes>
        </Router>
    )
}