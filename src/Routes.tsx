import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CakePhp from './pages/CakePhp';
import ErrorPage from './pages/ErrorPage';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' />
                <Route path='/cakephp' element={<CakePhp />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}