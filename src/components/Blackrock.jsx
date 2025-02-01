import leftStone from '../assets/left-stone.png';
import rightStone from '../assets/right-stone.png';
import greyCrystalsLeft from '../assets/grey-crystals-left.png';
import greyCrystalsRight from '../assets/grey-crystals-right.png';
export default function Blackrock() {
  return (
    <>
    <div className="relative z-10">
    <img src={rightStone} alt="Right Black Stone" className="absolute right-0 bottom-0 w-[400px] z-10" />
    <img src={greyCrystalsRight} alt="Grey Crystals Right" className="absolute right-0 top-0 w-36 z-0" />
    </div>
      
      <div className="absolute left-0 bottom-0 z-10">
      <img src={leftStone} alt="Left Black Stone" className="relative -left-32 -bottom-32 w-[400px] z-10" />
      <img src={greyCrystalsLeft} alt="Grey Crystals Left" className=" left-0 top-0 w-36 z-20" />

      </div>
    </>
  );
}