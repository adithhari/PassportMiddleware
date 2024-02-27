import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SplitPane from "react-split-pane";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Login />
  </StrictMode>
);
