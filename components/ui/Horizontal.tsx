"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div>
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[550px] w-[550px] overflow-hidden "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-[10px]"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-r from-[#1E1F21] from-10% via-[#313234] via-30% to-[#1F2021] to-90% p-8 text-6xl font-black uppercase rounded-[10px] text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/Doors/modern.jpg",
    title: "Malver",
    id: 1,
  },
  {
    url: "/Doors/bestwork.jpg",
    title: "Denver",
    id: 2,
  },
  {
    url: "/Doors/enhance.jpg",
    title: "Ohio",
    id: 3,
  },
  {
    url: "/Doors/test.jpg",
    title: "Moscow",
    id: 4,
  },
  {
    url: "/Doors/test2.jpg",
    title: "Belgrade",
    id: 5,
  },
  {
    url: "/Doors/living.jpg",
    title: "Berlin",
    id: 6,
  },
  {
    url: "/Doors/gardern.jpg",
    title: "Prague",
    id: 7,
  },
];
