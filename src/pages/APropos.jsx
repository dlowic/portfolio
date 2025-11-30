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

function APropos() {
  const { hash } = useLocation();

  // --- LE FIX ULTIME POUR LE SCROLL ---
  useEffect(() => {
    // Fonction qui tente de scroller
    const scrollToSection = () => {
      // On enlève le #
      const id = hash.replace("#", "");
      if (!id) return; // Si pas d'ID, on fait rien

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Si on a un hash (ex: #disponibilite)
    if (hash) {
      // On essaie 3 fois pour être sûr que la page est chargée
      scrollToSection(); // Tout de suite
      setTimeout(scrollToSection, 100); // Après 0.1s
      setTimeout(scrollToSection, 500); // Après 0.5s (au cas où)
    } else {
      // Si pas de hash, on remonte en haut
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="apropos-page-container">
      <section className="apropos-card">
        <h2>À Propos de Moi</h2>
        <p>
          Je suis Loic Digbeu, étudiant en BUT MMI (Métiers du Multimédia et de
          l'Internet), actuellement en deuxième année en parcours dev.
        </p>
        <p>Depuis que j'ai découvert le code, je suis fasciné.</p>
      </section>

      <section className="apropos-card">
        <h2>Mon Parcours</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024 - 2028 (en cours)</h3>
              <p>
                BUT MMI - Parcours Développement Web
                <br />
                <em>IUT de Bobigny</em>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023</h3>
              <p>
                Obtention du Baccalauréat
                <br />
                <em>Lycée Langevin Wallon</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="apropos-card">
        <h2>Compétences Techniques</h2>
        <p>Fk la mmi pas beaucoup moi faire plus tard.</p>
        <div className="logo-loop-wrapper">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={40}
            hoverSpeed={0}
            fadeOut
            scaleOnHover
          />
        </div>
      </section>

      {/* --- VÉRIFIE BIEN L'ID ICI --- */}
      <section className="apropos-card availability-card" id="disponibilite">
        <h2>Disponibilité</h2>
        <p className="status-line">
          <span className="status-dot"></span>
          Actuellement en recherche active de stage d'une durée de 3 mois entre
          Mai à Juillet 2026.
        </p>
        <p className="status-line">
          <span className="status-dot"></span>
          Actuellement en recherche active d'une alternace pour la rentrer
          scolaire 2026-2027.
        </p>
        <br />
        <p>
          Je suis ouvert à toute opportunité me permettant de contribuer à un
          projet concret et de monter en compétences.
        </p>
      </section>
    </div>
  );
}

export default APropos;
