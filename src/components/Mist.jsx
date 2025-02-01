import mistImg from '../assets/mist.png';

export default function Mist() {
  return (
    <img src={mistImg} alt="Mist" className="absolute bottom-0 w-full opacity-75 z-15" />
  );
}
