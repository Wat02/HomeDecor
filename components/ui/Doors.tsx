"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  dark:text-neutral-200 ">
        Choose you'r future Door{" "}
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "Soreno",
    src: "/Doors/enhance.jpg",
  },
  {
    category: "Productivity",
    title: "Brigton",
    src: "/Doors/test2.jpg",
  },
  {
    category: "Product",
    title: "Marvel",
    src: "/Doors/test.jpg",
  },

  {
    category: "Product",
    title: "Wanna se more?",
    src: "/Doors/bestwork.jpg",
  },
];
