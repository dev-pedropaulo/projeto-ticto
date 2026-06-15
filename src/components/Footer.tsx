import Image from "next/image";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Facebook, 
  ArrowRight, 
  Apple
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black select-none">
      <div className="w-full max-w-[1440px] mx-auto py-20 px-6 md:px-12 lg:px-[112px] flex flex-col gap-8 text-left">
        
        {/* Seção Superior (Frame 8) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start border-b border-white/10 pb-8">
        
        {/* Coluna 1 - Informações e Redes Sociais */}
        <div className="flex flex-col gap-8 w-full max-w-[384px]">
          {/* Logo Ticto */}
          <div className="relative w-[193px] h-[56px]">
            <Image 
              src="/logo-ticto.png" 
              alt="Logo Ticto" 
              width={193} 
              height={56} 
              className="object-contain"
            />
          </div>
          
          {/* Descrição */}
          <p className="font-tomato font-normal text-base leading-[1.5] text-[#D9D9D9]">
            A Ticto é a única plataforma focada em vendas e conversão de produtos físicos e digitais 💡
          </p>
          
          {/* Redes Sociais */}
          <div className="flex flex-row items-center gap-4">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            
            {/* Youtube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              <Youtube className="w-5 h-5" />
            </a>

            {/* Spotify */}
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              {/* Ícone customizado do Spotify */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.785-8.893-.982-.336.076-.67-.138-.747-.473-.077-.337.138-.67.473-.748 3.854-.88 7.15-.506 9.82 1.13.295.178.387.563.207.866zm1.224-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.243-.574 11.346 1.332.367.226.488.707.26 1.082zm.105-2.835C14.792 8.78 9.685 8.61 6.746 9.5c-.494.15-1.01-.128-1.16-.622-.15-.494.128-1.01.622-1.16 3.385-1.027 9.02-.832 12.62 1.306.444.263.59.837.327 1.28-.263.444-.838.59-1.28.327z"/>
              </svg>
            </a>
            
            {/* Linkedin */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              <Facebook className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-[50.67px] h-11 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all">
              {/* Ícone customizado do TikTok */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.64 4.16 1.02 1.11 2.44 1.74 3.92 1.84v3.89c-1.78-.03-3.53-.61-4.96-1.72-.12-.09-.2-.12-.38-.01v7.62c.03 2.14-.66 4.31-2 5.95-1.57 1.95-4.11 3.12-6.62 2.84-2.8-.21-5.36-2.15-6.39-4.81-.98-2.43-.72-5.33.68-7.51 1.43-2.29 4.07-3.66 6.77-3.41v3.91c-1.39-.14-2.85.34-3.79 1.39-.96 1.01-1.28 2.53-.82 3.86.43 1.34 1.77 2.36 3.19 2.42 1.45.1 2.9-.62 3.58-1.92.38-.72.48-1.55.46-2.36V.02h.02z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Coluna 2 - Páginas */}
        <div className="flex flex-col gap-8 w-full max-w-[384px]">
          {/* Título */}
          <span className="font-tomato font-bold text-base text-white">
            Páginas
          </span>
          
          {/* Menu */}
          <div className="flex flex-col w-full">
            {/* Entrar */}
            <a href="#" className="w-full h-14 border-b border-white/10 py-4 flex items-center font-tomato font-normal text-base text-white hover:text-[#1DC1DD] transition-colors duration-200">
              Entrar
            </a>
            
            {/* Suporte */}
            <a href="#" className="w-full h-14 border-b border-white/10 py-4 flex items-center justify-between font-tomato font-normal text-base text-white hover:text-[#1DC1DD] transition-colors duration-200">
              <span>Suporte</span>
              <span className="text-white hover:text-[#1DC1DD] transition-colors select-none">→</span>
            </a>
            
            {/* Blog */}
            <a href="#" className="w-full h-14 py-4 flex items-center font-tomato font-normal text-base text-white hover:text-[#1DC1DD] transition-colors duration-200">
              Blog
            </a>
          </div>
        </div>
        
        {/* Coluna 3 - Aplicativo e Cadastro */}
        <div className="flex flex-col gap-8 w-full max-w-[384px]">
          {/* Título */}
          <span className="font-tomato font-bold text-base text-white">
            Baixe o nosso aplicativo
          </span>
          
          {/* Lojas de Apps */}
          <div className="flex flex-row gap-4 w-full h-14">
            {/* Google Play */}
            <a href="#" className="flex-1 h-14 border border-white/20 rounded-full flex items-center justify-center gap-2 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200">
              {/* Ícone de Play Store customizado */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M5 3.012c-.41 0-.79.22-.98.59l9.33 9.33 3.65-3.65L5 3.012zm13.11 6.55l-3.23 3.23 3.23 3.23c1.07-.6 1.89-1.74 1.89-3.23 0-1.49-.82-2.63-1.89-3.23zM4.02 20.4c.19.37.57.59.98.59l12.11-6.27-3.65-3.65L4.02 20.4zM3 4.25v15.5c0 .48.24.93.63 1.2l9.08-9.08L3.63 3.05c-.39.27-.63.72-.63 1.2z"/>
              </svg>
              <div className="flex flex-col items-start leading-[1.1]">
                <span className="text-[9px] uppercase opacity-60 font-space font-medium">Baixar no</span>
                <span className="text-xs font-space font-bold">Google Play</span>
              </div>
            </a>
            
            {/* App Store */}
            <a href="#" className="flex-1 h-14 border border-white/20 rounded-full flex items-center justify-center gap-2 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-200">
              <Apple className="w-5 h-5" />
              <div className="flex flex-col items-start leading-[1.1]">
                <span className="text-[9px] uppercase opacity-60 font-space font-medium">Baixar na</span>
                <span className="text-xs font-space font-bold">App Store</span>
              </div>
            </a>
          </div>
          
          {/* Botão Crie sua conta com borda degradê */}
          <a 
            href="#register-form"
            className="relative flex items-center justify-between px-8 py-4 w-full h-14 rounded-[32px] overflow-hidden group border border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-[32px] before:p-[1px] before:bg-gradient-to-r before:from-[#1DC1DD] before:via-pink-500 before:to-[#7000FF] before:-z-10 before:content-[''] hover:before:brightness-125 transition-all duration-200 cursor-pointer"
          >
            <span className="font-tomato font-bold text-base text-white">
              Crie sua conta
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Seção Inferior (Frame 9) */}
      <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-0 justify-between items-center mt-4 text-center lg:text-left">
        {/* Direitos Autorais */}
        <p className="font-space font-normal text-sm leading-[1.5] text-[#D9D9D9] max-w-[587px]">
          © 2025 - Ticto Tecnologia - Todos os direitos reservados. CNPJ sob nº 28.618.386/0001-19
        </p>
        
        {/* Selos de Segurança */}
        <div className="flex flex-row items-center gap-4 select-none">
          <Image 
            src="/reclame-aqui.png" 
            alt="Selo Reclame Aqui - Prêmio 2024" 
            width={98} 
            height={44} 
            className="object-contain"
          />
          <Image 
            src="/pci-compliance.png" 
            alt="PCI Security Standards Council" 
            width={120} 
            height={44} 
            className="object-contain"
          />
        </div>
        
        {/* Políticas e Termos */}
        <a href="#" className="font-space font-normal text-sm leading-[1.5] text-[#D9D9D9] underline hover:text-white transition-colors duration-200">
          Políticas e Termos
        </a>
      </div>
    </div>
  </footer>
  );
}
