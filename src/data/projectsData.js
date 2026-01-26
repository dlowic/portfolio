// src/data/projectsData.js

// Importe tes images ici si besoin, sinon laisse les liens externes
import imgPortfolio from "../assets/images/moi.jpg";

const projectsData = [
  // --- 1. PROJET PHP (Boole & Bin) ---
  {
    id: 1,
    title: "Boole & Bin - Plateforme Éducative",
    category: "Développement",
    type: "school",
    year: "2024",
    duration: "4 semaines",
    description:
      "Développement Full-Stack d'une application web dynamique dédiée à l'apprentissage de la logique binaire.",
    context:
      "Dans le cadre d'un projet intensif de développement Back-End, j'ai conçu l'architecture MVC d'une plateforme e-learning. Mon rôle principal a été d'implémenter la logique métier en PHP Orienté Objet (sans framework) et de sécuriser les interactions avec la base de données MySQL. J'ai également développé le système d'authentification et le module d'administration (CRUD), garantissant une gestion fluide des contenus pédagogiques.",
    tags: [
      "Développement Back-End (PHP)",
      "Gestion de Base de Données (SQL)",
      "Architecture MVC",
      "Sécurité Web",
    ],
    image: "https://cdn.imgchest.com/files/68480b8950b5.png",
    gallery: [
      "https://cdn.imgchest.com/files/68480b8950b5.png",
      "https://cdn.imgchest.com/files/k7392l39687.png",
      "https://cdn.imgchest.com/files/w7w63m23pky.png",
    ],
    siteLink: "", // Mettre le lien si dispo
    githubLink: "https://github.com/dlowic/boole-and-bin", // Mettre le vrai lien
  },
  // --- 2. DATA VIZ (SAE 303) ---
  {
    id: 2,
    title: "Data Visualization - D3.js",
    category: "Développement",
    type: "school",
    year: "2023",
    duration: "3 semaines",
    description:
      "Création de graphiques interactifs vectoriels par la manipulation directe du DOM.",
    context:
      "Dans le cadre d'un module de visualisation de données, j'ai développé une application capable de transformer des jeux de données bruts (JSON) en représentations graphiques intelligentes. Sans utiliser de framework Front-End, j'ai manipulé le DOM et SVG via la librairie D3.js, gérant les échelles, les axes dynamiques et les interactions utilisateurs (tris, filtres) pour rendre l'information lisible et esthétique.",
    tags: [
      "Visualisation de données",
      "Manipulation DOM/SVG",
      "Développement JavaScript",
      "D3.js",
    ],
    image: "https://cdn.imgchest.com/files/f7f229e08fbb.png",
    siteLink: "https://sae303.vercel.app",
    githubLink: "https://github.com/dlowic/SAE_303",
  },
  // --- 3. PROJET REACT (Watchlist) ---
  {
    id: 3,
    title: "Watchlist - Cinéma",
    category: "Développement",
    type: "personal",
    year: "2024",
    duration: "2 semaines",
    description:
      "Développement d'une interface Front-End réactive connectée à une API REST (TMDB).",
    context:
      "Projet personnel visant à renforcer mes compétences en React.js. J'ai assuré l'intégration d'une API externe pour afficher des données en temps réel et géré la persistance des données locales (LocalStorage) pour l'expérience utilisateur. Ce projet m'a permis de perfectionner ma gestion des états complexes et des appels asynchrones avec Axios.",
    tags: [
      "Développement Front-End (React)",
      "Consommation d'API REST",
      "Gestion d'état",
      "Intégration CSS Modules",
    ],
    image: "https://cdn.imgchest.com/files/e039689b91df.png",
    gallery: [
      "https://cdn.imgchest.com/files/e039689b91df.png",
      "https://cdn.imgchest.com/files/4ef911dcd1cf.png",
      "https://cdn.imgchest.com/files/a40517a07553.png",
    ],
    siteLink: "https://cinema-loic.vercel.app",
    githubLink: "https://github.com/dlowic/watchlistloic",
  },

  // --- 3. PROJET PHP AVANCÉ (Motus) ---
  {
    id: 4,
    title: "Jeu Motus - Architecture MVC",
    category: "Développement", // Catégorie unifiée pour les filtres
    type: "school",
    year: "2025",
    duration: "3 semaines",
    description:
      "Conception d'un moteur de jeu algorithmique en PHP natif avec contrainte technique forte (Zéro JS).",
    context:
      "Défi technique majeur imposant la création d'un jeu interactif sans JavaScript client. J'ai élaboré une architecture robuste basée sur la gestion des sessions PHP pour maintenir l'état du jeu entre les requêtes HTTP. J'ai également intégré la librairie graphique GD pour la génération dynamique d'images de partage de score côté serveur, démontrant une maîtrise avancée du traitement backend.",
    tags: [
      "Algorithmique complexe",
      "Programmation Orientée Objet",
      "Traitement d'image (GD)",
      "Gestion de Session",
    ],
    image: "https://cdn.imgchest.com/files/3e8b93692fa8.png",
    gallery: [
      "https://cdn.imgchest.com/files/3e8b93692fa8.png",
      "https://cdn.imgchest.com/files/823ec5338097.png",
      "https://cdn.imgchest.com/files/f95d665a5594.png",
      "https://cdn.imgchest.com/files/2726697906b2.png",
    ],

    siteLink: "https://digbeu.alwaysdata.net/MOTUS/",
    githubLink: "https://github.com/dlowic/Motus",
  },

  // --- 4. PORTFOLIO ---
  {
    id: 5,
    title: "Portfolio Personnel",
    category: "Développement",
    type: "personal",
    year: "2025",
    duration: "En continu",
    description:
      "Design et développement d'une identité numérique interactive et immersive.",
    context:
      "Conception complète de mon portfolio professionnel, de la phase de wireframing sur Figma jusqu'au déploiement. J'ai mis en œuvre des animations fluides avec Framer Motion pour enrichir l'expérience utilisateur et opté pour une architecture modulaire avec React/Vite pour garantir performance et maintenabilité. Ce projet est la vitrine de ma double compétence technique et créative.",
    tags: [
      "Design UI/UX",
      "Développement React",
      "Animation Web (Motion)",
      "Direction Artistique",
    ],
    image: imgPortfolio, // Utilise ton image de profil ou une capture du site
    gallery: [],
    siteLink: "https://ton-site.com",
    githubLink: "https://github.com/ton-repo",
  },

  // --- 6. UX/UI DESIGN (Le Club Trésor) ---
  {
    id: 6,
    title: "Le Club Trésor - UX/UI",
    category: "UI/UX Design",
    type: "school",
    year: "2023",
    duration: "Semestre 3",
    description:
      "Conception d'une expérience utilisateur complète : de la recherche utilisateur au prototypage haute fidélité.",
    context:
      "Au sein d'une équipe agile, j'ai piloté la phase de design d'interface pour une application musicale. Mon travail a débuté par une recherche utilisateur approfondie (Personas, User Journey) pour définir les besoins. J'ai ensuite conçu les wireframes et la maquette haute fidélité sur Figma, en créant un Design System cohérent (palette 'Sunset', typographie). J'ai assuré le prototypage des micro-interactions pour garantir une navigation intuitive.",
    tags: [
      "Recherche Utilisateur (UX)",
      "Design d'Interface (UI)",
      "Prototypage interactif",
      "Design System",
    ],
    image: "https://cdn.imgchest.com/files/7c980ce70592.png",
    gallery: [
      "https://cdn.imgchest.com/files/8bdb68a3aa82.png",
      "https://cdn.imgchest.com/files/4ddcae8663cd.png",
      "https://cdn.imgchest.com/files/fcdc2770ca24.png",
      "https://cdn.imgchest.com/files/c2dd358a6290.png",
      "https://cdn.imgchest.com/files/9f8ed78638d8.png",
      "https://cdn.imgchest.com/files/945838a6fea4.png",
      "https://cdn.imgchest.com/files/75050f8a7b51.png",
      "https://cdn.imgchest.com/files/e9b461d8c2c7.png",
    ],
    siteLink:
      "https://www.figma.com/proto/FRBGaj8bi96qhqtOC282vm/LE-CLUB-TRESOR?page-id=0%3A1&node-id=908-187&viewport=350%2C841%2C0.06&t=pIjodmaI8kiMnI2L-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=908%3A187&show-proto-sidebar=1",
    githubLink: "", // Pas de GitHub
  },

  // --- 7. CAMPAGNE COM (Harcèlement) ---
  {
    id: 7,
    title: "Campagne MDR - Communication",
    category: "UI/UX Design",
    type: "school",
    year: "2024",
    duration: "Semestre 4",
    description:
      "Direction artistique et stratégie de communication cross-canal pour une ONG fictive.",
    context:
      "Dans ce projet d'envergure en équipe de huit, j'ai pris la responsabilité de la direction artistique. J'ai conçu l'identité visuelle de la campagne (Logo, Charte graphique 'Déchirure') pour traduire visuellement la violence du harcèlement. J'ai produit les supports de communication print (affiches) et digitaux (maquettes réseaux sociaux), en veillant à la cohérence du message sur tous les canaux. Ce projet a sollicité mes compétences en gestion de projet créatif et en design émotionnel.",
    tags: [
      "Direction Artistique",
      "Stratégie de communication",
      "Design Graphique",
      "Gestion de projet",
    ],
    image: "https://cdn.imgchest.com/files/ee41a10316fe.png",
    gallery: [
      "https://cdn.imgchest.com/files/a1fac41bc753.png",
      "https://cdn.imgchest.com/files/838d7235aee8.png",
      "https://cdn.imgchest.com/files/aba946db5920.png",
      "https://cdn.imgchest.com/files/5b39cfaf85f2.png",
      "https://cdn.imgchest.com/files/5a58e1c4158a.png",
      "https://cdn.imgchest.com/files/210fccb6dd43.jpg",
      "https://cdn.imgchest.com/files/403673005f0c.jpg",
      "https://cdn.imgchest.com/files/946cbdde9b02.jpg",
      "https://cdn.imgchest.com/files/a3b971cb4950.png",
      "https://cdn.imgchest.com/files/d2a0f8da8d82.png",
      "https://cdn.imgchest.com/files/3bd4016979b8.png",
      "https://cdn.imgchest.com/files/d6325c12b698.png",
    ],
    siteLink:
      "https://www.figma.com/proto/K0n6j0iPZX1UdQC6BBNS3g/Wireframes---Maquettes--Copy-?page-id=53%3A3&node-id=170-204&viewport=-89%2C199%2C0.33&t=WMfGlxe12gp5fWPF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=170%3A204&show-proto-sidebar=1",
    githubLink: "", // Pas de GitHub
  },

  // --- 8. PRINT (Menu Restaurant) ---
  {
    id: 8,
    title: "Menu Restaurant - Food'Ivoire",
    category: "Print & Design",
    type: "school",
    year: "2023",
    duration: "2 semaines",
    description:
      "Conception graphique et mise en page technique pour l'édition (PAO).",
    context:
      "Responsable de l'identité visuelle imprimée du restaurant 'Food'Ivoire'. J'ai réalisé la mise en page du menu en utilisant Affinity Designer et InDesign. J'ai travaillé sur la hiérarchisation de l'information (typographie, espacements) et le traitement des images culinaires pour maximiser l'attractivité. Le projet intégrait les contraintes techniques de l'imprimerie (gestion des fonds perdus, colorimétrie CMJN).",
    tags: [
      "Design Éditorial (PAO)",
      "Mise en page (InDesign)",
      "Retouche photo",
      "Identité visuelle",
    ],
    image: "https://cdn.imgchest.com/files/0ea27c74873b.jpg",
    gallery: [
      "https://cdn.imgchest.com/files/6ad25938f2f7.png",
      "https://cdn.imgchest.com/files/2b163f5f3649.png",
      "https://cdn.imgchest.com/files/ed833f2400c2.png",
    ],
    siteLink: "",
    githubLink: "",
  },
];

export default projectsData;
