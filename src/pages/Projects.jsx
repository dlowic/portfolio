// src/pages/Projects.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import "../assets/css/Projects.css";

import projectsData from "../data/projectsData";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // États des filtres
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [activeType, setActiveType] = useState("all");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Liste des catégories
  const categories = [...new Set(projectsData.map((item) => item.category))];

  // LOGIQUE DE FILTRAGE
  const filteredProjects = projectsData.filter((item) => {
    const matchCategory =
      activeCategory === "Tous" ? true : item.category === activeCategory;
    const matchType = activeType === "all" ? true : item.type === activeType;
    return matchCategory && matchType;
  });

  // Gestion du clic sur une catégorie (Boutons Pillules)
  const handleCategoryClick = (cat) => {
    if (activeCategory === cat) {
      setActiveCategory("Tous");
    } else {
      setActiveCategory(cat);
    }
  };

  // Gestion du clic dans le menu déroulant (Type)
  const handleTypeSelect = (type) => {
    if (activeType === type && type !== "all") {
      setActiveType("all"); // Toggle si on reclique sur le même (sauf "Tout voir")
    } else {
      setActiveType(type);
    }
    setShowFilterMenu(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page-container">
      <h1 className="projects-title">Mes Projets</h1>

      {/* --- ZONE DE FILTRES --- */}
      <div className="filters-container">
        {/* 1. FILTRE TYPE (Dropdown) */}
        <div className="filter-dropdown-wrapper">
          <button
            className={`filter-btn special-filter ${activeType !== "all" ? "active" : ""}`}
            onClick={() => setShowFilterMenu(!showFilterMenu)}
          >
            <FaFilter />
            {activeType === "all"
              ? "Type"
              : activeType === "school"
                ? "Universitaire"
                : "Personnel"}
          </button>

          <AnimatePresence>
            {showFilterMenu && (
              <motion.div
                className="filter-dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <button
                  className={activeType === "all" ? "active-dropdown-item" : ""}
                  onClick={() => handleTypeSelect("all")}
                >
                  Tout voir
                </button>

                <button
                  className={
                    activeType === "school" ? "active-dropdown-item" : ""
                  }
                  onClick={() => handleTypeSelect("school")}
                >
                  Universitaire
                </button>

                <button
                  className={
                    activeType === "personal" ? "active-dropdown-item" : ""
                  }
                  onClick={() => handleTypeSelect("personal")}
                >
                  Personnel
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. FILTRES CATÉGORIES */}
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- GRILLE PROJETS --- */}
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                className="project-card"
                key={project.id}
                onClick={() => setSelectedProject(project)}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <span className="card-btn-link">En savoir plus</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "50px",
                opacity: 0.7,
              }}
            >
              <h3>Aucun projet ne correspond à cette combinaison.</h3>
              <p>Essayez de réinitialiser les filtres.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- MODALE --- */}
      <AnimatePresence>
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
