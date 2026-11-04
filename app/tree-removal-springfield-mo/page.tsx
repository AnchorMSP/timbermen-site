import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

const PAGE_URL = "https://timbermentrees.com/tree-removal-springfield-mo";
const PHONE = "(417) 840-7907";

export const metadata: Metadata = {
  title: "Tree Removal Springfield MO | Emergency Tree Service | Timbermen",
  description:
    "Tree removal in Springfield, MO by Timbermen Tree Services. Licensed and insured crews remove hazardous, storm-damaged and tight-access trees, grind stumps and haul debris. Call (417) 840-7907.",
  keywords: [
    "tree removal Springfield MO",
    "emergency tree removal Springfield MO",
    "tree service Springfield Missouri",
    "tree removal near me",
    "stump grinding Springfield MO",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tree Removal Springfield MO | Timbermen Tree Services",
    description:
      "Licensed and insured tree removal, storm response, stump grinding and cleanup in Springfield, Missouri.",
    url: PAGE_URL,
    siteName: "TIMBERMEN TREE SERVICES",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does tree removal cost in Springfield, MO?",
    answer:
      "Tree removal is quoted per property because every tree is different. The price depends on the tree's size and height, its condition and lean, how close it is to a house or other structures, equipment access, and whether stump grinding or debris hauling is included. Call Timbermen at (417) 840-7907 to discuss your tree and request a quote.",
  },
  {
    question: "Do you offer emergency tree removal in Springfield?",
    answer:
      "Yes. Timbermen provides 24/7 storm response for storm-damaged trees and limbs that threaten homes, driveways, roofs or access. Call (417) 840-7907 for emergency tree service in Springfield and surrounding communities.",
  },
  {
    question: "Are Timbermen Tree Services licensed and insured?",
    answer:
      "Yes. Timbermen Tree Services is a licensed and insured, local and family-owned tree care company serving Springfield, Missouri since 2021.",
  },
  {
    question: "What areas around Springfield do you serve?",
    answer:
      "Timbermen serves Springfield, Missouri and surrounding communities, for both residential and commercial properties.",
  },
  {
    question: "What is included in a tree removal?",
    answer:
      "Tree removal covers taking down the tree and cleaning up the resulting limbs, logs and green waste. Timbermen also offers wood chipping and debris hauling, and stump grinding or removal can be included so the area is left clean and level.",
  },
  {
    question: "Can you remove a tree in a tight residential space?",
    answer:
      "Yes. Timbermen regularly removes hazardous trees from confined residential spaces with minimal disruption to the surrounding landscape. The crew reviews the plan and shows photos before making cuts.",
  },
  {
    question: "How long does tree removal take?",
    answer:
      "The timeline depends on the tree's size, condition, access and weather. Timbermen confirms the scope and approach with you before work begins, then removes the tree and cleans the property.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#tree-removal`,
      name: "Tree Removal Springfield MO",
      serviceType: "Tree Removal",
      url: PAGE_URL,
      description:
        "Licensed and insured tree removal, emergency storm response, stump grinding and debris cleanup in Springfield, Missouri.",
      provider: { "@id": "https://timbermentrees.com" },
      areaServed: {
        "@type": "City",
        name: "Springfield",
        containedIn: { "@type": "State", name: "Missouri" },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const facts = [
  ["Location", "Springfield, Missouri"],
  ["Serving Springfield", "Since 2021"],
  ["Credentials", "Licensed and insured"],
  ["Emergency service", "24/7 storm response"],
];

const included = [
  "Hazardous, dead and storm-damaged tree removal",
  "Tight-access and confined residential removals",
  "Pruning and trimming before or after removal",
  "Stump grinding and below-grade stump removal",
  "Wood chipping, debris hauling and property cleanup",
  "Lot, brush and land clearing for homes and businesses",
];

export default function TreeRemovalSpringfieldPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 md:pt-32">
        <section className="bg-gray-50 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-green-700">Home</Link>
              <span className="mx-2">/</span>
              <span aria-current="page">Tree Removal Springfield MO</span>
            </nav>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
              Tree Removal in Springfield, MO
            </h1>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Timbermen Tree Services provides licensed and insured tree removal in Springfield, Missouri,
              for residential and commercial properties. Local crews remove hazardous, dead, storm-damaged
              and tight-access trees, grind stumps and haul away debris. For a tree removal quote, call{" "}
              <a href="tel:+14178407907" className="font-semibold text-green-700 hover:underline">{PHONE}</a>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-green-700 text-white hover:bg-green-800">
                <a href="tel:+14178407907"><Phone className="h-5 w-5" /> Call {PHONE}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-700 text-green-800">
                <Link href="/#contact">Request a quote</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-green-100 bg-white p-4">
                  <dt className="text-sm font-medium uppercase tracking-wide text-gray-500">{label}</dt>
                  <dd className="mt-1 font-semibold text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">What Springfield tree removal includes</h2>
              <p className="mb-6 text-gray-700">
                Every removal is scoped around the tree, the property and the safest way to bring it down.
                Timbermen handles the tree work and the cleanup, so you are not left with a pile of limbs or a
                stump in the yard.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-green-800 p-7 text-white md:p-9">
              <h2 className="mb-4 text-3xl font-bold">Emergency tree removal in Springfield</h2>
              <p className="mb-4 text-green-50">
                Storm-damaged trees, broken limbs and leaning trees can block access or threaten a roof.
                Timbermen provides 24/7 storm response and emergency cleanup for Springfield properties.
              </p>
              <p className="mb-6 text-green-50">
                If a tree has fallen or is in danger of falling, keep people clear of the area and call the
                crew directly.
              </p>
              <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
                <a href="tel:+14178407907"><Phone className="h-5 w-5" /> Emergency: {PHONE}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Springfield property owners choose Timbermen
            </h2>
            <p className="mb-8 max-w-3xl text-gray-700">
              Timbermen is a local, family-owned tree service that has served Springfield since 2021. The
              team is licensed and insured, explains the plan before cutting, and shows photos before work
              begins. Removals are handled for both homes and commercial properties, with cleanup included.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Local Springfield crew</h3>
                <p className="text-gray-700">Based in Springfield and serving surrounding communities since 2021.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Licensed and insured</h3>
                <p className="text-gray-700">Residential and commercial tree work with safety and property care in mind.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Clean, complete removal</h3>
                <p className="text-gray-700">Tree removal, stump grinding, chipping and debris hauling in one job.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">Tree removal FAQ for Springfield, MO</h2>
            <p className="mb-8 text-gray-700">
              Straight answers about cost, emergency service and what happens on removal day.
            </p>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-gray-900 marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 rounded-lg bg-gray-50 p-6 text-center">
              <p className="mb-4 text-lg font-semibold text-gray-900">
                Need a tree removed in Springfield, MO?
              </p>
              <Button asChild size="lg" className="bg-green-700 text-white hover:bg-green-800">
                <a href="tel:+14178407907"><Phone className="h-5 w-5" /> Call {PHONE}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
