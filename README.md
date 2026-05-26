# 🚀 Código da Virada Financeira — Repositório Oficial

> **Repositório principal** do produto Código da Virada Financeira.
> Contém **landing page**, **6 mini-apps (PWAs)**, **todos os ebooks em PDF + EPUB**, **capas** e **documentação operacional**.

[![Landing Status](https://img.shields.io/badge/landing-online-success)](https://codigodavirada.net.br) [![Deploy](https://img.shields.io/badge/deploy-VPS%20Hostinger-blue)](https://hpanel.hostinger.com/vps/1527333/overview) [![GitHub](https://img.shields.io/badge/last%20commit-2026--05--26-orange)](https://github.com/tportooliveira-alt/codigo-da-virada-)

🌐 **Produção:** [`https://codigodavirada.net.br`](https://codigodavirada.net.br)
👤 **Autor:** Thiago Porto Oliveira · tportooliveira@gmail.com
🛠 **Stack:** React 18 (CDN) + Tailwind + Babel · Nginx 1.24 · SSL Certbot · VPS Hostinger

---

## 📂 Estrutura do repositório

```
codigo-da-virada-/
├── 📄 README.md ............................. este arquivo
├── 📄 README-DEPLOY.md ...................... guia de deploy passo a passo
├── 📄 index.html ............................ entry point da landing (React via CDN)
├── 📄 app.jsx ............................... loader do React
├── 📄 image-slot.js ......................... helper de imagens
├── 📄 .gitignore
│
├── 📁 components/ ........................... 16 componentes JSX da landing
│   ├── App.jsx .............................. orquestrador principal
│   ├── Primitives.jsx ....................... Reveal, Icon, SectionLabel, helpers
│   ├── Hero.jsx ............................. NavBar + Hero + Cursor halo + Mockups
│   ├── Trust.jsx ............................ BACEN, Harvard, Stanford, McKinsey...
│   ├── Problem.jsx .......................... 3 dores com dados verificáveis
│   ├── Solution.jsx ......................... 3 frentes: Método/Ferramentas/App
│   ├── Mockup.jsx ........................... preview 7 capítulos clicáveis
│   ├── Pricing.jsx .......................... 4 cards (R$9,90 / R$17 / R$67 / R$197)
│   ├── KitInclusos.jsx ...................... 7 PDFs + 6 PWAs + Hub
│   ├── ViradaApp.jsx ........................ hero do app vitalício
│   ├── Audiobook.jsx ........................ teaser early-bird
│   ├── Garantia.jsx ......................... selo 30 dias incondicional
│   ├── Autor.jsx ............................ bio Thiago Porto Oliveira
│   ├── FAQ.jsx .............................. 8 perguntas que matam objeção
│   ├── Footer.jsx ........................... CTA final + Sticky CTA mobile
│   └── Chatbot.jsx .......................... chat embarcado
│
├── 📁 assets/ ............................... imagens da landing
│   ├── CAPA_LIVRO_POPULAR.jpg
│   ├── CAPA_LIVRO_PREMIUM.jpg
│   ├── CAPA_BONUS_1_RENDA_EXTRA.jpg
│   ├── CAPA_BONUS_2_NEGOCIACAO.jpg
│   ├── CAPA_BONUS_3_PLANO_7DIAS.jpg
│   ├── CAPA_BONUS_4_CHECKLIST.jpg
│   └── virada-capa-loop.mp4
│
├── 📁 docs/ ................................. documentação operacional
│   └── SITUACAO-COMPLETA-2026-05-26.md ...... checkpoint completo (420 linhas)
│
├── 📁 uploads/ .............................. uploads do cliente
│
├── 📁 apps/ ................................. 🆕 6 MINI-APPS (PWAs)
│   ├── 01-checklist-mensal/ ................. score 0-25, histórico, export PDF
│   ├── 02-50-ideias/ ........................ 60 ideias + quiz + filtros
│   ├── 03-roteiro-negociacao/ ............... calc desconto + 6 scripts + WhatsApp
│   ├── 04-plano-7-dias/ ..................... jornada gamificada
│   ├── 05-ebook-web/ ........................ livro navegável + anotações
│   └── 06-hub-biblioteca/ ................... 🚪 PONTO DE ENTRADA — hub central
│
└── 📁 ebooks/ ............................... 🆕 TODOS OS LIVROS
    ├── livros-principais/ ................... 4 PDFs principais (PT-BR)
    │   ├── LIVRO-1-base-15pag.pdf ........... versão essencial
    │   ├── LIVRO-2-popular-17pag.pdf ........ Edição Popular (R$ 17)
    │   ├── LIVRO-3-premium-31pag.pdf ........ Edição Estratégica (Kit R$ 67)
    │   └── LIVRO-4-SEGREDO-tripwire-R9-14pag.pdf ... Segredo (R$ 9,90)
    ├── bonus/ ............................... 4 bônus em PDF
    │   ├── BONUS-1-60-ideias-12pag.pdf
    │   ├── BONUS-2-checklist-mensal-6pag.pdf
    │   ├── BONUS-3-plano-7-dias-8pag.pdf
    │   └── BONUS-4-roteiro-negociacao-8pag.pdf
    ├── alternativas/ ........................ versões PT-EU + EPUB (arquivar/futuro)
    │   ├── ALT-V3-28pag-PT-EU-com-ISBN.pdf .. versão com ISBN (para Amazon KDP)
    │   ├── ALT-V2-Segredo-21pag-PT-EU.pdf ... segredo expandido (PT europeu)
    │   ├── ALT-Premium-12pag-PT-EU.pdf ...... resumida PT-EU
    │   └── ALT-EPUB-pra-Kindle.epub ......... formato Kindle
    └── capas-hd/ ............................ capas em alta resolução
        ├── CAPA_LIVRO_PREMIUM.png ........... capa do livro Kit (2,3 MB)
        ├── CAPA_BONUS_1_RENDA_EXTRA.png ..... capa bônus 60 ideias HD
        └── bonus-01-planilha.png ... bonus-05-checklist.png
```

---

## 🛒 Matriz comercial

| Slot | Produto | Preço | Conteúdo | Capa |
|---|---|---:|---|---|
| **00** | **Segredo da Virada** (chamariz) | **R$ 9,90** | `ebooks/livros-principais/LIVRO-4-SEGREDO-tripwire-R9-14pag.pdf` | `assets/CAPA_LIVRO_POPULAR.jpg` |
| **01** | **Edição Essencial** (tripwire) | **R$ 17** | `LIVRO-2-popular-17pag.pdf` + `BONUS-3-plano-7-dias-8pag.pdf` | `CAPA_LIVRO_POPULAR.jpg` |
| **02** | **Kit Completo** (carro-chefe) | **R$ 67** | 7 PDFs + **6 mini-apps interativos** + Hub | `CAPA_LIVRO_PREMIUM.jpg` |
| **02b** | + Order Bump | +R$ 27 | Lista early-bird audiobook (50% off) | mockup audiobook |
| **02c** | + Upsell 1-clique | +R$ 97 | Virada App vitalício (junho/2026) | screenshot app |
| **03** | **Virada App vitalício** (standalone) | **R$ 197** | Acesso vitalício + atualizações eternas | — |

**Garantia:** 30 dias incondicional, sem questionário.
**Plataforma:** Kiwify (order bump nativo + upsell 1-clique + Pix instantâneo).

---

## 📱 Os 6 mini-apps (PWAs)

Localização: `apps/` · Todos com `index.html` + ícones + `manifest.webmanifest` + capa.

| # | App | KB | O que faz |
|---|---|---:|---|
| **01** | **Checklist Mensal** | 40 | 6 seções (Renda · Gastos · Dívidas · Renda Extra · Reserva · Direção) → **score 0-25** + histórico mensal + export PDF + backup JSON |
| **02** | **60 Ideias de Renda Extra** | 37 | Quiz (4 perguntas) recomenda 5 ideias pro perfil · 60 ideias em 6 categorias · Filtros (capital, tempo, categoria) · Sistema "minhas 3 favoritas" |
| **03** | **Roteiro de Negociação** | 63 | Calculadora desconto (mín/sugerido/máx) · 6 scripts personalizados · **Botão "Abrir WhatsApp"** · Checklist preparação · Base legal CDC/STJ/Desenrola 2026 |
| **04** | **Plano de 7 Dias** | 24 | Jornada gamificada · Dia 1-7 desbloqueia em sequência · Anotações por dia · Barra de progresso · Celebração ao completar |
| **05** | **Ebook Web** | 47 | Livro principal navegável · Sumário lateral com progresso · Marca-página automático · Anotações por capítulo · Modo escuro · Fonte ajustável |
| **06** | **Hub Biblioteca** | 32 | 🚪 **PORTA DE ENTRADA** — 5 cards · Progresso geral · Botão "Instalar como app" · Detecta Chrome/Safari |

**Características comuns:**
- 🔒 Dados 100% no aparelho (localStorage) · sem servidor · sem login · sem rastreamento
- 📡 Funciona offline depois da 1ª abertura (Service Worker)
- 📲 Instalável como app no celular (Chrome Android / Safari iOS)
- 💾 Backup `.json` e export `.txt` em cada um
- ✅ 126/126 testes passando

**URLs (após git pull na VPS):**
- `codigodavirada.net.br/apps/06-hub-biblioteca/` ← cliente abre aqui primeiro
- `codigodavirada.net.br/apps/01-checklist-mensal/`
- `codigodavirada.net.br/apps/02-50-ideias/`
- `codigodavirada.net.br/apps/03-roteiro-negociacao/`
- `codigodavirada.net.br/apps/04-plano-7-dias/`
- `codigodavirada.net.br/apps/05-ebook-web/`

---

## 📚 Ebooks — formatos e versões

### Versões oficiais (PT-BR, prontas pra vender)

| Arquivo | Pag | KB | Vende como |
|---|---:|---:|---|
| `ebooks/livros-principais/LIVRO-1-base-15pag.pdf` | 15 | 29 | Lead magnet grátis |
| `ebooks/livros-principais/LIVRO-2-popular-17pag.pdf` | 17 | 34 | Essencial R$ 17 |
| `ebooks/livros-principais/LIVRO-3-premium-31pag.pdf` | 31 | 66 | **Livro principal do Kit R$ 67** |
| `ebooks/livros-principais/LIVRO-4-SEGREDO-tripwire-R9-14pag.pdf` | 14 | 136 | **Chamariz R$ 9,90** |
| `ebooks/bonus/BONUS-1-60-ideias-12pag.pdf` | 12 | 21 | Bônus Kit (regerado 26/maio) |
| `ebooks/bonus/BONUS-2-checklist-mensal-6pag.pdf` | 6 | 11 | Bônus Kit |
| `ebooks/bonus/BONUS-3-plano-7-dias-8pag.pdf` | 8 | 14 | Bônus Kit |
| `ebooks/bonus/BONUS-4-roteiro-negociacao-8pag.pdf` | 8 | 15 | Bônus Kit |

### Versões alternativas (PT-EU + EPUB)

> ⚠️ **Não usar agora** — em português europeu ("rendimento", "controlo"). Guardadas para revisão futura PT-BR antes de eventual venda na Amazon KDP.

| Arquivo | Pag | KB | Uso futuro |
|---|---:|---:|---|
| `ebooks/alternativas/ALT-V3-28pag-PT-EU-com-ISBN.pdf` | 28 | 160 | **Tem ISBN** sendo solicitado à CBL → livro físico |
| `ebooks/alternativas/ALT-V2-Segredo-21pag-PT-EU.pdf` | 21 | 151 | Versão expandida do tripwire |
| `ebooks/alternativas/ALT-Premium-12pag-PT-EU.pdf` | 12 | 127 | Resumida |
| `ebooks/alternativas/ALT-EPUB-pra-Kindle.epub` | — | 25 | **Pra Amazon Kindle KDP** (revisar PT-BR primeiro) |

### Capas

- **JPGs principais** (em `assets/`): POPULAR, PREMIUM, BONUS_1-4 (usadas na landing)
- **PNGs alta resolução** (em `ebooks/capas-hd/`): para impressão, mídia kit, marketplace

---

## 🌐 Landing page — como funciona

A landing usa **React 18 via CDN** + Babel standalone — **sem build necessário**. Editou JSX? Salva o arquivo, recarrega o navegador, pronto.

**Stack visual:**
- Fundo dark `#0a0a0c` + aurora animada
- Acentos dourados `#f0a830`
- Glassmorphism (`liquid-glass`)
- Cursor halo (gradiente segue o mouse)
- Reveal blur→focus on scroll
- Sticky CTA mobile

**Seções (em ordem):**

1. **NavBar** — logo + menu + botão "Quero o Kit R$ 67"
2. **Hero** — headline "Você pagou R$ 3.200 em juros este ano sem perceber" + mockup 3D book+phone
3. **TrustBar** — BACEN · Harvard · Stanford · McKinsey · SPC · STJ
4. **Problem** — 3 dores com dados verificáveis (64% · 437% · 80%)
5. **Solution** — 3 frentes (Método · Ferramentas · App vitalício)
6. **Mockup** — preview dos 7 capítulos clicáveis
7. **Pricing** — 4 cards de preço + order bump
8. **KitInclusos** — 7 PDFs + 6 PWAs + Hub
9. **ViradaApp** — hero secundário do app vitalício R$ 197
10. **Audiobook** — teaser early-bird (5 volumes, 50 capítulos, 2º sem 2026)
11. **Garantia** — selo 30 dias incondicional
12. **Autor** — bio Thiago Porto Oliveira + 3 stats reais
13. **FAQ** — 8 perguntas que matam objeção
14. **CtaFinal** — "Você pode fechar essa página e continuar pagando..."
15. **Footer** + Sticky CTA mobile + Chatbot embarcado

---

## 🚀 Deploy — como sobe novas alterações

### Setup atual (já configurado)

- **DNS:** `codigodavirada.net.br` → `187.77.252.91` (VPS Hostinger Cloud)
- **VPS:** `srv1527333.hstgr.cloud` · KVM 1 · Ubuntu 24.04 with Claude Code
- **Servidor web:** Nginx 1.24.0 com SSL via Certbot
- **Pasta servida:** `/var/www/codigodavirada-net-br/` (clone deste repo)

### Atualizar landing (~30 segundos)

```bash
# 1. Edita arquivos localmente em components/*.jsx
# 2. Commit + push
git add .
git commit -m "fix: atualizacao X"
git push origin main

# 3. SSH na VPS (ou usa o Terminal Web do hPanel)
ssh root@187.77.252.91
cd /var/www/codigodavirada-net-br
git pull
systemctl reload nginx

# 4. Validação
curl -sI -H 'Host: codigodavirada.net.br' https://localhost --insecure | head -3
```

Deploy é **idempotente** e o git mantém histórico. Se algo quebrar:

```bash
cd /var/www/codigodavirada-net-br && git reset --hard HEAD~1 && systemctl reload nginx
```

### Restaurar versão anterior (catastrófico)

A versão pré-2026-05-26 está em `/var/www/codigodavirada-net-br.PREV-20260526/`:

```bash
cd /var/www
mv codigodavirada-net-br codigodavirada-net-br.NOVA
mv codigodavirada-net-br.PREV-20260526 codigodavirada-net-br
systemctl reload nginx
```

---

## 📋 O que falta pra começar a vender

> Detalhes completos em [`docs/SITUACAO-COMPLETA-2026-05-26.md`](docs/SITUACAO-COMPLETA-2026-05-26.md).

| # | Tarefa | Tempo | Quem faz |
|---|---|---|---|
| 1 | Confirmar conta Kiwify validada | 2 min | Thiago |
| 2 | Criar 3 produtos Kiwify (R$ 9,90 / R$ 67 / R$ 197) | 30 min | Thiago |
| 3 | Order bump R$ 27 + Upsell 1-clique R$ 97 | 10 min | Thiago |
| 4 | Conectar links Kiwify nos botões da landing | 10 min | Claude |
| 5 | Teste end-to-end com cartão teste | 15 min | Thiago |
| 6 | **PRIMEIRA VENDA** 🎉 | — | — |

**Total estimado:** ~1h até estar vendendo.

---

## 🔗 Links úteis

- **Landing produção:** https://codigodavirada.net.br
- **hPanel Hostinger:** https://hpanel.hostinger.com
- **Repo GitHub:** https://github.com/tportooliveira-alt/codigo-da-virada-
- **Documento completo do projeto:** [`docs/SITUACAO-COMPLETA-2026-05-26.md`](docs/SITUACAO-COMPLETA-2026-05-26.md)
- **Outros repos relacionados:**
  - `tportooliveira-alt/api-virada-` — Virada App (Next.js 14 + Supabase)
  - `tportooliveira-alt/progeto-de-vendas-` — Agents Factory (multi-agente Claude)

---

## 🆘 Suporte

- 📧 **Email do produto:** tportooliveira@gmail.com
- 🛡 **Garantia:** 30 dias incondicional, sem questionário
- 🌐 **Domínio:** `codigodavirada.net.br` (Hostinger)

---

## 📜 Licença

© 2026 Thiago Porto Oliveira — Todos os direitos reservados.
Conteúdo educacional. Não constitui recomendação de investimento (CVM Resolução 178/2023).
