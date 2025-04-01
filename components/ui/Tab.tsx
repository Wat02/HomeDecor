"use client";

import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Door Detail",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br ">
          <h1>Malver</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            nihil asperiores ratione ullam iusto ex ea placeat sequi. Nemo,
            explicabo. Officia neque ipsam ea inventore? Cumque voluptatum rerum
            quae libero.
          </p>
        </div>
      ),
    },
    {
      title: "Why choose us",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br ">
          <h1>Malver</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            nihil asperiores ratione ullam iusto ex ea placeat sequi. Nemo,
            explicabo. Officia neque ipsam ea inventore? Cumque voluptatum rerum
            quae libero. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Incidunt nihil asperiores ratione ullam iusto ex ea placeat
            sequi. Nemo, explicabo. Officia neque ipsam ea inventore? Cumque
            voluptatum rerum quae libero. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Incidunt nihil asperiores ratione
            ullam iusto ex ea placeat sequi. Nemo, explicabo. Officia neque
            ipsam ea inventore? Cumque voluptatum rerum quae libero.
          </p>
        </div>
      ),
    },
    {
      title: "Testamonial",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br ">
          nesto1
        </div>
      ),
    },
    {
      title: "Aluminum vs wood",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br ">
          nesto2
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
