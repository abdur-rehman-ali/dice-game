import dice from "../../assets/dices.png";

const Hero = () => {
  return (
    <div className="w-full flex py-28 container bg-slate-50">
      <div className="w-1/2">
        <img src={dice} alt="image here" />
      </div>
      <div className="w-1/2 py-28 flex flex-col items-end justify-center">
        <h1 className="uppercase font-extrabold mb-5 text-8xl">Dice game</h1>
        <button className="bg-black text-white py-2 rounded-sm px-20">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
