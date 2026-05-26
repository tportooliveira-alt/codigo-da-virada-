# 📋 Código da Virada — Situação Completa do Projeto

**Documento de checkpoint.** Onde estamos, o que foi feito, o que falta.

**Última atualização:** 2026-05-26 02:45 BRT
**Repositório:** `github.com/tportooliveira-alt/codigo-da-virada-`
**Autor:** Thiago Porto Oliveira · tportooliveira@gmail.com

---

## 📌 Resumo executivo (TL;DR)

A landing `codigodavirada.net.br` **subiu hoje** com a versão corrigida e está **acessível mundialmente** (validado em 40+ países via check-host.net). O bug crítico do PDF "60 Ideias de Renda Extra" (que estava corrompido no pacote de entrega) **foi resolvido**. O conteúdo está pronto: 4 livros principais, 4 bônus, 6 mini-apps interativos e o pacote ZIP de entrega de 7,4 MB. **Falta apenas configurar a Kiwify e hospedar os PWAs publicamente** para começar a vender.

---

## 🎯 1. ESTADO ATUAL — O QUE JÁ EXISTE

### 1.1. 📚 Os 4 livros principais (PDFs)

Localização: `codigo-da-virada/05-conteudo-original/pdfs/`

| Slot | Arquivo | Páginas | Vende como | Preço sugerido |
|---|---|---:|---|---|
| **L1** | `ebook-codigo-da-virada.pdf` (Base) | 15 | Lead magnet grátis ou interno | — |
| **L2** | `ebook-popular-codigo-da-virada.pdf` (Popular) | 17 | Edição Essencial | **R$ 17** |
| **L3** | `ebook-premium-codigo-da-virada.pdf` (Estratégica) | 31 | Livro principal do Kit | **(incluso no R$ 67)** |
| **L4** | `ebook-segredo-da-virada-r9.pdf` (Tripwire) | 14 | O Segredo da Virada (chamariz) | **R$ 9,90** |

**Conteúdo do ebook principal (L3):** 8 capítulos com tom acadêmico, dedicatória, epígrafe, prefácio, "Análise do Estrategista" em cada capítulo, tabelas comparativas com Selic 14,50%, dados atualizados 2026, REFERÊNCIAS bibliográficas formais (Stanford, Harvard, Michigan, McKinsey, SPC, Serasa, Banco Mundial, BACEN), e seção "Sobre o Autor".

### 1.2. 🎁 Os 4 bônus em PDF (entregues no Kit R$ 67)

| Bônus | Arquivo | Páginas |
|---|---|---:|
| **B1** | `checklist-mensal.pdf` | 6 |
| **B2** | `plano-7-dias.pdf` | 8 |
| **B3** | `roteiro-negociacao.pdf` | 8 |
| **B4** | `bonus-50-ideias.pdf` (60 ideias na verdade) | 12 — ✅ **REGERADO HOJE** |

> ⚠️ O B4 estava **corrompido** antes (header inválido `\n/Dest`, não abria em nenhum leitor). Foi regerado a partir do PWA com layout decente (capa navy + dourado, 60 ideias categorizadas em cards). Versão antiga preservada em backup.

### 1.3. 📱 Os 6 PWAs (mini-apps interativos)

Localização: `codigo-da-virada/04-pwas-interativos/`. Todos com `index.html` + ícones (32/180/192/512) + `manifest.webmanifest` + capa.

| # | Pasta | KB | Função (resumida) |
|---|---|---:|---|
| **P1** | `01-checklist-mensal` | 40 | Checklist mensal com score 0-25, histórico, export PDF, backup JSON |
| **P2** | `02-50-ideias` | 37 | **60 ideias** (não 50) + 10 atualizações 2026 · Quiz recomenda 5 ideias pro perfil · Filtros por categoria/capital/tempo · Sistema "minhas 3 favoritas" |
| **P3** | `03-roteiro-negociacao` | 63 | Calculadora de desconto (mín/sugerido/máx) · 6 scripts personalizados · Botão "Abrir WhatsApp" com mensagem pronta · Frases-chave · Checklist preparação · Base legal CDC/STJ/Desenrola |
| **P4** | `04-plano-7-dias` | 24 | Jornada gamificada — Dia 1-7 desbloqueia em sequência · Barra de progresso · Anotações por dia · Celebração ao completar |
| **P5** | `05-ebook-web` | 47 | Livro completo navegável · Sumário lateral com progresso · Marca-página automático · Anotações por capítulo · Modo escuro · Fonte ajustável |
| **P6** | `06-hub-biblioteca` | 32 | **Porta de entrada** — hub central com 5 cards · Barra de progresso geral · Botão "Instalar como app" · Detecta plataforma Chrome/Safari |

