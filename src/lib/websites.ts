export type Website = {
  domain: string;
  href: string;
  role: string;
  description: string;
  tags: string[];
  /** Path under /public. Shown when the live site cannot tell the whole story on its own. */
  screenshot?: string;
  /** Explains why clicking through will not show the full product. */
  caveat?: string;
  /** Marks this very site, so the card can say so. */
  isThisSite?: boolean;
};

export const websites: Website[] = [
  {
    domain: "ercole.dev",
    href: "https://www.ercole.dev",
    role: "Built and maintained",
    description:
      "The site you are reading. Static Next.js, deployed on every push, loads instantly on a phone and is fully indexed by search engines. The same foundation I use for client sites.",
    tags: ["Instant load", "Mobile first", "Fully indexed", "Updated in minutes"],
    isThisSite: true,
  },
  {
    domain: "globalcucina.com",
    href: "https://globalcucina.com",
    role: "Built and maintained",
    description:
      "Cooking and recipe site built on Italian technique applied to food from anywhere. Recipes browsable by course and by cuisine, with search, filtering and full recipe pages. A content-heavy site that has to stay fast and stay indexed, and I keep it that way.",
    tags: ["Content site", "Search & filtering", "SEO"],
  },
  {
    domain: "ferramatori.com",
    href: "https://www.ferramatori.com",
    role: "Built and maintained",
    description:
      "Official site of a railway culture association in Northern Italy. I built it and I still keep it reliable, usable and up to date, which is exactly the ongoing maintenance I offer with every site I ship.",
    tags: ["Ongoing maintenance", "Content updates", "Maintained since 2019"],
  },
];
