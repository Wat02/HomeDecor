import { AnimatedTestimonialsDemo } from "@/components/Project/testimonial";
import React from "react";

function Product() {
  return (
    <section className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <AnimatedTestimonialsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
