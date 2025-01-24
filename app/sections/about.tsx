"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - 3D Card */}
          <div className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white"
                >
                  Innovation Hub
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  We are a dynamic innovation hub fostering the next generation
                  of groundbreaking startups. Our mission is to transform
                  innovative ideas into successful ventures through mentorship,
                  resources, and strategic partnerships.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/api/placeholder/800/400"
                    height="400"
                    width="800"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Innovation Hub"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="/contact"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Contact Us →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Join Us
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          {/* Right Side - Link Previews */}
          <div className="flex justify-center items-start h-full flex-col px-4">
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
              Discover our{" "}
              <LinkPreview
                url="/programs"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Startup Programs
              </LinkPreview>{" "}
              designed to accelerate your growth journey.
            </p>

            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl text-left mb-10">
              Connect with our{" "}
              <LinkPreview
                url="/mentors"
                imageSrc="/api/placeholder/400/300"
                isStatic
                className="font-bold"
              >
                Expert Mentors
              </LinkPreview>{" "}
              and access our{" "}
              <LinkPreview
                url="/resources"
                imageSrc="/api/placeholder/400/300"
                isStatic
                className="font-bold"
              >
                Resource Network
              </LinkPreview>{" "}
              to supercharge your startup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
