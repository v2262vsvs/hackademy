import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import './index.css';

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
