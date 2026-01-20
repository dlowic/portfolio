// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bar">
      <div className="footer-container">
        
        {/* ZONE GAUCHE : Logo (Maintenant cliquable !) + Année */}
        <div className="footer-left">
          <Link to="/" className="footer-logo-link" aria-label="Retour à l'accueil">
            <span className="footer-logo">
              Loic Digbeu<span className="dot">.</span>
            </span>
          </Link>
          <span className="footer-year">© {currentYear}</span>
        </div>

        {/* ZONE CENTRE : Mentions Légales */}
        <div className="footer-center">
          <Link to="/mentions-legales" className="legal-link">
            Mentions Légales
          </Link>
        </div>

        {/* ZONE DROITE : Icônes */}
        <div className="footer-right">
          <a
            href="https://github.com/ton-pseudo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ton-email@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;