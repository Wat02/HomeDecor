import React from "react";
import Modern from "@/public/Doors/modern.jpg";

function Hero() {
  const styling = {
    backgroundImage: `url(${Modern.src})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1 rounded-[30px]">
          <div
            className="col-span-12 md:col-span-12  pt-[40%] pb-[2%] rounded-[30px] "
            style={styling}
          >
            <h2 className="text-[40px] md:text-[92px] leading-[48px] md:leading-[92px] font-black ml-[20px]">
              ABOUT HomeDecor
            </h2>
            <p className="text-[16px]  md:text-[20px] leading-[18px]   md:leading-[24px] font-bold text-[#FAFDFF]  ml-[20px] w-[65%] md:w-[35%]">
              Welcome, where here to bring you a new standard in
              energy-efficienthome solutions. We specialise in designing and
              crafting top-notch aluminium entry doors that blend impeccable
              craftsmanship with state-of-the-art engineering. Our doors are
              custom-made to enhance the beauty, security, and energy efficiency
              of your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
