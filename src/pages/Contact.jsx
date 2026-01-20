// src/pages/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Contact.css";
import { FaDownload, FaPaperPlane, FaEye } from "react-icons/fa"; 
import StatusBadge from "../components/StatusBadge";
import monCV from "../assets/ressource/digbeu-loic-cv.pdf";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Contact() {
  return (
    <motion.div 
      className="contact-page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* --- BLOC 1 : LE CV (Barre du haut) --- */}
      <motion.div className="contact-card cv-card-row" variants={itemVariants}>
        <div className="cv-content">
          <h3>Mon Curriculum Vitae</h3>
          <p>
            Vous souhaitez en savoir plus ? Consultez mon CV ou téléchargez-le.
          </p>
        </div>

        <div className="cv-actions-row">
          {/* Bouton Voir */}
          <a 
            href={monCV} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-cv-view"
          >
            Voir <FaEye />
          </a>

          {/* Bouton Télécharger */}
          <a 
            href={monCV} 
            download="CV_Loic_Digbeu.pdf" 
            className="btn-cv-download-simple"
          >
            Télécharger <FaDownload />
          </a>
        </div>
      </motion.div>

      {/* --- BLOC 2 : LE FORMULAIRE (Juste en dessous) --- */}
      <motion.div className="contact-card" variants={itemVariants}>
        <h2>Me Contacter</h2>
        
        <div style={{ marginBottom: "25px" }}>
          <StatusBadge />
        </div>
        
        <p className="contact-intro">
          Une proposition de stage ou d'alternance ? N'hésitez pas à m'envoyer un
          message via ce formulaire, je vous répondrai au plus vite.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mdkbbybo" 
          method="POST"
        >
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="name">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre Nom"
                required
              />
            </div>

            <div className="form-group half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Proposition de stage..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Bonjour Loic..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Envoyer le message <FaPaperPlane />
          </button>
        </form>
      </motion.div>

    </motion.div>
  );
}

export default Contact;