import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you provide tree removal in Springfield, MO?",
    answer:
      "Yes. Timbermen Tree Services provides tree removal in Springfield, Missouri, for both residential and commercial properties. Removal work is handled safely and efficiently with minimal impact to the surrounding landscape, including hazardous trees in confined residential spaces. The team is licensed and insured, safety certified, and locally family-owned. Before any cutting, the crew educates you about your trees and shows photos so you know exactly what will be done. Chipping, debris hauling, and stump grinding are also available to leave the property clean. Call (417) 840-7907 or use the contact form for a free, no-obligation quote.",
  },
  {
    question: "What makes a tree service one of the best in Springfield, Missouri?",
    answer:
      "Timbermen Tree Services is a family-owned Springfield company serving residential and commercial properties since 2021. The team is licensed and insured, safety certified, and has 3+ years of experience. Before every cut, the crew educates customers and photographs the trees so you have peace of mind, and each job includes a free, transparent, no-obligation quote plus a complete cleanup. Customer reviews praise the crew's professionalism, safety, scheduling, and tidy results. Services include tree removal, pruning, stump grinding, lot clearing, firewood, and storm damage recovery.",
  },
  {
    question: "Do you offer emergency tree removal near Springfield, MO?",
    answer:
      "Yes. Timbermen Tree Services handles storm damage recovery and emergency response after severe storms in and around Springfield, Missouri. Work includes removing trees that have fallen on homes, tarping roofs to prevent further damage, and clearing limbs and debris from the yard. One customer review describes the crew arriving the same day a tree came down on their house during a storm, removing it, tarping the roof, and leaving the yard spotless. For urgent storm damage, call (417) 840-7907. For non-urgent work, use the contact form to request a free quote.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Straight answers about tree removal and storm damage service in
            Springfield, Missouri.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-lg border border-gray-100 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-green-700 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
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
  )
}
