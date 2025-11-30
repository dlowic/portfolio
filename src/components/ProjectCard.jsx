// src/pages/APropos.jsx

import React, { useEffect } from "react"; // <-- 1. On n'oublie pas useEffect
import { useLocation } from "react-router-dom"; // <-- 2. On n'oublie pas useLocation
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

// Ta liste de logos
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
  // 3. On récupère le "hash" de l'URL (ex: #disponibilite)
  const { hash } = useLocation();

  // 4. C'est ce bloc qui gère le scroll automatique
  useEffect(() => {
    // Si l'URL contient un hash (ex: /apropos#disponibilite)
    if (hash) {
      // On enlève le '#' pour avoir juste l'ID "disponibilite"
      const id = hash.replace("#", "");
      // On cherche l'élément dans la page
      const element = document.getElementById(id);

      // Si on le trouve, on scroll jusqu'à lui
      if (element) {
        // Le timeout aide parfois si la page met un peu de temps à charger
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Sinon, on remonte tout en haut (comportement normal)
      window.scrollTo(0, 0);
    }
  }, [hash]); // Ce code se relance si le hash change

  return (
    <div className="apropos-page-container">
      {/* --- 1. Présentation --- */}
      <section className="apropos-card">
        <h2>À Propos de Moi</h2>
        <p>
          Je suis Loic Digbeu, étudiant en **BUT MMI (Métiers du Multimédia et
          de l'Internet)**, actuellement en deuxième année avec une
          spécialisation en **Développement Web**.
        </p>
        <p>
          Depuis que j'ai découvert le code, je suis fasciné par la capacité à
          transformer une idée en une application interactive et fonctionnelle.
          Mon parcours en MMI m'a donné une vision complète du numérique, de la
          conception (UI/UX) à la communication, mais c'est dans le
          développement que je m'épanouis le plus.
        </p>
      </section>

      {/* --- 2. Parcours --- */}
      <section className="apropos-card">
        <h2>Mon Parcours</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2024 - 2026 (en cours)</h3>
              <p>
                BUT MMI - Parcours Développement Web
                <br />
                <em>IUT de [Ta Ville]</em>
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023 - 2024</h3>
              <p>
                Première année BUT MMI
                <br />
                <em>IUT de [Ta Ville]</em>
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
                <em>Lycée [Ton Lycée]</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Compétences --- */}
      <section className="apropos-card">
        <h2>Compétences Techniques</h2>
        <p>
          Voici les technologies avec lesquelles je travaille le plus au
          quotidien. Je suis à l'aise avec l'écosystème **React** pour le
          front-end, et je commence à explorer le back-end avec **Node.js**.
        </p>

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

      {/* --- 5. Disponibilité (C'EST ICI QUE ÇA VA SCROLLER) --- */}
      {/* L'ID "disponibilite" est crucial ici ! */}
      <section className="apropos-card availability-card" id="disponibilite">
        <h2>Disponibilité</h2>
        <p className="status-line">
          <span className="status-dot"></span>
          Actuellement en recherche active de **stage** pour la période de **Mai
          à Juillet 2026** (dates flexibles).
        </p>
        <p>
          Je suis ouvert à toute opportunité me permettant de contribuer à un
          projet concret et de monter en compétences.
        </p>
      </section>
    </div>
  );
}

export default APropos;
