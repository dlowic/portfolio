// src/data/projectsData.js

// Importe tes images ici
import imgPortfolio from "../assets/images/moi.webp";
// import imgEcommerce from "../assets/images/ecommerce.jpg";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Personnel",
    category: "Web Design",
    description:
      "Mon portfolio interactif développé avec React, Framer Motion et Vite.",
    // Le texte détaillé pour la modale :
    context:
      "L'objectif était de créer une expérience immersive qui reflète ma personnalité créative tout en restant performante. J'ai utilisé Framer Motion pour les transitions fluides et un système de thèmes (Sombre/Clair) dynamique.",
    tags: ["React", "Vite", "CSS", "Motion"],
    image: "https://picsum.photos/600/400?random=1",
    siteLink: "https://ton-site.com",
    githubLink: "https://github.com/ton-repo",
  },
  {
    id: 2,
    title: "Site E-commerce",
    category: "Développement",
    description:
      "Une boutique en ligne complète avec gestion du panier et Redux.",
    context:
      "Projet complet de e-commerce permettant la gestion de produits, l'ajout au panier et la simulation de paiement. Focus particulier sur l'architecture des données avec Redux Toolkit.",
    tags: ["React", "Redux", "Node.js"],
    image: "https://picsum.photos/600/400?random=2",
    siteLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Dashboard Météo",
    category: "Application",
    description: "Application météo en temps réel utilisant une API externe.",
    context:
      "Application connectée à l'API OpenWeatherMap. Elle permet de géolocaliser l'utilisateur et d'afficher les prévisions sur 5 jours avec des graphiques dynamiques.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://picsum.photos/600/400?random=3",
    siteLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Dashboard Météo",
    category: "Application",
    description: "Application météo en temps réel utilisant une API externe.",
    context:
      "Application connectée à l'API OpenWeatherMap. Elle permet de géolocaliser l'utilisateur et d'afficher les prévisions sur 5 jours avec des graphiques dynamiques.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://picsum.photos/600/400?random=4",
    siteLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Dashboard Météo",
    category: "Application",
    description: "Application météo en temps réel utilisant une API externe.",
    context:
      "Application connectée à l'API OpenWeatherMap. Elle permet de géolocaliser l'utilisateur et d'afficher les prévisions sur 5 jours avec des graphiques dynamiques.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://picsum.photos/600/400?random=5",
    siteLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Dashboard Météo",
    category: "Application",
    description: "Application météo en temps réel utilisant une API externe.",
    context:
      "Application connectée à l'API OpenWeatherMap. Elle permet de géolocaliser l'utilisateur et d'afficher les prévisions sur 5 jours avec des graphiques dynamiques.",
    tags: ["JavaScript", "API", "CSS"],
    image: "https://picsum.photos/600/400?random=6",
    siteLink: "#",
    githubLink: "#",
  },
];

export default projectsData;
