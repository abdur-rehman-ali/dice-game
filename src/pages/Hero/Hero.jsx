import dice from "../../assets/dices.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full flex py-28 container">
      <div className="w-1/2">
        <img src={dice} alt="image here" />
      </div>
      <div className="w-1/2 py-28 flex flex-col items-end justify-center">
        <h1 className="uppercase font-extrabold mb-5 text-8xl">Dice game</h1>
        <Link to="/play" className="bg-black text-white py-2 rounded-sm px-20">
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
