import { Card } from "@/components/ui/card";
import { Link } from "lucide-react";

const links = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Benefits", href: "#benefits" },
    { label: "Domains", href: "#domains" },
  ],
  events: [
    { label: "Event Timeline", href: "#timeline" },
    { label: "About Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function QuickLinksCard() {
  return (
    <Card className="p-6 h-full bg-muted/50 hover:bg-muted/70 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Link className="h-5 w-5" />
        <h3 className="font-semibold">Quick Links</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <LinkSection title="Main" links={links.quickLinks} />
        <LinkSection title="Event" links={links.events} />
        <LinkSection title="Legal" links={links.legal} />
      </div>
    </Card>
  );
}

function LinkSection({ 
  title, 
  links 
}: { 
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-muted-foreground mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm hover:underline hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}