// src/components/PageTransition.jsx
import React from "react";
import { motion } from "framer-motion";

/* L'animation qu'on veut : Un léger glissement vers le haut + fondu */
const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }} // Durée fluide
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
