
// import leftTreeShadow from '../assets/left-tree-shadow.png';
// import rightTreeShadow from '../assets/right-tree-shadow.png';

// export default function Trees() {
//   return (
//     <>
//       <img 
//   src={leftTreeShadow} 
//   alt="Right Tree Shadow" 
//   className="absolute right-20 bottom-0 h-[100vh] max-h-[3000px] w-auto z-5"
// />
// <img 
//   src={rightTreeShadow} 
//   alt="Left Tree Shadow" 
//   className="absolute left-20 bottom-0 h-[100vh] max-h-[3000px] w-auto z-5"
// />

//     </>
//   );
// }


import leftTreeShadow from '../assets/left-tree-shadow.png';
import rightTreeShadow from '../assets/right-tree-shadow.png';

export default function Trees() {
  return (
    <>
      <img
        src={rightTreeShadow}
        alt="Left Tree Shadow"
        className="absolute left-0 bottom-0 w-[35vw] min-w-[150px] max-w-[300px] h-[110vh] object-cover z-5"
      />
      <img
        src={leftTreeShadow}
        alt="Right Tree Shadow"
        className="absolute right-0 bottom-0 w-[35vw] min-w-[150px] max-w-[300px] h-[110vh] object-cover z-5"
      />
    </>
  );
}
