import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import TechPage from "./routes/TechPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<><App /><Home /></>} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/:techname" element={<TechPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);