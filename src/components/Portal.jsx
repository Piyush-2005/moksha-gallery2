import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blueCrystalsLeft from "../assets/blue-crystals-left.png";
import blueCrystalsRight from "../assets/blue-crystals-right.png";
import portalImg from "../assets/portal.png";
import image1 from "../assets/artist1.png";
import image2 from "../assets/artist2.png";
import image3 from "../assets/artist3.png";
import lightImg from "../assets/light.png";

const images = [image1, image2, image3];

export default function PortalWithCrystals({ currentImage, setCurrentImage }) {
  const [showImage, setShowImage] = useState(false);
  const [showRotatingLight, setShowRotatingLight] = useState(true);

  // Show first image after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
      // setShowRotatingLight(false); // Hide light after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (showImage) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showImage, setCurrentImage]);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center pointer-events-none">
      <div className="relative w-[min(55vw,60vh)] min-w-[300px] max-w-[600px]">
        {/* Add rotating light */}
        {showRotatingLight && (
          <motion.img
            src={lightImg}
            alt="Rotating Light"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-30 animate-rotate
             filter drop-shadow-[0_0_15px_rgba(0,191,255,0.9)] blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5, ease: "linear" }}
          />
        )}
        {/* Starburst Effect */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="starburst" />
        </div>

        {/* Portal Image */}
        <img
          src={portalImg}
          alt="Glowing Portal"
          className="w-full h-auto animate-pulse-slow z-20 relative"
        />

        {/* Artist Image Display - Your exact positioning preserved */}
        {showImage && (
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Artist ${currentImage + 1}`}
            className="absolute left-[4rem] lg:left-[4.7rem] sm:left-[rem] top-[0rem] w-[55%] h-auto max-h-[400px] 
                    rounded-lg shadow-xl border-4 border-blue-200/30 z-50"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              filter: "drop-shadow(0 0 15px rgba(0, 191, 255, 0.5))",
            }}
          />
        )}

        {/* {showImage && (
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Artist ${currentImage + 1}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[55%] max-w-[400px] h-auto object-contain z-50
                  rounded-lg shadow-xl border-4 border-blue-200/30"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(0, 191, 255, 0.5))",
          }}
        />
        )} */}

        {/* Crystals with Glow - Your exact positioning preserved */}
        <img
          src={blueCrystalsLeft}
          alt="Blue Crystals Left"
          className="absolute left-[-14%] bottom-[-1%] w-[35%] max-w-[120px] z-40"
          style={{ filter: "drop-shadow(0 0 15px rgba(0,0,0,1))" }}
        />
        <img
          src={blueCrystalsRight}
          alt="Blue Crystals Right"
          className="absolute right-[-8%] bottom-[-1%] w-[35%] max-w-[120px] z-40"
          style={{ filter: "drop-shadow(0 0 15px rgba(0,0,0,1))" }}
        />
      </div>
    </div>
  );
}
