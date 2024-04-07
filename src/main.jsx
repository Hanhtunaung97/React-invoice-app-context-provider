import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContext.jsx";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
