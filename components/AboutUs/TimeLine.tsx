import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Our best work of 2022",
      content: (
        <div>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-12">
              <h2 className="text-[30px] md:text-[49px] leading-[34px] md:leading-[49px] font-black text-[#fafdff]">
                OUR EXPERTISE
              </h2>
              <p className="text-[18px]md:text-[21px] leading-[20px] md:leading-[28px] font-bold text-[#fafdff] w-[90%] md:w-[60%] pt-[2%]">
                HomeDecor is dedicated to setting new benchmarks in energy
                efficiency and design with our premium aluminium entrance doors.
                Aluminium exceptional weather resistance and superior thermal
                and acoustic insulation make it the ideal material for robust
                and secure entrance doors. Our focus on quality, customisation,
                and precision engineering ensures that every product meets the
                highest standards.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "We create future",
      content: (
        <div>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-12">
              <h2 className="text-[30px] md:text-[49px] leading-[34px] md:leading-[49px] font-black text-[#fafdff]">
                OUR INNOVATION
              </h2>
              <p className="text-[18px]md:text-[21px] leading-[20px] md:leading-[28px] font-bold text-[#fafdff]  w-[90%] md:w-[60%] pt-[2%]">
                Our R&D team is at the forefront of developing new technologies
                to enhance energy efficiency, safety, and design. HomeDecor
                commitment to innovation means we continually create new
                entrance door systems that meet the evolving needs of the market
                and comply with National Construction Code 7 Star requirements
                across Australia.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "passion about projects",
      content: (
        <div>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-12">
              <h2 className="text-[30px] md:text-[49px] leading-[34px] md:leading-[49px] font-black text-[#fafdff]">
                OUR COMMITMENT
              </h2>
              <p className="text-[18px]md:text-[21px] leading-[20px] md:leading-[28px] font-bold text-[#fafdff] w-[90%] md:w-[60%] pt-[2%]">
                At HomeDecor, we are committed to delivering entrance doors that
                not only enhance the beauty and security of your home but also
                stand the test of time. Our dedication to craftsmanship,
                reliability, and customer satisfaction ensures that our entrance
                doors are a superior choice for those seeking both style and
                substance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
