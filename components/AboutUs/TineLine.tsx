import React from "react";
import { TimelineDemo } from "@/components/AboutUs/TimeLine";

function TineLine() {
  return (
    <section className="bg-[#070808]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <TimelineDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TineLine;
