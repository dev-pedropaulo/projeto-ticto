import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.png.asset.json";

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
      className="w-full"
      style={{
        aspectRatio: "1440 / 1543",
        backgroundImage: `url(${heroBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
