import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const serviceDetails = [
  {
    title: "Tree Removal",
    description:
      "Safe and efficient removal of hazardous, unwanted, or storm-damaged trees with minimal impact to the surrounding landscape.",
  },
  {
    title: "Pruning & Trimming",
    description:
      "Structural pruning and trimming that improves tree health, appearance, and safety while keeping limbs clear of structures.",
  },
  {
    title: "Stump Grinding & Removal",
    description:
      "Complete removal of tree stumps below grade for a clean, level surface that is ready to replant or landscape.",
  },
  {
    title: "Lot & Brush Clearing",
    description:
      "Clearing unwanted brush and small trees to prepare residential or commercial land for construction or landscaping.",
  },
  {
    title: "Wood Chipping & Debris Hauling",
    description:
      "On-site chipping and hauling of limbs, logs, and green waste so your property is left clean when we finish.",
  },
  {
    title: "Tree Health Care",
    description:
      "Diagnosis and treatment to save the trees that are worth saving, plus advice on what to do next.",
  },
];

const faqs = [
  {
    question: "What tree services does Timbermen offer in Springfield, MO?",
    answer:
      "Timbermen Tree Services handles tree removal, pruning and trimming, stump grinding and removal, lot and brush clearing, wood chipping and debris hauling, and tree health care for residential and commercial properties in Springfield, Missouri.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Timbermen Tree Services is a licensed and insured tree service, and our crew is safety certified with 3+ years of experience.",
  },
  {
    question: "Do you work on residential and commercial properties?",
    answer:
      "Yes. We serve both homes and businesses, from a single tree in a backyard to lot and brush clearing on commercial parcels.",
  },
  {
    question: "How do I get a quote for tree service?",
    answer:
      "Call (417) 840-7907 or send a message through the contact form. We assess the property, walk you through your options, and provide a free, no-obligation quote with no surprises.",
  },
  {
    question: "Do you clean up after the job?",
    answer:
      "Always. Chipping and debris hauling are part of the job, and we clean up completely so your property is left better than we found it.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Timbermen Tree Services is based in Springfield, Missouri and serves Springfield and the surrounding communities. We have been caring for local trees since 2021.",
  },
];

export default function TreeService() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tree Service in Springfield, MO",
    serviceType: "Tree Service",
    description:
      "Licensed and insured tree service in Springfield, Missouri offering tree removal, pruning and trimming, stump grinding, lot and brush clearing, wood chipping, debris hauling, and tree health care for residential and commercial properties.",
    url: "https://timbermentrees.com",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://timbermentrees.com",
      name: "TIMBERMEN TREE SERVICES",
    },
    areaServed: {
      "@type": "City",
      name: "Springfield",
      containedIn: { "@type": "State", name: "Missouri" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tree Services",
      itemListElement: serviceDetails.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const faqSchema = {
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
  };

  return (
    <section id="tree-service" className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Tree Service in Springfield, Missouri
          </h2>
          <div className="w-24 h-1 bg-green-700 mb-6"></div>
          <p className="text-lg text-gray-600 mb-6">
            Timbermen Tree Services is a local, family-owned tree service serving Springfield, MO and the
            surrounding communities since 2021. Our licensed and insured crew handles tree removal, pruning and
            trimming, stump grinding, lot and brush clearing, and full debris cleanup for both residential and
            commercial properties.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Every tree service job starts with a conversation. We look at the trees with you, explain the options
            in plain language, and show you photos before any cut is made — so you always know what is happening
            on your property and why.
          </p>

          <h3 className="text-2xl font-bold mb-6">Tree Services We Provide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {serviceDetails.map((service) => (
              <div key={service.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mb-10">
            See the full list on our{" "}
            <Link href="/#services" className="text-green-700 font-medium hover:underline">
              tree services
            </Link>{" "}
            section, browse recent{" "}
            <Link href="/#projects" className="text-green-700 font-medium hover:underline">
              tree service projects
            </Link>
            , read{" "}
            <Link href="/#testimonials" className="text-green-700 font-medium hover:underline">
              customer testimonials
            </Link>
            , or jump straight to{" "}
            <Link href="/#contact" className="text-green-700 font-medium hover:underline">
              booking your free quote
            </Link>
            .
          </p>

          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions About Tree Service</h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-100 rounded-lg p-6 bg-gray-50">
                <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
