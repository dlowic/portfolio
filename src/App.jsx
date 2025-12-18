// src/App.jsx

import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Ajout de useLocation
import { AnimatePresence } from "framer-motion"; // Ajout de Framer Motion

// Imports Composants
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Particles from "./components/Particles.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // Le scrolleur
import PageTransition from "./components/PageTransition.jsx"; // La transition

// Imports Hooks & Context
import ThemeContext from "./context/ThemeContext.jsx";
import useIdle from "./hooks/useIdle";

// Imports Pages
import PageAccueil from "./pages/Accueil.jsx";
import PageProjets from "./pages/Projects.jsx"; // On pointe bien vers le fichier corrigé
import PageAPropos from "./pages/APropos.jsx";
import PageContact from "./pages/Contact.jsx";

import "./App.css";

// Palettes
const darkParticleColors = ["#929292", "#EF606B"];
const lightParticleColors = ["#9A9999", "#EF606B"];

function App() {
  // On récupère le thème via le Context (comme dans ton ancien code)
  const { theme } = useContext(ThemeContext);

  // Hook d'inactivité
  const isIdle = useIdle(120000);

  // Hook pour les transitions (Nouveau)
  const location = useLocation();

  return (
    <>
      {/* A. Les particules (Restent toujours là) */}
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
        <h2 className="idle-title">Êtes-vous toujours là ?</h2>
        <p className="idle-subtitle">
          Touchez l'écran ou bougez la souris pour revenir
        </p>
      </div>

      {/* C. Le Contenu du site (Disparaît si isIdle est vrai) */}
      <div className={`app-content ${isIdle ? "idle" : ""}`}>
        {/* On suppose que ton Header gère le thème tout seul via le Context */}
        <Header />

        <ScrollToTop />

        <main>
          {/* D. Les Transitions (La nouveauté intégrée ici) */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <PageAccueil />
                  </PageTransition>
                }
              />

              <Route
                path="/projets"
                element={
                  <PageTransition>
                    <PageProjets />
                  </PageTransition>
                }
              />

              {/* Attention : vérifie si ton lien est /apropos ou /a-propos dans ton Header */}
              <Route
                path="/apropos"
                element={
                  <PageTransition>
                    <PageAPropos />
                  </PageTransition>
                }
              />
              <Route
                path="/a-propos"
                element={
                  <PageTransition>
                    <PageAPropos />
                  </PageTransition>
                }
              />

              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <PageContact />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
