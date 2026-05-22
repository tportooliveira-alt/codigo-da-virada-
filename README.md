# 🚀 Código da Virada — Landing Page

> Landing page do infoproduto **O Código da Virada Financeira** — método acadêmico de educação financeira pra brasileiros que ganham bem mas vivem no zero.

**Site em produção:** https://codigodavirada.net.br
**Stack:** React 18 + Tailwind via CDN + Babel standalone (single-page, sem build)
**Hospedagem:** Hostinger compartilhada (deploy via Git Auto-Deploy ou upload manual)

---

## 🎨 Arquitetura

### Stack (intencionalmente simples)

- **React 18.3.1** via UMD (CDN unpkg)
- **Tailwind CSS** via CDN com config inline customizada
- **Babel standalone** pra JSX inline em `<script type="text/babel">`
- **Sem build, sem npm, sem webpack** — abre `index.html` e roda
- Fontes: Instrument Serif (editorial italic) + Barlow (sans humanista) + JetBrains Mono

### Por que essa stack?

- ✅ Deploy via FTP ou Git — funciona em qualquer hospedagem compartilhada
- ✅ Sem build step = sem `node_modules` = sem CVE em deps
- ✅ Tempo de iteração ultracurto (edita .jsx → F5)
- ❌ Performance ligeiramente pior que Next/Vite (Babel runtime no client)
- ❌ Sem TypeScript

---

## 📁 Estrutura

```
public_html/
├── index.html              ← entrypoint (carrega React + Tailwind + 16 JSX em ordem)
├── components/
│   ├── Primitives.jsx      ← useReveal, Reveal, CountUp, Icon, Eyebrow, SectionLabel, Logo
│   ├── Hero.jsx            ← NavBar, CursorHalo, Hero, BookCover, PhoneMockup, FloatingChip
│   ├── Trust.jsx           ← TrustBar (BACEN, Harvard, Stanford logos)
│   ├── Problem.jsx         ← 3 dores escalonadas
│   ├── Solution.jsx        ← Método + Ferramentas + App
│   ├── Mockup.jsx          ← MethodMockup (7 capítulos clicáveis + livro 3D)
│   ├── Pricing.jsx         ← 4 cards: R$ 9 / 17 / 67 / 197 (com capas)
│   ├── KitInclusos.jsx     ← 7 PDFs + 4 PWAs (com capas reais dos bônus) + Hub
│   ├── ViradaApp.jsx       ← Hero secundário do app vitalício
│   ├── Audiobook.jsx       ← Teaser order bump audiobook
│   ├── Garantia.jsx        ← Selo 30 dias incondicional
│   ├── Autor.jsx           ← Thiago + credibilidade
│   ├── FAQ.jsx             ← 6-8 perguntas matando objeções
│   ├── Footer.jsx          ← CtaFinal + StickyCTA mobile + Footer
│   ├── Chatbot.jsx         ← Widget IA flutuante com exit-intent
│   └── App.jsx             ← Mount root (ordem importa)
├── assets/
│   ├── CAPA_LIVRO_PREMIUM.jpg     ← Hero/BookCover
│   ├── CAPA_LIVRO_POPULAR.jpg     ← Pricing R$ 9 thumb
│   ├── CAPA_BONUS_1_RENDA_EXTRA.jpg
│   ├── CAPA_BONUS_2_NEGOCIACAO.jpg
│   ├── CAPA_BONUS_3_PLANO_7DIAS.jpg
│   └── CAPA_BONUS_4_CHECKLIST.jpg ← KitInclusos PWA cards
├── uploads/                ← imagens extras (alguns duplicadas)
├── docs/                   ← documentação técnica antiga
├── README-DEPLOY.md        ← (legado, ver doc atual no projeto-mãe)
└── image-slot.js           ← script auxiliar pra placeholders
```

---

## 🛠️ Desenvolvimento local

```powershell
# Servir local (porta 5500)
cd "C:\Users\Thiago Porto\codigo-da-virada\01-landing\public_html"
python -m http.server 5500

# Abrir
start http://localhost:5500
```

**Iterar:** edita qualquer `.jsx` → Ctrl+Shift+R no browser → vê a mudança.

**Adicionar componente novo:**
1. Cria `components/Novo.jsx` com `function Novo() { ... }` + `window.Novo = Novo;` no fim
2. Adiciona `<script type="text/babel" src="components/Novo.jsx"></script>` no `index.html` (antes de `App.jsx`)
3. Adiciona `<Novo />` em `App.jsx`

---

## ✅ Validar antes de deploy

```bash
# Validar que todos os JSX compilam (precisa @babel/core instalado)
node -e "
const b = require('@babel/core');
const fs = require('fs');
const dir = 'components';
let failed = [];
fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
  try {
    b.transformSync(fs.readFileSync(dir + '/' + f, 'utf8'), { presets: [['@babel/preset-react', {runtime:'classic'}]] });
    console.log('OK', f);
  } catch (e) { failed.push(f + ': ' + e.message); }
});
if (failed.length) { console.log('FAIL:', failed); process.exit(1); }
"
```

---

## 🚀 Deploy

### Opção A — Git Auto-Deploy (preferido)

Configurado no hPanel Hostinger 1x. Depois disso, qualquer `git push origin main` deploya em ~30s.

Doc completo: `../../07-docs-operacionais/HOSTINGER-GIT-AUTODEPLOY-PASSO-A-PASSO.md`

