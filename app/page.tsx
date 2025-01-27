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
      <section id="home">
      <Hero />
      </section>
      <section id="benefits">
      <Feature />
      </section>
      <section id="domains">
      <Domains />
      </section>
      <section id="selection-process">
      <RadialFeatures />
      </section>
      <section id="activity">
      <Activity />
      </section>
      <section id="timeline">
      <Roadmap />
      </section>
      <section id="about">
      <AboutUs />
      </section>
      <section id="sponsors">
      <SponsorsSection />
      </section>
      <section id="startups">
      <StartupsSection />
      </section>
      <section id="faq">
      <FAQ />
      </section>
      <section id="contact">
      <CTA />
      </section>
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
