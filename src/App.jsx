// src/App.jsx

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

// Imports Composants
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Particles from "./components/Particles.jsx";

// Imports Hooks & Context
import ThemeContext from "./context/ThemeContext.jsx";
import useIdle from "./hooks/useIdle"; // <-- 1. IMPORT DU HOOK

// Imports Pages
import PageAccueil from "./pages/Accueil.jsx";
import PageProjets from "./pages/Projects.jsx";
import PageAPropos from "./pages/APropos.jsx";
import PageContact from "./pages/Contact.jsx";

// Palettes
const darkParticleColors = ["#929292", "#EF606B"];
const lightParticleColors = ["#9A9999", "#EF606B"];

function App() {
  const { theme } = useContext(ThemeContext);

  // 2. UTILISATION DU HOOK (5000ms = 5 secondes pour tester)
  const isIdle = useIdle(5000);

  return (
    <>
      {/* A. Les particules restent TOUJOURS visibles (en dehors du wrapper) */}
      <Particles
        className="ogl-background"
        particleColors={
          theme === "dark" ? darkParticleColors : lightParticleColors
        }
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* B. Le Message d'inactivité */}
      <div className={`idle-message ${isIdle ? "visible" : ""}`}>
        {/* J'ai ajouté des classes : idle-title et idle-subtitle */}
        <h2 className="idle-title">Êtes-vous toujours là ?</h2>
        <p className="idle-subtitle">
          Touchez l'écran ou bougez la souris pour revenir
        </p>
      </div>

      {/* C. Le Contenu du site (Disparaît si isIdle est vrai) */}
      <div className={`app-content ${isIdle ? "idle" : ""}`}>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<PageAccueil />} />
            <Route path="/projets" element={<PageProjets />} />
            <Route path="/apropos" element={<PageAPropos />} />
            <Route path="/contact" element={<PageContact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
