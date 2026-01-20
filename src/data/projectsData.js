// src/data/projectsData.js

// Importe tes images ici (Screenshots de tes projets PHP, Exports JPG de tes Figma, etc.)
// Pour l'instant, je laisse les placeholders pour que ça marche tout de suite.
import imgPortfolio from "../assets/images/moi.webp"; 

const projectsData = [
  // --- PROJETS PHP (Développement) ---
  {
    id: 1,
    title: "Espace Membre & Back-office", // Remplace par le vrai nom
    category: "Développement", // Créera le filtre "Développement"
    description: "Système complet de gestion utilisateurs en PHP natif sans framework.",
    context: "Projet de première année axé sur la logique backend. Création d'une base de données SQL, gestion des sessions, hachage des mots de passe et architecture MVC.",
    tags: ["PHP", "MySQL", "MVC", "HTML/CSS"],
    image: "https://picsum.photos/600/400?random=10", // Mets un screenshot de ton code ou de la page de connexion
    siteLink: "", // Laisse vide si pas hébergé
    githubLink: "https://github.com/ton-pseudo/ton-repo-php-1",
  },
  {
    id: 2,
    title: "Blog Dynamique PHP", // Remplace par le vrai nom
    category: "Développement",
    description: "Blog avec gestion d'articles et commentaires relié à une base de données.",
    context: "Développement d'un site dynamique permettant à un administrateur de poster des articles (CRUD complet) et aux visiteurs de laisser des commentaires.",
    tags: ["PHP", "SQL", "Bootstrap", "Backend"],
    image: "https://picsum.photos/600/400?random=11", // Screenshot de la page d'accueil du blog
    siteLink: "", // Laisse vide
    githubLink: "https://github.com/ton-pseudo/ton-repo-php-2",
  },

  // --- PROJETS FIGMA (UI/UX Design) ---
  {
    id: 3,
    title: "Redesign Application Mobile", // Remplace par le vrai nom
    category: "UI/UX Design", // Créera le filtre "UI/UX Design"
    description: "Maquettage haute fidélité d'une application mobile de voyage.",
    context: "L'objectif était de repenser l'expérience utilisateur (UX) et de moderniser l'interface (UI). Travail sur les wireframes, le choix typographique et le prototypage interactif sur Figma.",
    tags: ["Figma", "Prototypage", "Mobile First", "UX Research"],
    image: "https://picsum.photos/600/400?random=12", // Export JPG de ta maquette
    siteLink: "https://www.figma.com/proto/...", // Lien vers ton prototype Figma
    githubLink: "", // Pas de code ici
  },
  {
    id: 4,
    title: "Webdesign Site Vitrine",
    category: "UI/UX Design",
    description: "Conception graphique d'un site web pour une agence fictive.",
    context: "Création de la charte graphique et déclinaison des maquettes Desktop et Mobile. Focus sur la hiérarchie visuelle et l'accessibilité.",
    tags: ["Figma", "Webdesign", "Responsive"],
    image: "https://picsum.photos/600/400?random=13",
    siteLink: "https://www.figma.com/...", // Lien Figma
    githubLink: "",
  },
    {
    id: 5,
    title: "Dashboard Admin UI",
    category: "UI/UX Design",
    description: "Design d'interface pour un tableau de bord administrateur complexe.",
    context: "Travail sur l'ergonomie et la visualisation de données (Data Viz). Création de composants réutilisables (Design System simple).",
    tags: ["Figma", "UI Design", "Data Viz"],
    image: "https://picsum.photos/600/400?random=14",
    siteLink: "https://www.figma.com/...", // Lien Figma
    githubLink: "",
  },

  // --- PROJET PRINT (Design Graphique) ---
  {
    id: 6,
    title: "Identité Visuelle Restaurant",
    category: "Print & Branding", // Créera le filtre "Print & Branding"
    description: "Création du menu et de l'identité visuelle d'un restaurant gastronomique.",
    context: "Projet réalisé sur InDesign et Affinity. Recherche de textures, choix de papiers et mise en page typographique pour refléter l'élégance de l'établissement.",
    tags: ["InDesign", "Affinity", "Mise en page", "Branding"],
    image: "https://picsum.photos/600/400?random=15", // Une belle image mockup du menu
    siteLink: "", // Pas de lien web
    githubLink: "", // Pas de GitHub
  },
];

export default projectsData;