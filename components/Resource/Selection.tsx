import React from "react";
import List from "@/components/Resource/LIst";

function Selection() {
  return (
    <section className="bg-[#070808]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 pt-[5%]">
            <h2 className="text-[49px] md:text-[69px] leading-[49px] md:leading-[69px] font-black pb-[2%] ml-[10px] md:ml-[0]">
              INSGIHTFUL STORIES
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 pt-[5%] pb-[5%]">
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
              <List
                title="Benefits of Choosing Aluminium Front Doors"
                text="This blog post will focus on 5 essential benefits of selecting Aluminum front doors."
                img="/Doors/modern.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Selection;
