// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/*pour le mode production mon code s'execute deux fois si le code produit le meme resultat deux fois pas d'erreur mais si il y'a une erreur je suis informer */}
    <BrowserRouter>
      <ThemeProvider>
        {" "}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
