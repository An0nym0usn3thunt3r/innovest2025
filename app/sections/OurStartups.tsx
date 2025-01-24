"use client";

import Image from "next/image";
import Link from "next/link";

const STARTUPS = {
  Our_Startups: [
    {
      name: "Vocadors",
      logo: "https://placehold.co/200x100/white/black?text=Vocadors",
      url: "#",
    },
    {
      name: "Newway",
      logo: "https://placehold.co/200x100/white/black?text=Newway",
      url: "#",
    },
    {
      name: "Syncinfluence",
      logo: "https://placehold.co/200x100/white/black?text=Syncinfluence",
      url: "#",
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
    <section className="bg-black min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-[#E325B6] text-8xl font-bold text-center mb-24">
          STARTUPS
        </h1>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Our Startups */}
          <div>
            <h2 className="text-[#E325B6] text-2xl font-medium text-center mb-8">
              OUR STARTUPS
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {STARTUPS.Our_Startups.map((startup) => (
                <Link
                  key={startup.name}
                  href={startup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 w-[300px] h-[150px] flex items-center justify-center transition-transform hover:scale-105 mx-auto"
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
