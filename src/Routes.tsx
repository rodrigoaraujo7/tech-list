import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Data from './data.json'

export function Routes() {
    return (
        <Router>
            { Data.map(technologyRoutes => {
                return (
                    <Route path={technologyRoutes.routeLink} 
                    element={<technologyRoutes.title />}></Route>
                )
            }) }
        </Router>
    )
}