// src/hooks/useIdle.js
import { useState, useEffect } from "react";

// Par défaut,  l'utilisateur est inactif après 5 secondes (5000ms)
export default function useIdle(delay = 120000) {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    // Fonction pour réinitialiser le timer quand l'utilisateur bouge
    const goActive = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      // On relance le compte à rebours
      timeoutId = setTimeout(() => setIsIdle(true), delay);
    };

    // On relance le timer dès le début
    timeoutId = setTimeout(() => setIsIdle(true), delay);

    // On écoute les événements (souris, clavier, scroll, touch)
    window.addEventListener("mousemove", goActive);
    window.addEventListener("keydown", goActive);
    window.addEventListener("scroll", goActive);
    window.addEventListener("touchstart", goActive);

    // Nettoyage quand le composant est détruit
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", goActive);
      window.removeEventListener("keydown", goActive);
      window.removeEventListener("scroll", goActive);
      window.removeEventListener("touchstart", goActive);
    };
  }, [delay]);

  return isIdle;
}
