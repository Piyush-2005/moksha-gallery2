// import leftStone from '../assets/left-stone.png';
// import rightStone from '../assets/right-stone.png';
// import leftGreyCrystal from '../assets/grey-crystals-left.png';
// import rightGreyCrystal from '../assets/grey-crystals-right.png';

// export default function Blackrock() {
//   return (
//     <>
//       {/* Right Side */}
//       <div className="absolute bottom-0 right-0 hidden md:block">
//         <img
//           src={rightStone}
//           alt="Right Black Stone"
//           className="relative -right-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
//         />
//       </div>
//       <div className="absolute bottom-0 right-0 block md:hidden">
//         <img
//           src={rightGreyCrystal}
//           alt="Right Grey Crystal"
//           className="relative -right-12 w-[200px] sm:w-[300px] z-10"
//         />
//       </div>

//       {/* Left Side */}
//       <div className="absolute bottom-0 left-0 hidden md:block">
//         <img
//           src={leftStone}
//           alt="Left Black Stone"
//           className="relative -left-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
//         />
//       </div>
//       <div className="absolute bottom-0 left-0 block md:hidden">
//         <img
//           src={leftGreyCrystal}
//           alt="Left Grey Crystal"
//           className="relative -left-12 w-[200px] sm:w-[300px] z-10"
//         />
//       </div>
//     </>
//   );
// }



import { motion } from 'framer-motion';
import leftStone from '../assets/left-stone.png';
import rightStone from '../assets/right-stone.png';
import leftGreyCrystal from '../assets/grey-crystals-left.png';
import rightGreyCrystal from '../assets/grey-crystals-right.png';

export default function Blackrock() {
  return (
    <>
      {/* Right Side */}
      <motion.div 
        className="absolute bottom-0 right-0 hidden md:block pointer-events-none"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={rightStone}
          alt="Right Black Stone"
          className="relative -right-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 right-0 block md:hidden pointer-events-none"
        animate={{ scale: [0.9, 1.1] }}
        transition={{ duration: 2 }}
      >
        <img
          src={rightGreyCrystal}
          alt="Right Grey Crystal"
          className="relative -right-12 w-[250px] sm:w-[250px] z-10"
        />
      </motion.div>

      {/* Left Side */}
      <motion.div 
        className="absolute bottom-0 left-0 hidden md:block pointer-events-none"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={leftStone}
          alt="Left Black Stone"
          className="relative -left-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 block md:hidden pointer-events-none"
        animate={{ scale: [0.9, 1.1] }}
        transition={{ duration: 2, repeatType: 'mirror' }}
      >
        <img
          src={leftGreyCrystal}
          alt="Left Grey Crystal"
          className="relative -left-12 w-[250px] sm:w-[250px] z-10"
        />
      </motion.div>
    </>
  );
}