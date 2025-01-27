"use client";

import Image from "next/image";
import Link from "next/link";

const STARTUPS = {
  Our_Startups: [
    {
      name: "Vocadors",
      logo: "https://vocadors.com/logo.png",
      url: "https://vocadors.com",
    },
    {
      name: "Newway",
      logo: "https://newwayfood.com/wp-content/uploads/2023/08/logo-e1692809539246.jpg",
      url: "https://newwayfood.com/",
    },
    {
      name: "Ethnic Loop",
      logo: "https://placehold.co/200x100/white/black?text=Ethnic Loop",
      url: "#",
    },
  ],
};

export default function StartupsSection() {
  return (
    <section className="bg-black min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4">
      <h1 className="text-[#E325B6] text-4xl md:text-8xl font-bold text-center mb-12 md:mb-24">
        STARTUPS
      </h1>

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
        {/* Our Startups */}
        <div>
        <h2 className="text-[#E325B6] text-xl md:text-2xl font-medium text-center mb-6 md:mb-8">
          OUR STARTUPS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STARTUPS.Our_Startups.map((startup) => (
          <Link
            key={startup.name}
            href={startup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-4 md:p-8 w-full max-w-[300px] h-[120px] md:h-[150px] flex items-center justify-center transition-transform hover:scale-105 mx-auto"
          >
            <div className="relative w-full h-full">
            <Image
              src={startup.logo}
              alt={`${startup.name} logo`}
              fill
              className="object-contain"
              unoptimized
            />
            </div>
          </Link>
          ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
