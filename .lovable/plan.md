# Plano de Migração: TanStack Start → Next.js (App Router)

> Importante: o ambiente Lovable é otimizado para TanStack Start + Vite. Next.js **não roda nativamente** no preview do Lovable da mesma forma — o dev server, SSR e deploy precisarão de ajustes (provavelmente exportação estática ou deploy externo na Vercel). Confirme se quer prosseguir mesmo assim.

---

## Visão geral

Hoje o projeto usa:
- `@tanstack/react-start` + `@tanstack/react-router` (roteamento por arquivos em `src/routes/`)
- Vite 7 como bundler
- Componentes em `src/components/` (ex.: `HeroBackground.tsx`, `LogosBar.tsx`)
- Página inicial em `src/routes/index.tsx`

A migração move tudo para a estrutura `app/` do Next.js 15 com App Router, mantendo os mesmos componentes React (eles são portáveis quase 1:1).

---

## Passo a passo

### 1. Preparar dependências
- Remover: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/react-router-devtools`, `@tanstack/router-plugin`, `vite`, `@vitejs/plugin-react`.
- Adicionar: `next@15`, `react@19`, `react-dom@19`, `eslint-config-next`.
- Manter: Tailwind v4, shadcn/ui, lucide-react, zod, react-hook-form, TanStack Query.

### 2. Criar configuração do Next.js
- `next.config.mjs` (com `images`, `experimental` conforme necessário).
- `tsconfig.json`: ajustar `moduleResolution: "bundler"`, paths `@/*` apontando para `./src/*`.
- `postcss.config.mjs` (Tailwind v4 já usa `@tailwindcss/postcss`).
- Atualizar scripts no `package.json`: `dev: next dev`, `build: next build`, `start: next start`.

### 3. Reestruturar pastas
```text
app/
  layout.tsx          ← substitui src/routes/__root.tsx
  page.tsx            ← substitui src/routes/index.tsx
  globals.css         ← move src/styles.css
src/
  components/         ← permanece (HeroBackground, LogosBar, ui/*)
  hooks/              ← permanece
  lib/                ← permanece
```

### 4. Migrar o root layout
- Converter `src/routes/__root.tsx` em `app/layout.tsx`:
  - Exportar `metadata` (title, description) no lugar de `head()`.
  - Remover `<HeadContent />`, `<Scripts />`, `<Outlet />`.
  - Estrutura `<html><body>{children}</body></html>`.
  - Mover providers (QueryClientProvider, Toaster) para `app/providers.tsx` marcado com `"use client"`.

### 5. Migrar a home
- `src/routes/index.tsx` → `app/page.tsx`.
- Remover `createFileRoute(...)`; exportar `export default function Page()`.
- Manter imports de `HeroBackground` e `LogosBar` (componentes não mudam).
- Mover `head()` para `export const metadata`.

### 6. Migrar componentes
- `HeroBackground.tsx` e `LogosBar.tsx`: nenhuma mudança de código (são puros).
- Qualquer componente que use estado/efeito ganha `"use client"` no topo.
- Substituir `<Link>` do TanStack por `next/link`.
- Substituir `useNavigate` por `useRouter` de `next/navigation`.

### 7. Migrar server functions (se houver no futuro)
- `createServerFn` → Route Handlers em `app/api/<rota>/route.ts` ou Server Actions (`"use server"`).

### 8. Tailwind e estilos
- Renomear `src/styles.css` → `app/globals.css` e importar no `app/layout.tsx`.
- Manter `@import "tailwindcss"` e tokens em `:root`.

### 9. Deletar artefatos do TanStack
- `src/router.tsx`, `src/start.ts`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`, `src/routes/index.tsx`, `vite.config.ts`.

### 10. Validar
- `bun install` + `bun run dev` → abrir `/` e conferir hero + logos.
- `bun run build` para garantir SSR/SSG.
- Conferir metadata (view-source) e responsividade.

---

## Detalhes técnicos relevantes

- **Aliases**: manter `@/*` → `./src/*` no `tsconfig.json` para não quebrar imports.
- **Imagens base64 do `LogosBar`**: continuam embutidas no SVG, sem mudanças.
- **SEO**: `metadata` API do Next substitui `head()` do TanStack com paridade total (title, description, openGraph, twitter).
- **Lovable Cloud / Supabase**: cliente browser continua igual; helpers `*.server.ts` viram Server Components ou Route Handlers.

---

## Avisos

1. O preview ao vivo do Lovable pode não renderizar Next.js da mesma forma — a edição continua funcionando, mas o preview pode exigir build estático (`next build && next export`) ou deploy externo.
2. Funcionalidades específicas do TanStack (loaders tipados, `useServerFn`, middleware de auth) precisam ser reescritas no padrão Next (Server Components + Server Actions).
3. Recomendo migrar em um único PR/sessão para evitar estado híbrido quebrado.

Confirma que quer que eu execute essa migração agora?
