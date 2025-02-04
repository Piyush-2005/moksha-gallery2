import { motion } from 'framer-motion';
import mistImg from '../assets/mist.png';

export default function Mist() {
  return (
    <motion.img 
      src={mistImg} 
      alt="Mist" 
      className="absolute bottom-0 w-full opacity-75 z-15 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}