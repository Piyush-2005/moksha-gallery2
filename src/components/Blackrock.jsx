// import leftStone from '../assets/left-stone.png';
// import rightStone from '../assets/right-stone.png';
// export default function Blackrock() {
//   return (
//       <>
//           <div className="absolute bottom-0 right-0">
//               <img
//                   src={rightStone}
//                   alt="Right Black Stone"
//                   className="relative -right-32 w-[400px] z-10"
//               />
//           </div>
//           <div className="absolute bottom-0 left-0">
//               <img
//                   src={leftStone}
//                   alt="Left Black Stone"
//                   className="relative -left-32 w-[400px] z-10"
//               />
//           </div>
//       </>
//   );
// }

import leftStone from '../assets/left-stone.png';
import rightStone from '../assets/right-stone.png';

export default function Blackrock() {
  return (
    <>
      <div className="absolute bottom-0 right-0">
        <img
          src={rightStone}
          alt="Right Black Stone"
          className="relative -right-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={leftStone}
          alt="Left Black Stone"
          className="relative -left-32 w-[300px] sm:w-[350px] md:w-[400px] z-10"
        />
      </div>
    </>
  );
}



// export default function Rocks() {
//   return (
//     <>
//       <img src={leftStone} alt="Black Rock Left" className="absolute left-12 bottom-16 w-[350px] z-10" />
//       <img src={rightStone} alt="Black Rock Right" className="absolute right-12 bottom-16 w-44 z-10" />
//     </>
//   );
// }