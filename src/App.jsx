import { useState, useEffect } from "react";
import Background from "./components/Background";
import Title from "./components/Title";
import Portal from "./components/Portal";
import Rocks from "./components/Blackrock";
import TreeShadow from "./components/TreeShadow";
import Mist from "./components/Mist";
import Arrows from "./components/Arrows";
import Gallery from "./components/Gallery";
import './components/starburst.css';

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const handleNext = () => {
    setAutoRotate(false);
    setCurrentImage(prev => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setAutoRotate(false);
    setCurrentImage(prev => (prev - 1 + 3) % 3);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    <Background />
    <Title />
    <TreeShadow />
    <Rocks />
    <Mist />
    
    <div className="fixed inset-0 flex items-center justify-center">
    <Portal 
  currentImage={currentImage} 
  setCurrentImage={setCurrentImage} 
/>    </div>

    <Arrows onPrev={handlePrev} onNext={handleNext} />
    <Gallery /> {/* This should be LAST */}
  </div>
  );
}

