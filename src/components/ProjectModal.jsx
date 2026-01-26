import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaFigma } from "react-icons/fa"; // Ajout de l'icône Figma
import "../assets/css/Projects.css";

const dropIn = {
  hidden: { y: "100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.4, type: "spring", damping: 25, stiffness: 500 },
  },
  exit: { y: "100vh", opacity: 0 },
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // LOGIQUE DE DÉTECTION FIGMA
  // On regarde si "Figma" est dans les tags OU si le lien contient "figma.com"
  const isFigmaProject =
    project.tags.includes("Figma") ||
    (project.siteLink && project.siteLink.includes("figma.com"));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* ZONE IMAGE (FIXE) */}
        <div className="modal-image-container">
          <img src={project.image} alt={project.title} />
        </div>

        {/* ZONE CONTENU (SCROLLABLE) */}
        <div className="modal-scrollable-content">
          <h2 className="modal-title">{project.title}</h2>

          {/* MÉTADONNÉES (Année / Durée / Type) */}
          <div
            className="modal-meta-info"
            style={{
              marginBottom: "20px",
              color: "var(--couleur-texte-principal)",
              opacity: 0.7,
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            <span>{project.year}</span>
            <span style={{ margin: "0 10px" }}>•</span>
            <span>{project.duration}</span>
            <span style={{ margin: "0 10px" }}>•</span>
            <span style={{ textTransform: "capitalize" }}>
              {project.type === "school"
                ? " Projet Universitaire"
                : " Projet Personnel"}
            </span>
          </div>

          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="modal-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="modal-subtitle">Contexte</h3>
          <p className="modal-description">{project.context}</p>
        </div>

        {/* ZONE ACTIONS (FIXE EN BAS) */}
        <div className="modal-fixed-footer">
          <div className="modal-actions">
            {/* BOUTON PRINCIPAL (Site ou Figma) */}
            {project.siteLink && (
              <a
                href={project.siteLink}
                target="_blank"
                rel="noreferrer"
                className="btn-modal btn-primary"
              >
                {/* On change le texte et l'icône selon le type */}
                {isFigmaProject ? (
                  <>
                    Voir le Prototype <FaFigma />
                  </>
                ) : (
                  <>
                    Voir le site <FaExternalLinkAlt />
                  </>
                )}
              </a>
            )}

            {/* BOUTON GITHUB (Si le lien existe) */}
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
