# 🚀 Projeto Ticto - Landing Page de Alta Conversão

Uma landing page otimizada e de alta conversão, construída com as tecnologias de ponta do ecossistema React e Next.js. O projeto foi estruturado para ser performático, semanticamente correto, acessível e totalmente integrado com ferramentas de rastreamento de leads.

---

## 🔗 Links Úteis e Demonstração

- 🌐 **Deploy em Produção:** [projeto-ticto.vercel.app](https://projeto-ticto.vercel.app/)
- 🧪 **Teste de Tracking (com UTMs):** [Acessar URL Parametrizada](https://projeto-ticto.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=ebulicao2026&utm_content=card_iphone&utm_term=empresarios&sck=venda_123&src=origem_teste)
- 👨‍💻 **Repositório GitHub:** [dev-pedropaulo/projeto-ticto](https://github.com/dev-pedropaulo/projeto-ticto)

### 📹 Vídeos de Apresentação
- [**Pitch e Experiência do Teste Técnico**](https://youtu.be/Od-eroU6tGw) (Visão geral e considerações sobre o desenvolvimento)
- [**Demonstração Prática**](https://youtu.be/ijXNaSLTd-o) (Mostrando o funcionamento da aplicação e integrações)

---

## ⚙️ Pipeline de Dados e Rastreamento

Para garantir a captação e atribuição correta dos leads, a arquitetura de tracking foi desenhada da seguinte forma:

### 📝 Yay! Forms
- **Rastreamento:** Utilização de 5 campos nativos para UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`).
- **Parâmetros Customizados:** Criação de dois campos ocultos (`sck` e `src`) essenciais para rastreamento de vendas.
- **Incorporação:** Método *Standard* diretamente no Client Component.
- **Transmissão:** Webhooks ativados utilizando o Payload v2 para envio dos dados em tempo real.

### 📊 Datacrazy
- **Modelagem:** Criação de novos campos individuais no banco para cada parâmetro de trackeamento recebido.
- **Automação:** Fluxo de automação configurado para interceptar os webhooks do Yay! Forms, realizar o mapeamento (parsing) exato dos campos e executar a criação do lead no sistema.

---

## 🤖 Desenvolvimento Assistido por IA

O processo de construção utilizou o conceito de *AI-Assisted Development* para acelerar a entrega mantendo a alta qualidade do código:
- **Lovable:** Utilizado para a estruturação visual inicial do projeto e sincronização contínua com o GitHub.
- **Antigravity:** Refatoração, ajustes complexos e melhorias de código guiadas pelos modelos Gemini e Claude.
- **Gemini (Chat):** Brainstorming, planejamento da arquitetura e resolução de dúvidas pontuais durante a execução.

---

## 🛠️ Decisões e Arquitetura Técnica

O projeto foi arquitetado com as seguintes justificativas técnicas:

* **Next.js 15 (App Router) & React 19**: O uso do App Router permite renderização híbrida. A página principal e o layout são tratados como **Server Components (RSC)** por padrão, minimizando a carga de JavaScript enviada ao navegador do usuário e maximizando métricas de performance e SEO. *Client Components* (como o widget de formulários) são inicializados apenas sob demanda.
* **Tailwind CSS v4 & OKLCH Colors**: O Tailwind v4 foi escolhido por sua velocidade extrema no motor de build e integração nativa com CSS moderno. O design system utiliza o modelo de cores `oklch`, garantindo suporte nativo a displays de ampla gama de cores (Wide Color Gamut) e consistência visual perfeita.
* **Estruturação de Diretórios Limpa**: Para manter a raiz do repositório organizada e restrita a arquivos de configuração (`package.json`, `tsconfig.json`, etc.), toda a pasta de rotas `app/` e componentes foi isolada dentro do diretório `src/`.

---

## ⚠️ Dificuldades Encontradas e Soluções (Auditoria)

Durante o refinamento final e auditoria de código, os seguintes pontos de melhoria foram identificados e resolvidos:

### 1. Performance: Recurso Bloqueante de Renderização (Fontes)
* **Problema:** A fonte *Space Grotesk* estava sendo importada via `@import url(...)` no CSS global, forçando o download síncrono e prejudicando as métricas FCP e LCP no PageSpeed Insights.
* **Solução:** Migração para o módulo nativo `next/font/google` no `layout.tsx`. O Next.js agora hospeda as fontes no build, realiza pré-carregamento assíncrono e gera variáveis CSS nativas integradas ao tema do Tailwind v4.

### 2. Acessibilidade (A11y) em Leitores de Tela
* **Problema:** Botões e links críticos do rodapé (redes sociais e lojas de aplicativos) utilizavam apenas SVG, sem texto alternativo para softwares de leitura de tela.
* **Solução:** Implementação de atributos `aria-label` descritivos em todas as tags `<a>`. O código do rodapé também foi refatorado aplicando o princípio DRY (*Don't Repeat Yourself*), utilizando mapeamento dinâmico de listas.

### 3. Semântica para SEO e Acessibilidade
* **Problema:** As etapas do regulamento (sorteio do iPhone) estavam codificadas com `div`s genéricas, reduzindo o entendimento do fluxo por robôs de busca e motores de acessibilidade.
* **Solução:** Reestruturação semântica do componente de Informações utilizando lista ordenada `<ol>` e `<li>`, preservando 100% da fidelidade visual original.

### 4. Limpeza de Metadados Residuais
* **Problema:** Arquivos de relatórios gerados por IAs (ex: `lovable-error-reporting.ts`) e pastas ocultas estavam poluindo a estrutura.
* **Solução:** Exclusão física e limpeza do histórico Git desses assets não utilizados, entregando um repositório polido e "production-ready".

---

## 💻 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos para Rodar

1. **Clonar o Repositório**:
   ```bash
   git clone [https://github.com/dev-pedropaulo/projeto-ticto.git](https://github.com/dev-pedropaulo/projeto-ticto.git)
   cd projeto-ticto
Instalar as Dependências:

Bash
npm install
Iniciar o Servidor de Desenvolvimento:

Bash
npm run dev
Acessar a Aplicação:
Abra o seu navegador e acesse http://localhost:3000.
