import { Hero } from "@/app/sections/hero";
import { Feature } from "@/app/sections/features";
import { Domains } from "@/app/sections/domains";
import { Activity } from "@/app/sections/activities";
import { Roadmap } from "@/app/sections/roadmap";
import { CTA } from "@/app/sections/cta";
import { Testimonials } from "@/app/sections/testimonial";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Domains />
      <Activity />
      <Roadmap />
      <CTA />
      <Testimonials />
    </>
  );
}