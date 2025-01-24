"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Activity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" style={{ transform: "scale(0.8)" }}>
      <h2 className="max-w-7xl pl-4 mx-auto ml-10 text-xl md:text-5xl md:0 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        ACTIVITIES :
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Kick-Start",
    title: "Pitching Session",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
