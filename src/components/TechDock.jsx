// src/components/TechDock.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function DockIcon({ children, mouseX }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Paramètres de taille : Base 60px -> Max 110px au survol
  const widthSync = useTransform(distance, [-150, 0, 150], [60, 110, 60]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div ref={ref} style={{ width }} className="dock-icon-wrapper">
      {children}
    </motion.div>
  );
}

export default function TechDock({ logos }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className="dock-container"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {logos.map((logo, index) => (
        <DockIcon key={index} mouseX={mouseX}>
          <a
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            className="dock-link"
            title={logo.title}
          >
            <div className="dock-icon-inner">{logo.node}</div>
          </a>
        </DockIcon>
      ))}
    </div>
  );
}
