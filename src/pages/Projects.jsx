// src/pages/Projects.jsx
import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import "../assets/css/Projects.css";

// Import des données et de la modale
import projectsData from "../data/projectsData";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  // 1. Récupérer les catégories uniques depuis tes données
  // Cela crée automatiquement la liste ["Tous", "Web Design", "Application", etc.]
  const categories = useMemo(() => {
    const allCats = projectsData.map((p) => p.category);
    return ["Tous", ...new Set(allCats)];
  }, []);

  // 2. Filtrer les projets
  const filteredProjects =
    activeCategory === "Tous"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-page-container">
      <h1 className="projects-title">Mes Projets</h1>

      {/* --- BARRE DE FILTRES --- */}
      <div className="filters-container">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- GRILLE DES PROJETS --- */}
      {/* motion.div layout permet l'animation fluide quand on filtre */}
      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="card-btn-link">Lien & Infos</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- MODALE --- */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
