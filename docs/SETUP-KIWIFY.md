# Setup Kiwify — O Código da Virada

> Configuração passo a passo da Kiwify pra rodar o funil completo (Tripwire R$17 + Kit R$67 + Order Bump R$27 + Upsell R$97).

## Por que Kiwify (e não Cakto)

| Aspecto | Cakto (atual) | Kiwify |
|---|---|---|
| Taxa cartão | 6,99% + R$1 | 8,99% + R$2,49 |
| Taxa PIX | 6,99% + R$1 | 4,99% + R$1 |
| Order bump nativo | ❌ Não | ✅ Sim (1 clique no checkout) |
| Upsell 1-clique | ❌ Não | ✅ Sim |
| Área de membros | ❌ Não | ✅ Sim (login + drip) |
| Plano mensal | — | R$ 0/mês no plano grátis |
| Suporte WhatsApp | ❌ | ✅ |

**Conclusão:** taxa nominal mais alta, mas ganho em ticket médio (order bump + upsell) compensa muito.

---

## Conta + Setup inicial

### Passo 1 — Criar conta
1. Acesse https://kiwify.com.br
2. Clique em "Comece grátis"
3. Preencha: email, CPF, dados bancários (PIX preferencial)
4. Confirme email
5. Faça verificação de identidade (envia selfie + RG/CNH — leva 24-48h)

### Passo 2 — Configurar conta financeira
1. Menu → Financeiro → Dados bancários
2. Adicionar PIX (chave email ou CPF)
3. Configurar saque automático: semanal (toda segunda)
4. Ativar 2FA na conta

---

## Criar os 3 Produtos

### Produto 1 — Tripwire (R$ 17)

1. Menu → Produtos → Novo Produto
2. **Nome:** "O Código da Virada — Edição Essencial"
3. **Tipo:** Produto digital (ebook + acesso)
4. **Preço:** R$ 17,00
5. **Imagem capa:** usar `06-Capas-e-Assets/CAPA_LIVRO_POPULAR.jpg`
6. **Descrição curta:** "Método em 7 capítulos + Plano de 7 Dias interativo. Comece a virada por R$ 17."
7. **Entrega:** automática por email
8. **Arquivos a entregar:**
   - `01-PDFs-PRONTOS/ebook-codigo-da-virada.pdf`
   - Link do app `10-Plano-7-Dias-Interativo/index.html` (hospedado)

9. **Email de entrega — Template:**
```
Assunto: 🎯 Seu Código da Virada chegou — comece pelo Plano de 7 Dias

Olá [NOME],

Bem-vindo(a) ao Código da Virada Financeira.

Você acaba de dar o primeiro passo. Aqui está o que você tem:

📖 EBOOK ESSENCIAL (PDF)
[LINK_DOWNLOAD_PDF]

📱 PLANO DE 7 DIAS (App interativo)
Abra no celular: [LINK_APP]
Toca em "Adicionar à tela inicial" pra instalar como app de verdade.

PRÓXIMOS PASSOS:
1. Lê o ebook hoje (1h de leitura)
2. Começa o Plano de 7 Dias amanhã (uma ação por dia)
3. Volta aqui em 7 dias pra ver o resultado

QUER O KIT COMPLETO?
Se quiser tudo (4 apps + 7 PDFs + Hub Biblioteca), por R$ 50 extras você upgrada:
[LINK_UPGRADE_KIT_R67]

Qualquer dúvida: responda este email.

— Thiago Porto
codigodavirada.net.br
```

### Produto 2 — Kit Completo (R$ 67) — PRINCIPAL

1. Novo Produto
2. **Nome:** "O Código da Virada — Kit Completo"
3. **Preço:** R$ 67,00
4. **Imagem:** `06-Capas-e-Assets/CAPA_LIVRO_PREMIUM.jpg`
5. **Descrição:** "7 PDFs + 4 apps interativos (PWA) + Hub Biblioteca + Ebook Web. Tudo do método em uma só compra."

6. **Arquivos a entregar (todos):**
   - 7 PDFs de `01-PDFs-PRONTOS/`
   - Links dos 6 apps:
     - `07-Checklist-Interativo`
     - `08-50-Ideias-Interativo` (60 ideias + 10 bônus 2026)
     - `09-Negociacao-Dividas-Interativo` (com carta jurídica)
     - `10-Plano-7-Dias-Interativo` (com export de diário)
     - `11-Ebook-Web-Interativo` (com export de notas)
     - `12-Biblioteca-Hub` (Hub central)

7. **Ativar Order Bump (importante!):** Ver seção abaixo.
8. **Ativar Upsell 1-clique:** Ver seção abaixo.

### Produto 3 — Virada App (R$ 197, lista de espera)

1. Novo Produto → tipo "Pré-venda"
2. **Nome:** "Virada App — Acesso Vitalício"
3. **Preço cheio:** R$ 197 / **Early-bird (Kit compradores):** R$ 97
4. **Data de entrega:** Junho/2026 (configurar `entrega_diferida = true`)
5. **Email de pré-venda:**
```
Você está na lista de espera do Virada App. Lançamento previsto pra junho/2026 — você será o primeiro a saber.
```

