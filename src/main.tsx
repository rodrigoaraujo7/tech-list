import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>,
  rootElement
);