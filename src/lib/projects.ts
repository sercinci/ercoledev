export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  /** Plays in a modal instead of linking out. Used for work that has no public URL. */
  video?: { src: string; title: string; description: string };
  /**
   * Client-facing work: live platforms and sites that show a paying client what they would get.
   * Everything else stays on the CV, where hackathon wins and side projects are the interesting part.
   */
  forClients?: boolean;
};

export const projects: Project[] = [
  {
    title: "xcore.gg",
    description:
      "Live platform giving players one gaming identity across Steam, Xbox, PlayStation and more. Built and running on AWS with a Next.js frontend, a Node.js backend and PostgreSQL behind Prisma.",
    tags: ["Next.js", "Node.js", "AWS", "Prisma", "PostgreSQL"],
    link: "https://xcore.gg",
    forClients: true,
  },
  {
    title: "Midnight Heist",
    description:
      "Minecraft experience where players hold real conversations with NPCs driven by large language models. I led the end-to-end build across the game, the web app and the real-time voice pipeline, including live transcription and spoken responses.",
    tags: ["Real-time voice", "Speech-to-Text", "Text-to-Speech", "LLM", "AWS"],
    video: {
      src: "/videos/Midnight Heist fast play through.mp4",
      title: "Midnight Heist, project demo",
      description:
        "Minecraft-based experience where players could interact with NPCs that had distinct personalities powered by large language models. I led the end-to-end implementation across Minecraft, web, and real-time voice pipeline, including live transcription and voice responses.",
    },
    forClients: true,
  },
  {
    title: "Picks & Bans",
    description:
      "Live draft platform for Age of Empires II team matches, inspired by Dota 2's Captain's Mode. Real-time drafting over server-sent events, OAuth sign-in, match tracking, leaderboards and per-player ranking history.",
    tags: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "OAuth", "SSE"],
    link: "https://picknban.xyz",
    forClients: true,
  },
  {
    title: "Nautiscuola",
    description:
      "Client work for a nautical licence school. Responsive exam simulator with chapter-organised practice tests, tuned for how students actually use it on phones between lessons.",
    tags: ["JavaScript", "Responsive Design", "Client work"],
    link: "http://nautiscuola.it/quiz/",
  },
  {
    title: "Sursk.it",
    description:
      "Full-stack Pokémon data app for Gen 3 PokeMMO tournament prep. Typed JSON API with combined filters, pagination and English and Italian localisation, containerised and deployed.",
    tags: ["Vue 3", "FastAPI", "Python", "TypeScript", "Docker"],
    link: "https://sursk.it",
    github: "https://github.com/sercinci/sursk.it",
    forClients: true,
  },
  {
    title: "Lupus Noctis",
    description:
      "Reimagining of the classic Werewolves party game as a Progressive Web App with its own characters. Keeps the social feel of a board game on a phone, and holds a perfect Lighthouse score.",
    tags: ["PWA", "Angular", "AWS Lambda", "DynamoDB", "Cognito"],
    link: "https://sercinci.github.io/lupusnoctislanding",
    github: "https://github.com/sercinci/lupusnoctislanding",
  },
  {
    title: "2BATTS",
    description:
      "Hacking Industry Camp 2018 winner with 5 awards. Gives electric car batteries a second life as domestic photovoltaic storage, with real-time monitoring and energy management.",
    tags: ["Python", "Node.js", "MongoDB", "IoT", "Raspberry Pi"],
  },
  {
    title: "Hansel & You",
    description:
      "Philips Challenge winner at Inno{Hacks} 2017. Interactive Amazon Alexa skill that turns audiobooks into user-driven narratives where listeners make the decisions.",
    tags: ["Alexa Skills", "Node.js", "Voice UI"],
    link: "https://devpost.com/software/hansel-you",
  },
  {
    title: "BeEco",
    description:
      "3rd place at the Accenture Hackathon. Platform rewarding eco-sustainable commuting with points and achievements, including brand challenges and corporate competitions.",
    tags: ["Gamification", "Sustainability", "Mobile"],
  },
];

export const clientProjects = projects.filter(project => project.forClients);
