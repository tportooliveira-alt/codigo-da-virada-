# Estado do Projeto — Snapshot Canônico

**Função deste arquivo:** documento de "engenharia de contexto". Lendo só este arquivo, qualquer Claude (incluindo eu mesmo amanhã) sabe exatamente o que foi decidido, onde paramos, o que tem pronto e qual o próximo passo. Ler isso antes de qualquer outra coisa numa nova conversa.

  

**Última atualização:** 09/05/2026 (final do dia) **Versão do snapshot:** 1.0

  

## 1\. Quem é quem (time)

  - **Thiago Porto** (tportooliveira@gmail.com) — CEO humano. Profissão de origem: pecuária. Aprendiz em tech. Escreve em PT-BR informal. Quer ser conduzido — passa o contexto e o Claude (CEO IA) executa.
  - **Irmã do Thiago** — dev sênior, ex-empresa de software UK, deslocada pelo mercado de IA. Vai ser a mão técnica (mini-SaaS, n8n, código).
  - **Claude (eu)** — CEO IA do projeto. Toma decisões de arquitetura, executa setup, documenta, treina os outros agentes.

  

## 2\. O que estamos construindo (visão de 1 frase)

Empresa autônoma de venda de info-produtos digitais (SaaS, mini-apps, e-books) com 6 agentes IA orquestrados rodando 24/7, integrada a Instagram + TikTok + WhatsApp + Meta Ads.

  

## 3\. Stack técnica decidida

|  |  |  |
| :-: | :-: | :-: |
| **Camada** | **Ferramenta** | **Justificativa** |
| Orquestração de agentes IA | **Paperclip AI** (paperclipai/paperclip) | Open-source, org chart real, heartbeats, skills portáveis |
| LLM dos agentes | **Claude** via assinatura Code Max (não API) | Economia de até 93%. Opus pra CEO/Closer, Sonnet pra MKT/SDR/Avaliador, Haiku pra Pós-venda |
| Trilho determinístico (financeiro) | **n8n** | Pagamento e liberação de acesso sem IA criativa interferindo |
| Plataforma de venda Fase 1A | **Cakto** | Pix 100% grátis, saque imediato. Margem máxima na validação orgânica |
| Plataforma de venda Fase 1B | **Kiwify** | Checkout convertedor + order bump nativo pra escala com Meta Ads |
| Área de membros | **Notion** público read-only | Custo zero, parece premium com blocos de código copiáveis |
| Voz/áudio (futuro) | **ElevenLabs** | Voz clonada do Thiago — diferencial competitivo real |
| Vídeo TikTok (futuro) | Revid.ai ou InVideo AI + voz ElevenLabs | Volume de conteúdo automatizado |

  

**Hospedagem do Paperclip:** local no PC do Thiago (Windows) na Fase 1; cloud (Vercel) na Fase 2.

  

**Acesso ao browser do Thiago:** ele tem **Claude in Chrome instalado e liberado**. Quando precisar mexer em Cakto, n8n.cloud, etc, eu opero direto via mcp\_\_Claude\_in\_Chrome\_\_*.

  

## 4\. Produto piloto (decidido e validado)

**Nome:** Pack IA pro Autônomo Vender Mais **Ticket:** R$ 17 lançamento / R$ 27 cheio **Nicho:** produtividade pra autônomo / freelancer / pequeno negócio **Conteúdo:**

  

  - 30 mensagens prontas de WhatsApp (4 blocos)
  - 15 templates de proposta comercial (5 nichos × 3 versões cada)
  - 50 prompts de IA prontos (7 categorias)
  - Tutorial em vídeo de 20 min
  - Bônus: grupo WhatsApp + atualizações vitalícias

  

**Meta do piloto:** 30 vendas em 30 dias pra validar. Não é faturamento, é validação.

  

## 5\. Org chart (6 agentes + trilho determinístico)

        ┌─────────────────────┐

  

        │  Thiago (humano)    │  CEO real, aprova decisões com $$$

  

        └──────────┬──────────┘

  

                   │

  

        ┌──────────▼──────────┐

  

        │  \#1 — Claude CEO IA │  Opus | orquestra, decide arquitetura

  

        └──────────┬──────────┘

  

                   │

  

   ┌────────┬─────┼──┬────────┬─────────┬──────────┐

  

   ▼        ▼     ▼  ▼        ▼         ▼          ▼

  

┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌──────┐    ┌─────────┐

  

│ \#2  │ │ \#3  │ │ \#4  │ │ \#5  │ │  \#6  │    │  n8n    │

  

│ MKT │ │ SDR │ │CLOS-│ │ PÓS-│ │AVALI │    │ TRILHO  │

  

│ IG/ │ │ WPP │ │ ER  │ │VEND │ │ADOR  │    │ DETERM. │

  

│ TIK │ │     │ │ WPP │ │     │ │SKILLS│    │ Cakto/  │

  

│Sonn │ │Sonn │ │Opus │ │Haiku│ │Sonnet│    │ Kiwify  │

  

└─────┘ └─────┘ └─────┘ └─────┘ └──────┘    │         │

  

                                              └─────────┘

  

## 6\. Estratégia de vendas em 2 fases

### Fase 1A — Validação (semanas 1-3)

  - Plataforma: **Cakto**
  - Tráfego: **orgânico** (Instagram pessoal, indicação)
  - Funil: simples (landing direta + checkout)
  - Meta: 30 vendas, custo ad zero

### Fase 1B — Escala (semanas 4-8)

  - Plataforma: **Kiwify** primária + Cakto backup
  - Tráfego: **Meta Ads** + TikTok Ads + orgânico
  - Funil completo: **VSL + Order Bump (R$ 17, áudios) + Upsell 1-clique (R$ 97 curso) + Downsell (R$ 47)**
  - Meta: 200+ vendas/mês com lucro real após ad

  

**Por que duas plataformas:** Cakto vence em margem (Pix grátis); Kiwify vence em conversão (checkout + order bump nativo). Cada uma na sua fase.

  

**Faturamento projetado em 100 vendas:**

  

  - Sem engenharia: R$ 1.700
  - Com engenharia (order bump + upsell + downsell): **R$ 3.694** (+117%)

  

## 7\. Ladder de produtos (catálogo planejado)

