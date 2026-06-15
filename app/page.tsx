import type { Metadata } from "next";
import { HeroBackground } from "@/components/HeroBackground";
import { LogosBar } from "@/components/LogosBar";
import { InfoSection } from "@/components/InfoSection";
import { YayFormsWidget } from "@/components/YayFormsWidget";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page em construção.",
};

export default function Page() {
  return (
    <section className="relative w-full overflow-hidden pb-16" style={{ minHeight: "100vh" }}>
      <HeroBackground />
      
      {/* Barra de Logos */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto pt-[55px] px-6 md:px-12 lg:px-[112px] flex justify-start">
        <LogosBar className="w-full max-w-[441px] h-auto" />
      </div>

      {/* Conteúdo Principal (Grid de 2 colunas) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto mt-12 md:mt-16 lg:mt-20 px-6 md:px-12 lg:px-[112px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Coluna da Esquerda (Informações) */}
        <InfoSection />

        {/* Coluna da Direita (Yay! Forms Widget) */}
        <YayFormsWidget />
      </div>
    </section>
  );
}
