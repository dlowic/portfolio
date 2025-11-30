// src/pages/Accueil.jsx

import React from "react";
import { Link } from "react-router-dom"; // Pour les boutons vers d'autres pages
import "../assets/css/Accueil.css"; // Le CSS qu'on va créer
import maPhoto from "../assets/images/moi.webp"; // import de ma photo

import StatusBadge from "../components/StatusBadge";
function Accueil() {
  return (
    <div className="accueil-container">
      <div className="hero-section">
        <div className="hero-text">
          {/* 2. INSERTION DU BADGE ICI */}
          <div style={{ marginBottom: "20px" }}>
            <StatusBadge />
          </div>
          <h1>Salut, je suis Loic Digbeu.</h1>
          <h2>Étudiant MMI Développeur Web.</h2>
          <p>Bienvenue sur mon portfolio !</p>

          {/* Les boutons d'appel à l'action */}
          <div className="hero-buttons">
            <Link to="/projets" className="btn btn-primary">
              Voir mes Projets
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contactez-moi
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={maPhoto}
            alt="photo de profil - Loic Digbeu"
            className="profile-pic"
          />
        </div>
      </div>

      {/* Tu pourrais ajouter d'autres sections ici plus tard, par exemple 
          une section "Derniers Projets" ou "Compétences" */}
    </div>
  );
}

export default Accueil;
