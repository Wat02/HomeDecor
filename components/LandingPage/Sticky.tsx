"use client";

import React from "react";
import Image from "next/image";
import { TextParallaxContentExample } from "../ui/TextParallexText";
import Modernroom from "@/public/Doors/modenRoom.jpg";

function Sticky() {
  return (
    <section>
      <div className="content">
        <div className="wrapper">
          <div className="box box1">
            <section id="box1">
              {" "}
              <section className="bg-black ">
                <div className="bg-[#FAFDFF] rounded-tl-[50px] rounded-tr-[50px] pt-[8%] pb-[10%] ">
                  <div className="container mx-auto ">
                    <div className="grid grid-cols-12 gap-1 ">
                      <div className="col-span-12 md:col-span-6 pt-[10%] ">
                        <h2 className="text-[30px] md:text-[49px] leading-[39px] md:leading-[49px] font-black text-[#070808] ml-[15px] md:ml-[0px]">
                          MODERN CONTEMPORARY DOORS
                        </h2>
                        <p className="text-[16px] leading-[20px] font-medium text-[#000000] w-[65%] md:w-[78%] pt-[10px] pb-[30px] ml-[15px] md:ml-[0px]">
                          We are dedicated to making your home look its best
                          with our premium aluminium entrance doors. Combining
                          contemporary design with robust engineering, we bring
                          innovation, customisation, and unmatched quality to
                          every entrance, ensuring your home exudes prestige and
                          security.
                        </p>

                        <div className="flex flex-row  text-end gap-7  ml-[15px] pb-[10px]">
                          <button className="rounded-[10px]  bg-[#FEEF5E] px-6 py-3 font-bold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            Contact us
                          </button>
                          <button className="border-2 border-black text-black hidden md:flex rounded-[10px]   px-6 py-3 font-bold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            CATALOGUE
                          </button>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <Image
                          src={Modernroom}
                          width={800}
                          height={800}
                          alt="modern"
                          className="rounded-[30px] w-[90%] ml-[10px] md:ml-[0px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
          <div className="box ">
            <section id="box1">
              <section className="bg-black rounded-tl-[50px] rounded-tr-[50px] pt-[8%] pb-[5%] ">
                <h1 className="text-[30px] md:text-[49px] leading-[39px] md:leading-[49px] font-black container mx-auto pb-[5%] ml-[20px] md:ml-[10px]">
                  Why us?
                </h1>
                <TextParallaxContentExample />
              </section>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sticky;
