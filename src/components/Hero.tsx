import hero from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div>
      <img src={hero} className="w-full max-h-[px] object-cover" />
    </div>
  );
};

export default Hero;
