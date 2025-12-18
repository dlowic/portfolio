// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // À chaque changement d'URL (pathname), on remonte en haut (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant n'affiche rien visuellement
}
