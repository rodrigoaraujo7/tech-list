import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Php from './pages/Php';
import ErrorPage from './pages/ErrorPage';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/php' element={<Php />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}