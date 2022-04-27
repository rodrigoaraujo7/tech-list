import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
  
  import App from "../../App";
  import ErrorPage from "../../routes/ErrorPage";
  import TechPage from "../../routes/TechPage";

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/:techname" element={<TechPage />} />
        </Routes>
    )
}