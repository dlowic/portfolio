// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

// Import uniquement des icônes que tu utilises
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // On garde la même couleur de fond que le header pour la cohérence
    <footer
      className="site-footer"
      style={{ backgroundColor: "var(--couleur-fond-header)" }}
    >
      <div className="footer-container">
        {/* GAUCHE : Ton Logo / Nom */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            Loic Digbeu<span className="dot">.</span>
          </Link>
          <span className="copyright">&copy; {currentYear}</span>
        </div>

        {/* DROITE : Les Icônes */}
        <div className="footer-right social-icons">
          {/* GitHub */}
          <a
            href="https://github.com/dlowic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/loic-digbeu-594792347/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Email -> Redirection vers la page Contact */}
          {/* On utilise Link au lieu de <a> pour rester dans l'application */}
          <Link to="/contact" aria-label="Me contacter">
            <MdEmail />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
