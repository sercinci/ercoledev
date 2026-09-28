import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "Work with Federico Ercole. Freelance AI, cloud and web engineering.";

export default function ServicesOpengraphImage() {
  return new ImageResponse(
    <OgCard
      badge="Available for freelance projects"
      subtitle="AI voice agents, agentic automation, cloud architecture reviews and business websites. Fixed scope, fixed price."
      url="www.ercole.dev/services"
      note="Freelance projects across Europe"
    />,
    size
  );
}
