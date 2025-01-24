import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Feature() {
  return (
    <div className="max-w-7xl mx-auto pt-8">
      <h2 className="max-w-7xl pl-4 pb-8 mx-auto ml-10 text-center text-xl md:text-5xl md:0 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Benefits
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Unparalleled Networking Opportunities",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <img src="/benefits/1.png" alt="Networking" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Recognition for Deserving Startups",
    description: "Dive into the transformative power of technology.",
    header: <img src="/benefits/2.png" alt="Recognition" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Get Funding Support in front of leading investors",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <img src="/benefits/3.png" alt="Funding Support" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Presence of Leading Industry Associations",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <img src="/benefits/4.png" alt="Industry Associations" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Engage with top industry experts",
    description: "Join the quest for understanding and enlightenment.",
    header: <img src="/benefits/5.png" alt="Industry Experts" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Presence of Senior Government Officials",
    description: "Experience the thrill of bringing ideas to life.",
    header: <img src="/benefits/6.png" alt="Government Officials" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Enlightening Speaker Sessions.",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <img src="/benefits/7.png" alt="Speaker Sessions" className="w-full h-full object-cover rounded-xl" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
