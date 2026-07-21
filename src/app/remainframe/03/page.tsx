import type { Metadata } from "next";
import BusinessBook from "./business-book";

export const metadata: Metadata = {
  title: "Archived Concept 03 | The Business Book",
  description:
    "An archived RemainFrame design concept. See the canonical site for current product, capability, pricing, and legal information.",
};

export default function RemainFrameBusinessBookPage() {
  return <BusinessBook />;
}
