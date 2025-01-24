
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export function StayConnectedCard() {
  return (
    <Card className="p-6 bg-secondary/50 hover:bg-secondary/70 transition-colors">
      <div className="flex flex-col items-center text-center">
        <MessageSquare className="h-12 w-12 mb-4" />
        <h4 className="font-semibold mb-2">Stay Connected</h4>
        <p className="text-sm text-muted-foreground">
          Join our community for exclusive updates and discussions
        </p>
      </div>
    </Card>
  );
}
