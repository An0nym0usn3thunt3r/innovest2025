"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://in.linkedin.com/company/iicws", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/innovest_gujarat/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCQIFijMKBj1d1v-ANyMjPqQ", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/IgniteForStartups/", label: "Facebook" }
];

export function SocialLinksCard() {
  return (
    <Card className="p-6 col-span-1 md:col-span-2 bg-primary/5 hover:bg-primary/10 transition-colors">
      <h3 className="text-2xl font-bold mb-4">Social Links</h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <Button
            key={social.label}
            variant="outline"
            className="w-full"
            asChild
          >
            <Link href={social.href} target="_blank" className="flex items-center justify-center gap-2">
              <social.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{social.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </Card>
  );
}