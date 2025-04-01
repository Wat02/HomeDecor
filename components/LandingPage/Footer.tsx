import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";

function Footer() {
  return (
    <section className="bg-black pb-[10px] pr-[10px] pl-[10px] ">
      <div className=" mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-5 bg-[#FEEF5E] rounded-[10px] pt-[20px]">
            <h2 className="upprercase text-black text-[30px] md:text-[49px] leading-[39px] md:leading-[49px] font-black ml-[15px] pb-[25px]">
              WHY CHOOSE HomeDecor?
            </h2>
            <p className="text-[16px] leading-[20px]  md:leading-[24px] font-bold text-black ml-[15px]">
              Choose HomeDecor for premium aluminium entry doors that redefine
              energy efficiency, security, luxury, and lasting beauty.
            </p>
            <div className="flex flex-row pt-[30px] ml-[10px] pb-[20%]">
              <button className="pt-[5px] md:pt-[10px] pb-[5px] md:pb-[10px] pr-[20px] md:pr-[40px] pl-[20px] md:pl-[20px] bg-[#0B0D0E] rounded-[10px] text-white font-bold uppercase text-[18px] mr-[20px]">
                Explore doors
              </button>
              <button className="pt-[5px] md:pt-[10px] pb-[5px] md:pb-[10px] pr-[20px] md:pr-[40px] pl-[20px] md:pl-[20px] bg-[#FEEF5E] border boder-3 border-black rounded-[10px] text-black font-bold uppercase text-[18px] mr-[20px]">
                Explore doors
              </button>
            </div>
            <div className="flex flex-row gap-2  ml-[10px]  ">
              <p className="text-black text-[18px] font-semibold">instagram</p>
              <p className="text-black  text-[18px] font-semibold">Facebook</p>
              <p className="text-black  text-[18px] font-semibold">X</p>
              <p className="text-black  text-[18px] font-semibold">TikTok</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 bg-[#FEEF5E]   rounded-[10px] pt-[20px]">
            <div className="flex flex-row gap-10 md:gap-96">
              <div className="flex flex-col">
                {" "}
                <Link href="/">
                  <p className="text-[29px] md:text-[39px] leading-[37px] md:leading-[47px] font-bold uppercase ml-[20px] underline underline-offset-8 decoration-from-font w-[100%] text-black pb-[10px]">
                    Home
                  </p>
                </Link>
                <Link href="/AboutUs">
                  <p className="text-[29px] md:text-[39px] leading-[37px] md:leading-[47px] font-bold uppercase ml-[20px] underline underline-offset-8 decoration-from-font text-black  pb-[10px]">
                    About us
                  </p>
                </Link>
                <Link href="/Product">
                  <p className="text-[29px] md:text-[39px] leading-[37px] md:leading-[47px] font-bold uppercase ml-[20px] underline underline-offset-8 decoration-from-font text-black  pb-[10px]">
                    Products
                  </p>
                </Link>
                <Link href="/Resource">
                  <p className="text-[29px] md:text-[39px] leading-[37px] md:leading-[47px] font-bold uppercase ml-[20px] underline underline-offset-8 decoration-from-font text-black  pb-[10px]">
                    RESOURCES
                  </p>
                </Link>
                <Sheet>
                  <SheetTrigger className="text-[29px] md:text-[39px] leading-[37px] md:leading-[47px] font-bold uppercase ml-[20px] underline underline-offset-8 decoration-from-font text-black  pb-[10px]">
                    Contact us
                  </SheetTrigger>
                  <SheetContent
                    side="bottom"
                    className="w-[100%] md:w-[100%] bg-transparent border-none"
                  >
                    <SheetHeader>
                      <div className="container mx-auto ">
                        <div className="grid grid-cols-12 gap-1">
                          <div className="col-span-12 md:col-span-3">
                            <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% w-[90%] pl-[20px] pt-[20px] pb-[20px] rounded-[20px] mb-[10px] hidden md:block ">
                              <SheetTitle className="text-[21px] leading-[28px] font-bold text-white pb-[10px]  hidden md:flex ">
                                CONTACT DETAILS
                              </SheetTitle>
                              <p className="text-[16px] leading-[24px] font-bold text-white  pb-[5px]  hidden md:flex">
                                000 000 000
                              </p>
                              <p className="text-[16px] leading-[24px] font-bold text-white  pb-[5px]  hidden md:flex">
                                {" "}
                                Example Adress{" "}
                              </p>
                            </div>
                            <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% w-[90%] pl-[20px] pt-[20px] pb-[20px] rounded-[20px] hidden md:block">
                              <p className="text-[21px] leading-[28px] font-bold text-white pb-[10px]  hidden md:flex">
                                OPENING HOURS
                              </p>
                              <p className="text-[16px] leading-[24px] font-bold text-white  pb-[5px]  hidden md:flex">
                                MON-FRI 09:00am-05:00pm
                              </p>
                              <p className="text-[16px] leading-[24px] font-bold text-white  pb-[5px]  hidden md:flex">
                                SAT 10:00am-03:00pm
                              </p>
                              <p className="text-[16px] leading-[24px] font-bold text-white  pb-[5px]  hidden md:flex">
                                After Hours Appointment Only
                              </p>
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row">
                            <div>
                              <h2 className="text-[40px] md:text-[69px] leading-[49px] md:leading-[69px] font-black ml-[0px] md:ml-[30px] text-start md:text-start ">
                                GET IN TOUCH
                              </h2>
                              <p className="text-[14px] md:text-[16px] leading-[16px] md:leading-[20px] w-[80%] pt-[10px] text-start  ml-[0px] md:ml-[30px]  ">
                                Have questions or need assistance? Reach out
                                through our contact form. We're ready to help
                                you with your aluminium door needs. Your inquiry
                                is our priority, and our team will respond
                                promptly to guide you every step of the way.
                              </p>
                            </div>
                            <div className="flex flex-col  pt-[10px] md:pt-[0px] ">
                              <div className="flex flex-col md:flex-row gap-3 md:gap-3">
                                <Input
                                  placeholder="You'r name"
                                  className="w-[90%] md:w-[100%]"
                                />
                                <Input
                                  type="email"
                                  placeholder="Email"
                                  className="w-[90%] md:w-[100%]"
                                />
                              </div>
                              <div className="flex flex-col md:flex-row gap-3">
                                <Input
                                  placeholder="Phone Number"
                                  className="w-[90%] md:w-[100%]"
                                />
                                <Input
                                  placeholder="Business name"
                                  className="w-[90%] md:w-[100%]"
                                />
                              </div>
                              <div className="flex flex-row gap-3">
                                <Input
                                  placeholder="State"
                                  className="w-[90%] md:w-[100%]"
                                />
                                <Input
                                  placeholder="City"
                                  className="w-[90%] md:w-[100%]"
                                />
                              </div>
                              <div className="flex flex-row gap-3">
                                <Input
                                  placeholder="Write about you'r project "
                                  className="pl-[1rem] pr-[11rem] py-[3.5rem] md:px-52 md:py-14  "
                                />
                              </div>
                              <div className="flex flex-row gap-3">
                                <Input
                                  placeholder="How to find you?"
                                  className="pl-[1rem] pr-[11rem] md:px-52 md:py-14 "
                                />
                              </div>
                              <div className="flex flex-row gap-3">
                                <button className="w-full py-4 bg-[#FDEF5E] text-black rounded-[30px] text-center">
                                  <p className="text-black ml-[20px] text-[25px]">
                                    Send
                                  </p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
              <div>
                <p className="text-[21px] leading-[28px] font-bold text-black pb-[10px] hidden md:flex ">
                  Contact Info
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black pb-[5px]  hidden md:flex">
                  000 000 000
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black  pb-[5px]  hidden md:flex">
                  Example@email
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black  pb-[5px]  hidden md:flex">
                  Example Adress
                </p>
                <p className="text-[21px] leading-[28px] font-bold text-black pb-[10px]  hidden md:flex">
                  OPENING HOURS
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black  pb-[5px]  hidden md:flex">
                  MON-FRI 09:00am-05:00pm
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black  pb-[5px]  hidden md:flex">
                  SAT 10:00am-03:00pm
                </p>
                <p className="text-[16px] leading-[24px] font-bold text-black  pb-[5px]  hidden md:flex">
                  After Hours Appointment Only
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-10 md:gap-60 pt-[40px] ">
              <p className="text-black ml-[20px]">
                ©2024 All Rights Reserved PRIVACYPOLICY RETURN POLICY
              </p>
              <p className="text-black">
                Designed & Developed by
                <span className="font-black text-black ml-[10px]">
                  TetraFlow
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
