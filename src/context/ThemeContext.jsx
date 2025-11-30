// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect } from "react";

// 1. Crée le contexte
const ThemeContext = createContext();

// 2. Crée le "Fournisseur" (Provider)
export function ThemeProvider({ children }) {
  // 3. Crée l'état. On check le localStorage pour voir si l'utilisateur
  //    avait déjà un thème choisi (c'est pro !)
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // 4. Une fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // 5. Un "useEffect" pour mettre à jour le localStorage ET
  //    l'attribut sur le <body> (c'est ce qui active le CSS !)
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 6. On "fournit" le thème et la fonction à tous les enfants
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7. Exporte le contexte pour qu'on puisse l'utiliser
export default ThemeContext;
