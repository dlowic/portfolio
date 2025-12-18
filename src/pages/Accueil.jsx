// src/pages/Accueil.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Accueil.css";
import maPhoto from "../assets/images/moi.webp";
import StatusBadge from "../components/StatusBadge";
import { FaArrowRight } from "react-icons/fa";

function Accueil() {
  // Ici ta variable s'appelle tickerItems
  const tickerItems = [
    "REACT",
    "•",
    "DESIGN",
    "•",
    "FRONTEND",
    "•",
    "MMI",
    "•",
    "CREATIVE",
    "•",
  ];

  return (
    <div className="accueil-container full-width">
      {/* CÔTÉ GAUCHE (Ne change pas) */}
      <div className="split-left">
        <div className="content-wrapper">
          <div className="badge-wrapper">
            <StatusBadge />
          </div>
          <h1 className="big-title">
            LOIC <br />{" "}
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

      {/* CÔTÉ DROIT */}
      <div className="split-right">
        <div className="image-mask">
          <img src={maPhoto} alt="Portrait" className="cover-img" />

          <div className="ticker-wrap">
            {/* On met DEUX fois le bloc .ticker à la suite */}

            {/* Le premier ticker */}
            <div className="ticker">
              {/* CORRECTION ICI : tickerItems au lieu de items */}
              {tickerItems.map((item, index) => (
                <div key={index} className="ticker__item">
                  {item}
                </div>
              ))}
            </div>

            {/* Le deuxième ticker (identique) qui suit immédiatement */}
            <div className="ticker">
              {/* CORRECTION ICI : tickerItems au lieu de items */}
              {tickerItems.map((item, index) => (
                <div key={`dup-${index}`} className="ticker__item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