|  |  |  |  |
| :-: | :-: | :-: | :-: |
| **\#** | **Produto** | **Preço** | **Status** |
| 1 | Pack IA pro Autônomo (gateway) | R$ 17 lançamento / R$ 27 cheio | Conteúdo 100% pronto, falta diagramação |
| 2 | Mini-SaaS gerador de mensagem IA (recorrente) | R$ 47/mês | Irmã constrói após validação do \#1 |
| 3 | Curso completo Funil de Venda Autônomo (upsell de \#1) | R$ 97 | Produzido após validação |
| 4 | Comunidade paga / Mentoria em grupo | R$ 197/mês | Fase 2 |
| 5 | Mentoria 1:1 high-ticket | R$ 1.997 | Fase 3 distante |

  

## 8\. Decisão estratégica atual: TREINAR ANTES DE LANÇAR

**Decisão tomada em 09/05 noite:** Thiago inverteu o cronograma. Setup técnico (Cakto, n8n, lançamento) está **CONGELADO** até os 6 agentes passarem em 100% dos cenários de teste.

  

**Motivo:** lançar com agente cru queima reputação e conta de Meta Ads. Treinar bem antes vale ouro.

  

**Ordem de treinamento (do menos crítico pro mais crítico):**

  

1.  Agente \#2 — Marketing IG/TikTok (em curso, v2.0 genérico aguardando avaliação)
2.  Agente \#6 — Avaliador de Skills
3.  Agente \#5 — Pós-venda
4.  Agente \#3 — SDR WhatsApp
5.  Agente \#4 — Closer WhatsApp (mais crítico)
6.  Agente \#1 — CEO IA (validação final)

  

**Tempo estimado total:** 2-4 semanas de treinamento sólido.

  

## 9\. Mapa completo dos arquivos no workspace

oquestracao de multiagente de venda/

  

│

  

├── PLANO_EXECUTIVO.md               ← visão geral (atualizado v2)

  

├── ROADMAP_ESTUDO.md                ← 6 blocos de estudo

  

├── PRODUTO_PILOTO.md                ← decisão do piloto

  

├── ANALISE_RELATORIO_E_AJUSTES.md   ← absorção do 1º relatório

  

├── ANALISE_ESTRATEGIA_VENDAS.md     ← absorção do 2º relatório

  

├── ESTUDO_PLATAFORMAS.md            ← comparativo Cakto/Kiwify/Hotmart/etc

  

├── INSTALACAO.md                    ← Paperclip (pausado)

  

├── instalar.ps1                     ← Paperclip (pausado)

  

├── ESTADO_DO_PROJETO.md             ← VOCÊ ESTÁ AQUI (snapshot canônico)

  

│

  

├── produto/

  

│   ├── 01_mensagens_whatsapp.md     ← 30 mensagens prontas (CONTEÚDO PRONTO)

  

│   ├── 02_templates_proposta.md     ← 15 templates (CONTEÚDO PRONTO)

  

│   ├── 03_prompts_ia.md             ← 50 prompts (CONTEÚDO PRONTO)

  

│   ├── 04_roteiro_tutorial.md       ← roteiro do vídeo (PRONTO PRA GRAVAR)

  

│   ├── 05_estrutura_notion.md       ← área de membros (PRONTO PRA MONTAR)

  

│   ├── 06_cadastro_cakto.md         ← guia passo a passo

  

│   ├── 07_landing_page.html         ← página de venda (PRONTA PRA SUBIR)

  

│   ├── 08_fluxo_n8n.md              ← descrição do fluxo

  

│   └── VOZ_E_VIDEO.md               ← análise ElevenLabs/Revid (alinhar depois)

  

│

  

└── agentes/

  

    ├── PLANO_TREINAMENTO.md         ← visão do ciclo de treino

  

    └── 02_marketing_ig_tiktok.md    ← agente \#2 v2.0 genérico (AGUARDANDO AVALIAÇÃO)

  

## 10\. Onde paramos (estado preciso da última conversa)

### ✅ Concluído

  - Toda a arquitetura desenhada (stack, agentes, fases)
  - Conteúdo do Pack 100% produzido (3 ativos: mensagens, templates, prompts)
  - Tutorial roteirizado (falta gravar)
  - Notion estruturado (falta montar)
  - Landing page HTML pronta (falta colar link Cakto e subir em host)
  - Estudo de plataformas concluído (Cakto + Kiwify decididos)
  - Estudo de voz/vídeo concluído (ElevenLabs + Revid quando voltar à pauta)
  - Agente \#2 v2.0 genérico entregue

### ⏸️ Em espera por ação do Thiago

1.  **Avaliar Agente \#2** — ler agentes/02_marketing_ig_tiktok.md, dar PASSOU/AJUSTA/REFAZ por cenário (5 cenários)
2.  **Cadastro n8n.cloud** travou na escolha de subdomínio. Próxima tentativa: tentar thiagoporto, depois tportooliveira, depois thiagop. Se nenhum funcionar: investigar self-hosted via Docker (irmã faz)
3.  **Decidir tom de voz da marca** — sério/profissional? amigo/leve? ousado/direto? (afeta TODOS os agentes)

### 🚀 Próximos passos (em ordem)

1.  Resolver travada do n8n
2.  Avaliar Agente \#2 → refinar v3 ou aprovar e ir pro \#6
3.  Treinar Agente \#6 (Avaliador), depois \#5, \#3, \#4, \#1
4.  Quando todos os agentes passarem: descongelar Cakto + landing + n8n e fazer setup técnico via Claude in Chrome
5.  Diagramar PDF final do produto (Dia 6 original)
6.  Gravar 5 reels iniciais (Dia 7 original)
7.  Abrir venda → Fase 1A

  

## 11\. Decisões tomadas e suas razões (para não revisitar à toa)

|  |  |  |
| :-: | :-: | :-: |
| **Decisão** | **Razão** | **Quando foi tomada** |
| Paperclip AI (não outra orquestração) | Pedido específico do Thiago | 09/05 manhã |
| Local primeiro, cloud depois | Evitar custo no piloto | 09/05 manhã |
| Produto piloto = Pack IA (não planilha de precificação) | Pesquisa: "scripts de venda por IA" tendência 2026 + dogfood | 09/05 tarde |
| Cakto + Kiwify (não Hotmart) | Hotmart retém 30 dias e tem taxa alta | 09/05 noite (após estudo) |
| 6 agentes (não 5) | Skill Evaluator faz loop de melhoria contínua | 09/05 noite (após relatório técnico do Thiago) |
| Claude Code Max (não API direta) | Economia até 93% | 09/05 noite |
| 2 fases (validar orgânico, depois escalar) | Não queimar dinheiro de ad em produto não validado | 09/05 noite (após 2º relatório) |
| Treinar agentes ANTES de lançar | Lançar com agente cru queima conta Meta + reputação | 09/05 noite (decisão do Thiago) |
| Agente \#2 versão genérica (não nichada) | Reusabilidade pra futuros produtos | 09/05 noite (decisão do Thiago) |

  

## 12\. Coisas que NÃO esquecer entre conversas

1.  **Claude in Chrome está instalado e liberado** no PC do Thiago. Não dizer que "não posso clicar em browser".
2.  **Não criar conta no nome dele** — regra de segurança. Sempre ele preenche, eu só guio.
3.  **Não mexer com dinheiro** sem aprovação explícita por chat — aprovação no painel/popup não conta.
4.  **Tom de voz da marca** ainda não foi decidido formalmente. Os arquivos atuais usam "brasileiro + direto + sem floreio" como suposição. Quando Thiago decidir, propagar pros arquivos.
5.  **Site da pesquisa de mercado:** "scripts de venda por IA" é tendência 2026 (Stone). Cakto = Pix grátis (referência forte).
6.  **Limite de Claude in Chrome:** quando ferramentas MCP estiverem em deferred, carregar via ToolSearch antes de usar.
7.  **A pasta `paperclip/` em /tmp/ do meu sandbox foi clonada** pra estudo — NÃO está no PC do Thiago. Se precisar do código, clonar de novo no PC dele quando for hora.

  

## 13\. Como retomar amanhã (script pra próxima conversa)

Quando o Thiago abrir nova conversa e disser "continua", a primeira coisa que eu faço é:

  

1.  **Ler este arquivo** (ESTADO_DO_PROJETO.md) inteiro
2.  **Ler `MEMORY.md`** do meu sistema de memória pra confirmar contexto
3.  Sintetizar pro Thiago: "Estamos no treinamento do Agente \#2 (aguardando avaliação) + cadastro n8n travado. Próximo passo: \[X\]. Tô atualizado, pode mandar."
4.  Não pedir pra ele revisitar nenhuma decisão a menos que ele queira

  

**Pergunta padrão pra abrir conversa nova:** "Quer continuar de onde paramos (avaliar Agente \#2 ou destravar n8n) ou começar com algo diferente?"

  

## 14\. KPIs do projeto (como saber se tá indo bem)

### Curto prazo (4 semanas)

  - 6 agentes treinados e aprovados
  - n8n configurado e testado
  - Cakto cadastrada com produto ativo
  - Landing no ar
  - Notion da área de membros pronto

### Médio prazo (8 semanas)

  - 30 vendas validando o piloto (Fase 1A)
  - Funil completo da Fase 1B montado
  - Primeira venda via Meta Ads

### Longo prazo (12 semanas)

  - R$ 5.000 brutos/mês recorrentes
  - Mini-SaaS da irmã rodando (Produto \#2)
  - 1.000 seguidores qualificados no Instagram

  

  

**Resumo em 3 linhas pra ler primeiro numa volta rápida:**

  

1.  Estamos treinando Agente \#2 (Marketing IG/TikTok). Aguardando avaliação do Thiago no arquivo agentes/02_marketing_ig_tiktok.md.
2.  Setup técnico (Cakto + n8n + landing) está congelado até os 6 agentes passarem em 100%.
3.  Próximo passo concreto: Thiago avalia o Agente \#2 OU destrava o cadastro do n8n.cloud.
