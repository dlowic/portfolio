// src/components/StatusBadge.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/StatusBadge.css";

const StatusBadge = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // CAS 1 : On est DÉJÀ sur la page À Propos
    if (location.pathname === "/apropos") {
      const element = document.getElementById("disponibilite");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // CAS 2 : On est ailleurs (Accueil, Contact...)
    else {
      // On navigue vers la page avec le hash
      navigate("/apropos#disponibilite");
    }
  };

  return (
    <button
      className={`status-badge ios-glass ${className}`}
      onClick={handleClick}
      aria-label="Voir mes disponibilités"
    >
      <span className="pulse-dot-mini"></span>
      <span className="status-text">En recherche de stage</span>
    </button>
  );
};

export default StatusBadge;
