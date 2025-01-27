"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";

export default function AboutUsSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
      About Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left Side - 3D Card */}
      <div className="flex justify-center w-full px-4 md:px-0">
      <CardContainer className="inter-var w-full" containerClassName="transform-none sm:transform-gpu">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:max-w-[30rem] h-auto rounded-xl p-4 md:p-6 border">
        <CardItem
        translateZ={20} // Reduced from 50
        className="text-xl md:text-2xl font-bold text-neutral-600 dark:text-white"
        >
        Innovation Hub
        </CardItem>
        <CardItem
        as="p"
        translateZ={30} // Reduced from 60
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        We are a dynamic innovation hub fostering the next generation
        of groundbreaking startups. Our mission is to transform
        innovative ideas into successful ventures through mentorship,
        resources, and strategic partnerships.
        </CardItem>
        <CardItem translateZ={40} className="w-full mt-4"> {/* Reduced from 100 */}
        <Image
        src="https://silveroakuni.ac.in/upload/images/slider/m_12.webp"
        height={300} // Reduced from 400
        width={600} // Reduced from 800
        className="h-36 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="Innovation Hub"
        />
        </CardItem>
        <div className="flex justify-between items-center mt-6 md:mt-20">
        <CardItem
        translateZ={10} // Reduced from 20
        as={Link}
        href="/contact"
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:opacity-80 transition-opacity"
        >
        Contact Us →
        </CardItem>
        <CardItem
        translateZ={10} // Reduced from 20
        as={Link}
        href="/join"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-80 transition-opacity"
        >
        Join Us
        </CardItem>
        </div>
        </CardBody>
      </CardContainer>
      </div>

      {/* Right Side - Link Previews */}
      <div className="flex justify-center items-start h-full flex-col px-4 mt-8 lg:mt-0">
      <p className="text-lg md:text-xl lg:text-3xl text-neutral-500 dark:text-neutral-400 max-w-3xl text-left mb-8 md:mb-10">
        Discover our{" "}
        <LinkPreview
        url="https://ignite.silveroakuni.ac.in/"
        imageSrc="/benefits/1.png"
        isStatic={true}
        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
        Startup Programs
        </LinkPreview>{" "}
        designed to accelerate your growth journey.
      </p>

      <p className="text-lg md:text-xl lg:text-3xl text-neutral-500 dark:text-neutral-400 max-w-3xl text-left">
        Connect with our{" "}
        <LinkPreview
        url="https://ignite.silveroakuni.ac.in/mentor"
        imageSrc="/images/mentors.jpg"
        isStatic
        className="font-bold"
        >
        Expert Mentors
        </LinkPreview>{" "}
        and access our{" "}
        <LinkPreview
        url="https://ignite.silveroakuni.ac.in/co-working"
        imageSrc="/images/resources.jpg"
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
