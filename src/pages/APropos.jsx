// src/pages/APropos.jsx

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/APropos.css";
import LogoLoop from "../components/LogoLoop.jsx";
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

// --- DONNÉES ---
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
      "Animations",
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
      "Maquettage",
      "Adobe Photoshop",
      "Responsive Design",
      "Accessibilité",
    ],
  },
];

function APropos() {
  const { hash } = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const id = hash.replace("#", "");
      if (!id) return;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    if (hash) {
      scrollToSection();
      setTimeout(scrollToSection, 100);
      setTimeout(scrollToSection, 500);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="apropos-page-container">
      <div className="bento-grid">
        {/* --- 1. BIO (Grande carte en haut à gauche) --- */}
        <div className="bento-item item-bio">
          <h2>À Propos de Moi</h2>
          <p>
            Je suis Loic Digbeu, étudiant en{" "}
            <strong>BUT MMI (Métiers du Multimédia et de l'Internet)</strong>,
            actuellement en deuxième année avec une spécialisation en{" "}
            <strong>Développement Web</strong>.
          </p>
          <p>
            Mon profil est hybride : je comprends les enjeux du design et je
            maîtrise la logique du code. Cette double compétence me permet de
            dialoguer efficacement avec les designers tout en produisant un code
            propre et performant.
          </p>
          <p>
            Actuellement, je me focalise sur l'écosystème <strong>React</strong>{" "}
            pour créer des interfaces utilisateur modernes, fluides et
            engageantes.
          </p>
        </div>

        {/* --- 2. COMPÉTENCES (Grande tour verticale à droite) --- */}
        <div className="bento-item item-skills">
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
        </div>

        {/* --- 3. DISPONIBILITÉ (Petit carré en bas à gauche) --- */}
        <div className="bento-item item-avail" id="disponibilite">
          <h2>Disponibilité</h2>
          <div className="status-container">
            <p className="status-line">
              <span className="status-dot"></span>
              En recherche de stage
            </p>
            <p className="status-details">
              Je recherche un stage de <strong>10 à 12 semaines</strong> en
              développement Front-end ou Fullstack JS.
              <br />
              <br />
              <strong>Période :</strong> Mai à Juillet 2026.
            </p>
          </div>
        </div>

        {/* --- 4. PARCOURS (Petit carré en bas au milieu) --- */}
        <div className="bento-item item-timeline">
          <h2>Mon Parcours</h2>
          <div className="timeline-container">
            {/* Item 1 : BUT */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023 - 2027</h3>
                <p>
                  <strong>
                    BUT MMI (Mérier du Multimédia et de l'Internet)
                  </strong>
                  <br />
                  <em>IUT de Bobigny</em>
                </p>
                <p className="timeline-desc">
                  Formation polyvalente sur 3 ans : Dev Web, Design et Com.
                </p>
              </div>
            </div>

            {/* Item 2 : Bac */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>
                  <strong>Baccalauréat</strong>
                  <br />
                  <em>Lycée Langevin Wallon</em>
                </p>
                <p className="timeline-desc">
                  Obtention du diplôme avec mention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. LOGOS (Barre tout en bas) --- */}
        <div className="bento-item item-logos">
          <div className="logo-loop-wrapper">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={45}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default APropos;
