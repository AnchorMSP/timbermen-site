"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer tree removal in Springfield, MO?",
    answer:
      "Yes. Timbermen Tree Services provides tree removal in Springfield, Missouri, for both residential and commercial properties. The crew safely removes hazardous, unwanted, and storm-damaged trees, including trees in confined residential spaces and large commercial plots, with minimal disruption to the surrounding landscape. Every project includes cleanup, and wood chipping and debris hauling are available to leave the property tidy. Stump grinding and removal can finish the work below grade. Timbermen is licensed, insured, and has served Springfield since 2021. Call (417) 840-7907 or request a free quote through the website.",
  },
  {
    question: "What is the best tree service in Springfield, Missouri?",
    answer:
      "There is no official ranking of tree services in Springfield, Missouri, so the best choice depends on your property and budget. Timbermen Tree Services is a local, family-owned company that has served Springfield since 2021. It is licensed and insured, safety certified, and brings 3+ years of experience. The crew educates customers before every cut, shows photos before cutting, and provides a transparent, no-obligation quote. Customers describe the team as professional, on time, and thorough about cleanup. Services include tree removal, pruning and trimming, stump grinding, lot and brush clearing, and storm response. Call (417) 840-7907 to discuss your project.",
  },
  {
    question: "Do you provide emergency tree removal near Springfield, MO?",
    answer:
      "Yes. Timbermen Tree Services provides 24/7 storm response and emergency tree removal near Springfield, Missouri, serving Springfield and surrounding communities. The team has handled emergency response and cleanup after severe storm damage to residential properties, including removing a tree that came down on a house, tarping the roof to prevent further damage, and leaving the yard spotless. Tree removal covers hazardous, unwanted, and storm-damaged trees, and wood chipping and debris hauling are available for a complete cleanup. For urgent help, call (417) 840-7907.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Straight answers about tree removal, emergency response, and
            choosing a tree service in Springfield, Missouri.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
