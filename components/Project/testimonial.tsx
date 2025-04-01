import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Simplicity, style, eternal and timeless, this impressive modern entrance door provides energy efficiency and high security.  Pair it with your choice of stainless steel or powder-coated pull handle as a real showstopper.  ",
      name: "SORRENTO",
      designation: "Product Manager at TechFlow",
      src: "/Doors/test.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "BRIGHTON",
      designation: "CTO at InnovateSphere",
      src: "/Doors/test2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "MALVERN",
      designation: "Operations Director at CloudScale",
      src: "/Doors/enhance.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
