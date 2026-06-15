import { createFileRoute } from "@tanstack/react-router";
import { HeroBackground } from "@/components/HeroBackground";

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
    </section>
  );
}
