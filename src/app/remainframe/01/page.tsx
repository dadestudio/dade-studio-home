import type { Metadata } from "next";
import { AlreadyBriefedExperience } from "./already-briefed";

export const metadata: Metadata = {
  title: "Archived Concept 01 | Already Briefed",
  description:
    "An archived RemainFrame design concept. See the canonical site for current product, capability, pricing, and legal information.",
};

export default function AlreadyBriefedPage() {
  return <AlreadyBriefedExperience />;
}
