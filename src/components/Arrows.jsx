// import leftArrow from '../assets/left-arrow.png';
// import rightArrow from '../assets/right-arrow.png';

// export default function Arrows() {
//   return (
//     <div className="absolute bottom-0 -right-36 transform -translate-x-1/2 flex gap-20 z-20">
//       <img src={leftArrow} alt="Left Arrow" className="w-[400px] cursor-pointer" />
//       <img src={rightArrow} alt="Right Arrow" className="w-[400px] cursor-pointer" />
//     </div>
//   );
// }
// import leftArrow from '../assets/left-arrow.png';
// import rightArrow from '../assets/right-arrow.png';

// export default function Arrows() {
//   return (
//     <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center gap-0 z-20 bottom-32 sm:bottom-28 md:bottom-16 lg:-bottom-4">
//       {/* Left arrow */}
//       <img 
//         src={leftArrow} 
//         alt="Left Arrow" 
//         className="w-36 sm:w-48 md:w-64 lg:w-96 cursor-pointer"
//       />
//       {/* Right arrow */}
//       <img 
//         src={rightArrow} 
//         alt="Right Arrow" 
//         className="w-32 sm:w-48 md:w-64 lg:w-96 cursor-pointer"
//       />
//     </div>
//   );
// }



import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';
import { useState } from 'react';

export default function Arrows() {

  const [clickedArrow, setClickedArrow] = useState(null);

  const handleClick = (arrow) => {
    setClickedArrow(arrow);

 
    setTimeout(() => {
      setClickedArrow(null);
    }, 300);
  };
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center gap-0 z-20 bottom-[10vh]">
      {/* Left arrow */}
      <img 
        src={leftArrow} 
        alt="Left Arrow" 
        // className="w-[60vw] min-w-[200px] max-w-[300px] h-[68vh] min-h-[40px] max-h-[200px] cursor-pointer"
        onClick={() => handleClick("left")}
        className={`w-36 sm:w-64 md:w-64 lg:w-96 cursor-pointer transition duration-300 ${
          clickedArrow === "left" ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""
        }`}
      />
      {/* Right arrow */}
      <img 
        src={rightArrow} 
        alt="Right Arrow" 
        onClick={() => handleClick("right")}
        // className="w-[60vw] min-w-[200px] max-w-[300px] h-[68vh] min-h-[40px] max-h-[200px] cursor-pointer"
        className={`w-32 sm:w-64 md:w-64 lg:w-96 cursor-pointer transition duration-300 ${
          clickedArrow === "right" ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""
        }`}
      />
    </div>
  );
}
