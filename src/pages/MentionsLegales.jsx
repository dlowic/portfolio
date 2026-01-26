// src/pages/MentionsLegales.jsx
import React, { useEffect } from "react";
// 👇 IL MANQUAIT CETTE LIGNE :
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/css/MentionsLegales.css";

function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="legal-page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="legal-card">
        <h1 className="legal-title">
          Mentions <span>Légales</span>
        </h1>

        <div className="legal-section">
          <h2>1. Éditeur du site</h2>
          <p>
            Ce site est édité par : <strong>Loic Digbeu</strong>
            <br />
            Statut : Étudiant / Particulier
            <br />
            {/* J'ai aussi corrigé le href du mail pour qu'il corresponde au texte */}
            Contact :{" "}
            <a href="mailto:digbeuloicpro@gmail.com">digbeuloicpro@gmail.com</a>
            <br />
            <br />
            {/* C'est ce composant qui faisait planter car il n'était pas importé */}
            <Link to="/contact" className="legal-link">
              Accéder au formulaire de contact
            </Link>
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong>
            <br />
            340 S Lemon Ave #4133 Walnut, CA 91789, USA
            <br />
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              www.vercel.com
            </a>
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus (textes, images, graphismes, code source)
            présents sur ce site sont, sauf mention contraire, la propriété
            exclusive de <strong>Loic Digbeu</strong>.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            transmission ou dénaturation, totale ou partielle, du site ou de son
            contenu, par quelque procédé que ce soit, est interdite sans
            autorisation préalable.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Données personnelles</h2>
          <p>
            Ce site ne collecte pas de données personnelles à des fins
            commerciales et n'utilise pas de cookies publicitaires.
          </p>
          <p>
            Les seules données collectées sont celles que vous fournissez
            volontairement via le formulaire de contact (Nom, Email), dans le
            seul but de répondre à votre demande.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Crédits</h2>
          <p>
            Design et développement : <strong>Loic Digbeu</strong>
            <br />
            Technologies : React, Vite, Framer Motion.
            <br />
            Icônes : React Icons.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default MentionsLegales;
