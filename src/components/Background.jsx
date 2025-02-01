import forestBg from '../assets/forest-bg.png';

export default function Background() {
    return (
      <div className="absolute inset-0 -z-50">
        <img src={forestBg} alt="Background" className="w-full h-full object-cover" />
      </div>
    );
}
