// src/pages/Accueil.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Accueil.css";
import maPhoto from "../assets/images/moi.webp";
import StatusBadge from "../components/StatusBadge";
import { FaArrowRight } from "react-icons/fa";

function Accueil() {
  return (
    <div className="accueil-container full-width">
      {/* CÔTÉ GAUCHE : LE CONTENU */}
      <div className="split-left">
        <div className="content-wrapper">
          <div className="badge-wrapper">
            <StatusBadge />
          </div>

          <h1 className="big-title">
            LOIC <br />
            {/* J'ai ajouté le point ici */}
            <span className="outline-text">
              DIGBEU<span className="dot">.</span>
            </span>
          </h1>

          <div className="separator"></div>

          <p className="description">
            Étudiant en <strong>BUT MMI</strong> spécialisé en développement
            Front-End. Je construis des expériences digitales fluides, réactives
            et mémorables.
          </p>

          <div className="btn-group">
            <Link to="/projets" className="btn-solid">
              Mes Projets <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-link">
              Me Contacter
            </Link>
          </div>
        </div>
      </div>

      {/* CÔTÉ DROIT : L'IMAGE + TICKER */}
      <div className="split-right">
        <div className="image-mask">
          <img src={maPhoto} alt="Portrait" className="cover-img" />
        </div>

        {/* La bande défilante infinie */}
        <div className="ticker-wrap">
          <div className="ticker">
            <div className="ticker__item">REACT</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">DESIGN</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">FRONTEND</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">MMI</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">CREATIVE</div>
            <div className="ticker__item">•</div>
            {/* Dupliqué pour la boucle infinie */}
            <div className="ticker__item">REACT</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">DESIGN</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">FRONTEND</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">MMI</div>
            <div className="ticker__item">•</div>
            <div className="ticker__item">CREATIVE</div>
            <div className="ticker__item">•</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
