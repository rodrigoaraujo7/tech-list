import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './data.json'

import ErrorPage from './pages/ErrorPage';
import TechPage from './pages/TechPage';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/:techname' element={<TechPage />} />
                {/* {Data.map(technology => {
                    return <Route path={'/:' + technology.routeLink} element={<TechPage />} />
                })} */}
            </Routes>
        </Router>
    )
}