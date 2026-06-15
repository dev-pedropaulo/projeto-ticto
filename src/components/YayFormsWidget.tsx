"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function YayFormsWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Retorna um esqueleto visual elegante enquanto a página carrega/hidrata no cliente
    return (
      <div className="w-full max-w-[488px] h-[748px] bg-white rounded-[6px] shadow-2xl flex items-center justify-center mx-auto lg:ml-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin w-8 h-8 rounded-full border-4 border-[#1DC1DD] border-t-transparent" />
          <span className="font-space text-sm text-gray-400">Carregando formulário...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[488px] h-[748px] bg-white rounded-[6px] shadow-2xl overflow-hidden mx-auto lg:ml-auto">
      {/* Elemento de Widget do Yay! Forms com suporte a parâmetros de URL transitivos */}
      <div 
        data-yf-widget="Nned5MX" 
        data-yf-transitive-search-params="utm_source,utm_medium,utm_campaign,utm_content,utm_term,sck,src"
        style={{ width: "100%", height: "100%" }} 
      />

      {/* Script do Yay! Forms carregado de forma preguiçosa após o carregamento completo do DOM */}
      <Script 
        src="https://embed.yayforms.link/next/embed.js" 
        strategy="lazyOnload"
      />
    </div>
  );
}
