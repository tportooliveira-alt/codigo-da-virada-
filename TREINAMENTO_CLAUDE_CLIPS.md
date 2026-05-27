# Treinamento Claude — Roteiro em Clips

**Objetivo:** Treinar de forma modular. Cada "clip" é um vídeo curto (2-5 min) mostrando um passo específico.

---

## 📋 Índice de Clips

| Clip | Título | Duração | Objetivo |
| :--: | :--: | :--: | :--: |
| 1 | Sistema de agentes e o que é Paperclip | 3 min | Entender a arquitetura |
| 2 | Baixar Claude Code no navegador | 2 min | Acessar a plataforma |
| 3 | Login e primeiros passos | 2 min | Autenticar e navegar |
| 4 | Interface do Claude Code | 4 min | Conhecer os painéis |
| 5 | Como usar o chat | 3 min | Mandar mensagens e receber respostas |
| 6 | Subir arquivos do projeto | 3 min | Importar código/documentos |
| 7 | Executar comandos (Bash) | 4 min | Rodar scripts e ver outputs |
| 8 | Editar arquivos direto | 3 min | Fazer mudanças no código |
| 9 | Ver histórico e retomar | 2 min | Voltar em conversas antigas |
| 10 | Agentes do projeto (resumo) | 5 min | Apresentar os 6 agentes |

---

## 🎬 CLIP 1: Sistema de Agentes e Paperclip

**Duração:** 3 min  
**O que mostrar:**

```
[Tela 1: Documento ESTADO_DO_PROJETO.md aberto]
"Olá! Estamos construindo uma empresa autônoma de venda de info-produtos.
Isso significa: máquinas (agentes IA) trabalhando 24/7 pra vender nossos cursos."

[Tela 2: Diagrama dos 6 agentes]
"Temos 6 agentes diferentes:
1. CEO IA — toma decisões
2. Marketing IG/TikTok — cria conteúdo
3. SDR WhatsApp — atrai clientes
4. Closer — convence a comprar
5. Pós-venda — garante satisfação
6. Avaliador — melhora cada agente"

[Tela 3: Logo Paperclip]
"Paperclip AI é o maestro — orquestra todos esses agentes.
E Claude (a IA que você está usando agora) é o 'cérebro' de cada agente."

[Tela 4: Fluxo]
Usuário → Paperclip → Distribui pro agente certo → Agent trabalha → Resultado
```

**Script:**
> "Você não tá falando só com uma IA. Você tá comandando uma fábrica de agentes. Cada um especializado em algo. E eles trabalham juntos pra vender nosso produto. Legal? Vamo ver como você controla isso tudo."

---

## 🎬 CLIP 2: Baixar Claude Code no Navegador

**Duração:** 2 min  
**O que mostrar:**

```
[Tela 1: Navegador aberto, endereço vazio]
"Primeira coisa: Claude Code funciona no navegador.
Você abre: claude.ai/code"

[Digitando URL]
"Digite lá: c-l-a-u-d-e ponto a-i barra code"

[Tela 2: Site carregando]
"Pronto! Você tá no Claude Code. A interface vai carregar em segundos."

[Tela 3: Interface aparece]
"Aqui! Essa é a tela do Claude Code. Vamo explorar os botões principais."
```

**Script:**
> "Não precisa baixar nada. Tudo na web. Só digita a URL e entra. Fácil assim."

---

## 🎬 CLIP 3: Login e Primeiros Passos

**Duração:** 2 min  
**O que mostrar:**

```
[Tela 1: Claude.ai/code sem login]
"Se você não tiver conta, clica em 'Sign Up' ou 'Login'"

[Tela 2: Formulário de email]
"Coloca seu email. Qualquer email funciona.
Se tiver conta Google, usa 'Sign in with Google' — mais rápido."

[Tela 3: Confirmação de email]
"Claude envia um link pra confirmar.
Clica no link no seu email."

[Tela 4: Dashboard aparece]
"Pronto! Você tá dentro.
Vê essa tela? Aqui tem seus projetos, seu histórico, tudo."
```

**Script:**
> "Login é rápido. Email + senha. Ou Google. Depois disso você já tá dentro e pronto pra trabalhar."

---

## 🎬 CLIP 4: Interface do Claude Code

**Duração:** 4 min  
**O que mostrar:**