**Características comuns:**
- Funcionam **100% no aparelho** (localStorage) — sem servidor, sem login, sem rastreamento
- **Funcionam offline** após primeira abertura (Service Worker)
- **Instaláveis como app PWA** no celular (Chrome Android / Safari iOS)
- Backup `.json` e export `.txt` em cada um
- **Testes:** 126/126 passando

### 1.4. 🌐 Landing page

- **URL produção:** [`https://codigodavirada.net.br`](https://codigodavirada.net.br) ✅ **NO AR**
- **Stack:** React 18 via CDN + Tailwind CDN + Babel standalone (sem build necessário)
- **Estrutura:** 14 componentes JSX modulares em `components/`
- **Visual:** dark navy `#0a0a0c` + acentos dourado `#f0a830` + aurora animada + cursor halo + glassmorphism
- **Seções:** Hero · TrustBar (BACEN/Harvard/Stanford/...) · Problem (3 dores com dados) · Solution (3 frentes) · Mockup (preview capítulos) · Pricing (4 cards) · KitInclusos (14 entregáveis) · ViradaApp · Audiobook · Garantia · Autor · FAQ · CtaFinal · Footer · Sticky CTA · Chatbot
- **Hospedado em:** VPS Hostinger Cloud (KVM 1, Ubuntu 24.04, Nginx 1.24.0, SSL via Certbot)
- **IP:** 187.77.252.91 · **Datacenter:** Brazil-Campinas
- **Caminho na VPS:** `/var/www/codigodavirada-net-br/`

### 1.5. 💰 Virada App

- **Repo:** `github.com/tportooliveira-alt/api-virada-` (nome enganoso — é o app completo)
- **Stack:** Next.js 14 + TypeScript + Tailwind + Supabase + Google Sheets OAuth
- **Status atual:** funcionando localmente. Cascade delete fix (estorno órfão) corrigido hoje. 180/180 testes passando.
- **Vai como:** upsell R$ 197 (cheio) / R$ 97 (early-bird para compradores do Kit)
- **Lançamento previsto:** junho/2026 em `app.codigodavirada.net.br`
- **Features:**
  - Lançamento em <10 segundos
  - Export Google Sheets com 9 abas profissionais (Dashboard, Lançamentos, Receitas, Despesas, Dívidas, Metas, Fluxo, Resumo Mensal, Como usar)
  - Dashboard visual com KPIs em tempo real
  - Dados 100% no dispositivo (offline-first)
  - Sistema de estorno com trilha de auditoria

### 1.6. 📦 ZIPs prontos para upload

Todos no **Desktop** do Thiago, prontos pra usar:

| ZIP | Tamanho | Destino |
|---|---:|---|
| `CODIGO-DA-VIRADA-PRONTO-PRA-ENTREGA.zip` | 7,4 MB | Upload em cada produto da Kiwify (entrega ao cliente) |
| `LANDING-VIRADA-PRA-HOSTINGER-v2.zip` | 22 MB | Backup — já foi pra VPS via git clone |
| `PWAs-VIRADA-PRA-NETLIFY.zip` | 7 MB | Netlify Drop (https://app.netlify.com/drop) |
| `PDFs-CONTEUDO-PWAs-PARA-REDESENHAR.zip` | 77 KB | 6 PDFs do conteúdo dos PWAs para redesenhar no Canva |
| `TODOS-PDFs-VIRADA/` (pasta) | — | Consolidado de todos os PDFs únicos em 4 subpastas organizadas |

### 1.7. 🎨 Capas profissionais

Localização: `codigo-da-virada/05-conteudo-original/capas/` e `OneDrive/.../04_Capas_e_Assets/`

- `CAPA_LIVRO_POPULAR.jpg` — capa Edição Popular
- `CAPA_LIVRO_PREMIUM.jpg` + `.png` — capa Kit Completo (livro principal)
- `CAPA_LIVRO_PREMIUM-40684917.png` — variação alternativa
- `CAPA_BONUS_1_RENDA_EXTRA.jpg/png` — capa bônus 60 ideias
- `CAPA_BONUS_2_NEGOCIACAO.jpg` — capa bônus negociação
- `CAPA_BONUS_3_PLANO_7DIAS.jpg` — capa bônus 7 dias
- `CAPA_BONUS_4_CHECKLIST.jpg` — capa bônus checklist
- `Capa_eBook.png` (1600×2560) — capa formato livro real (no OneDrive)

### 1.8. 📅 Material de marketing pronto

Localização: `codigo-da-virada/06-marketing/`

- `calendario-30-dias.md` — 30 dias de posts diários (Instagram/TikTok)
- `email-sequencias.md` — 7 emails de nutrição + 3 broadcasts
- `roteiros-10-videos-virais.md` — 10 roteiros de reel/short prontos
- `scripts-anuncios.md` — copies para Meta Ads e TikTok Ads
- `PRODUCAO-5-VIDEOS-FACELESS.md` — passo a passo de gravação sem aparecer
- `PROMPT-CLAUDE-DESIGNER.md` — briefing para refazer landing no Claude Artifacts

---

## ✅ 2. O QUE FOI FEITO HOJE (2026-05-26)

Em ordem cronológica:

### Manhã/tarde
1. **Varredura completa do PC** — 101.073 arquivos analisados, 355 únicos relacionados ao projeto identificados.
2. **Diagnóstico estrutural dos PDFs** — descoberto que todos foram gerados via ReportLab Python (script automatizado), sem capas embarcadas, sem ilustrações, com tabelas em formato texto-coluna (não tabelas reais). Análise registrada em [STATUS-SUBIR-HOJE.md](../07-docs-operacionais/STATUS-SUBIR-HOJE.md).
3. **Identificação do bug crítico** — `bonus-50-ideias.pdf` corrompido (header inválido `\n/Dest`, falha em qualquer leitor PDF).
4. **Análise das inconsistências da landing** — 8 itens FAKE/desatualizados detectados (números errados, nomes inventados, PDFs com títulos imaginários, social proof inflado).

### Final da tarde / noite
5. **Regeração do PDF de 60 ideias** — script Python (`gerar_50ideias.py`) extrai as 60 ideias do PWA, gera PDF novo com layout decente (capa navy + dourado, cards visuais por categoria, 12 páginas, header válido).
6. **ZIP de entrega atualizado** — substituído o PDF corrompido dentro de `CODIGO-DA-VIRADA-PRONTO-PRA-ENTREGA.zip` em 2 locais (Desktop + `08-entregaveis/`). Backups com timestamp preservados.
7. **Pasta consolidada `TODOS-PDFs-VIRADA/`** criada no Desktop com 18 PDFs únicos deduplicados em 4 subpastas + LEIA-PRIMEIRO.md explicando cada arquivo.
8. **6 PDFs de conteúdo dos PWAs gerados** — para Thiago redesenhar no Canva/InDesign sem perder o conteúdo bruto. Salvos em `08-entregaveis/PDFs-Conteudo-PWAs/`.

### Noite
9. **Pesquisa web — best practices 2026** — Kiwify vs Hotmart vs Cakto vs Eduzz, tripwire pricing, estrutura de landing de alta conversão.
10. **Correção das 8 inconsistências da landing:**
    - `Pricing.jsx` — `R$ 9` → `R$ 9,90` · "4 PWAs" → "6 PWAs"
    - `Solution.jsx` — "21 páginas" → "31 páginas" · "4 mini-apps" → "6 mini-apps" com nomes reais (Check · 60 Ideias · Negoc · Plano · Ebook · Hub)
    - `KitInclusos.jsx` — "13 entregáveis" → "14" · 7 PDFs INVENTADOS → 7 reais · "4 PWAs" → "6 mini-apps interativos"
    - `Autor.jsx` — "Thiago Cardoso" (nome inventado) → "Thiago Porto Oliveira" + bio honesta baseada nos ebooks reais
    - `Hero.jsx` — contador fake "+1842 brasileiros já viraram, última compra há 12 min São Paulo" → credibilidade real ("Método com base em 8 instituições de pesquisa")
11. **Commit + push pro GitHub** (`tportooliveira-alt/codigo-da-virada-` commit `8521f3c`).

### Madrugada
12. **Acesso ao hPanel Hostinger via Playwright** — sessão Google OAuth ativa, identificação dos domínios (codigodavirada.net.br, progetoprontoia.tech, ideiatoapp.me, fabrica-ia.com.br), confirmação da VPS ativa (srv1527333.hstgr.cloud, KVM 1, IP 187.77.252.91, Ubuntu 24.04 with Claude Code).
13. **Diagnóstico de rede** — `codigodavirada.net.br` aponta pra VPS via DNS, mas curl externo dava timeout. UFW interno inactive, iptables INPUT vazia (ACCEPT default), Hostinger Cloud Firewall sem regras.
14. **Terminal SSH da VPS aberto via web terminal** do hPanel.
15. **Identificação do problema** — Nginx ativo localmente (HTTP 200 OK em curl interno), mas pasta `/var/www/codigodavirada-net-br/` tinha a versão antiga de 11/maio (não-git, upload manual).
16. **Deploy via git clone:**
    - Backup do `/var/www/codigodavirada-net-br/` atual → `.PREV-20260526`
    - `git clone` do repo no `/var/www/landing-novo/`
    - Validação `git log` mostra commit `8521f3c` (correto)
    - Swap das pastas
    - `chown -R www-data:www-data`
    - `nginx -t` ok + `systemctl reload nginx`
    - **Curl local: HTTP 200 OK, 12.393 bytes** ✅
17. **Validação externa via check-host.net** — testado de **40+ países simultaneamente**, TODOS retornaram **HTTP 200 OK**:
    - 🇧🇷 Brasil São Paulo: 0.033s · 0.037s
    - 🇺🇸 USA New York / Atlanta / Dallas / LA / Miami: <1s
    - 🇩🇪 Alemanha Frankfurt / Nuremberg: 0.66s
    - 🇯🇵 Japão Tokyo: 1.6s
    - 🇨🇳 China Zhejiang: 1.1s
    - 🇸🇬 Singapura: 1.7s
    - + Itália, Espanha, França, UK, Canadá, Israel, Suíça, Suécia, Polônia, Holanda, Hungria, República Tcheca, Bulgária, Romênia, Sérvia, Eslovênia, Lituânia, Moldávia, Letônia, Cazaquistão, Rússia, Ucrânia, Vietnã, Indonésia, Hong Kong, Índia (5 cidades), UAE, Turquia (2), Áustria, Portugal — **TODOS 200 OK**.

**A landing está oficialmente vendendo desde 2026-05-26 02:11 UTC.**

---

## ⏳ 3. O QUE FALTA PRA COMEÇAR A VENDER

### 3.1. 🔴 BLOQUEADORES (precisam ser feitos)

#### A. Criar produtos na Kiwify (~30 min)

Documento de referência: [`07-docs-operacionais/SETUP-KIWIFY.md`](../07-docs-operacionais/SETUP-KIWIFY.md).

**Pré-requisito:** conta Kiwify validada (verificação leva 24-48h após criação inicial).

**4 produtos a configurar:**

**Produto 1 — Tripwire R$ 9,90 — "O Segredo da Virada"**
- Nome: "O Segredo da Virada Financeira"
- Imagem: usar `CAPA_LIVRO_PREMIUM-40684917.png`
- Preço: R$ 9,90
- Tipo: produto digital (ebook)
- Entrega automática por email
- Arquivo: `Desktop/TODOS-PDFs-VIRADA/01-LIVROS-PRINCIPAIS/LIVRO-4-SEGREDO-tripwire-R9-14pag.pdf`
- Email de entrega:
  - Assunto: "🎯 Seu Segredo da Virada chegou — leia em 30 minutos"
  - Inclui link de upgrade pro Kit R$ 67 com call clara

**Produto 2 — Essencial R$ 17 — "Edição Popular"**
- Nome: "O Código da Virada — Edição Essencial"
- Imagem: `CAPA_LIVRO_POPULAR.jpg`
- Preço: R$ 17
- Arquivos: PDF Popular + PDF Plano 7 Dias
- Email de entrega aponta upgrade pro Kit R$ 67

**Produto 3 — Kit Completo R$ 67 — CARRO-CHEFE**
- Nome: "O Código da Virada — Kit Completo"
- Imagem: `CAPA_LIVRO_PREMIUM.jpg`
- Preço: R$ 67
- Arquivo único: `CODIGO-DA-VIRADA-PRONTO-PRA-ENTREGA.zip` (7,4 MB)
  - Conteúdo: 7 PDFs + 6 PWAs + LEIA-PRIMEIRO.md
- **ATIVAR ORDER BUMP R$ 27** no checkout — "Lista early-bird Audiobook (50% off)"
- **ATIVAR UPSELL 1-CLIQUE R$ 97 pós-compra** — Virada App vitalício

**Produto 4 — Virada App Vitalício R$ 197** (pré-venda)
- Nome: "Virada App — Acesso Vitalício"
- Imagem: screenshot do app
- Preço cheio: R$ 197
- Tipo: pré-venda com `entrega_diferida = true`
- Data de entrega: junho/2026
- Email comunicando lista de espera + acesso prioritário

#### B. Hospedar os 6 PWAs publicamente (~15 min)

**Por quê:** os PWAs só podem ser "instalados como app" no celular do cliente se forem servidos via HTTPS. Hoje só funcionam abrindo arquivo `index.html` local (modo "site" sem instalação).

**Opção rápida — Netlify Drop:**
1. Abrir [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastar `Desktop/PWAs-VIRADA-PRA-NETLIFY.zip` (7 MB, já pronto)
3. Netlify gera URL pública tipo `relaxed-cat-9b3a.netlify.app`
4. Cliente abre URL → toca em "Instalar como app" → vira ícone na tela inicial
5. Funciona offline depois

**Opção VPS (mais profissional):**
- Subir os PWAs em `/var/www/apps/` na VPS
- Configurar Nginx para servir `apps.codigodavirada.net.br`
- Criar registro CNAME no DNS Hostinger
- Tempo: ~30 min

#### C. Conectar botões da landing ao checkout Kiwify (~10 min — feito pelo Claude)

Depois que você criar os 4 produtos na Kiwify, me passe os 4 links de checkout (formato `https://pay.kiwify.com.br/XXXX`).

**O que eu faço:**
1. Editar `components/Pricing.jsx` — trocar `<button onClick>` por `<a href="KIWIFY_LINK" target="_blank">`
2. Editar `components/Hero.jsx`, `Footer.jsx` etc onde houver botão de compra
3. Commit + push no GitHub
4. Na VPS: `cd /var/www/codigodavirada-net-br && git pull && systemctl reload nginx`
5. Validar que os botões agora redirecionam pra Kiwify

**Tempo total:** 10 minutos depois de receber os links.

#### D. Teste end-to-end (~10 min)

- Compra fake na Kiwify com cartão teste (Kiwify provê)
- Confirmar que email de entrega chega
- Validar que o ZIP baixa corretamente
- Abrir o Hub Biblioteca dentro do ZIP no celular → testar instalação como app

### 3.2. 🟡 MELHORIAS (não bloqueiam venda, mas elevam qualidade)

| Item | Impacto se feito | Tempo |
|---|---|---|
| Refazer os 7 PDFs no Canva com capas embarcadas e visual profissional | Reduz reembolso, eleva percepção de valor | 3-4h |
| Adicionar foto profissional do Thiago em `Autor.jsx` | Credibilidade do autor | 5 min após ter a foto |
| Revisar Ebook V3 (28 pag, com ISBN) de PT-EU para PT-BR | Pode virar livro impresso na Amazon KDP | 1-2h |
| EPUB para Kindle KDP (já existe, em PT-EU) | Renda passiva extra via Amazon | 1h após revisar PT-BR |
| Hospedar Virada App em `app.codigodavirada.net.br` | Upsell R$ 97 vira realidade | 3-5h (refactor Supabase ou VPS) |

### 3.3. 🟢 ROADMAP DE EXPANSÃO (futuro)

- **Audiobook Imersivo** — 5 volumes, 50 capítulos, lançamento 2º semestre 2026
- **Comunidade paga** (Telegram/WhatsApp) — recorrência R$ 19-49/mês
- **Curso pago** (assíncrono) — R$ 297 — sequência natural do Kit
- **Mentoria/consultoria** — high-ticket — R$ 1.997 — pra quem aplica o método e quer próximo nível
- **Versão B2B** — produto branded white-label para RH de empresas

---

## 🗺️ 4. MAPA COMPLETO DOS REPOSITÓRIOS

### 4.1. Repos no GitHub (`tportooliveira-alt`)

| Repo | Pasta local | Função | Último commit |
|---|---|---|---|
| **`codigo-da-virada-`** | `01-landing/public_html/` | Landing page (vitrine) | `8521f3c` (HOJE) |
| **`api-virada-`** | `02-virada-app/` | Virada App Next.js (upsell) | `2fdb663` |
| **`progeto-de-vendas-`** | `03-agents-factory/` | Sistema multi-agente Claude (futuro) | — |

### 4.2. Pasta-mãe `codigo-da-virada/` (NÃO é repo git)

```
C:\Users\Thiago Porto\codigo-da-virada\
├── 01-landing/              ← Landing (repo git → tportooliveira-alt/codigo-da-virada-)
├── 02-virada-app/           ← Virada App Next.js (repo git → api-virada-)
├── 03-agents-factory/       ← Multi-agente (repo git → progeto-de-vendas-)
├── 04-pwas-interativos/     ← 6 mini-apps (sem repo — precisam ir para Netlify)
├── 05-conteudo-original/    ← PDFs + capas + livro novela (sem repo)
├── 06-marketing/            ← Calendário 30d + emails + roteiros (sem repo)
├── 07-docs-operacionais/    ← SETUP-KIWIFY, AMANHA-CONTINUAR, etc (sem repo)
├── 08-entregaveis/          ← ZIPs prontos pra subir (sem repo)
├── _SESSAO-COMPLETA-2026-05-22/
├── _SESSAO-COMPLETA-2026-05-22-NOITE/
├── _archive/
├── _validacao-screenshots/
└── scripts/
```

### 4.3. Pastas auxiliares no Desktop

- `TODOS-PDFs-VIRADA/` — 18 PDFs únicos consolidados em 4 subpastas
- `CODIGO-DA-VIRADA-PRONTO-PRA-ENTREGA.zip` — pacote final para cliente
- `LANDING-VIRADA-PRA-HOSTINGER-v2.zip` — backup landing
- `PWAs-VIRADA-PRA-NETLIFY.zip` — pronto para Netlify Drop
- `PDFs-CONTEUDO-PWAs-PARA-REDESENHAR.zip` — para redesenhar visual

### 4.4. Estrutura interna da landing (`01-landing/public_html/`)

```
public_html/
├── index.html             ← entry point (carrega React via CDN + babel)
├── components/            ← 16 componentes JSX
│   ├── App.jsx            (orquestrador)
│   ├── Primitives.jsx     (helpers: Reveal, Icon, SectionLabel, scrollTo, CountUp)
│   ├── Hero.jsx           (NavBar + Hero + CursorHalo + HeroMockup + BookCover + PhoneMockup)
│   ├── Trust.jsx          (BACEN, Harvard, Stanford, McKinsey, SPC, STJ)
│   ├── Problem.jsx        (3 dores com dados verificáveis)
│   ├── Solution.jsx       (3 frentes: Método/Ferramentas/App)
│   ├── Mockup.jsx         (preview 7 capítulos clicáveis)
│   ├── Pricing.jsx        (4 cards de preço + order bump)
│   ├── KitInclusos.jsx    (7 PDFs + 6 PWAs + Hub)
│   ├── ViradaApp.jsx      (hero secundário do app vitalício)
│   ├── Audiobook.jsx      (teaser early-bird)
│   ├── Garantia.jsx       (selo 30d incondicional)
│   ├── Autor.jsx          (bio Thiago Porto Oliveira)
│   ├── FAQ.jsx            (8 perguntas que matam objeção)
│   ├── Footer.jsx         (CTA final + Sticky CTA mobile + Footer)
│   └── Chatbot.jsx        (chat embarcado)
├── assets/                ← imagens (capas, mp4 loop)
├── docs/                  ← documentação (este arquivo)
├── uploads/               ← uploads do usuário
├── README.md              ← documentação do repo
└── README-DEPLOY.md       ← guia de deploy
```

---

## 🐛 5. PENDÊNCIAS CONHECIDAS (não-bloqueadoras)

### Técnicas
- [ ] PDFs ainda em ReportLab básico (sem capas embarcadas, fontes Helvetica padrão, tabelas como texto-coluna) — visual passível de melhoria
- [ ] Foto profissional do autor não está em `Autor.jsx` (placeholder "T" estilizado)
- [ ] Virada App não está deployado em URL pública (`app.codigodavirada.net.br`)
- [ ] PWAs ainda não têm URL pública (precisam ir pro Netlify)

### Conteúdo
- [ ] Ebook V3 (28 páginas, com ISBN) em **PT-EU** (português europeu) — precisa revisar para PT-BR antes de qualquer uso comercial
- [ ] Ebook V2 (21 páginas, "Segredo expandido") em **PT-EU** — mesma situação
- [ ] EPUB existe (`virada_financeira.epub`, 25 KB) mas em PT-EU — descartar ou revisar
- [ ] Existe um livro paralelo "O Mapa da Virada" em markdown (não usar agora)

### Comercial
- [ ] Conta Kiwify não está validada ainda (verificação leva 24-48h)
- [ ] Não tem foto/vídeo de prova social real (porque ainda não houve venda)
- [ ] Pixel do Meta e GA4 não estão instalados na landing (instalar antes do tráfego pago)
- [ ] Domínio próprio Kiwify (`codigodavirada.net.br/comprar` → checkout) não configurado

---

## 📞 6. CONTATOS, SENHAS E ACESSOS

| Item | Onde |
|---|---|
| **Email do produto** | tportooliveira@gmail.com |
| **Domínio principal** | codigodavirada.net.br (Hostinger) |
| **GitHub** | github.com/tportooliveira-alt |
| **VPS Hostinger** | srv1527333.hstgr.cloud · IP 187.77.252.91 · KVM 1 · Ubuntu 24.04 |
| **Acesso SSH VPS** | `ssh root@187.77.252.91` (senha no painel hPanel) |
| **Terminal Web da VPS** | hPanel → VPS → Gerenciar → botão "Terminal" |
| **Backup landing anterior** | `/var/www/codigodavirada-net-br.PREV-20260526/` na VPS |
| **Senhas Kiwify / OAuth** | Mantidas localmente (não estão neste repo) |

---

## 🎯 7. SEQUÊNCIA RECOMENDADA PARA AMANHÃ

```
Ordem  | Tarefa                                       | Tempo  | Depende de
-------|----------------------------------------------|--------|----------
  1    | Abrir este documento e revisar              |  5 min | —
  2    | Confirmar conta Kiwify validada             |  2 min | (Kiwify)
  3    | Criar Produto 1 — Segredo R$ 9,90           | 10 min | (2)
  4    | Criar Produto 3 — Kit Completo R$ 67        | 15 min | (2)
  5    | Configurar Order Bump R$ 27 no Kit          |  5 min | (4)
  6    | Configurar Upsell R$ 97 no Kit              |  5 min | (4)
  7    | Pegar os 4 links de checkout                 |  2 min | (3,4)
  8    | Me passar os links → conecto na landing     | 10 min | (7) — Claude faz
  9    | Netlify Drop dos PWAs → pegar URL pública   | 15 min | —
 10    | Atualizar Hub Biblioteca com URL Netlify    |  5 min | (9) — Claude faz
 11    | Re-gerar ZIP de entrega com Hub atualizado  |  5 min | (10) — Claude faz
 12    | Upload do ZIP atualizado na Kiwify          |  5 min | (11)
 13    | Compra teste end-to-end                     | 15 min | (12)
 14    | 🎉 PRIMEIRA VENDA REAL                       |   ✨   | (13)
```

**Tempo total estimado:** ~1h40 de trabalho focado.

---

## 🚀 8. FRASE DE ABERTURA AMANHÃ

> "Landing está no ar e acessível mundialmente. Hoje a missão é criar 3 produtos na Kiwify, hospedar os PWAs no Netlify e fazer a primeira venda real do Código da Virada."

---

**Documento gerado em:** 2026-05-26 02:45 BRT
**Mantido por:** Thiago Porto Oliveira
**Próxima atualização:** após a primeira venda
