import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

export default function Arrows() {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-20 z-20">
      <img src={leftArrow} alt="Left Arrow" className="w-16 cursor-pointer" />
      <img src={rightArrow} alt="Right Arrow" className="w-16 cursor-pointer" />
    </div>
  );
}