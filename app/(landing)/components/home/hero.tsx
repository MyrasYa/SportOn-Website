import Image from "next/image";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
       <Image src="/images/basketball_sport_icon_in_minimalist_3d_render_2 1.svg" alt="basketball-hero" width={432} height={423} className="grayscale absolute -left-0 -top-20 -translate-y-1/2"/>

      <div className="relative self-center ">
        <div className="w-2/3 relative ml-47 mt-10 flex flex-col 2xl:block justify-center items-center text-center 2xl:text-left 2xl:ml-40 2xl:mt-5">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[95px] leading-tight italic bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br />
            TOP-QUALITY SPORTSWEAR <br />
          </h1>

          <p className="mt-10 w-[550px] leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost" size="small" gap="long">
              Watch Video 
              <Image
                src="/images/play_icon.svg"
                alt="play-icon"
                width={10}
                height={10}
              />
            </Button>
          </div>
        </div>

        <Image src="/images/img-hero.svg" alt="hero-img" width={805} height={950} className="absolute -right-1 top-1/2 -translate-y-1/2 hidden 2xl:flex 2xl:absolute 2xl:-right-1 2xl:top-1/2 2xl:-translate-y-1/2"/>
      </div>

      <Image src="/images/img-ornament-hero.svg" alt="ornament-hero" width={513} height={420} className="absolute -right-[200px] top-1/2 -translate-y-1/2 hidden 2xl:block"/>
    </section>
  );
};

export default HeroSection;


