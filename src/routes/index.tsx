import { createFileRoute } from "@tanstack/react-router";

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
    <div
      className="relative w-full"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/hero-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

