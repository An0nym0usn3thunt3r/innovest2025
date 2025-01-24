"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowDownLeft,
  ArrowUpIcon as ArrowForward,
} from "lucide-react";

export function RadialFeatures() {
  const arrowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    arrowRefs.current.forEach((arrow, index) => {
      if (arrow) {
        setTimeout(() => {
          arrow.style.opacity = "1";
          arrow.style.transform = "translate(0, 0) rotate(0)";
        }, index * 200);
      }
    });
  }, []);

  const features = [
    {
      number: "01",
      title: "Application",
      description:
        "Submit your pitch deck and application by 31st January 2024 to be considered for the next round.",
    },
    {
      number: "02",
      title: "Selection",
      description:
        "Our expert judges will select promising startups for the elevator pitching session, and those chosen from this round will proceed to present in final pitch session.",
    },
    {
      number: "03",
      title: "Investment",
      description:
        "The selected startups will compete for a chance to secure funding and investment from our network of investors and in addition explore strategic partnership opportunities.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold mb-6 text-black">
          Selection Process
        </h1>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`relative text-center group ${
                index > 0 ? "md:mt-32" : ""
              }`}
            >
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-5xl font-bold text-blue-500/20 transition-colors group-hover:text-blue-500/40">
                {feature.number}
              </span>
              <div className="bg-black rounded-full p-8 shadow-lg inline-block mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <div className="w-12 h-12 aspect-square">
                  <img
                    src="/api/placeholder/48/48"
                    alt={`${feature.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 transition-colors group-hover:text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                {feature.description}
              </p>
              {index < features.length - 1 && (
                <div
                  ref={(el) => {
                    arrowRefs.current[index] = el;
                  }}
                  className="hidden md:block absolute opacity-0 transform translate-x-4 transition-all duration-500 ease-out"
                >
                  {index === 0 ? (
                    <ArrowRight className="absolute top-1/2 -right-12 w-16 h-16 text-blue-500" />
                  ) : index === 1 ? (
                    <ArrowDownLeft className="absolute -bottom-40 -left-12 w-20 h-20 text-blue-500 rotate-15" />
                  ) : (
                    <ArrowForward className="absolute top-1/2 -right-12 w-16 h-16 text-blue-500" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
