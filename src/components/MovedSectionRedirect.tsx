"use client";

import { useEffect } from "react";

/** Sections that lived on the home page before the freelance offer moved to /services. */
const movedSections = ["#services", "#websites", "#projects"];

/** Forwards old deep links such as ercole.dev/#services, since GitHub Pages cannot redirect. */
export const MovedSectionRedirect = () => {
  useEffect(() => {
    if (movedSections.includes(window.location.hash)) {
      window.location.replace(`/services${window.location.hash}`);
    }
  }, []);

  return null;
};
