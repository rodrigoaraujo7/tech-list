import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
  
import App from "../../App";
import ErrorPage from "../../routes/ErrorPage";
import TechPage from "../../routes/TechPage";

import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/:techname" element={<TechPage />} />
            </Routes>
        </AnimatePresence>
    )
}