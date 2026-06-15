# 🚀 Projeto Ticto - Landing Page de Alta Conversão

Uma landing page otimizada de alta conversão construída com as tecnologias de ponta do ecossistema React e Next.js. O projeto foi estruturado para ser performático, semanticamente correto, acessível e integrado com ferramentas avançadas de rastreamento de leads.

## 🔗 Links Úteis

- **🌍 Página Publicada:** [Acessar o Projeto (Vercel)](https://projeto-ticto.vercel.app/)
- **⚙️ Teste com Parâmetros UTMs:** [Testar Rastreamento](https://projeto-ticto.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=ebulicao2026&utm_content=card_iphone&utm_term=empresarios&sck=venda_123&src=origem_teste)
- **💻 Repositório GitHub:** [dev-pedropaulo/projeto-ticto](https://github.com/dev-pedropaulo/projeto-ticto)

## 🎥 Demonstrações em Vídeo

- **Experiência do Teste Técnico:** [Assistir no YouTube](https://youtu.be/Od-eroU6tGw)
- **Demonstração de Funcionamento:** [Assistir no YouTube](https://youtu.be/ijXNaSLTd-o)

---

## 🧠 Ferramentas e Inteligência Artificial

Para otimizar o desenvolvimento, foram utilizadas as seguintes ferramentas de IA:

- **Lovable:** Utilizado para a estruturação visual inicial e sincronização contínua com o GitHub.
- **Antigravity:** Responsável por alterações mais complexas nos códigos, utilizando os modelos Gemini e Claude em background.
- **Google Gemini (Chat):** Utilizado para planejamento arquitetural e resolução de dúvidas pontuais de lógica e performance.

---

## ⚙️ Integrações de Rastreamento e Automação

O fluxo de captação de leads foi desenhado para garantir rastreabilidade total de campanhas:

### 📝 Yay Forms
- Foram utilizados os **5 campos nativos de trackeamento** (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`).
- Criação de dois **campos ocultos adicionais** para integrações específicas: `sck` e `src`.
- **Método de incorporação no site:** Standard.
- **Comunicação:** Utilização de Webhooks com Payload v2.

### 📊 Datacrazy
- Criação de novos campos individuais mapeados para cada parâmetro de trackeamento recebido.
- Configuração de uma **automação dedicada** para receber as requisições/webhooks do Yay Forms, realizar o mapeamento inteligente dos campos e processar a criação do lead no CRM.

---

## 🛠️ Decisões Técnicas e Arquitetura

O projeto foi arquitetado com base nas seguintes decisões e justificativas técnicas:

* **Next.js 15 (App Router) & React 19:**
  * *Motivo:* O uso do App Router permite renderização híbrida. A página principal e o layout são tratados como **Server Components (RSC)** por padrão, o que minimiza a carga de JavaScript enviada ao navegador do usuário, melhorando significativamente as métricas de performance e SEO da Landing Page. *Client Components* (como o widget de formulários) são inicializados apenas sob demanda, garantindo interatividade eficiente.
* **Tailwind CSS v4 & OKLCH Colors:**
  * *Motivo:* O Tailwind CSS v4 foi escolhido por sua velocidade extrema no motor de build e integração nativa com CSS moderno.
  * *Cores:* O design system utiliza o modelo de cores `oklch` no arquivo de estilos globais. Isso permite suporte nativo a displays de ampla gama de cores (*Wide Color Gamut*) e melhor consistência visual entre telas.
* **Integração Dinâmica de Formulários:**
  * *Motivo:* O formulário de inscrição é incorporado dinamicamente com suporte a **parâmetros de busca transitivos** (UTMs de campanhas, além de `sck` e `src` para rastreamento de vendas Ticto), permitindo a atribuição correta dos leads gerados independente da origem.
* **Estruturação Limpa de Diretórios:**
  * *Motivo:* Para manter a raiz do repositório limpa e apenas com arquivos de configuração (`package.json`, `tsconfig.json`, etc.), toda a pasta de rotas `app/` foi movida para dentro de `src/app/`. Isso isola todo o código-fonte desenvolvido, seguindo as melhores práticas da comunidade.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### Passos para Rodar

1. **Clone o Repositório:**
   ```bash
   git clone [https://github.com/dev-pedropaulo/projeto-ticto.git](https://github.com/dev-pedropaulo/projeto-ticto.git)
   cd projeto-ticto
