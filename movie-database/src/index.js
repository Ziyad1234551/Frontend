/**
 * @description: This is for learning purpose
 * @author: Aufa Billah
 */
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Import Browser Router dari React Router
import { BrowserRouter } from "react-router-dom";

// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    {/*
     * Bungkus/Hubungkan Aplikasi dengan Browser Router.
     * Agar URL browser dapat dimanipulasi oleh React Router
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
