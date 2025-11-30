// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

// Import des icônes (j'ai mis celles de ton image + Mail)
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
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
          {/* Remplace les href="#" par tes vrais liens ! */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          {/* J'ai ajouté l'email car c'est important pour un portfolio */}
          <a href="mailto:ton-email@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
