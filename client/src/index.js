import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/defaults";
import AuthAppProvider from "./context/authContext/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthAppProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthAppProvider>
  </React.StrictMode>
);
