// src/components/ProjectCarousel.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../assets/css/ProjectCarousel.css"; // On va créer ce CSS juste après

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const ProjectCarousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Index de l'image actuelle (modulo pour boucler)
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="carousel-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="carousel-image"
          alt={`Slide ${imageIndex + 1}`}
        />
      </AnimatePresence>

      {/* Contrôles */}
      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </button>
        <span className="carousel-counter">
          {imageIndex + 1} / {images.length}
        </span>
        <button className="carousel-btn next" onClick={() => paginate(1)}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
