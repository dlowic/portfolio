// src/pages/APropos.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../assets/css/APropos.css";
import monCV from "../assets/ressource/digbeu-loic-cv.pdf";
// 1. ICÔNES STABLES (FontAwesome)
import {
  // UI
  FaDownload,
  FaCalendarAlt,
  FaEnvelope,
  FaBicycle,
  FaBasketballBall,
  FaGamepad,
  FaFilm,
  // Tech
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaReact,
  // Backup pour VS Code & Icone Humain
  FaLaptopCode,
  FaUser,
} from "react-icons/fa";

// 2. VRAIS LOGOS DE MARQUES (Simple Icons) - Tes préférés !
import {
  SiVite,
  SiFigma,
  SiAdobeillustrator,
  SiAffinitydesigner,
} from "react-icons/si";

function APropos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="apropos-page-container">
      {/* HEADER */}
      <motion.div
        className="apropos-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="apropos-title">
          À Propos <span>de moi.</span>
        </h1>
        <p className="apropos-subtitle">
          Développeur Front-End Junior & Créatif Polyvalent.
        </p>
      </motion.div>

      {/* --- BENTO GRID --- */}
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. BIO (Version détaillée & pro) */}
        <motion.div className="bento-item item-bio" variants={itemVariants}>
          <h2>Mon Parcours</h2>
          <p>
            Étudiant en <strong>BUT MMI</strong> à l'IUT de Bobigny, je me
            définis avant tout comme un{" "}
            <strong>Développeur Front-End Créatif</strong>. Mon objectif ?
            Transformer des concepts visuels en interfaces web performantes et
            interactives.
          </p>
          <p>
            Ma véritable force réside dans ma vision <strong>hybride</strong>. À
            l'aise aussi bien sur <strong>Figma</strong> que dans{" "}
            <strong>VS Code</strong>, je comble le fossé entre le design et la
            technique. Je suis obsédé par le <strong>"Pixel Perfect"</strong> et
            l'expérience utilisateur, veillant à ce que chaque animation et
            chaque interaction ait du sens.
          </p>
          <p>
            Au-delà du code, je suis quelqu'un de <strong>curieux</strong> et
            d'investi, toujours prêt à relever des défis techniques pour donner
            vie à des idées ambitieuses.
          </p>
        </motion.div>

        {/* 2. STATUT */}
        <motion.div className="bento-item item-status" variants={itemVariants}>
          <div className="status-content">
            <FaCalendarAlt className="status-icon" />
            <h3 className="status-title-row">
              Recherche de Stage
              <span className="status-pulse"></span>
            </h3>
            <p className="status-date">Dès le 7 Avril 2025</p>
            <span className="status-duration">12 semaines</span>
          </div>
          <div className="status-actions">
            <a
              href={monCV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bento btn-cv"
            >
              <FaDownload /> CV
            </a>
            <Link to="/contact" className="btn-bento btn-contact">
              <FaEnvelope /> Contact
            </Link>
          </div>
        </motion.div>

        {/* 3. COMPÉTENCES */}
        <motion.div className="bento-item item-tech" variants={itemVariants}>
          <h3 className="bento-title-with-icon">
            <FaCode /> Compétences
          </h3>

          <div className="icon-grid icon-grid-tech">
            <div className="tool-icon" title="React">
              <FaReact />
              <span>React</span>
            </div>
            <div className="tool-icon" title="JavaScript">
              <FaJs />
              <span>JS</span>
            </div>
            <div className="tool-icon" title="HTML5">
              <FaHtml5 />
              <span>HTML</span>
            </div>
            <div className="tool-icon" title="CSS3">
              <FaCss3Alt />
              <span>CSS</span>
            </div>
            <div className="tool-icon" title="PHP">
              <FaPhp />
              <span>PHP</span>
            </div>
            <div className="tool-icon" title="SQL">
              <FaDatabase />
              <span>SQL</span>
            </div>
          </div>
        </motion.div>

        {/* 4. LOGICIELS (AVEC LES VRAIS LOGOS QUE TU PRÉFÈRES) */}
        <motion.div className="bento-item item-design" variants={itemVariants}>
          <h3>Logiciels</h3>
          <div className="icon-grid icon-grid-soft">
            {/* VS Code (Backup sûr) */}
            <div className="tool-icon" title="VS Code">
              <FaLaptopCode />
              <span>VS Code</span>
            </div>
            {/* Vrais logos de marques */}
            <div className="tool-icon" title="Vite">
              <SiVite />
              <span>Vite</span>
            </div>
            <div className="tool-icon" title="Figma">
              <SiFigma />
              <span>Figma</span>
            </div>
            <div className="tool-icon" title="Illustrator">
              <SiAdobeillustrator />
              <span>Illustrator</span>
            </div>
            <div className="tool-icon" title="Affinity">
              <SiAffinitydesigner />
              <span>Affinity</span>
            </div>
          </div>
        </motion.div>

        {/* 5. HUMAIN (ATOUTS HUMAINS) */}
        <motion.div className="bento-item item-human" variants={itemVariants}>
          <h3 className="bento-title-with-icon">
            <FaUser /> Soft Skills
          </h3>
          <ul className="tag-list human-tags">
            <li>Dynamique</li>
            <li>Attentif</li>
            <li>Ponctuel</li>
            <li>Travailleur</li>
            <li>Sociable</li>
            <li>Jovial</li>
          </ul>
        </motion.div>

        {/* 6. HOBBIES */}
        <motion.div className="bento-item item-hobbies" variants={itemVariants}>
          <h2>Passions</h2>
          <div className="hobbies-wrapper">
            <div className="hobby-block">
              <div className="hobby-icon-group">
                <FaBicycle className="hobby-ico" />
                <FaBasketballBall className="hobby-ico" />
              </div>
              <div className="hobby-text">
                <strong>Sport & Dynamisme</strong>
                <p>Le vélo et le basket m'apprennent la persévérance.</p>
              </div>
            </div>
            <div className="hobby-separator"></div>
            <div className="hobby-block">
              <div className="hobby-icon-group">
                <FaGamepad className="hobby-ico" />
                <FaFilm className="hobby-ico" />
              </div>
              <div className="hobby-text">
                <strong>Pop Culture</strong>
                <p>Jeux vidéo et Cinéma nourrissent mon imaginaire.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default APropos;
