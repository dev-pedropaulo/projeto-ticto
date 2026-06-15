import Image from "next/image";

export function InfoSection() {
  return (
    <div className="flex flex-col items-start gap-8 w-full max-w-[624px] text-left">
      {/* Badge de Destaque */}
      <div className="flex flex-row items-center py-2 px-5 gap-6 border border-[#1DC1DD]/28 bg-[#1DC1DD]/8 backdrop-blur-[6px] rounded-[250px] w-fit">
        <span className="font-tomato font-bold text-sm tracking-[0.05em] text-[#1DC1DD] uppercase">
          Transforme seu negócio em uma máquina de vendas
        </span>
      </div>

      {/* Título Principal */}
      <h1 className="font-tomato font-normal text-[32px] md:text-[38px] leading-[1.2] text-white">
        A ebulição instantânea para produtos digitais e físicos começa com a maior e mais poderosa plataforma do Brasil
      </h1>

      {/* Parágrafo de Apoio */}
      <p className="font-space font-normal text-base leading-[1.4] text-white/90">
        Milhares de empresários como você alavancaram seus negócios e alcançaram 6 e 7 dígitos no digital com as estratégias que compartilhamos.
      </p>

      {/* Card Promocional do iPhone */}
      <div className="iphone-promo-card">
        {/* Texto do Card */}
        <p className="iphone-promo-text">
          Criando sua conta na plataforma, você pode concorrer a um{" "}
          <span className="text-[#1DC1DD] font-bold">iPhone 16 Pro</span>
        </p>

        {/* Imagem do iPhone posicionada exatamente à direita */}
        <div className="iphone-promo-image-container">
          <Image 
            src="/iphone-promo.png" 
            alt="Promoção iPhone 16 Pro" 
            width={158}
            height={172}
            className="object-contain object-bottom w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Bloco de Regras e Patrocínio */}
      <div className="flex flex-col items-start gap-8 w-full mt-2">
        {/* Patrocínio */}
        <p className="font-space font-normal text-base leading-[1.4] text-white/90">
          A Ticto tem o orgulho de ser uma das patrocinadoras do evento Ebulição por Rafa Prado e trouxe esta oportunidade especial para você.
        </p>

        {/* Lista de Regras */}
        <div className="flex flex-col items-start gap-4 w-full">
          <span className="font-space font-normal text-sm leading-[1.6] text-white/50">
            Confira as regras para participar
          </span>

          <div className="flex flex-col items-start gap-3.5 w-full">
            {/* Regra 1 */}
            <div className="flex flex-row items-center gap-3.5 h-[26px]">
              <span className="font-space font-bold text-base text-[#1DC1DD] leading-[1.6] w-2 text-right">
                1
              </span>
              <div className="w-1 h-1 bg-[#1DC1DD]" />
              <span className="font-space font-normal text-base text-white leading-[1.2]">
                Crie sua conta no formulário ao lado
              </span>
            </div>

            {/* Regra 2 */}
            <div className="flex flex-row items-center gap-3.5 h-[26px]">
              <span className="font-space font-bold text-base text-[#1DC1DD] leading-[1.6] w-2 text-right">
                2
              </span>
              <div className="w-1 h-1 bg-[#1DC1DD]" />
              <span className="font-space font-normal text-base text-white leading-[1.2]">
                Deposite seu nome na urna no stand da Ticto
              </span>
            </div>

            {/* Regra 3 */}
            <div className="flex flex-row items-center gap-3.5 h-[26px]">
              <span className="font-space font-bold text-base text-[#1DC1DD] leading-[1.6] w-2 text-right">
                3
              </span>
              <div className="w-1 h-1 bg-[#1DC1DD]" />
              <span className="font-space font-normal text-base text-white leading-[1.2]">
                Aguarde o sorteio presencialmente no stand da Ticto
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
