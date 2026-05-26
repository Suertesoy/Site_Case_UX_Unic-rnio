import { useState } from "react";
import { Compass, Eye, ShieldAlert, Sparkles, MessageSquare, Smile } from "lucide-react";

export default function JourneyMap() {
  const [activePersona, setActivePersona] = useState<"sofia" | "marcos">("sofia");
  const [activeStage, setActiveStage] = useState("descoberta");

  const handlePersonaChange = (persona: "sofia" | "marcos") => {
    setActivePersona(persona);
    setActiveStage("descoberta");
  };

  const sofiaStages = [
    {
      id: "descoberta",
      label: "1. Descoberta",
      desc: "Busca inicial",
      contexto: "Sofia quer migrar para UX/UI. Busca um curso introdutório, direto ao ponto e que seja encaixável em sua rotina.",
      acoes: [
        "Pesquisa no Google e YouTube por conteúdos introdutórios",
        "Assiste a vídeos iniciais explicativos de migração",
        "Conversa com colegas de trabalho que já atuam na área"
      ],
      pensamentos: [
        "Quero entender o básico de UX/UI sem perder tempo.",
        "Preciso encaixar isso na minha rotina."
      ],
      sentimentos: ["Curiosidade", "Empolgação", "Insegurança", "Medo"],
      dores: [
        "Não sabe por onde começar em meio a tanto conteúdo solto.",
        "Medo de investir em algo prolixo e desorganizado."
      ],
      oportunidades: [
        "Trilha de aprendizado linear e clara.",
        "Exemplos práticos e objetivos nas primeiras aulas.",
        "Aulas introdutórias gratuitas para avaliação da didática."
      ]
    },
    {
      id: "consideracao",
      label: "2. Consideração",
      desc: "Análise da Proposta",
      contexto: "Sofia compara os cursos disponíveis buscando conteúdo sólido, acompanhamento próximo e uma comunidade ativa de suporte.",
      acoes: [
        "Lê avaliações de ex-alunos e cases de portfólio",
        "Analisa detalhadamente a ementa, módulos e duração",
        "Verifica a validade do certificado e o suporte de monitores"
      ],
      pensamentos: [
        "Quero algo que me transmita segurança de que vou estar preparada pro mercado de trabalho."
      ],
      sentimentos: ["Esperança", "Indecisão", "Ansiedade"],
      dores: [
        "Sentimento de que as plataformas tradicionais são muito impessoais.",
        "Vídeos longos e prolixos sem linearidade clara.",
        "Falta de um preview prático de como funciona a plataforma por dentro."
      ],
      oportunidades: [
        "Exibir a estrutura visual e clara da trilha de estudos.",
        "Destacar o suporte humano constante e canais de tira-dúvidas.",
        "Oferecer um tour ou preview interativo do produto antes da compra."
      ]
    },
    {
      id: "decisao",
      label: "3. Decisão",
      desc: "O Primeiro Passo",
      contexto: "Sofia escolhe a plataforma que aparenta ser mais direta e com melhor apoio. Ela inicia motivada, mas precisa criar consistência.",
      acoes: [
        "Realiza o login e faz as primeiras configurações",
        "Inicia as primeiras videoaulas introdutórias",
        "Busca os canais de suporte e fóruns de sua turma"
      ],
      pensamentos: [
        "Às vezes não sei por onde começar.",
        "Quero algo direto e com pessoas para trocar dúvidas."
      ],
      sentimentos: ["Motivação", "Frustração", "Ansiedade"],
      dores: [
        "Sensação imediata de solidão ao iniciar os estudos noturnos.",
        "Dificuldade de manter o ritmo nos primeiros dias sem acompanhamento ativo."
      ],
      oportunidades: [
        "Onboarding interativo e gamificado de configuração de perfil.",
        "Plano de estudos flexível configurável desde o primeiro acesso.",
        "Ambiente de estudos acolhedor e com ranking desativado por padrão."
      ]
    },
    {
      id: "adocao",
      label: "4. Adoção",
      desc: "Estudo Habitual",
      contexto: "Ela assiste às aulas e interage com as ferramentas internas. A velocidade e a praticidade são chaves na rotina.",
      acoes: [
        "Utiliza o bloco de notas integrado enquanto assiste",
        "Acelera os vídeos em sessões de cansaço extremo",
        "Posta dúvidas pontuais e responde a colegas no fórum"
      ],
      pensamentos: [
        "Não gosto de competir, quero um ambiente colaborativo.",
        "Gostei da liberdade, mas sinto falta de alguém para trocar ideias."
      ],
      sentimentos: ["Felicidade", "Solidão", "Frustração"],
      dores: [
        "Frustração severa quando não obtém respostas rápidas em dúvidas.",
        "Falta de espaço integrado para fazer anotações sem pausar o player.",
        "Dificuldade em manter foco caso o conteúdo pareça desatualizado."
      ],
      oportunidades: [
        "Bloco de notas integrado sincronizado com o tempo do vídeo (timestamps).",
        "Medalhas, conquistas ou incentivos simbólicos por módulo concluído.",
        "Certificado intermediário e badges colecionáveis como reforço positivo."
      ]
    },
    {
      id: "fidelizacao",
      label: "5. Fidelização",
      desc: "Evolução Tangível",
      contexto: "Finaliza parte da jornada. Sofia sente-se mais confiante para portfólio, mas valoriza imensamente a comunidade e o networking.",
      acoes: [
        "Compartilha conquistas e certificados intermediários no LinkedIn",
        "Participa de eventos ao vivo e mentorias em grupo",
        "Indica a plataforma para colegas interessados em migração"
      ],
      pensamentos: [
        "Gostei do curso, principalmente do apoio dos professores.",
        "Me sinto cada vez mais pronta para entrar no mercado."
      ],
      sentimentos: ["Satisfação", "Orgulho", "Pertencimento"],
      dores: [
        "Dificuldade para manter o networking ativo após concluir as aulas.",
        "Perda de contato com professores e monitores ao fim do curso."
      ],
      oportunidades: [
        "Acesso contínuo e vitalício à comunidade e ao chat de alunos.",
        "Convites preferenciais para mentorias avançadas e trilhas corporativas.",
        "Eventos integrando ex-alunos com recrutadores e profissionais ativos."
      ]
    }
  ];

  const marcosStages = [
    {
      id: "descoberta",
      label: "1. Descoberta",
      desc: "Busca inicial",
      contexto: "Marcos é UX Designer e busca aprimorar suas habilidades com um curso prático e otimizado que caiba em sua rotina de trabalho.",
      acoes: [
        "Pesquisa ementas de especialização avançada no Google",
        "Assiste a reviews de didática no YouTube",
        "Analisa a linearidade e objetividade dos temas propostos"
      ],
      pensamentos: [
        "Quero entender o conteúdo avançado de UX/UI sem enrolação ou aulas prolixas.",
        "Gosto de ver primeiro o que será criado para depois criar."
      ],
      sentimentos: ["Determinação", "Exigência", "Foco"],
      dores: [
        "Perda de foco e desinteresse quando o conteúdo é muito raso ou prolixo.",
        "Dificuldade em identificar se o curso é prático antes da compra."
      ],
      oportunidades: [
        "Exibir a linearidade da trilha avançada de especialização.",
        "Oferecer uma aula de aplicação prática avançada como preview gratuito."
      ]
    },
    {
      id: "consideracao",
      label: "2. Consideração",
      desc: "Análise da Proposta",
      contexto: "Marcos compara plataformas de ensino focando em ementas sólidas, acompanhamento humano e canais dinâmicos de interação.",
      acoes: [
        "Lê avaliações de ex-alunos e analisa os prazos dos cursos",
        "Verifica se o suporte de monitores é ativo",
        "Analisa a qualidade e metodologia dos vídeos"
      ],
      pensamentos: [
        "Espero que a plataforma não seja chapada e ofereça um espaço de troca real com outros designers."
      ],
      sentimentos: ["Expectativa", "Critério", "Ansiedade"],
      dores: [
        "Plataformas de ensino tradicionais que são frias, estáticas e impessoais.",
        "Suporte automatizado ou chatbots que tornam a experiência fria."
      ],
      oportunidades: [
        "Proporcionar preview da plataforma destacando a comunidade e suporte.",
        "Destacar a existência de canais de troca humana (café online)."
      ]
    },
    {
      id: "decisao",
      label: "3. Decisão",
      desc: "O Primeiro Passo",
      contexto: "Marcos inicia o curso e planeja organizar suas sessões de estudos intercaladas com suas atividades profissionais.",
      acoes: [
        "Realiza o login e configura seu perfil na plataforma",
        "Usa sua agenda pessoal para planejar as metas de estudo",
        "Estrutura o cronograma integrando sessões de foco com a técnica Pomodoro"
      ],
      pensamentos: [
        "Vou organizar meus estudos na agenda para manter a constância.",
        "Quero começar aplicando o conhecimento em desafios reais o quanto antes."
      ],
      sentimentos: ["Motivação", "Organização", "Confiança"],
      dores: [
        "Dificuldade de sincronizar e terminar as entregas dentro do prazo.",
        "Falta de suporte imediato para dúvidas metodológicas iniciais."
      ],
      oportunidades: [
        "Onboarding inicial adaptável que ajude a organizar cronogramas flexíveis.",
        "Disponibilizar resumos práticos e objetivos dos desafios logo no primeiro acesso."
      ]
    },
    {
      id: "adocao",
      label: "4. Adoção",
      desc: "Estudo Habitual",
      contexto: "Estuda ativamente, priorizando conteúdos diretos e valorizando feedbacks de progresso constantes.",
      acoes: [
        "Utiliza Pomodoro e intercala o estudo com momentos de pausa",
        "Acelera as aulas em vídeos prolixos para otimizar o tempo",
        "Usa seu quadro de propósito pessoal para manter-se focado"
      ],
      pensamentos: [
        "Quando o conteúdo das aulas fica muito prolixo eu perco foco, gosto de mais praticidade e otimização.",
        "Quero saber exatamente a minha porcentagem concluída e o que falta."
      ],
      sentimentos: ["Produtividade", "Foco", "Urgência"],
      dores: [
        "Assuntos excessivamente prolixos deixam a pessoa entediada rapidamente.",
        "Plataforma muito chapada que não celebra marcos de evolução de curto prazo."
      ],
      oportunidades: [
        "Painel com barra de progresso em porcentagens claras por módulo.",
        "Comemorações visuais ao atingir níveis/marcos e avatares customizados."
      ]
    },
    {
      id: "fidelizacao",
      label: "5. Fidelização",
      desc: "Evolução Tangível",
      contexto: "Marcos finaliza partes do curso, buscando aplicar os aprendizados no mercado e fazer networking de valor.",
      acoes: [
        "Participa ativamente dos cafés online e espaços de troca de ideias",
        "Compartilha seu progresso e certificado em suas redes",
        "Busca novas indicações e parcerias profissionais na plataforma"
      ],
      pensamentos: [
        "Gostei do curso, principalmente do apoio prático e das trocas.",
        "Conseguir aplicar o conhecimento no meu dia a dia é o meu maior objetivo."
      ],
      sentimentos: ["Realização", "Orgulho", "Conexão"],
      dores: [
        "Dificuldade extrema de formar grupos no EAD e sincronizar agendas de trabalho.",
        "Perda de contato com a rede profissional de alunos/monitores após o curso."
      ],
      oportunidades: [
        "Espaço contínuo de café online dinâmico focado em facilitar grupos e networking.",
        "Eventos de conexão entre ex-alunos formados e recrutadores."
      ]
    }
  ];

  const stages = activePersona === "sofia" ? sofiaStages : marcosStages;
  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section id="pesquisa" className="py-24 bg-surface/10 border-y border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Entendimento do Comportamento</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Jornada do Usuário</h2>
          <p className="text-text-secondary max-w-3xl mx-auto text-sm leading-relaxed">
            As jornadas sintetizam dois perfis comportamentais identificados na pesquisa. Sofia representa a aluna em transição de carreira que busca clareza, suporte e pertencimento. Marcos representa o aluno familiarizado com estudo online, que busca praticidade, aplicação direta, organização e progresso visível para manter ritmo.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => handlePersonaChange("sofia")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
              activePersona === "sofia"
                ? "bg-surface-elevated border-brand/40 shadow-sm text-brand-strong scale-[1.01]"
                : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
            }`}
          >
            Jornada da Sofia Martins
          </button>
          <button
            onClick={() => handlePersonaChange("marcos")}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
              activePersona === "marcos"
                ? "bg-surface-elevated border-brand/40 shadow-sm text-brand-strong scale-[1.01]"
                : "bg-surface/30 border-border/40 text-text-secondary opacity-60 hover:opacity-100"
            }`}
          >
            Jornada do Marcos
          </button>
        </div>

        {/* Tab Headers */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-border mb-12">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`flex-1 text-center py-4 px-5 rounded-2xl border transition-all duration-300 flex-shrink-0 min-w-[160px] md:min-w-0 cursor-pointer ${
                activeStage === stage.id
                  ? "bg-surface-elevated border-brand/40 shadow-md scale-[1.01]"
                  : "bg-surface/30 border-border/40 opacity-60 hover:opacity-100"
              }`}
            >
              <p className={`text-xs font-bold ${activeStage === stage.id ? "text-brand-strong" : "text-text-primary"}`}>
                {stage.label}
              </p>
              <p className="text-[10px] text-text-secondary mt-1">{stage.desc}</p>
            </button>
          ))}
        </div>

        {/* Journey Content Grid */}
        <div className="bg-gradient-to-br from-surface to-surface-elevated border border-border rounded-3xl p-6 md:p-10 shadow-lg relative transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/3 dark:bg-brand/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Context, Actions, Thoughts, Feelings */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Contexto */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-brand uppercase tracking-wider block">Contexto Comportamental</span>
                <div className="flex gap-2.5 items-start">
                  <Compass className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-text-secondary leading-relaxed">{current.contexto}</p>
                </div>
              </div>

              {/* Ações */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-strong" />
                  Ações Realizadas
                </h4>
                <ul className="space-y-1.5 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.acoes.map((acao, i) => (
                    <li key={i}>{acao}</li>
                  ))}
                </ul>
              </div>

              {/* Sentimentos (Chips) */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <Smile className="w-4 h-4 text-brand-strong" />
                  Sentimentos Associados
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.sentimentos.map((sent, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-strong text-[10px] font-bold"
                    >
                      {sent}
                    </span>
                  ))}
                </div>
              </div>

              {/* O que pensa */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-strong" />
                  O que pensa / Citações
                </h4>
                <div className="space-y-2">
                  {current.pensamentos.map((pens, i) => (
                    <div
                      key={i}
                      className="bg-surface p-3 rounded-2xl border border-border/60 text-xs text-text-secondary italic leading-relaxed relative"
                    >
                      <span className="absolute top-2 left-3 text-2xl text-brand-soft/20 font-serif">“</span>
                      <p className="pl-5">{pens}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side: Dores (Friction Points) & Opportunities */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dores */}
              <div className="bg-red-500/5 dark:bg-red-500/3 border border-red-500/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  Dores / Pontos de Fricção
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.dores.map((dor, i) => (
                    <li key={i} className="marker:text-red-500/70">{dor}</li>
                  ))}
                </ul>
              </div>

              {/* Oportunidades */}
              <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-3">
                <h4 className="text-xs font-bold text-brand-strong uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand" />
                  Oportunidades de Produto
                </h4>
                <ul className="space-y-2 text-xs text-text-secondary list-disc pl-5 leading-relaxed">
                  {current.oportunidades.map((op, i) => (
                    <li key={i} className="marker:text-brand">{op}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
