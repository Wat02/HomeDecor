import React from "react";
import { GlowingEffectDemo } from "../ui/gloving";

function DoorsShow() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <GlowingEffectDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoorsShow;
