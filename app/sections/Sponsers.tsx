"use client";

import Image from "next/image";
import Link from "next/link";

const SPONSORS = {
  Investment_partner: [
    {
      name: "GVFL",
      logo: "https://placehold.co/200x100/white/black?text=Groq",
      url: "https://gvfl.com",
    },
    {
      name: "PITCH VILLA",
      logo: "https://placehold.co/200x100/white/black?text=PITCH VILLA",
      url: "https://gvfl.com",
    },
    {
      name: "sanelite",
      logo: "https://placehold.co/200x100/white/black?text=sanelite",
      url: "https://gvfl.com",
    },
  ],
  Supported_by: [
    {
      name: "Industries Commissionerate, Govt of Gujarat",
      logo: "https://placehold.co/200x100/white/black?text=Industries Commissionerate",
      url: "https://ic.gujarat.gov.in/",
    },
    {
      name: "Startup Gujarat",
      logo: "https://placehold.co/200x100/white/black?text=Startup Gujarat",
      url: "https://startup.gujarat.gov.in/",
    },
  ],
};

export default function SponsorsSection() {
  return (
    <section className="bg-black min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-[#E325B6] text-8xl font-bold text-center mb-24">
          SPONSORS
        </h1>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Investment Partner */}
          <div>
            <h2 className="text-[#E325B6] text-2xl font-medium text-center mb-8">
              INVESTMENT PARTNER
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {SPONSORS.Investment_partner.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 w-[300px] h-[150px] flex items-center justify-center transition-transform hover:scale-105 mx-auto"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Supported By */}
          <div>
            <h2 className="text-[#E325B6] text-2xl font-medium text-center mb-8">
              SUPPORTED BY
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {SPONSORS.Supported_by.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-8 w-[300px] h-[150px] flex items-center justify-center transition-transform hover:scale-105 mx-auto"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
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
