import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "ErcoleDev. Freelance AI, cloud and web engineering by Federico Ercole.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Available for freelance projects"
        subtitle="Senior software and product engineer in Vienna. AI voice agents, agentic automation and serverless AWS systems."
        url="www.ercole.dev"
        note="Freelance projects across Europe"
      />
    ),
    size
  );
}
