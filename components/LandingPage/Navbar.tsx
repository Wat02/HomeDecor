import Image from "next/image";
import React from "react";
import Hamburger from "@/public/hamburger.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function Navbar() {
  return (
    <section className="  bg-[#070808] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 rounded-md">
            <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] ml-[0] md:ml-[10px] mt-[10px] mb-[10px] flex flex-row ">
              <Link
                href="/"
                className="text-[40px] font-medium tracking-[3px]  pl-[20px] w-[80%] md:w-[90%] shrink-0"
              >
                Alud<span className="text-[#FEEF5E]">oo</span>rs
              </Link>
              <div className="justify-end text-end pt-[20px] text-[16px] font-bold leading-[24px]">
                <Sheet>
                  <SheetTrigger className="flex flex-row gap-1">
                    {" "}
                    <Image
                      src={Hamburger}
                      width={20}
                      height={20}
                      alt="hamburger menu"
                    />
                    menu
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="w-[100%] md:w-[50%] bg-transparent border-none"
                  >
                    <SheetHeader>
                      <SheetTitle className="text-[40px] text-white font-medium tracking-[3px]  pl-[20px] w-[100%] md:w-[100%] shrink-0 bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] hidden md:flex">
                        {" "}
                        Alud<span className="text-[#FEEF5E]">oo</span>rs
                      </SheetTitle>
                      <section>
                        <div className="container mx-auto">
                          <div className="grid grid-cols-12 gap-1">
                            <div className="col-span-12 md:col-span-4">
                              <Link href="/">
                                <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] pl-[20px] pt-[20px] mb-[10px] mt-[10px] md:mb-[0] md:mt-[0px]">
                                  <p className="text-end pr-[20px] text-[18px] font-normal leading-[20px] text-[#FEEF5E]">
                                    01
                                  </p>
                                  <p className="pt-[70px] pb-[10px] text-[20px] leading-[24px] font-bold">
                                    Home
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                              <Link href="/AboutUs">
                                <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] pl-[20px] pt-[20px]   mb-[10px] md:mb-[0]">
                                  <p className="text-end pr-[20px] text-[18px] font-normal leading-[20px] text-[#FEEF5E]">
                                    02
                                  </p>
                                  <p className="pt-[70px] pb-[10px] text-[20px] leading-[24px] font-bold">
                                    About Us
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                              <Link href="/Resource">
                                <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] pl-[20px] pt-[20px]  mb-[10px] md:mb-[0">
                                  <p className="text-end pr-[20px] text-[18px] font-normal leading-[20px] text-[#FEEF5E]">
                                    03
                                  </p>
                                  <p className="pt-[70px] pb-[10px] text-[20px] leading-[24px] font-bold">
                                    Resources
                                  </p>
                                </div>
                              </Link>
                            </div>
                            <div className="col-span-12 md:col-span-12">
                              <Link href="/Product">
                                <div className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% rounded-[20px] pl-[20px] pt-[20px]  mb-[10px] md:mb-[0">
                                  <p className="text-end pr-[20px] text-[18px] font-normal leading-[20px] text-[#FEEF5E]">
                                    04
                                  </p>
                                  <p className="pt-[70px] pb-[10px] text-[20px] leading-[24px] font-bold">
                                    Products
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </section>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-[15px]">
            <div className="flex flex-row justify-end text-end gap-7">
              <Link href="/" className="pt-[3px]">
                <button className="rounded-[10px]  bg-[#FEEF5E] px-6 py-3 font-bold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  Contact us
                </button>
              </Link>
              <Link href="/Product">
                <button className="border-2 text-white hidden md:flex rounded-[10px]   px-6 py-3 font-bold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  CATALOGUE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
