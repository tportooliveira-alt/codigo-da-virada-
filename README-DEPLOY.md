# Landing Page Código da Virada — Deploy

Landing multi-produto pronta pra subir em `codigodavirada.net.br` (VPS Hostinger nginx).

## Estrutura

```
landing-2026/
├── index.html              # HTML root (entrada)
├── app.jsx                 # Composição React
├── image-slot.js           # Helper de slot de imagem
├── components/             # 12 componentes JSX
│   ├── Author.jsx
│   ├── BlurText.jsx
│   ├── Bonuses.jsx
│   ├── CinematicBg.jsx     # ⚙️ Onde estão as URLs dos vídeos (CV_VIDEO_A, CV_VIDEO_B)
│   ├── CountUp.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── icons.jsx
│   ├── Navbar.jsx
│   ├── Products.jsx        # 3 cards de produto (Popular / Kit / App)
│   └── Quote.jsx           # Epígrafe Thiago Porto Oliveira (com vídeo de fundo)
├── assets/                 # Capas reais + vídeo cortado
│   ├── CAPA_LIVRO_POPULAR.jpg
│   ├── CAPA_LIVRO_PREMIUM.jpg
│   ├── CAPA_BONUS_1_RENDA_EXTRA.jpg
│   ├── CAPA_BONUS_2_NEGOCIACAO.jpg
│   ├── CAPA_BONUS_3_PLANO_7DIAS.jpg
│   ├── CAPA_BONUS_4_CHECKLIST.jpg
│   └── virada-capa-loop.mp4  # 1.4 MB, 40s, loop infinito, sem áudio
└── uploads/                # Assets extras do Designer (frames cinematográficos)
```

## Como rodar local pra testar

⚠️ **Servidor precisa suportar Range requests** pra vídeos rodarem. Python `http.server` NÃO suporta. Use uma dessas opções:

```powershell
# Opção 1 (Node): npx http-server -p 8090 -r
cd "C:\Users\Thiago Porto\vendas e book\landing-2026"
npx http-server -p 8090

# Opção 2 (Python com range): pip install rangehttpserver, depois
python -m RangeHTTPServer 8090

# Opção 3 (PHP, se tiver): php -S 127.0.0.1:8090
```

Depois acesse `http://127.0.0.1:8090`.

## Deploy no VPS Hostinger (nginx)

1. **Compactar a pasta inteira** em `landing-2026.zip`
2. **Login no painel Hostinger** → File Manager → pasta do domínio `codigodavirada.net.br` (geralmente `public_html` ou `/home/USER/domains/codigodavirada.net.br/public_html`)
3. **Backup da landing antiga:** renomeie `index.html` atual pra `index.OLD.html`
4. **Upload e extrair** o ZIP — garantir que `index.html` fique na **raiz** do domínio (não dentro de uma subpasta)
5. **Permissões:** arquivos `644`, pastas `755`
6. **Testar:** acessar `https://codigodavirada.net.br` no navegador

Nginx já suporta range requests por padrão — vídeos vão rodar.

## URLs e dados embutidos

- **Cakto Popular:** `https://pay.cakto.com.br/880634`
- **Cakto Kit Duplo:** `https://pay.cakto.com.br/880647`
- **Virada App:** `https://app.progetoprontoia.tech` (em construção)
- **Suporte:** `tportooliveira@gmail.com`
- **Vídeos de fundo:** `assets/virada-capa-loop.mp4` (CV_VIDEO_B, usado em Quote, Products e FAQ)
- **Vídeo cinematográfico do template original:** ainda no CloudFront (CV_VIDEO_A, usado em Hero e Author). Quando quiser substituir, edita `components/CinematicBg.jsx` linha 92.

## Pendências (quando quiser refinar)

1. **Foto do Thiago** — placeholder vazio na seção "Sobre o autor". Salvar foto em `assets/foto-thiago.jpg` e editar `components/Author.jsx` apontando pra ela.
2. **CV_VIDEO_A** ainda aponta pro CloudFront do Claude Designer. Se quiser autonomia, substitui por outro arquivo em `assets/`.
3. **Cakto:** preencher CPF + dados bancários da conta antes de divulgar. Sem isso, os links `pay.cakto.com.br/880634` e `/880647` retornam "Produto não disponível".
4. **PDFs do livro** ainda precisam ser regerados a partir dos `LIVRO_*_FINAL_2026.md` (gargalo FTP-21).

## Regras de marca (já aplicadas — não desfazer)

- ❌ Sem "garantido", "100%", "milagre", "fique rico", números de resultado financeiro
- ❌ Sem mencionar planilha como entrega (não temos)
- ❌ Sem cronômetro falso
- ✅ Disclaimer legal no footer: "Conteúdo educacional. Não constitui aconselhamento financeiro individual, consultoria de investimentos ou garantia de resultado."
- ✅ Epígrafe autoral: "Quem tem dinheiro não é quem ganha muito — é quem entende e poupa o que ganha." — Thiago Porto Oliveira
- ✅ pt-BR informal, tratamento "você"
- ✅ Garantia de 7 dias real, sem letra miúda
