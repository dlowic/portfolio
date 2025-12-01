// src/pages/Contact.jsx

import React from "react";
import "../assets/css/Contact.css";
import { FaDownload, FaPaperPlane } from "react-icons/fa"; // Icônes
import StatusBadge from "../components/StatusBadge";
// Import du CV (Assure-toi de mettre ton fichier PDF dans ce dossier !)
// Si le fichier n'existe pas encore, cette ligne peut faire une erreur,
// tu peux la commenter en attendant d'avoir mis le fichier.
import monCV from "../assets/ressource/mon-cv.pdf";

function Contact() {
  return (
    <div className="contact-page-container">
      {/* Section 2 : Le CV */}
      <div className="contact-card cv-card">
        <div className="cv-content">
          <h3>Mon Curriculum Vitae</h3>
          <p>
            Vous souhaitez en savoir plus sur mon parcours et mes compétences ?
          </p>
        </div>

        <a href={monCV} download="CV_Loic_Digbeu.pdf" className="btn-cv">
          Télécharger mon CV <FaDownload />
        </a>
      </div>
      <div className="contact-card">
        <h2>Me Contacter</h2>
        {/* 2. INSERTION DU BADGE ICI */}
        <div style={{ marginBottom: "25px" }}>
          <StatusBadge />
        </div>
        <p className="contact-intro">
          Une proposition de stage ou d'alternace ? N'hésitez pas à m'envoyer un
          message, je vous répondrai au plus vite.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mdkbbybo"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre Nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre@email.com"
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

          <button type="submit" className="btn btn-primary submit-btn">
            Envoyer <FaPaperPlane className="btn-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
