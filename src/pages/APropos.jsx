// src/pages/APropos.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/css/APropos.css";

// ⚠️ C'EST ICI LE CHANGEMENT PRINCIPAL :
import TechDock from "../components/TechDock.jsx";

// Import des icônes
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiVite,
} from "react-icons/si";

// Données des icônes pour le Dock
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "JavaScript", href: "#" },
  { node: <SiHtml5 />, title: "HTML5", href: "#" },
  { node: <SiCss3 />, title: "CSS3", href: "#" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

const skillsData = [
  {
    category: "Développement Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Outils & Backend",
    items: ["Git & GitHub", "Vite", "Node.js (Basics)", "VS Code", "NPM"],
  },
  {
    category: "Design & UI/UX",
    items: [
      "Figma",
      "Maquettage UI",
      "Adobe Photoshop",
      "Responsive",
      "Accessibilité",
    ],
  },
];

// Animation d'entrée
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function APropos() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [hash]);

  return (
    <div className="apropos-page-container">
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- 1. BIO --- */}
        <motion.div className="bento-item item-bio" variants={itemVariants}>
          <h2>À Propos de Moi</h2>
          <div className="bio-content">
            <p>
              Je suis <strong>Loic Digbeu</strong>, étudiant en{" "}
              <span className="highlight">BUT MMI</span>, actuellement en
              deuxième année avec une spécialisation en{" "}
              <span className="highlight">Développement Web</span>.
            </p>
            <p>
              Mon profil est hybride : je comprends les enjeux du{" "}
              <strong>design</strong> et je maîtrise la logique du{" "}
              <strong>code</strong>. Cette double compétence me permet de
              dialoguer efficacement avec les designers tout en produisant un
              code propre et performant.
            </p>
            <p>
              Actuellement, je me focalise sur l'écosystème{" "}
              <strong>React</strong> pour créer des expériences digitales
              immersives.
            </p>
          </div>
        </motion.div>

        {/* --- 2. COMPÉTENCES --- */}
        <motion.div className="bento-item item-skills" variants={itemVariants}>
          <h2>Arsenal Technique</h2>
          <div className="skills-grid">
            {skillsData.map((group, index) => (
              <div key={index} className="skill-group">
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- 3. DISPONIBILITÉ --- */}
        <motion.div
          className="bento-item item-avail"
          id="disponibilite"
          variants={itemVariants}
        >
          <h2>Disponibilité</h2>
          <div className="status-container">
            <div className="status-header">
              <span className="status-dot"></span>
              <span className="status-text">En recherche de stage</span>
            </div>
            <p className="status-details">
              Je recherche un stage de <strong>10 à 12 semaines</strong>.
              <br />
              <span className="date-highlight">Mai à Juillet 2026</span>
            </p>
          </div>
        </motion.div>

        {/* --- 4. PARCOURS --- */}
        <motion.div
          className="bento-item item-timeline"
          variants={itemVariants}
        >
          <h2>Mon Parcours</h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023 - 2027</h3>
                <h4>BUT MMI</h4>
                <p>IUT de Bobigny - Spé. Dev Web</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <h4>Baccalauréat</h4>
                <p>Lycée Langevin Wallon - Mention</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 5. LOGOS (C'est ici que ça change !) --- */}
        <motion.div className="bento-item item-logos" variants={itemVariants}>
          {/* Si tu vois "Stack Technique", c'est que le nouveau code est actif ! */}
          <h2>Stack Technique</h2>
          <div className="dock-wrapper-center">
            <TechDock logos={techLogos} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default APropos;
