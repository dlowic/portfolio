// src/pages/MentionsLegales.jsx
import React, { useEffect } from "react";
import "../assets/css/MentionsLegales.css";

function MentionsLegales() {
  // Scroll en haut de page à l'ouverture
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <h1>Mentions Légales</h1>

      <section className="legal-section">
        <h2>1. Éditeur du site</h2>
        <p>
          Ce site est édité par : <strong>Loic Digbeu</strong>
          <br />
          Statut : Étudiant / Particulier
          <br />
          Contact : <a href="mailto:ton-email@gmail.com">ton-email@gmail.com</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>2. Hébergement</h2>
        <p>
          Ce site est hébergé par :
          <br />
          <strong>Vercel Inc.</strong> (ou GitHub Pages si tu utilises ça)
          <br />
          340 S Lemon Ave #4133 Walnut, CA 91789, USA
          <br />
          <a href="https://vercel.com" target="_blank" rel="noreferrer">www.vercel.com</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus (textes, images, graphismes, code source, etc.) présents sur ce site sont, sauf mention contraire, la propriété exclusive de Loic Digbeu.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Données personnelles & Cookies</h2>
        <p>
          Ce site ne collecte pas de données personnelles à des fins commerciales et n'utilise pas de cookies publicitaires.
        </p>
        <p>
          Les seules données collectées sont celles que vous fournissez volontairement via le formulaire de contact (Nom, Email, Message), dans le seul but de répondre à votre demande. Ces données ne sont jamais transmises à des tiers.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Crédits</h2>
        <p>
          Design et développement : Loic Digbeu
          <br />
          Technologies utilisées : React, Vite, Framer Motion.
          <br />
          Icônes : React Icons (FontAwesome, Simple Icons).
        </p>
      </section>

    </div>
  );
}

export default MentionsLegales;