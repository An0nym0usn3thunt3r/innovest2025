import { FocusCards } from "@/components/ui/focus-cards";

export function Domains() {
  const cards = [
    {
      title: "Renewables",
      src: "/domains/renewables.png",
    },
    {
      title: "Fintech",
      src: "/domains/fintech.png",
    },
    {
      title: "Defence",
      src: "/domains/defence.png",
    },
    {
      title: "Deep Tech",
      src: "/domains/deep.png",
    },
    {
      title: "Healthcare",
      src: "/domains/healthcare.png",
    },
    {
      title: "Others",
      src: "/domains/others.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
