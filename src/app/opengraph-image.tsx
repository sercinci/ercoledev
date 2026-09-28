import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "Federico Ercole, senior software and product engineer in Vienna.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Senior software & product engineer"
        subtitle="Ten years building real-time AI voice, distributed systems on AWS and full-stack products, from the first decision to production."
        url="www.ercole.dev"
        note="Vienna, Austria"
      />
    ),
    size
  );
}