---

## Configurar Order Bump (R$ 27 — Livro Novela)

> **NOTA:** Você decidiu transformar o Livro Novela em audiobook imersivo (lançamento 2º semestre 2026). Por enquanto o order bump pode ser:
> - **Opção A:** Livro Novela em PDF (versão atual em MD convertida) — entregue agora
> - **Opção B:** "Lista early-bird do Audiobook Imersivo" — pré-venda com 50% off

**Recomendado: Opção B** (você prometeu na landing, mantém consistência e cria curiosidade).

### Setup Order Bump na Kiwify:

1. Vá no Produto 2 (Kit Completo) → Aba "Checkout"
2. Seção "Order Bumps" → Adicionar
3. **Título:** "🎧 Quer entrar na lista early-bird do Audiobook Imersivo por 50% off?"
4. **Descrição:** "A versão sonora dos 50 capítulos do Livro Novela está em produção. Voz humana + trilha + efeitos imersivos. Lançamento 2º semestre/2026. Lista early-bird tem 50% off (R$ 49,90 em vez de R$ 99,80) garantido na compra."
5. **Preço:** R$ 27 (taxa de reserva early-bird)
6. **Imagem:** mockup do audiobook (gerar com Canva — fone de ouvido + capa)
7. **Posição:** acima do botão "Finalizar compra"

**Taxa esperada de aceitação:** 35-45% (early-bird converte mais que produto pronto).

---

## Configurar Upsell 1-clique (R$ 97 — Virada App)

1. Produto 2 (Kit Completo) → Aba "Pós-compra"
2. Seção "Upsells" → Adicionar
3. **Página upsell:**

```
Título: ⚡ Antes de você ir embora — uma oferta exclusiva

Subtítulo: O Virada App custa R$ 197 no lançamento.
Pra você que acabou de comprar o Kit, ele sai por R$ 97 — agora, com 1 clique.

Conteúdo:
- ✅ Dashboard completo de gastos, receitas e fluxo
- ✅ Gestão de dívidas com priorização
- ✅ Metas e missões gamificadas
- ✅ Acesso vitalício (sem mensalidade)
- ✅ Lançamento em junho/2026 — você já garante seu acesso

[Botão grande verde: ADICIONAR POR R$ 97]
[Link cinza pequeno: Não, obrigado — continuar sem o app]
```

**Taxa esperada de aceitação:** 15-20%.

---

## Webhooks (futuro — Fase 2)

Quando o App Next.js tiver auth, configurar webhook:

1. Kiwify → Configurações → Webhooks
2. URL: `https://app.codigodavirada.net.br/api/kiwify-webhook`
3. Eventos: `compra.aprovada`, `reembolso.solicitado`
4. Secret token (anotar)

O webhook libera o acesso do email no Supabase quando o pagamento aprovar.

---

## Métricas que você precisa acompanhar na Kiwify

| Métrica | Onde ver | Meta |
|---|---|---|
| Conversão Checkout | Dashboard → Funil | ≥ 60% (de visita checkout pra compra) |
| Order bump aceitação | Produto 2 → Order Bumps | ≥ 30% |
| Upsell aceitação | Produto 2 → Upsells | ≥ 15% |
| Ticket médio | Dashboard | ≥ R$ 85 |
| Taxa de reembolso | Financeiro → Reembolsos | ≤ 5% |
| LTV (lifetime value) | Relatórios → Cliente | crescer mês a mês |

---

## Checklist final antes de ligar tráfego

- [ ] 3 produtos criados (R$17, R$67, R$197)
- [ ] Order bump configurado no Kit (R$27 audiobook)
- [ ] Upsell 1-clique configurado pós-Kit (R$97 app)
- [ ] Emails de entrega testados (compra simulada com cartão teste)
- [ ] Links de arquivos hospedados e funcionando
- [ ] Domínio próprio conectado (`codigodavirada.net.br/comprar` → Kiwify)
- [ ] Garantia 30 dias configurada (não a default 7)
- [ ] Pixel do Meta + GA4 instalados na página de obrigado
- [ ] Email de boas-vindas leva pra grupo WhatsApp (opcional Fase 3)
- [ ] Templates de email têm seu nome, link de suporte, link da landing

---

## Migração da Cakto (importante)

**NÃO desligue a Cakto imediatamente.** Faça em 3 fases:

1. **Semana 1:** Cria os produtos na Kiwify, testa tudo, mantém Cakto rodando paralelo. Landing aponta pra Kiwify.
2. **Semana 2-3:** Monitora. Se conversão na Kiwify ≥ Cakto, segue.
3. **Semana 4:** Pausa produtos na Cakto (não deleta), redireciona links velhos pra Kiwify.

Backup dos dados de venda Cakto: exporta CSV antes de desligar (CSV → contas, vendas, reembolsos).

---

## Suporte Kiwify

- WhatsApp suporte: aparece no menu Configurações
- Documentação: https://ajuda.kiwify.com.br
- Comunidade: grupo de produtores no Telegram
