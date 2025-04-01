import DoorCor from "@/components/LandingPage/DoorCor";
import Hero from "@/components/LandingPage/Hero";
import Sticky from "@/components/LandingPage/Sticky";

export default function Home() {
  return (
    <section>
      <div>
        <Hero />
        <DoorCor />
        <Sticky />
      </div>
    </section>
  );
}
