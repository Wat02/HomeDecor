import React from "react";
import HeroImg from "@/public/Doors/bestwork.jpg";
import Link from "next/link";
import Spotlight from "@/components/ui/Spotlight";

function Hero() {
  const styling = {
    backgroundImage: `url(${HeroImg.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section className="bg-[#070808]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 pt-[10px]">
          <div
            className="col-span-12 md:col-span-12 pt-[40%] pb-[5%] rounded-[30px] "
            style={styling}
          >
            <h2 className="text-[40px] md:text-[92px] leading-[48px] md:leading-[92px] font-black ml-[20px]">
              CREATING LASTING <br /> IMPRESSIONS
            </h2>
            <div className="flex flex-row gap-10 pt-[10px]">
              <p className="text-[16px] md:text-[17px] leading-[18px] md:leading-[20px] font-normal  ml-[20px] w-[50%] md:w-[35%]">
                Our premium aluminium entry doors, designed with the finest{" "}
                workmanship & engineering, is the new benchmark to energy
                efficiency for your home.
              </p>
              <Link href="/Product">
                <Spotlight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
