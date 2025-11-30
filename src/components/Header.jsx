// src/components/Header.jsx

import React, { useContext, useState } from "react";
// CORRECTION ICI : J'ai ajouté 'Link' à l'import
import { NavLink, Link } from "react-router-dom";
import "../assets/css/Header.css";
import ThemeContext from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cette fonction est correcte pour NavLink className
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <>
      {/* 1. LE NOM (Link) */}
      <Link
        to="/"
        className="nav-brand-fixed"
        onClick={() => setIsMenuOpen(false)}
      >
        Loic Digbeu<span className="dot">.</span>
      </Link>

      {/* 2. LE BOUTON BURGER */}
      <button
        className={`burger-menu-btn ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
      </button>

      {/* 3. LE MENU */}
      <div className={`main-nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projets"
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apropos"
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={getNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li className="theme-li">
              <button
                onClick={toggleTheme}
                className="theme-icon-btn"
                aria-label="Changer de thème"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
