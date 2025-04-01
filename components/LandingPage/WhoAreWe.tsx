import React from "react";
import Image from "next/image";
import Modern from "@/public/Doors/modern.jpg";

function WhoAreWe() {
  return (
    <section className="bg-black ">
      <div className="bg-[#FAFDFF] rounded-tl-[50px] rounded-tr-[50px] pt-[8%] pb-[10%] ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1 ">
            <div className="col-span-12 md:col-span-6 pt-[10%] ">
              <h2 className="text-[49px] leading-[49px] font-black text-[#070808]">
                MODERN CONTEMPORARY DOORS
              </h2>
              <p className="text-[12px] leading-[18px] font-normal text-[#000000] w-[78%] pt-[10px] pb-[30px]">
                We are dedicated to making your home look its best with our
                premium aluminium entrance doors. Combining contemporary design
                with robust engineering, we bring innovation, customisation, and
                unmatched quality to every entrance, ensuring your home exudes
                prestige and security.
              </p>

              <div className="flex flex-row  text-end gap-7">
                <button className="pt-[10px] pb-[10px] pr-[40px] pl-[20px] bg-[#FEEF5E] rounded-[10px] text-black font-bold uppercase text-[18px] hidden md:flex">
                  Contact us
                </button>
                <button className="pt-[10px] pb-[10px] pr-[40px] pl-[20px] rounded-[10px] border-[#000000]  font-bold uppercase text-[18px] border-2 text-[#000000] hidden md:flex">
                  CATALOGUE
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Image
                src={Modern}
                width={800}
                height={800}
                alt="modern"
                className="rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
