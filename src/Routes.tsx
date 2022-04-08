import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Php from './pages/Php';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/php' element={<Php />} />
            </Routes>
        </Router>
    )
}