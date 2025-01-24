import { SocialLinksCard } from "@/components/footer/social-links-card";
import { StayConnectedCard } from "@/components/footer/stay-connected-card";
import { QrCodeCard } from "@/components/footer/qr-code-card";
import { QuickLinksCard } from "@/components/footer/quick-links-card";
import { CopyrightCard } from "@/components/footer/copyright-card";

export function Footer() {
  return (
    <footer className="w-full bg-background py-12 pt-16 px-4 md:px-6">  
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SocialLinksCard />
          <StayConnectedCard />
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <QrCodeCard />
            <QuickLinksCard />
          </div>
          <CopyrightCard />
        </div>
      </div>
    </footer>
  );
}