import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Clock,
  Users,
  Coffee,
  Presentation,
  MessageSquare,
  Award,
  ChefHat,
  Mic2,
  Star,
  Handshake,
} from "lucide-react";

export function Roadmap() {
  const getEventIcon = (text : string) => {
    if (text.includes("Registration"))
      return <Clock className="w-5 h-5 text-blue-500" />;
    if (text.includes("Lunch"))
      return <ChefHat className="w-5 h-5 text-orange-500" />;
    if (text.includes("Tea Break"))
      return <Coffee className="w-5 h-5 text-brown-500" />;
    if (text.includes("Pitch"))
      return <Presentation className="w-5 h-5 text-purple-500" />;
    if (text.includes("Session"))
      return <Mic2 className="w-5 h-5 text-green-500" />;
    if (text.includes("Chat"))
      return <MessageSquare className="w-5 h-5 text-pink-500" />;
    if (text.includes("Announcement"))
      return <Star className="w-5 h-5 text-yellow-500" />;
    if (text.includes("Meeting"))
      return <Handshake className="w-5 h-5 text-indigo-500" />;
    return <Users className="w-5 h-5 text-gray-500" />;
  };

  const getEventClass = (text) => {
    if (text.includes("Pitch"))
      return "bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2";
    if (text.includes("Break") || text.includes("Lunch"))
      return "bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2";
    if (text.includes("Session"))
      return "bg-green-50 dark:bg-green-900/20 rounded-lg p-2";
    if (text.includes("Announcement"))
      return "bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2";
    if (text.includes("Meeting"))
      return "bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-2";
    return "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2";
  };

  const data = [
    {
      title: "Friday, 7th February",
      content: (
        <div className="space-y-6">
          <div className={getEventClass("Registration")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Registration")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Registration
                <span className="text-blue-600 dark:text-blue-400 ml-2">
                  10:00 AM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Inauguration")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Session")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Inauguration
                <span className="text-green-600 dark:text-green-400 ml-2">
                  10:30 AM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Introduction")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Session")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Introduction of Investors and Ice-Breaking Session
                <span className="text-green-600 dark:text-green-400 ml-2">
                  10:55 AM
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Friday, 7th February (continued)",
      content: (
        <div className="space-y-6">
          <div className={getEventClass("Pitch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Pitch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Elevator Pitch Session Round 1
                <span className="text-purple-600 dark:text-purple-400 ml-2">
                  11:00 AM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Lunch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Lunch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Lunch
                <span className="text-orange-600 dark:text-orange-400 ml-2">
                  2:00 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Pitch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Pitch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Elevator Pitch Session Round 2
                <span className="text-purple-600 dark:text-purple-400 ml-2">
                  3:00 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Friday, 7th February (continued)",
      content: (
        <div className="space-y-6">
          <div className={getEventClass("Tea Break")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Tea Break")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Tea Break
                <span className="text-orange-600 dark:text-orange-400 ml-2">
                  5:00 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Announcement")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Announcement")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
                Announcement of Selected Start-ups for Final Pitch Round
                <span className="text-yellow-600 dark:text-yellow-400 ml-2">
                  5:15 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Session")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Session")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Speaker Session
                <span className="text-green-600 dark:text-green-400 ml-2">
                  5:30 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Saturday, 8th February",
      content: (
        <div className="space-y-6">
          <div className={getEventClass("Pitch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Pitch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Final Pitch Session Round 1
                <span className="text-purple-600 dark:text-purple-400 ml-2">
                  10:00 AM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Lunch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Lunch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Lunch
                <span className="text-orange-600 dark:text-orange-400 ml-2">
                  1:00 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Pitch")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Pitch")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Final Pitch Session Round 2
                <span className="text-purple-600 dark:text-purple-400 ml-2">
                  2:00 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Saturday, 8th February (continued)",
      content: (
        <div className="space-y-6">
          <div className={getEventClass("Chat")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Chat")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                Fireside Chat
                <span className="text-pink-600 dark:text-pink-400 ml-2">
                  3:30 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Meeting")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Meeting")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Closed Door Meeting of Investors with selected Start-ups
                <span className="text-indigo-600 dark:text-indigo-400 ml-2">
                  3:30 PM
                </span>
              </p>
            </div>
          </div>
          <div className={getEventClass("Session")}>
            <div className="flex items-center gap-2 mb-2">
              {getEventIcon("Session")}
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Valedictory Session
                <span className="text-green-600 dark:text-green-400 ml-2">
                  5:30 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-1">
      <h2 className="max-w-7xl pl-4 pb-8 mx-auto ml-10 text-xl text-center md:text-5xl md:0 font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Roadmap Of The Event
      </h2>
      <Timeline data={data} />
    </div>
  );
}
