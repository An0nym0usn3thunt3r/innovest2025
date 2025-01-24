"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Activities
`;

export function AnimatedWord() {
  return <TextGenerateEffect words={words} />;
}
