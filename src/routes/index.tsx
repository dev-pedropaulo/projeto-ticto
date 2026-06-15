import { createFileRoute } from "@tanstack/react-router";
import { HeroBackground } from "@/components/HeroBackground";
import { LogosBar } from "@/components/LogosBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landing Page" },
      { name: "description", content: "Landing page em construção." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      <HeroBackground />
      <div className="relative z-10 flex justify-center pt-10 sm:pt-12 md:pt-16 px-6">
        <LogosBar className="w-full max-w-[441px] h-auto" />
      </div>
    </section>
  );
}
