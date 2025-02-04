import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import { useState } from 'react';

export default function Arrows({ onPrev, onNext }) {
  const [clickedArrow, setClickedArrow] = useState(null);

  const handleClick = (direction) => {
    setClickedArrow(direction);
    setTimeout(() => setClickedArrow(null), 300);
    direction === 'left' ? onPrev() : onNext();
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center gap-6 z-20 bottom-[5vh] ">
      {/* Left Arrow */}
      <img 
        src={leftArrow} 
        alt='Left Arrow'
        onClick={() => handleClick("Left")}
        className={`w-24 sm:w-64 md:w-64 lg:w-64 cursor-pointer transition duration-300 ${
          clickedArrow === "left" ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""
        }`}
      />
      <img 
        src={rightArrow} 
        alt="Right Arrow" 
        onClick={() => handleClick("right")}
        className={`w-24 sm:w-64 md:w-64 lg:w-64 cursor-pointer transition duration-300 ${
          clickedArrow === "right" ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""
        }`}      />
    </div>
  );
}
