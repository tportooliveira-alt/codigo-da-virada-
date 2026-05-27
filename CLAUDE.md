# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Código da Virada** is an autonomous multi-agent AI sales system selling digital info-products (Pack IA pro Autônomo) at R$17/27. The system orchestrates 6 specialized Claude agents (Opus/Sonnet/Haiku) across Instagram, TikTok, WhatsApp, and payment flows, running 24/7.

**Key context:** This is NOT just a landing page. The landing page is the entry point into a complete agent-driven sales funnel. All agent documentation should be treated as canonical operational specs.

---

## Architecture Overview

```
End user flow:
  Instagram/TikTok (Marketing Agent #2)
      ↓
  Landing page (codigodavirada.net.br) — this repo
      ↓
  WhatsApp → SDR Agent #3 (qualify) → Closer Agent #4 (sell)
      ↓
  n8n payment flow (deterministic, no AI)
      ↓
  Pós-venda Agent #5 (support) + Avaliador Agent #6 (QA)
      ↓
  CEO Agent #1 (orchestration + decisions)
```

**Stack:**
- Agents: Claude via Code Max (Opus/Sonnet/Haiku models)
- Orchestration: Paperclip AI (open-source agent framework)
- Payments: n8n (deterministic)
- Sales platform Phase 1A: Cakto (100% free pix)
- Landing: Plain React (no build step required)
- Member area: Notion (public read-only)

---

## Key Files & Their Purpose

### Documentation (Canonical Specs)
- **ESTADO_DO_PROJETO.md** — Single source of truth. All project decisions, timeline, product specs, next steps. **Read this first on any new context.**
- **agentes/01_CEO_IA.md** through **agentes/06_AVALIADOR_SKILLS.md** — Operational playbooks for each agent. Include workflows, message templates, evaluation criteria, test scenarios, metrics, and red flags.
- **TREINAMENTO_CLAUDE_CLIPS.md** — 10 training video clips for end users (registration through app opening). Specs for recording, scripts, visuals.

### Landing Page (React)
- **index.html** — HTML entry point (no build system)
- **app.jsx** — React component composition
- **components/** — 12 JSX components (Hero, Navbar, Products, FAQ, Author, CinematicBg, Bonuses, Quote, Footer, BlurText, CountUp, icons)
- **assets/** — Images (book covers, bonuses) and `virada-capa-loop.mp4` (1.4 MB, 40s loop, no audio)
- **image-slot.js** — Helper for responsive image handling
- **uploads/** — Extra cinematic frames from designer

### Deployment Notes
- See **README-DEPLOY.md** for VPS (Hostinger nginx) deployment steps, local testing setup, and pending refinements (Thiago photo, PDF generation, Cakto account setup).

---

## Git Workflow

- **Main branch:** `main` — production-ready state
- **Development branch:** `claude/review-code-clip-h7JdW` — active feature development
- **Commits:** Clear messages in Portuguese (e.g., "Adiciona documentação dos 6 agentes")
- **PRs:** Draft PRs track branches; merge after review

When working on tasks:
1. Ensure you're on the correct branch (`claude/review-code-clip-h7JdW`)
2. Commit with descriptive messages
3. Push with `git push -u origin <branch-name>`
4. PR is auto-created as draft (do not re-create if it exists)

---

## Common Tasks

### Reviewing / Improving Agent Documentation
All 6 agents are fully documented in `agentes/`. To modify or extend an agent's behavior:
1. Edit the relevant agent file (e.g., `agentes/03_SDR_WHATSAPP.md`)
2. Update workflows, message templates, evaluation criteria, or test scenarios
3. Commit and push
4. Agent is ready for retraining or re-evaluation

### Landing Page Updates
1. Edit components in `components/` or `index.html`
2. No build step required — served as plain React (JSX interpreted by browser)
3. Test locally: `npx http-server -p 8090` (supports range requests for video)
4. Deploy: Upload to VPS at `codigodavirada.net.br` (see README-DEPLOY.md)

### Testing Agent Behavior
Each agent has 5 test scenarios in their documentation. To run a test:
1. Locate the agent's file (e.g., `agentes/04_CLOSER_WHATSAPP.md`)
2. Review the "🎯 Teste Padrão: 5 Cenários" section
3. Execute scenario(s) with sample inputs
4. Record pass/fail in agent's scorecard

### Checking Project Status
Always start with **ESTADO_DO_PROJETO.md**. It contains:
- Current phase (Phase 1A organic validation)
- What's ready (all agent docs, landing page)
- What's pending (training agents, n8n setup, Cakto CPF/banking, Thiago photo)
- Next immediate steps

---

## Important Constraints & Rules

1. **Brand tone:** Portuguese (informal, pt-BR), direct/no fluff, focused on autonomous workers' problems
2. **No false promises:** No "100% guaranteed", "get rich", fake countdown timers, fake testimonials
3. **Legal disclaimer required:** "Conteúdo educacional. Não constitui aconselhamento financeiro individual."
4. **Real 7-day guarantee:** No fine print, no tricks
5. **Agent models fixed:** Opus (CEO/Closer), Sonnet (Marketing/SDR/Avaliador), Haiku (Pós-venda) — chosen for cost/capability tradeoff
6. **Notion member area is read-only:** No authentication required, all users see same content

---

## Next Immediate Steps (From ESTADO_DO_PROJETO.md)

- [ ] Evaluate Agente #2 (Marketing) performance
- [ ] Train remaining agents in order: #6 → #5 → #3 → #4 → #1
- [ ] Unfreeze technical setup: n8n.cloud config, Cakto CPF/banking, landing deployment
- [ ] Generate final PDFs from LIVRO_*_FINAL_2026.md
- [ ] Record 5 initial reels (using scripts from Agente #2)
- [ ] Launch Phase 1A (organic validation, 30 sales target)
