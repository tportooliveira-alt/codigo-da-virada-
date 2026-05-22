// ============================================================
// Chatbot — Widget flutuante, exit-intent + 30s em #precos
// ============================================================

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Oi! Sou o assistente do Thiago. Tem alguma dúvida sobre o Kit ou o App? Toca numa pergunta abaixo — ou escreve a sua.',
    },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [emailMode, setEmailMode] = useState(false);
  const [input, setInput] = useState('');
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const bodyRef = useRef(null);

  // QA bank
  const qa = useMemo(() => [
    {
      key: 'preco',
      q: 'Quanto custa?',
      a: 'Três opções: R$ 17 (ebook + plano 7 dias), R$ 67 (Kit Completo: 7 PDFs + 4 PWAs + Hub + Ebook), e R$ 197 (Kit + Virada App vitalício). Tudo com garantia de 30 dias.',
    },
    {
      key: 'formato',
      q: 'Como recebo o material?',
      a: 'Email automático em até 5 minutos com link do Hub (Kit) e/ou criação de conta no Virada App. Tudo digital, sem espera de correios.',
    },
    {
      key: 'garantia',
      q: 'Como funciona a garantia?',
      a: '30 dias incondicional. Botão direto na Kiwify, sem questionário. Você pode até manter os arquivos baixados — confio no método.',
    },
    {
      key: 'mei',
      q: 'Funciona pra MEI / CLT / aposentado?',
      a: 'Sim. Método universal — a matemática dos juros, das taxas e das 3 contas funciona em qualquer regime de renda.',
    },
    {
      key: 'app',
      q: 'O Virada App é mesmo vitalício?',
      a: 'Sim. Paga uma vez (R$ 197 cheio ou R$ 97 via upsell se você já tem o Kit). Usa pra sempre. Atualizações futuras incluídas, sem mensalidade.',
    },
    {
      key: 'audiobook',
      q: 'Quando sai o audiobook?',
      a: '2º semestre 2026. 5 volumes, 50 capítulos. Quem pega o Kit pode entrar na lista early-bird por +R$ 27 (50% off) no checkout. Posso te avisar quando lançar?',
      followup: 'email',
    },
    {
      key: 'tempo',
      q: 'Quanto tempo leva pra ver resultado?',
      a: 'Capítulo 1 reduz juros do cartão no próximo extrato. Plano de 7 dias reorganiza orçamento na primeira semana. Resultado mensurável em 30-60 dias.',
    },
    {
      key: 'suporte',
      q: 'Tem suporte direto?',
      a: 'Sim — WhatsApp direto comigo (Thiago) nos primeiros 30 dias após a compra. Depois, suporte via email.',
    },
    {
      key: 'comparar',
      q: 'Por que não outro curso de finanças?',
      a: 'Porque esse não promete enriquecer. Promete clareza. Sem upsell escondido, sem comunidade VIP, sem mensalidade. Garantia 30 dias diz o resto.',
    },
    {
      key: 'autor',
      q: 'Quem é o Thiago?',
      a: 'Engenheiro de software, 38, ex-CLT que pagou R$ 18.700 em juros antes de entender o sistema. Hoje desenvolve produtos pra brasileiro que ganha bem e termina no zero.',
    },
    {
      key: 'atualizacao',
      q: 'E atualizações futuras?',
      a: 'Quem pega o Kit recebe atualizações do ebook e dos PDFs sem custo. Quem pega o App vitalício recebe todas as features futuras também.',
    },
  ], []);

  // Auto-open triggers
  useEffect(() => {
    if (autoOpened) return;

    // Exit-intent
    const onLeave = (e) => {
      if (e.clientY <= 0 && !autoOpened) {
        setOpen(true);
        setAutoOpened(true);
      }
    };
    document.addEventListener('mouseleave', onLeave);

    // 30s on #precos
    let timer;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !autoOpened) {
          timer = setTimeout(() => {
            setOpen(true);
            setAutoOpened(true);
          }, 30000);
        } else {
          clearTimeout(timer);
        }
      });
    });
    const precos = document.getElementById('precos');
    if (precos) observer.observe(precos);

    return () => {
      document.removeEventListener('mouseleave', onLeave);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [autoOpened]);

  // scroll body
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const askQuestion = (item) => {
    setMessages((m) => [
      ...m,
      { from: 'user', text: item.q },
    ]);
    setShowSuggestions(false);
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: item.a }]);
      if (item.followup === 'email' && !emailCaptured) {
        setTimeout(() => {
          setMessages((m) => [...m, { from: 'bot', text: 'Pode me passar seu email pra avisar?' }]);
          setEmailMode(true);
        }, 800);
      } else {
        setTimeout(() => setShowSuggestions(true), 600);
      }
    }, 700);
  };

  const submitInput = (e) => {
    e?.preventDefault();
    const val = input.trim();
    if (!val) return;
    setMessages((m) => [...m, { from: 'user', text: val }]);
    setInput('');
    if (emailMode) {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { from: 'bot', text: 'Anotado! Vou te avisar antes do lançamento, com a oferta early-bird. Quer dar uma olhada nos preços agora?' },
        ]);
        setEmailMode(false);
        setEmailCaptured(true);
        setShowSuggestions(true);
      }, 800);
    } else {
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { from: 'bot', text: 'Boa pergunta. Pra te dar resposta certa, toca numa das opções abaixo — ou me passa seu email que respondo direto.' },
        ]);
        setShowSuggestions(true);
      }, 800);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat"
        className={`fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 w-14 h-14 rounded-full btn-gold flex items-center justify-center transition-transform ${
          open ? 'rotate-90' : !autoOpened ? 'pulse-glow' : ''
        }`}
      >
        {open ? (
          <Icon.Close className="w-5 h-5 text-[#1a0f00]" />
        ) : (
          <Icon.MessageDots className="w-6 h-6 text-[#1a0f00]" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed z-50 bottom-24 right-3 md:right-6 w-[calc(100vw-1.5rem)] md:w-[380px] max-w-[380px] origin-bottom-right transition-all duration-300 ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div
          className="liquid-glass border border-white/[0.08] overflow-hidden flex flex-col"
          style={{
            background: 'rgba(14,14,17,0.92)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(240,168,48,0.18)',
            maxHeight: 'min(70vh, 540px)',
          }}
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-white/[0.06] flex items-center gap-3">
            <div className="relative">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f0a830, #d48a1f)' }}
              >
                <span className="font-serif-i text-[#1a0f00] text-xl mt-0.5">v</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-[#0e0e11]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[14.5px] font-medium">Assistente Virada</div>
              <div className="text-[11px] text-white/55">Resposta humana em 24h · IA agora</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/[0.06] flex items-center justify-center text-white/55"
            >
              <Icon.Close className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ minHeight: 220 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[14px] leading-snug ${
                    m.from === 'user'
                      ? 'bg-gold text-[#1a0f00] rounded-br-sm font-medium'
                      : 'bg-white/[0.05] text-white/85 border border-white/[0.06] rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {showSuggestions && !emailMode && (
              <div className="pt-2">
                <div className="text-[10.5px] font-mono uppercase tracking-widest text-white/35 mb-2">
                  Sugestões
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {qa.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => askQuestion(item)}
                      className="text-[12.5px] px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/75 hover:bg-gold/15 hover:border-gold/40 hover:text-gold transition-colors"
                    >
                      {item.q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={submitInput} className="px-3 py-3 border-t border-white/[0.06] flex items-center gap-2">
            <input
              type={emailMode ? 'email' : 'text'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={emailMode ? 'seu@email.com' : 'Escreve sua pergunta…'}
              className="flex-1 bg-white/[0.04] rounded-full px-4 py-2.5 text-[14px] text-white placeholder:text-white/35 outline-none focus:bg-white/[0.06] border border-transparent focus:border-gold/40"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full btn-gold flex items-center justify-center disabled:opacity-50 shrink-0"
            >
              <Icon.Send className="w-4 h-4 text-[#1a0f00]" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

window.Chatbot = Chatbot;
