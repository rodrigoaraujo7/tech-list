import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { React } from './pages/React';
import { Node } from './pages/Node';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/react' element={<React />} />
                <Route path='/node' element={<Node />} />
            </Routes>
        </Router>
    )
}