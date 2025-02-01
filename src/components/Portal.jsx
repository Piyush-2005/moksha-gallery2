// import blueCrystalsLeft from '../assets/blue-crystals-left.png';
// import blueCrystalsRight from '../assets/blue-crystals-right.png';

// import portalImg from '../assets/portal.png';

// export default function Portal() {
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//       <img src={portalImg} alt="Glowing Portal" className="w-[450px] h-[450px] animate-pulse" />
//       <img src={blueCrystalsLeft} alt="Blue Crystals Left" className="absolute -left-16 bottom-0 w-40 z-20" />
//             <img src={blueCrystalsRight} alt="Blue Crystals Right" className="absolute -right-12 bottom-0 w-40 z-20" />
           
//     </div>
//   );
// }



// import blueCrystalsLeft from '../assets/blue-crystals-left.png';
// import blueCrystalsRight from '../assets/blue-crystals-right.png';
// import portalImg from '../assets/portal.png';

// export default function PortalWithCrystals() {
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
//       {/* Portal Image */}
//       <img 
//         src={portalImg} 
//         alt="Glowing Portal" 
//         className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] animate-pulse"
//       />

//       {/* Left Crystal */}
//       <img 
//         src={blueCrystalsLeft} 
//         alt="Blue Crystals Left" 
//         className="absolute -left-12 sm:-left-8 md:-left-12 lg:-left-[4.5rem] -bottom-1 w-[16vw] sm:w-[16vw] md:w-[12vw] lg:w-[16vw] z-20"
//       />
      
//       {/* Right Crystal */}
//       <img 
//         src={blueCrystalsRight} 
//         alt="Blue Crystals Right" 
//         className="absolute -right-6 sm:-right-8 md:-right-8 lg:-right-12 bottom-0 w-[20vw] sm:w-[16vw] md:w-[16vw] lg:w-[16vw] z-20"
//       />
//     </div>
//   );
// }


import blueCrystalsLeft from '../assets/blue-crystals-left.png';
import blueCrystalsRight from '../assets/blue-crystals-right.png';
import portalImg from '../assets/portal.png';

export default function PortalWithCrystals() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
<img 
  src={portalImg} 
  alt="Glowing Portal" 
  className="w-[min(30vw, 35vh)] min-w-[200px] max-w-[350px] h-auto animate-pulse"
/>
<img 
  src={blueCrystalsLeft} 
  alt="Blue Crystals Left" 
  className="absolute left-[-14%] bottom-[-1%] w-[35%] max-w-[120px] z-20"
/>
<img 
  src={blueCrystalsRight} 
  alt="Blue Crystals Right" 
  className="absolute right-[-8%] bottom-[-1%] w-[35%] max-w-[120px] z-20"
/>

    </div>
  );
}