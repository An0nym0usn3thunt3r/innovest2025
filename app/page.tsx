import { Hero } from "@/app/sections/hero";
import { Feature } from "@/app/sections/features";
import { Domains } from "@/app/sections/domains";
import { Activity } from "@/app/sections/activities";
import { Roadmap } from "@/app/sections/roadmap";
import { CTA } from "@/app/sections/cta";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";
import { RadialFeatures } from "./sections/Selectionprocess";
import FAQ from "./sections/FAQ";
import SponsorsSection from "./sections/Sponsers";
import StartupsSection from "./sections/OurStartups";
import AboutUs from "./sections/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Domains />
      <RadialFeatures />
      <Activity />
      <Roadmap />
      <AboutUs />
      <SponsorsSection />
      <StartupsSection />
      <FAQ />
      <CTA />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
