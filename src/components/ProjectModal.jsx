// src/components/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "../assets/css/Projects.css";

// ANIMATION CORRIGÉE : Simple Zoom + Fondu (plus stable)
const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.8, // Commence un peu plus petit
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut", // Arrivée fluide
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        variants={zoomIn} // On utilise la nouvelle animation
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-image-container">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="modal-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="modal-subtitle">Contexte</h3>
          <p className="modal-description">{project.context}</p>

          <div className="modal-actions">
            {/* Affiche le bouton SEULEMENT si siteLink n'est pas vide */}
            {project.siteLink && (
              <a
                href={project.siteLink}
                target="_blank"
                rel="noreferrer"
                className="btn-modal btn-primary"
              >
                {/* On change le texte si c'est du Figma */}
                {project.tags.includes("Figma") ? "Voir la maquette" : "Voir le site"}{" "}
                <FaExternalLinkAlt />
              </a>
            )}

            {/* Affiche le bouton SEULEMENT si githubLink n'est pas vide */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn-modal btn-secondary"
              >
                Code GitHub <FaGithub />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
