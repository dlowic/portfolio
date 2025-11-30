// src/pages/Projects.jsx

import React, { useState, useEffect, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaInfoCircle,
  FaGithub,
  FaFilter,
  FaCheck,
} from "react-icons/fa";
import "../assets/css/Projects.css";

// --- DONNÉES ---
const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Le site actuel. Focus sur l'UX, les animations et le thème dynamique.",
    tags: ["React", "Vite", "CSS"],
    image: "https://picsum.photos/800/600?random=1",
    link: "/",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Site E-commerce",
    description:
      "Simulation complète de vente en ligne avec panier et paiement.",
    tags: ["React", "Redux", "Node.js"],
    image: "https://picsum.photos/800/600?random=2",
    link: "#",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Dashboard Météo",
    description: "App météo temps réel avec gestion d'API complexes.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://picsum.photos/800/600?random=3",
    link: "#",
    github: "https://github.com",
  },
  // Ajoute d'autres projets...
];

// La liste de tous les tags possibles pour le filtre
const allTags = [
  "React",
  "JavaScript",
  "CSS",
  "Node.js",
  "API",
  "Vite",
  "Redux",
];

function Projects() {
  // État pour les filtres sélectionnés (tableau vide = tous)
  const [selectedFilters, setSelectedFilters] = useState([]);
  // État pour ouvrir/fermer le menu filtre
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  // État pour la modale projet
  const [selectedProject, setSelectedProject] = useState(null);

  // Pour fermer le menu si on clique ailleurs
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gérer le clic sur un filtre (Ajouter ou Retirer)
  const toggleFilter = (tag) => {
    if (selectedFilters.includes(tag)) {
      setSelectedFilters(selectedFilters.filter((t) => t !== tag));
    } else {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };

  // Logique de filtrage : Si aucun filtre, tout montrer. Sinon, montrer si le projet a AU MOINS UN des tags.
  const filteredProjects =
    selectedFilters.length === 0
      ? projects
      : projects.filter((p) =>
          p.tags.some((tag) => selectedFilters.includes(tag))
        );

  return (
    <div className="projects-page-container">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Une sélection de mes travaux récents.</p>

        {/* --- LE BOUTON FILTRE & MENU DÉROULANT --- */}
        <div className="filter-wrapper" ref={filterRef}>
          <button
            className={`filter-toggle-btn ${
              isFilterMenuOpen || selectedFilters.length > 0 ? "active" : ""
            }`}
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          >
            <FaFilter /> Filtres{" "}
            {selectedFilters.length > 0 && `(${selectedFilters.length})`}
          </button>

          {/* Le Menu Déroulant */}
          <div className={`filter-dropdown ${isFilterMenuOpen ? "open" : ""}`}>
            <div className="filter-list">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`filter-option ${
                    selectedFilters.includes(tag) ? "selected" : ""
                  }`}
                  onClick={() => toggleFilter(tag)}
                >
                  {tag} {selectedFilters.includes(tag) && <FaCheck />}
                </button>
              ))}
            </div>

            {/* Bouton pour tout effacer */}
            {selectedFilters.length > 0 && (
              <button
                className="clear-filters"
                onClick={() => setSelectedFilters([])}
              >
                Effacer tout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* --- LA GRILLE XL --- */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="card-image"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <div className="card-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="btn-link accent full-width"
                onClick={() => setSelectedProject(project)}
              >
                <FaInfoCircle /> Lien & Infos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- LA MODALE (Inchangée) --- */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-text">
              <h2>{selectedProject.title}</h2>
              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3>Contexte</h3>
              <p>{selectedProject.description}</p>
              <div className="modal-actions">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal primary"
                >
                  Voir le site <FaExternalLinkAlt />
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modal secondary"
                >
                  Code GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
