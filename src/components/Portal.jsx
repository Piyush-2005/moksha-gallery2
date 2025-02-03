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


// import blueCrystalsLeft from '../assets/blue-crystals-left.png';
// import blueCrystalsRight from '../assets/blue-crystals-right.png';
// import portalImg from '../assets/portal.png';

// export default function PortalWithCrystals() {
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center pointer-events-none">
//       <img 
//         src={portalImg} 
//         alt="Glowing Portal" 
//         className="w-[min(40vw,50vh)] min-w-[300px] max-w-[600px] h-auto animate-pulse-slow"
//       />
//       <img 
//         src={blueCrystalsLeft} 
//         alt="Blue Crystals Left" 
//         className="absolute left-[-14%] bottom-[-1%] w-[35%] max-w-[120px] z-20"
//       />
//       <img 
//         src={blueCrystalsRight} 
//         alt="Blue Crystals Right" 
//         className="absolute right-[-8%] bottom-[-1%] w-[35%] max-w-[120px] z-20"
//       />
//     </div>
//   );
// }



import blueCrystalsLeft from '../assets/blue-crystals-left.png';
import blueCrystalsRight from '../assets/blue-crystals-right.png';
import portalImg from '../assets/portal.png';

export default function PortalWithCrystals() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center pointer-events-none">
      {/* Portal Base */}
      <div className="relative w-[min(55vw,60vh)] min-w-[300px] max-w-[600px]">
        {/* Starburst Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="starburst" />
        </div>
        
        {/* Portal Image */}
        <img 
          src={portalImg} 
          alt="Glowing Portal" 
          className="w-full h-auto animate-pulse-slow z-40 relative"
        />

        {/* Gallery Image Positioner */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-50">
          {/* This div will be used to position gallery images */}
          <div className="w-[60%] h-[60%] relative" id="gallery-position" />
        </div>

        {/* Crystals */}
        <img 
          src={blueCrystalsLeft} 
          alt="Blue Crystals Left" 
          className="absolute left-[-14%] bottom-[0%] w-[35%] max-w-[120px] z-50"
          style={{
            filter: "drop-shadow(20px 30px 15px rgba(0,0,0,1))"
          }}
        />
        <img 
          src={blueCrystalsRight} 
          alt="Blue Crystals Right" 
          className="absolute right-[-8%] bottom-[0%] w-[35%] max-w-[120px] z-50"
          style={{
            filter: "drop-shadow(30px 30px 15px rgba(0,0,0,1))"
          }}
        />
      </div>
    </div>
  );
}


// export default function PortalWithCrystals() {
//   return (
//     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-[300px] h-[300px]">
//       {/* Starburst Container */}
//       <div className="starburst-container">
//         <div className="starburst" />
//       </div>

//       {/* Image Display Area */}
//       <div className="absolute inset-0 flex items-center justify-center z-30">
//         <div className="w-full h-full" id="image-container" />
//       </div>
//     </div>
//   );
// }