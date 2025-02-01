import leftTreeShadow from '../assets/left-tree-shadow.png';
import rightTreeShadow from '../assets/right-tree-shadow.png';

export default function Trees() {
  return (
    <>
      <img src={leftTreeShadow} alt="Left Tree Shadow" className="absolute left-0 top-0 w-1/3 z-5 opacity-50" />
      <img src={rightTreeShadow} alt="Right Tree Shadow" className="absolute right-0 top-0 w-1/3 z-5 opacity-50" />
    </>
  );
}