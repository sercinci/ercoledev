import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const dynamic = "force-static";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "CV of Federico Ercole, senior software and product engineer in Vienna.";

export default function CvOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Curriculum Vitae"
        subtitle="Senior software and product engineer in Vienna. Ten years of real-time AI platforms, distributed systems on AWS and full-stack products."
        url="www.ercole.dev/cv"
        note="Full experience and skills"
      />
    ),
    size
  );
}
