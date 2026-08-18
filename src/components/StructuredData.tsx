import { siteUrl } from "@/lib/seo";

/** Price is omitted for work that is quoted per case. */
type ServiceOffer = { name: string; description: string; price?: number };

const offers: ServiceOffer[] = [
  {
    name: "AI Voice Agent PoC",
    description:
      "A working browser-based voice agent using a speech-to-text and text-to-speech pipeline, wired to your own knowledge base and deployed on a demo URL.",
    price: 2900,
  },
  {
    name: "Cloud Architecture Review",
    description:
      "An independent review of your cloud infrastructure covering cost, reliability, security and scalability, delivered as a diagram, a written audit and a prioritised fix list.",
    price: 1400,
  },
  {
    name: "Agentic AI Enablement",
    description:
      "One production-ready agent or automation built inside your stack, with custom skills, tools and prompt setup, plus a runbook and a team enablement session.",
    price: 1800,
  },
  {
    name: "Business Landing Site",
    description:
      "A fast one-page Next.js website for a small business, with SEO metadata, analytics, a working contact form, deployment and your domain connected. The client owns the code outright, with optional ongoing maintenance for a monthly rate.",
    price: 1200,
  },
  {
    name: "Consultancy and existing site improvements",
    description:
      "Consultancy and improvement work on systems and websites that already exist: performance, SEO and accessibility improvements, migration away from page builders, architecture reviews before a decision is committed, and ongoing senior engineering advice. Quoted per case.",
  },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#federico`,
      name: "Federico Ercole",
      givenName: "Federico",
      familyName: "Ercole",
      url: siteUrl,
      image: `${siteUrl}/images/ED-512.png`,
      email: "mailto:federico@ercole.dev",
      jobTitle: "Senior Software Engineer",
      description:
        "Senior Software Engineer based in Vienna, Austria, with ten years of experience in real-time AI platforms, large distributed systems on AWS and full-stack product development.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressCountry: "AT",
      },
      knowsLanguage: ["en", "it", "de", "ro", "fr"],
      knowsAbout: [
        "AI voice agents",
        "Speech-to-text and text-to-speech pipelines",
        "Agentic AI and Model Context Protocol",
        "AWS serverless architecture",
        "Event-driven and distributed systems",
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Workflow automation",
      ],
      sameAs: [
        "https://linkedin.com/in/federicoercole",
        "https://github.com/sercinci",
        "https://xcore.gg",
      ],
      worksFor: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "ErcoleDev",
      url: siteUrl,
      image: `${siteUrl}/images/ED-512.png`,
      description:
        "Freelance software engineering by Federico Ercole. AI voice agents, agentic AI enablement, cloud architecture reviews and Next.js business websites, sold as fixed-scope and fixed-price packages.",
      email: "mailto:federico@ercole.dev",
      founder: { "@id": `${siteUrl}/#federico` },
      priceRange: "€1200-€2900",
      areaServed: [
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "Remote" },
      ],
      availableLanguage: ["English", "German", "Italian"],
      sameAs: ["https://www.linkedin.com/company/ercoledev"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vienna",
        addressCountry: "AT",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelance engagements",
        itemListElement: offers.map(offer => ({
          "@type": "Offer",
          name: offer.name,
          description: offer.description,
          ...(offer.price ? { price: offer.price, priceCurrency: "EUR" } : {}),
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/#services`,
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
            provider: { "@id": `${siteUrl}/#business` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ErcoleDev",
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#federico` },
    },
  ],
};

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
);
