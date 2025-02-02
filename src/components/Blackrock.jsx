// export default function Blackrock() {
//   return (
//     <>
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
//           className="relative -right-20 w-[250px] sm:w-[300px] z-10"
//         />
//       </div>


//       <div className="absolute bottom-0 left-0">
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
//           className="relative -left-20 w-[250px] sm:w-[300px] z-10"
//         />
//       </div>
//     </>
//   );
// }


// import leftStone from '../assets/left-stone.png';
// import rightStone from '../assets/right-stone.png';
// import leftGreyCrystal from '../assets/left-grey-crystal.png';
// import rightGreyCrystal from '../assets/right-grey-crystal.png';

import leftStone from '../assets/left-stone.png';
import rightStone from '../assets/right-stone.png';
import leftGreyCrystal from '../assets/grey-crystals-left.png';
import rightGreyCrystal from '../assets/grey-crystals-right.png';

export default function Blackrock() {
  return (
    <>
      {/* Right Side */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <img
          src={rightStone}
          alt="Right Black Stone"
          className="relative -right-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </div>
      <div className="absolute bottom-0 right-0 block md:hidden">
        <img
          src={rightGreyCrystal}
          alt="Right Grey Crystal"
          className="relative -right-12 w-[200px] sm:w-[300px] z-10"
        />
      </div>

      {/* Left Side */}
      <div className="absolute bottom-0 left-0 hidden md:block">
        <img
          src={leftStone}
          alt="Left Black Stone"
          className="relative -left-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </div>
      <div className="absolute bottom-0 left-0 block md:hidden">
        <img
          src={leftGreyCrystal}
          alt="Left Grey Crystal"
          className="relative -left-12 w-[200px] sm:w-[300px] z-10"
        />
      </div>
    </>
  );
}
