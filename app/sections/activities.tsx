"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Activity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="max-w-7xl h-full py-20" style={{ transform: "scale(0.8)" }}>
      <div className="flex justify-center items-center text-center max-w-7xl mx-auto mb-8 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Activities
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Kick-Start",
    title: "Pitching Session",
    src: "/activity/pitching.png",
    content: (
      <div>
        <p>
          Pitching Session A panel offering diverse perspectives on trending
          industry topics, paired with informal fireside chats where successful
          entrepreneurs share their journeys and key lessons learned. The
          networking session brings startups and investors together to connect,
          share ideas, and explore opportunities for collaboration. On Day 1,
          startups will give concise elevator pitch to attract investors. On Day
          2, selected startups will present detailed pitch covering their
          business model and financials. This format will help them make a
          lasting impression and secure investments.
        </p>
      </div>
    ),
  },
  {
    category: "Motivation",
    title: "Fireside Chat",
    src: "/activity/fireside.png",
    content: (
      <div>
        <p>
          A panel offering diverse perspectives on trending industry topics,
          paired with informal fireside chats where successful entrepreneurs
          share their journeys and key lessons learned.
        </p>
      </div>
    ),
  },
  {
    category: "Networking",
    title: "Networking Session",
    src: "/activity/networking.png",
    content: (
      <div>
        <p>
          The networking session brings startups and investors together to
          connect, share ideas, and explore opportunities for collaboration.
        </p>
      </div>
    ),
  },
];
