import React from "react";
import { Input } from "./input";

function Form() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <Input placeholder="You'r name" />
            <Input type="email" placeholder="Email" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