```
[Tela 1: Dashboard completo]
"A interface tem 4 seções principais:

1. PAINEL ESQUERDO (Arquivo)
   - Seus arquivos e pastas do projeto
   - Tudo organizado

2. PAINEL CENTRAL (Chat)
   - Você digita mensagens aqui
   - Claude responde

3. PAINEL DIREITO (Ferramentas)
   - Bash, Read, Edit, Write
   - Comandos que o Claude executa

4. BARRA DE CIMA (Controles)
   - Menu, modelo de IA, configurações"

[Mostrando cada painel com mouse]
"Vejo aqui... Aqui... Aqui... E aqui."
```

**Script:**
> "Não é complicado. Esquerda = seus arquivos. Meio = conversa com Claude. Direita = ações que Claude pode fazer. De boa."

---

## 🎬 CLIP 5: Como Usar o Chat

**Duração:** 3 min  
**O que mostrar:**

```
[Tela 1: Caixa de input vazia]
"Aqui embaixo tem uma caixa pra você digitar mensagens."

[Digitando uma mensagem]
"Tipo: 'Olá Claude, qual é o status do projeto?'"

[Tela 2: Enviando]
"Clica no botão de enviar (ou aperta Enter)"

[Tela 3: Resposta aparecendo]
"Claude responde em tempo real. Você vê letra por letra sendo escrita."

[Tela 4: Histórico]
"Toda conversa fica guardada aqui.
Se você sair e voltar amanhã, tá tudo aqui."
```

**Script:**
> "É igual WhatsApp. Digita, envia, aguarda resposta. Simples assim. Claude tá sempre ouvindo."

---

## 🎬 CLIP 6: Subir Arquivos do Projeto

**Duração:** 3 min  
**O que mostrar:**

```
[Tela 1: Painel esquerdo vazio]
"O painel esquerdo mostra seus arquivos.
Se tá vazio, é porque você ainda não importou o projeto."

[Tela 2: Botão de "Load" ou "Upload"]
"Tem um botão aqui pra carregar um projeto.
Clica nele."

[Tela 3: Seletor de pasta]
"Você escolhe uma pasta do seu PC.
Tipo: /home/user/codigo-da-virada-"

[Tela 4: Arquivos carregando]
"Claude carrega todos os arquivos.
Vê aqui? ESTADO_DO_PROJETO.md apareceu.
index.html, components/, tudo."

[Tela 5: Arquivo expandido]
"Agora Claude vê TODOS os seus arquivos.
Pode ler, editar, executar scripts — tudo."
```

**Script:**
> "Seus arquivos são o 'contexto' do Claude. Quanto mais arquivo você coloca, mais Claude entende sobre o projeto."

---

## 🎬 CLIP 7: Executar Comandos (Bash)

**Duração:** 4 min  
**O que mostrar:**

```
[Tela 1: Chat normal]
"Você pode pedir pro Claude executar comandos do terminal.
Tipo: 'Claude, lista os arquivos dessa pasta'"

[Tela 2: Claude responde]
"Claude vai usar a ferramenta Bash pra isso.
Você vê a execução acontecendo."

[Tela 3: Comando sendo executado]
"Aparece aqui: 
$ ls -la /home/user/codigo-da-virada-"

[Tela 4: Resultado]
"E aí vem a resposta:
ESTADO_DO_PROJETO.md
index.html
components/
..."

[Tela 5: Histórico de comandos]
"Tudo fica registrado aqui.
Se você quer rodar o comando de novo, clica no ícone de 'repeat'."
```

**Script:**
> "Bash é o 'poder' do Claude Code. Com isso, ele não só fala — ele age. Roda scripts, instala coisas, mexe em arquivos."

---

## 🎬 CLIP 8: Editar Arquivos Direto

**Duração:** 3 min  
**O que mostrar:**

```
[Tela 1: Pedindo mudança]
"Você: 'Claude, no index.html, muda o título pra Código da Virada V2'"

[Tela 2: Claude editando]
"Claude usa a ferramenta 'Edit' pra fazer a mudança.
Você vê o antes e depois:"

Antes:
<title>Código da Virada — Reorganize suas finanças...</title>

Depois:
<title>Código da Virada V2</title>

[Tela 3: Arquivo atualizado]
"O arquivo no seu PC foi atualizado.
Automático. Sem você tocar em nada."

[Tela 4: Confirmação]
"Claude avisa: 'Mudança feita e salva.'"
```

**Script:**
> "Editar é assim: você pede, Claude faz, arquivo fica pronto. Sem ui de editor confuso. Tudo pelo chat."

---

## 🎬 CLIP 9: Ver Histórico e Retomar

**Duração:** 2 min  
**O que mostrar:**

