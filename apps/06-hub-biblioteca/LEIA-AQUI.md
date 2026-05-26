# Biblioteca Hub — O Código da Virada

**Página principal** do Kit Duplo. Quando o cliente comprar e abrir o link, é esta tela que ele vê primeiro — com as 5 capas dos materiais, podendo tocar em cada uma pra abrir.

## O que tem

### 📚 Grid das 5 capas
- 1 capa grande do livro principal (badge verde "Livro")
- 4 capas dos bônus (badge dourado "Bônus 1-4")
- Cada capa abre o respectivo material interativo

### 📊 Progresso visual
- Conta quantos dos 5 materiais a pessoa já usou
- Mostra checkmark verde nas capas dos que ela mexeu
- Barra de progresso 0/5 → 5/5

### 📲 Botão "Instalar como app"
- **Chrome/Android:** botão aparece quando o navegador permite, clica e instala
- **iOS Safari:** instrução visual ("Compartilhar → Adicionar à Tela de Início")
- Quando instalado, abre como app nativo (sem barra do navegador)

### 🔒 Privacidade total
- Detecta quais materiais a pessoa usou olhando o localStorage do navegador
- Nada vai pra servidor — funciona offline

## Como hospedar (estrutura recomendada)

Quando subir no Hostinger, organize assim:

```
codigodavirada.net.br/
├── (landing de vendas)
└── /biblioteca/
    ├── index.html        ← este hub
    ├── manifest.webmanifest
    ├── icon-*.png
    ├── capas/
    └── /ebook/           ← 11-Ebook-Web-Interativo
        ├── index.html
        └── ...
    └── /bonus-1/         ← 08-50-Ideias-Interativo
    └── /bonus-2/         ← 09-Negociacao-Dividas-Interativo
    └── /bonus-3/         ← 10-Plano-7-Dias-Interativo
    └── /bonus-4/         ← 07-Checklist-Interativo
```

⚠️ **Importante:** depois de hospedar, ajustar os links no `index.html` do hub (de `../11-Ebook-Web-Interativo/` para `./ebook/`).

## Como entregar pro cliente

1. Cliente compra na Cakto
2. Cakto manda e-mail com **link único**: `codigodavirada.net.br/biblioteca`
3. Cliente abre, vê tudo, instala como app (opcional)
4. Sempre que abrir o app no celular, cai direto nesta biblioteca

## Diferencial competitivo

| Concorrente | Você agora |
|-------------|------------|
| 1 PDF gigante por e-mail | App próprio na tela inicial |
| Cliente esquece o link | Ícone fixo no celular |
| Sem progresso visível | Vê o que já usou e o que falta |
| Sem identidade de marca | "Código da Virada" como app instalado |

## Arquivos
- `index.html` (~22 KB)
- `manifest.webmanifest`
- `icon-32.png`, `icon-180.png`, `icon-192.png`, `icon-512.png`
- `capas/` (5 capas em JPG)
- `LEIA-AQUI.md`