### Opção B — Upload manual ZIP

ZIP pronto: `../../08-entregaveis/LANDING-PRONTA-HOSTINGER.zip` (13.46 MB)

hPanel → File Manager → `public_html/` → backup → upload + extract.

### Validar deploy

```bash
curl -sI https://codigodavirada.net.br/
# Esperado:
#   HTTP 200, Content-Length ≥ 12KB, Last-Modified hoje
#   Title contém "Pare de pagar juros invisíveis"
```

---

## 🎨 Design tokens (CSS custom em `index.html`)

| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#0a0a0c` | BG geral |
| `--bg-elevated` | `rgba(255,255,255,0.04)` | Cards |
| `--accent-gold` | `linear-gradient(135deg, #f0a830, #d48a1f)` | CTA |
| `--accent-glow` | `rgba(240,168,48,0.28)` | Glow em mockups |
| `--text-primary` | `#ffffff` | Headlines |
| `--text-secondary` | `rgba(255,255,255,0.75)` | Body |
| `--text-muted` | `rgba(255,255,255,0.55)` | Microcopy |
| `--radius-card` | `1.25rem` | Cards |
| `--radius-pill` | `9999px` | Botões |

**Animações disponíveis (CSS only):**
- `.aurora` — gradiente dourado se movimentando (22s loop)
- `.reveal` + `.in` — blur→focus on scroll (via IntersectionObserver em `Primitives.jsx`)
- `.mockup-3d` — celular flutuando 3D
- `.book-spin` — livro girando Y
- `.pulse-glow` — chatbot pulsando dourado
- `.btn-gold` — gradiente + box-shadow 3D no hover
- `.marquee` — TrustBar logos rolando

---

## 📌 Pricing atual (4 planos)

| Plano | Preço | Pra quem | CTA destino |
|---|---|---|---|
| Segredo da Virada | R$ 9 | "Quero entender em 30 min" | (pendente) |
| Essencial (Tripwire) | R$ 17 | "Quero testar antes" | (pendente — Cakto ou Kiwify) |
| **Kit Completo** ⭐ | **R$ 67** | "Quero o método completo" | (pendente) |
| Virada App | R$ 197 | "Pra sempre, sem mensalidade" | `app.progetoprontoia.tech` |

**Order bump:** +R$ 27 → Audiobook lista early-bird 50% off
**Upsell 1-click:** +R$ 97 → Virada App vitalício pós-Kit

**TODO crítico:** trocar `(pendente)` por URLs reais do Cakto OU Kiwify (decisão pendente do owner).

---

## 🧩 Contextos relacionados

- **Pasta-mãe (workspace completo):** `C:\Users\Thiago Porto\codigo-da-virada\`
- **Obsidian (segundo cérebro):** `[[codigo-da-virada]]` em `C:\Users\Thiago Porto\obsidian\01-Projetos\`
- **Virada App (full-stack que vende R$ 197):** repo `tportooliveira-alt/api-virada-` — em pasta-mãe `02-virada-app/`
- **Agents Factory (sistema multi-agente):** repo `tportooliveira-alt/progeto-de-vendas-` — em pasta-mãe `03-agents-factory/`

---

## ✏️ Como ajustar (quando voltar amanhã/depois)

**Mudar copy:**
- Hero claim → `components/Hero.jsx` linha ~115
- Pricing CTA texto → `components/Pricing.jsx` array `plans`
- FAQ perguntas → `components/FAQ.jsx`

**Mudar cores:**
- Variáveis CSS em `index.html` (linha 36-49)
- Config Tailwind em `index.html` (linha 14-34)

**Adicionar/trocar capa de ebook:**
- Coloca `.jpg` ou `.png` em `assets/`
- Atualiza referência no componente correspondente (Hero/KitInclusos/Pricing)

**Trocar URL de checkout:**
- Por agora os CTAs são placeholders. Quando definir Cakto vs Kiwify:
  - `components/Pricing.jsx` PriceCard `<button>` (linha ~209) — adicionar `onClick={() => window.location = 'URL'}`

**Deploy automático após mudança:**
```powershell
git add -A
git commit -m "ajuste: <o que mudou>"
git push origin main
# se Git auto-deploy configurado, 30s depois tá no ar
```

---

## 🤖 Histórico de iterações

| Commit | Data | O quê |
|---|---|---|
| `e9a3a66` | 2026-05-22 | Redesign completo via Claude Designer + capas reais |
| `f6d1b2d` | 2026-05-22 | Seção dedicada Virada App com mockup 3D + pricing R$ 197 |
| `c811a55` | 2026-05-21 | Nova arquitetura comercial: pricing R$17/R$67/R$197 + garantia 30d + audiobook |
| `891553b` | 2026-05-21 | Initial commit (multi-produto) |

---

## 📞 Suporte / dúvidas

Owner: Thiago Porto Oliveira (tportooliveira@gmail.com)
Sessões de trabalho: registradas em `[[codigo-da-virada]]` no Obsidian.

Quando abrir nova sessão Claude Code, peça pra ele ler:
1. Este README
2. `[[codigo-da-virada]]` no Obsidian (seção `## Log`)
3. `_SESSAO-COMPLETA-2026-05-22-NOITE/00-LEIA-PRIMEIRO-AMANHA.md` na pasta-mãe
