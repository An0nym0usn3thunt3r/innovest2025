"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowDownLeft,
  ArrowUpIcon as ArrowForward,
} from "lucide-react";

export default function RadialFeatures() {
  const arrowRefs = useRef<(SVGSVGElement | null)[]>([]);

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
      title: "Heading Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi.",
    },
    {
      number: "02",
      title: "Heading Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi.",
    },
    {
      number: "03",
      title: "Heading Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi.",
    },
    {
      number: "04",
      title: "Heading Goes Here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit purus morbi.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
          Heading Goes Here
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla
          felis nunc. Sit ac sed sed pulvinar sit purus morbi. Elit amet sed
          velit auctor urna vitae nam ultricies massa.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`relative text-center group ${
                index === 1
                  ? "md:mt-32"
                  : index === 2
                  ? "md:mt-64"
                  : index === 3
                  ? "md:mt-32"
                  : ""
              }`}
            >
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-5xl font-bold text-blue-500/20 transition-colors group-hover:text-blue-500/40">
                {feature.number}
              </span>
              <div className="bg-white rounded-full p-8 shadow-lg inline-block mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <div className="w-12 h-12">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggg-VQUjew6oy1zkvfHsMTYrL4UuHJn6hc.png"
                    alt=""
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
              {index < features.length - 1 &&
                (index === 0 ? (
                  <ArrowRight
                    ref={(el) => (arrowRefs.current[index] = el)}
                    className="absolute top-1/2 -right-12 w-16 h-16 text-blue-500 opacity-0 transform translate-x-4 transition-all duration-500 ease-out hidden md:block"
                  />
                ) : index === 1 ? (
                  <ArrowDownLeft
                    ref={(el) => (arrowRefs.current[index] = el)}
                    className="absolute -bottom-40 -left-12 w-20 h-20 text-blue-500 opacity-0 transform translate-y-4 rotate-15 transition-all duration-500 ease-out hidden md:block"
                  />
                ) : (
                  <ArrowForward
                    ref={(el) => (arrowRefs.current[index] = el)}
                    className="absolute top-1/2 -right-12 w-16 h-16 text-blue-500 opacity-0 transform translate-x-4 transition-all duration-500 ease-out hidden md:block"
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
