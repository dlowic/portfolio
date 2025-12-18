// src/pages/Projects.jsx
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../assets/css/Projects.css";

// Import des données et de la modale
import projectsData from "../data/projectsData";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-page-container">
      <h1 className="projects-title">Mes Projets</h1>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)} // Ouvre la modale au clic
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
            </div>
          </div>
        ))}
      </div>

      {/* Gestion de l'affichage de la modale */}
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
