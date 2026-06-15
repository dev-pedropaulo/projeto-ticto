# Color Beginnings 🚀

Uma landing page otimizada de alta conversão construída com as tecnologias de ponta do ecossistema React e Next.js. O projeto foi estruturado para ser performático, semanticamente correto, acessível e integrado com ferramentas de rastreamento de leads.

---

## 🛠️ Decisões Técnicas

O projeto foi arquitetado com as seguintes decisões e justificativas técnicas:

* **Next.js 15 (App Router) & React 19**:
  * *Motivo*: O uso do App Router permite renderização híbrida. A página principal e o layout são tratados como **Server Components (RSC)** por padrão, o que minimiza a carga de JavaScript enviada ao navegador do usuário, melhorando as métricas de performance e SEO da Landing Page.
  * *Client Components* (como o widget de formulários) são inicializados apenas sob demanda, garantindo interatividade eficiente.
* **Tailwind CSS v4 & OKLCH Colors**:
  * *Motivo*: O Tailwind CSS v4 foi escolhido por sua velocidade extrema no motor de build e integração nativa com CSS moderno.
  * *Cores*: O design system utiliza o modelo de cores `oklch` no arquivo de estilos globais. Isso permite suporte nativo a displays de ampla gama de cores (Wide Color Gamut) e melhor consistência visual entre telas.
* **Yay! Forms Integration**:
  * *Motivo*: O formulário de inscrição é incorporado dinamicamente com suporte a **parâmetros de busca transitivos** (UTMs de campanhas como `utm_source`, `utm_medium`, além de `sck` e `src` para rastreamento de vendas Ticto), permitindo a atribuição correta dos leads gerados.
* **Estruturação de Diretórios**:
  * *Motivo*: Para manter a raiz do repositório limpa e apenas com arquivos de configuração (`package.json`, `tsconfig.json`, etc.), toda a pasta de rotas `app/` foi movida para dentro de `src/app/`. Isso isola todo o código-fonte desenvolvido dentro do diretório `src/`.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos para Rodar

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/dev-pedropaulo/color-beginnings.git
   cd color-beginnings
   ```

2. **Instalar as Dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acessar a Aplicação**:
   Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000).

---

## ⚠️ Dificuldades Encontradas e Soluções

Durante o refinamento e auditoria de código do projeto, enfrentamos e solucionamos os seguintes pontos:

### 1. Recurso Bloqueante de Renderização (Performance de Fontes)
* **Dificuldade**: A fonte do projeto (*Space Grotesk*) era importada usando uma diretiva `@import url(...)` externa diretamente no topo do arquivo CSS global. Isso forçava o navegador a baixar a fonte de forma síncrona antes de renderizar a página, resultando em quedas de pontuação no Google PageSpeed Insights (métrica FCP e LCP).
* **Solução**: Migramos a fonte para a biblioteca nativa **`next/font/google`** diretamente no [layout.tsx](file:///c:/Users/devpe/OneDrive/Documentos/projeto-ticto/color-beginnings/src/app/layout.tsx). O Next.js agora hospeda os arquivos de fonte no próprio build, faz o pré-carregamento assíncrono e gera uma variável CSS nativa herdada perfeitamente no tema do Tailwind CSS v4.

### 2. Acessibilidade (A11y) para Leitores de Tela
* **Dificuldade**: Diversos botões e links críticos do rodapé (redes sociais e lojas de aplicativos) utilizavam apenas imagens SVG internas para exibição, não fornecendo nenhum tipo de texto alternativo. Usuários utilizando leitores de tela ficariam sem contexto sobre o destino dessas navegações.
* **Solução**:
  * Adicionamos rótulos acessíveis com o atributo `aria-label` descritivo em todos os tags `<a>` dos botões.
  * Aproveitamos e refatoramos o código do rodapé ([Footer.tsx](file:///c:/Users/devpe/OneDrive/Documentos/projeto-ticto/color-beginnings/src/components/Footer.tsx)) aplicando a regra DRY (*Don't Repeat Yourself*), movendo as repetições de redes sociais para um mapeamento dinâmico baseado em uma lista única.

### 3. Semântica nas Regras do Evento
* **Dificuldade**: As etapas necessárias para concorrer ao iPhone 16 Pro estavam codificadas com `div`s genéricas no HTML, o que reduzia o entendimento do fluxo sequencial por robôs de busca (SEO) e motores de acessibilidade.
* **Solução**: Substituímos as tags no componente [InfoSection.tsx](file:///c:/Users/devpe/OneDrive/Documentos/projeto-ticto/color-beginnings/src/components/InfoSection.tsx) por uma estrutura de lista ordenada `<ol>` e cada regra associada a um item de lista `<li>`, mantendo toda a fidelidade e classes de estilo visual originais.

### 4. Resíduos e Metadados do Lovable
* **Dificuldade**: Existiam arquivos residuais que não estavam sendo importados pelo projeto (ex: `src/lib/lovable-error-reporting.ts`) e o diretório `.lovable` que poluíam o repositório.
* **Solução**: Realizamos a exclusão física e lógica (no Git) de todos os arquivos desnecessários, garantindo um repositório limpo, pronto para produção.
