"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PopoverDemo } from "@/components/ui/Popper";
import { RadioGroupDemo } from "@/components/ui/Radio";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="pb-[50px] md:pb-[245px] pt-[50px] ">
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    z: -100,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    draggable={false}
                    className=" rounded-[20px] ml-[50px] w-[70%] md:w-[80%] md:ml-[100px]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <ScrollArea className="h-[800px] w-full rounded-md  p-4">
          <div className="flex justify-between flex-col pt-[50px] md:pt-[50px]">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-[69px] leading-[69px] font-black  text-white ml-[20px] md:ml-[0px]">
                {testimonials[active].name}
              </h3>

              <motion.p className="text-[16px] leading-[18px] text-white mt-[10px] w-[80%] md:w-[60%] ml-[20px] md:ml-[0px] font-medium">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-none ml-[20px] md:ml-[0px]"
                >
                  <AccordionTrigger>
                    {" "}
                    {testimonials[active].designation}
                  </AccordionTrigger>
                  <AccordionContent>
                    <li className="font-medium text-[16px]">
                      Low profile, weather sealed, thermally broken access
                      threshold and framework{" "}
                    </li>
                    <li className="font-medium text-[16px]">
                      High performance insulated thermal and acoustic compressed
                      rock wool
                    </li>
                    <li className="font-medium text-[16px]">
                      Fully flush door panel with door frame
                    </li>
                    <li className="font-medium text-[16px]">
                      Stainless steel pull handle (900mm & 1200mm)
                    </li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="pt-[10px] ml-[20px] md:ml-[0px]">
                <Link href="/Detail">
                  <button className="bg-[#FDEF5E] text-black pt-[5px] pb-[5px] pr-[30px] pl-[30px] rounded-[10px] text-[18px] font-bold uppercase">
                    Details
                  </button>
                </Link>
              </div>
              <div className="pt-[20px] ">
                <h4 className="text-[2.0vw] leading-[130%] font-black ">
                  01. SIZES (Passinger door)
                </h4>
                <p className="text-[18px] leading-[23px] font-black pt-[15px]">
                  STANDARD
                </p>
                <Select>
                  <SelectTrigger className="w-[60%] mt-[10px] ">
                    <SelectValue placeholder="Select you'r size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">166m x 2430mm (920)</SelectItem>
                    <SelectItem value="dark">166m x 2430mm (920)</SelectItem>
                    <SelectItem value="dark">166m x 2430mm (920)</SelectItem>
                  </SelectContent>
                </Select>
                <h4 className="text-[18px] leading-[23px] font-black pt-[15px]">
                  CUSTOM
                </h4>

                <div className="flex flex-row gap-3">
                  <p className="text-[16px] leading-[16px] font-medium mt-[4px]">
                    If you want custom door enter here:
                  </p>
                  <PopoverDemo />
                </div>

                <h4 className="text-[2.0vw] leading-[130%] font-black pt-[20px]">
                  02. DOOR OPENING
                </h4>
                <RadioGroupDemo />
                <div className="pt-[15px]">Handle images row</div>
                <div className="pt-[15px]">
                  <h4 className="text-[25px] leading-[28px] font-bold">
                    04. PERSONAL DETAILS
                  </h4>
                  <div className="pt-[20px] flex flex-col gap-5">
                    <Input
                      placeholder="Full Name"
                      className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[80%] text-[18px] font-bold"
                    />
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[80%] text-[18px] font-bold"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[80%] text-[18px] font-bold"
                    />
                    <div className="flex flex-row gap-5">
                      <input
                        placeholder="State"
                        className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[38%] text-[18px] font-bold"
                      />
                      <input
                        placeholder="Post Code"
                        className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[38%] text-[18px] font-bold"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Adress "
                      className="bg-transparent border border-spacing-2 border-white pt-[10px] pb-[10px] pr-[10px] pl-[10px] rounded-[20px] focus-none w-[80%] text-[18px] font-bold"
                    />
                  </div>
                </div>
                <div className="pt-[20px]">
                  <button className="pt-[5px] pb-[5px] pr-[35px] pl-[35px] bg-[#FDEF5E] rounded-[5px] text-black">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
            <div className="flex gap-4 pt-[30px]">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full flex items-center justify-center group/button"
              >
                <p className="h-5 w-5 text-white font-bold text-[20px] dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300">
                  Left
                </p>
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full  dark:bg-neutral-800 flex items-center justify-center group/button"
              >
                <p className="h-5 w-5 text-white font-bold text-[20px] dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300">
                  Right
                </p>
              </button>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
