// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import butterflyCursor from "../assets/butterfly-cursor.png";
// import sparkleParticle from "../assets/sparkle.png";
// import flashEffect from "../assets/flash.png";
// import image1 from "../assets/artist1.png";
// import image2 from "../assets/artist2.png";
// import image3 from "../assets/artist3.png";

// const images = [image1, image2, image3];

// export default function Gallery() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [showFlash, setShowFlash] = useState(false);
//   const [sparkles, setSparkles] = useState([]);
//   const [initialFlash, setInitialFlash] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setInitialFlash(false);
//     }, 3000);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowFlash(true);
//       setTimeout(() => {
//         setCurrentImage((prev) => (prev + 1) % images.length);
//         setShowFlash(false);
//       }, 500);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseMove = (e) => {
//     const newSparkle = {
//       id: Date.now(),
//       x: e.pageX,
//       y: e.pageY,
//     };
//     setSparkles((prev) => [...prev, newSparkle]);
    
//     setTimeout(() => {
//       setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
//     }, 500);
//   };

//   return (
//     <div 
//       className="absolute w-full h-screen overflow-hidden cursor-none" 
//       onMouseMove={handleMouseMove}
//     >
//       {/* Initial Flash Animation */}
//       {initialFlash && (
//         <motion.img 
//           src={flashEffect} 
//           alt="Flash Effect" 
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[400px] z-40"
//           initial={{ opacity: 0, rotate: 0, scale: 1 }}
//           animate={{ opacity: [1, 0], rotate: 360, scale: [1.5, 1] }}
//           transition={{ duration: 3 }}
//         />
//       )}

//       {/* Flash Effect */}
//       {showFlash && (
//         <motion.img 
//           src={flashEffect} 
//           alt="Flash Effect" 
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[400px] z-40"
//           initial={{ opacity: 0, scale: 1.2 }} 
//           animate={{ opacity: [1, 0], scale: [1.5, 1] }} 
//           transition={{ duration: 0.95 }}
//         />
//       )}

//       {/* Image Display Over Portal */}
//       // In the motion.img for image display:
//       <motion.img
//         key={currentImage}
//         src={images[currentImage]}
//         alt="Gallery Image"
//         className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] max-w-[400px] z-40 rounded-lg shadow-xl"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       />

//       {/* Custom Cursor */}
//       <img
//   src={butterflyCursor}
//   alt="Butterfly Cursor"
//   className="!fixed w-[40px] h-[40px] pointer-events-none z-[9999] transition-transform duration-100"
//   style={{ left: `${sparkles.x}px`, top: `${sparkles.y}px` }}
// />
      
//       {/* Sparkle Trail */}
//       {sparkles.map((sparkle) => (
//         <motion.img
//           key={sparkle.id}
//           src={sparkleParticle}
//           alt="Sparkle"
//           className="fixed w-[20px] h-[20px] pointer-events-none z-40"
//           initial={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: 0, scale: 0.5 }}
//           transition={{ duration: 0.5 }}
//           style={{ left: sparkle.x - 10, top: sparkle.y - 10 }}
//         />
//       ))}
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import butterflyCursor from "../assets/butterfly-cursor.png";
// import sparkleParticle from "../assets/sparkle.png";
// // import flashEffect from "../assets/flash.png";
// import image1 from "../assets/artist1.png";
// import image2 from "../assets/artist2.png";
// import image3 from "../assets/artist3.png";
// import './starburst.css';


// const images = [image1, image2, image3];

// export default function Gallery({ currentImage, setCurrentImage }) {
//   const [showFlash, setShowFlash] = useState(true);
//   const [sparkles, setSparkles] = useState([]);
//   const [autoRotate, setAutoRotate] = useState(true);

//   useEffect(() => {
//     // Initial flash animation
//     setTimeout(() => {
//       setShowFlash(false);
//       setAutoRotate(true);
//     }, 3000);
//   }, []);

//   useEffect(() => {
//     let interval;
//     if (autoRotate) {
//       interval = setInterval(() => {
//         setShowFlash(true);
//         setTimeout(() => {
//           setCurrentImage(prev => (prev + 1) % images.length);
//           setShowFlash(false);
//         }, 500);
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [autoRotate, setCurrentImage]);

//   const handleMouseMove = (e) => {
//     const newSparkle = {
//       id: Date.now(),
//       x: e.clientX,
//       y: e.clientY,
//     };
//     setSparkles(prev => [...prev.slice(-15), newSparkle]);
//   };

//   return (
//     <div className="absolute w-full h-screen overflow-hidden" onMouseMove={handleMouseMove}>
//       {/* Initial Rotating Flash */}
//       {showFlash && (
//         <motion.div
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
//           initial={{ scale: 0, rotate: 0 }}
//           animate={{ scale: 1, rotate: 360 }}
//           transition={{ duration: 3, ease: "linear" }}
//           exit={{ opacity: 0 }}
//         >
//           {/* <img 
//             src={flashEffect} 
//             alt="Flash Effect" 
//             className="w-[200px] h-[200px]"
//           /> */}
//         </motion.div>
//       )}

// {(
//   <motion.div
//     className="starburst ease-in"
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     exit={{ scale: 0 }}
//     transition={{ duration: 3 }}
//   />
// )}

//       {/* Image Display */}
//       {/* {(
//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           alt="Gallery Image"
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] max-w-[300px] z-40 rounded-lg shadow-xl border-4 border-white/20"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//       )} */}

//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           alt="Gallery Image"
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18vw] max-w-[280px] z-50 rounded-lg shadow-xl border-4 border-blue-200/30"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{ 
//             filter: 'drop-shadow(0 0 15px rgba(0, 191, 255, 0.5))',
//             clipPath: 'inset(5% round 10px)'
//           }}
//         />


//         {sparkles.map((sparkle) => (
//                   <motion.img
//                     key={sparkle.id}
//                     src={sparkleParticle}
//                     alt="Sparkle"
//                     className="fixed w-[20px] h-[20px] pointer-events-none z-40"
//                     initial={{ opacity: 1, scale: 1 }}
//                     animate={{ opacity: 0, scale: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                     style={{ left: sparkle.x - 10, top: sparkle.y - 10 }}
//                   />
//                 ))}
//       {/* ))} */}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import butterflyCursor from "../assets/butterfly-cursor.png";
import sparkleParticle from "../assets/sparkle.png";
import image1 from "../assets/artist1.png";
import image2 from "../assets/artist2.png";
import image3 from "../assets/artist3.png";

const images = [image1, image2, image3];

export default function Gallery({ currentImage, setCurrentImage, autoRotate, setAutoRotate }) {
  const [showImage, setShowImage] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (autoRotate && showImage) {
      interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, showImage, setCurrentImage]);

  const handleMouseMove = (e) => {
    const newSparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setSparkles(prev => [...prev.slice(-10), newSparkle]);
  };

  return (
    <div className="fixed w-full h-full" onMouseMove={handleMouseMove}>
      {/* Gallery Images */}
      {showImage && (
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Gallery Image"
          className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[200px] rounded-lg shadow-xl border-4 border-blue-200/30 z-[9990]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            filter: 'drop-shadow(0 0 15px rgba(0, 191, 255, 0.5))'
          }}
        />

        
      )}

      {/* Cursor Trail */}
      {sparkles.map((sparkle) => (
                  <motion.img
                    key={sparkle.id}
                    src={sparkleParticle}
                    alt="Sparkle"
                    className="fixed w-[20px] h-[20px] pointer-events-none z-40"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    style={{ left: sparkle.x - 10, top: sparkle.y - 10 }}
                  />
                ))}
    </div>
  );
}