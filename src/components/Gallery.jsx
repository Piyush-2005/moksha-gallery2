import { useState } from "react";
import { motion } from "framer-motion";
import sparkleParticle from "../assets/sparkle.png";

export default function Gallery() {
  const [sparkles, setSparkles] = useState([]);

  const handleMouseMove = (e) => {
    const newSparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setSparkles((prev) => [...prev.slice(-10), newSparkle]);
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full "
      onMouseMove={handleMouseMove}
    >
      {sparkles.map((sparkle) => (
        <motion.img
          key={sparkle.id}
          src={sparkleParticle}
          alt="Sparkle"
          className="fixed w-[20px] h-[20px] pointer-events-none"
          style={{ 
            left: sparkle.x - 10,
            top: sparkle.y - 10,
            zIndex: 9999 // Highest z-index
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}