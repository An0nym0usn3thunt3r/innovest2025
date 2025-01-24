"use client";

import { QrCode } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function QrCodeCard() {
  return (
    <Card className="p-6 col-span-1 bg-accent hover:bg-accent/80 transition-colors">
      <div className="flex items-center space-x-4 mb-4">
        <QrCode className="h-8 w-8" />
        <div>
          <h4 className="font-semibold">Register Now</h4>
          <p className="text-muted-foreground text-sm">
            Scan to register on your mobile device
          </p>
        </div>
      </div>
      <div className="flex justify-center p-4 bg-background rounded-lg">
        <Image
          src="/frame.png"
          alt="Registration QR Code"
          width={128}
          height={128}
        />
      </div>
      <Button className="w-full mt-4" variant="outline">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXX_Ad-7WvemU1GnfQrgBUdLOVH6nvdPguynrcKF7vPdsrvw/viewform">Open Registration</a>
      </Button>
    </Card>
  );
}