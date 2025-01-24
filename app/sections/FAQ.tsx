"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Who Can Attend Innovest?",
    answer:
      "Innovest is open to everyone with a stake or interest in the startup ecosystem—whether you're a corporate, MSME, investor, industry professional, association member, startup founder, or student. If you're a startup seeking funding or strategic partnerships, an investor on the lookout for the next big idea, or simply someone eager to learn from industry experts and support the growth of the startup community, Innovest offers the perfect platform. This event brings together a diverse group of innovators and decision-makers, making it the ideal place to connect, learn, and play an active role in shaping the startup ecosystem.",
  },
  {
    question: "How Can I Register As A Delegate For The Event?",
    answer:
      "You can register by filling up your basic details on the link https://innovestgujarat.in",
  },
  {
    question: "I Am A Start-Up. How Can I Participate In The Event?",
    answer:
      "If you are a start-up interested to participate, you may fill up the details in the registration form. Our team of experts will conduct a screening of the interested start-ups and if your start-up is found promising, we will get in touch with you and inform the further process details.",
  },
  {
    question: "Are There Opportunities For Sponsorship?",
    answer:
      "We provide a variety of sponsorship packages with attractive benefits tailored to meet your specific branding and promotional goals. If you're interested in sponsoring the event, feel free to reach out to us for more details.",
  },
  {
    question: "What Should I Bring To The Event?",
    answer:
      "Please remember to bring a valid photo ID, your registration confirmation (either printed or on your mobile device), and business cards for networking. If you're a startup, be sure to have any relevant materials or prototypes ready to showcase.",
  },
  {
    question: "What Is The Broad Investment Range We Are Looking At?",
    answer:
      "Broadly speaking, investment commitments are expected to range from ₹2 lakhs for early-stage startups to ₹2 cr. for more established ones.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto ml-12">
          <h1 className="text-4xl font-bold text-black mb-12 text-center">
            Frequently Asked Questions
          </h1>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 py-4 bg-white"
              >
                <AccordionTrigger className="text-black hover:no-underline text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/80 text-base leading-relaxed pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