```
[Tela 1: Menu lateral (histórico)]
"No painel esquerdo, tem uma aba 'Histórico' ou 'History'"

[Tela 2: Lista de conversas]
"Todas as suas conversas tão aqui.
Cada uma tem um nome e a data."

[Tela 3: Clicando em conversa antiga]
"Você clica em uma conversa antiga.
Tudo aparece — mensagens, comandos, tudo."

[Tela 4: Continuando]
"Se você quer continuar daqui, é só digitar mais uma mensagem.
Claude retoma o contexto automaticamente."
```

**Script:**
> "Seu trabalho nunca se perde. Cada conversa fica guardada. Você sai, volta amanhã, continua de onde parou."

---

## 🎬 CLIP 10: Os 6 Agentes do Projeto

**Duração:** 5 min  
**O que mostrar:**

```
[Tela 1: Diagrama org chart]
"Você é o CEO humano.
Abaixo de você:
Claude CEO IA — toma as decisões principais"

[Tela 2: Ramificações]
"Abaixo do CEO IA, 6 agentes especializados:

🎨 AGENTE #2 — Marketing (Sonnet)
   Trabalha com: Instagram, TikTok
   Faz: Cria posts virais, stories, reels

📱 AGENTE #3 — SDR WhatsApp (Sonnet)
   Trabalha com: WhatsApp
   Faz: Manda mensagens de atração, qualifica leads

💬 AGENTE #4 — Closer (Opus)
   Trabalha com: WhatsApp
   Faz: Convence a pessoa a comprar

🎁 AGENTE #5 — Pós-venda (Haiku)
   Trabalha com: Email, suporte
   Faz: Garante satisfação do cliente

⭐ AGENTE #6 — Avaliador (Sonnet)
   Trabalha com: Validação interna
   Faz: Mede se cada agente tá bom

⚙️ N8N (Trilho Determinístico)
   Trabalha com: Pagamentos
   Faz: Processa compras automaticamente"

[Tela 3: Como conversar com agentes]
"Você: 'Claude, chama o agente de marketing pra criar 5 posts sobre o produto'"

Claude:
- Alterna pro modo "Marketing Agent #2"
- Cria 5 posts prontos
- Mostra pra você revisar

[Tela 4: Fluxo de vendas]
"Assim que funciona:
1. Marketing atrai na rede social
2. SDR qualifica no WhatsApp
3. Closer convence a comprar
4. N8N processa o pagamento
5. Pós-venda garante satisfação
6. Avaliador melhora todo mundo"
```

**Script:**
> "Você não trabalha com 6 agentes separados. Você trabalha com UM Claude que tem 6 'modos'. Você pede, ele troca de modo, faz o trabalho, volta pra você com resultado."

---

## 📌 Resumo: Do Começo ao App Aberto

**5 passos rápidos:**

1. ✅ **Abra o navegador** → `claude.ai/code`
2. ✅ **Login** → Email ou Google
3. ✅ **Carregue o projeto** → Selecione a pasta `/codigo-da-virada-`
4. ✅ **Veja os arquivos** → Painel esquerdo com tudo
5. ✅ **Comece a conversar** → Digite no chat, Claude responde

---

## 🎥 Dicas pra Gravar os Clips

### Setup de gravação:
- **Resolução:** 1920x1080 (full HD)
- **Som:** Microfone claro, sem ruído de fundo
- **Velocidade:** Normal (não super rápido)
- **Zoom do navegador:** 125% (pra ver bem o texto)

### Roteiro padrão por clip:
1. **Abertura** (15 seg): "Clip X — [Título]"
2. **Conteúdo** (2-4 min): Ações + narração
3. **Fechamento** (15 seg): "Pronto! No próximo clip..."

### Edição:
- Cortar trechos silenciosos
- Adicionar zoom em botões importantes
- Colocar legendas em nomes de ferramentas
- Música de fundo suave (baixo volume)

---

## 🚀 Ordem de Gravação Recomendada

**Dia 1:** Clips 1, 2, 3 (Setup básico)  
**Dia 2:** Clips 4, 5 (Interface e chat)  
**Dia 3:** Clips 6, 7, 8 (Ações práticas)  
**Dia 4:** Clips 9, 10 (Avançado)  

Total: **~5 horas de gravação** para ~25 minutos de vídeo final

---

## 💾 Arquivos de Suporte

Deixar os arquivos abertos enquanto grava:
- `ESTADO_DO_PROJETO.md` — referência do sistema
- `agentes/02_marketing_ig_tiktok.md` — exemplo de agente
- `index.html` — exemplo de edição de arquivo

---

**Próximo passo:** Escolha um clip e comece a gravar! 🎬

