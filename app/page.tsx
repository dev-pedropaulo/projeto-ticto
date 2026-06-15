import type { Metadata } from "next";
import { HeroBackground } from "@/components/HeroBackground";
import { LogosBar } from "@/components/LogosBar";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page em construção.",
};

export default function Page() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <HeroBackground />
      <div className="relative z-10 flex justify-center pt-10 sm:pt-12 md:pt-16 px-6">
        <LogosBar className="w-full max-w-[441px] h-auto" />
      </div>
    </section>
  );
}
