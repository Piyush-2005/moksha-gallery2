import blueCrystalsLeft from '../assets/blue-crystals-left.png';
import blueCrystalsRight from '../assets/blue-crystals-right.png';

import portalImg from '../assets/portal.png';

export default function Portal() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <img src={portalImg} alt="Glowing Portal" className="w-[450px] h-[450px] animate-pulse" />
      <img src={blueCrystalsLeft} alt="Blue Crystals Left" className="absolute -left-16 bottom-0 w-40 z-20" />
            <img src={blueCrystalsRight} alt="Blue Crystals Right" className="absolute -right-12 bottom-0 w-40 z-20" />
           
    </div>
  );
}