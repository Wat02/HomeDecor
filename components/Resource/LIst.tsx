import React from "react";
import Image from "next/image";

function LIst({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <Image
              src={img}
              alt="modern room"
              height={400}
              width={400}
              className="rounded-[20px]"
            />
            <p className="text-[21px] leading-[28px] font-bold pt-[10%]">
              {title}
            </p>

            <p className="text-[18spx] leading-[18px] font-semibold pt-[7%] pb-[5%]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LIst;
