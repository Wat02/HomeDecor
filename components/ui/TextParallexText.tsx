import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TextParallaxContentExample = () => {
  return (
    <div>
      <TextParallaxContent imgUrl="/Doors/ui.jpg">
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent imgUrl="/Doors/modern.jpg">
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent imgUrl="/Doors/bestwork.jpg">
        <ExampleContent3 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  children,
}: {
  imgUrl: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] bg-no-repeat bg-center bg-cover">
        <StickyImage imgUrl={imgUrl} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl bg-no-repeat bg-center bg-cover"
    >
      <motion.div
        className="absolute inset-0 "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-[30px]  md:text-[69px] leading-[35px] md:leading-[69px] font-black md:col-span-6">
      DURABLE ALUMINIUM SHEETS
    </h2>
    <div className="col-span-1 md:col-span-6">
      <p className="mb-4 text-[16px] leading-[24px] font-bold  ">
        Each HomeDecor product features 3mm thick aluminium sheets on both the
        front and back, providing unparalleled durability and resistance to
        weather conditions.
      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1  text-[30px]  md:text-[69px] leading-[35px] md:leading-[69px] font-black md:col-span-6">
      Thermally Broken Aluminium Profile
    </h2>
    <div className="col-span-1 md:col-span-6">
      <p className="mb-4 text-[16px] leading-[24px] font-bold ">
        Whilst the Thermally Broken Aluminium frames help with the thermal
        insulation core of our doors are filled with high-quality rock wool,
        enhancing both thermal and acoustic insulation properties.
      </p>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-[30px]  md:text-[69px] leading-[35px] md:leading-[69px] font-black md:col-span-6">
      PREMIUM HARDWARE
    </h2>
    <div className="col-span-1 md:col-span-6">
      <p className="mb-4 text-[16px] leading-[24px] font-bold ">
        We use special hinges and 3-point European locking systems, ensuring
        both security and smooth operation for years to come.
      </p>
    </div>
  </div>
);
