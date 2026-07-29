import type { Metadata } from "next";
import SignalSite from "./signal-site";

export const metadata: Metadata = {
  title: "Signal",
  description:
    "A working preview of Dade Studio's professional services, original merch, and RemainFrame.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignalConceptPage() {
  return <SignalSite />;
}
