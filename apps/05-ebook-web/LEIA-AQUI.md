# Ebook Web Interativo — O Código da Virada Financeira

Versão web do **ebook principal**, totalmente navegável e interativa.

## O que tem

### 📚 Sumário lateral (menu ☰ no topo)
- Capa + 7 capítulos
- Mostra **quais foram lidos** (✓ verde)
- Mostra **progresso de leitura** (X de 7)
- Toca em qualquer capítulo pra ir direto

### 🔖 Marca-página automático
- Lembra **em qual capítulo você parou**
- Fecha o navegador, abre depois — volta exatamente onde estava

### ✏️ Anotações pessoais por capítulo
- Cada capítulo tem um campo de texto pra escrever
- Reflexões, números, descobertas
- Salva automático no aparelho

### 📊 Progresso visual
- Barra verde no topo enche conforme marca capítulos como lidos
- Contador 0/7 → 7/7 na sidebar

### 🎨 Conforto de leitura
- **Modo escuro elegante** (combina com a marca)
- **Tamanho de fonte ajustável** (A− / A+ no topo)
- Tipografia de leitura (line-height 1.75, max-width 700px)
- Anti-zoom no iOS (fonte ≥16px)

### 🔒 Privacidade
- Tudo no aparelho do cliente (localStorage)
- Sem servidor, sem login, sem rastreamento
- Avisos no topo e rodapé

### 🖨️ Imprimir / PDF
- Botão no Capítulo 7 que abre dialog de impressão
- CSS de impressão otimizado (esconde sidebar, expande capítulos)

## Estrutura dos capítulos

Cada capítulo tem:
- Número e título grande
- Subtítulo descritivo
- Conteúdo formatado (parágrafos, listas, citações, destaques)
- **Caixa "Exercício do capítulo"** com tarefas
- **Caixa "Suas notas pessoais"** (textarea)
- Botão **"✓ Marcar como lido"**
- Navegação **← Anterior / Próximo →**

## Os 7 capítulos

1. **Clareza** — Para onde seu dinheiro está indo
2. **Organização** — Colocando as contas em ordem
3. **Plano de ataque** — Dívidas, juros e desperdícios
4. **Renda extra** — Ideias reais começando do zero
5. **A reserva de paz** — O escudo que muda tudo
6. **Direção** — Vida financeira mais segura (investimentos)
7. **Plano de 7 Dias** + Conclusão

## Diferencial competitivo

| Concorrente | Você agora |
|-------------|------------|
| PDF estático | Web app interativo |
| Lê e fecha, nunca mais | Marca-página + notas pessoais |
| Não sabe onde parou | Sumário com ✓ por capítulo |
| Sem registro de aprendizado | Anotações persistentes por capítulo |

## Como hospedar
Igual aos outros — Netlify Drop ou subdomínio no Hostinger:
- `codigodavirada.net.br/livro`
- ou separadamente em subdomínio: `livro.codigodavirada.net.br`

## Arquivos
- `index.html` (~38 KB com todo o ebook embutido)
- `manifest.webmanifest`
- `LEIA-AQUI.md`
