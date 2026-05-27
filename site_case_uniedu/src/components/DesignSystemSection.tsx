import { useState } from "react";
import { Sun, Moon, Trophy, BookOpen, Lock, CheckCircle2, Clock, Zap } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

// --- Color tokens derived from the app's design system ---
const colorTokens = [
  { label: "Primary Pink",  hex: "#D81B60", bg: "#D81B60", lightText: true,  usage: "CTAs, progresso, badges, gamificação" },
  { label: "Accent Pink",   hex: "#F06292", bg: "#F06292", lightText: true,  usage: "Hover, destaques suaves, ícones ativos" },
  { label: "Soft Pink",     hex: "#F48FB1", bg: "#F48FB1", lightText: false, usage: "Acento de texto no Dark Mode" },
  { label: "Strong Pink",   hex: "#A31545", bg: "#A31545", lightText: true,  usage: "Acento acessível no Light Mode" },
  { label: "BG Dark",       hex: "#120E10", bg: "#120E10", lightText: true,  usage: "Fundo principal — Dark Mode" },
  { label: "Surface Dark",  hex: "#1E1A1D", bg: "#1E1A1D", lightText: true,  usage: "Cards e superfícies — Dark Mode" },
  { label: "BG Light",      hex: "#FFFBFD", bg: "#FFFBFD", lightText: false, usage: "Fundo principal — Light Mode" },
  { label: "Surface Light", hex: "#FDF2F5", bg: "#FDF2F5", lightText: false, usage: "Cards e superfícies — Light Mode" },
  { label: "Text Dark",     hex: "#FCE4EC", bg: "#FCE4EC", lightText: false, usage: "Texto principal — Dark Mode" },
  { label: "Muted",         hex: "#9E9EAE", bg: "#9E9EAE", lightText: true,  usage: "Labels, captions, secundário" },
];

// --- Typography hierarchy ---
const typeSamples = [
  {
    role: "Display",
    sample: "Aprenda com consistência",
    className: "text-2xl md:text-3xl font-extrabold tracking-tight",
    note: "Plus Jakarta Sans · 800 · −0.02em",
  },
  {
    role: "Heading",
    sample: "Módulo 2 — Gestão do Tempo",
    className: "text-xl font-bold tracking-tight",
    note: "Plus Jakarta Sans · 700",
  },
  {
    role: "Body",
    sample: "Acompanhe seu ritmo de estudos e construa hábitos que persistem além de uma semana de intensidade.",
    className: "text-base font-normal",
    note: "Inter · 400 · leading 1.6",
  },
  {
    role: "Caption",
    sample: "MÓDULO CONCLUÍDO · 120 XP",
    className: "text-[10px] font-bold tracking-widest uppercase",
    note: "Inter · 700 · uppercase · 0.1em",
  },
];

// --- Usage rules ---
const usageRules = [
  { rule: "Rosa como acento",          detail: "Não como fundo dominante — direciona o olho para ações e progresso." },
  { rule: "Contraste 4.5:1 mínimo",    detail: "Texto primário sempre acima do mínimo WCAG AA em Light e Dark." },
  { rule: "Hierarquia por superfície", detail: "Card > surface > background, sem precisar de sombras pesadas." },
  { rule: "Badges comunicam estado",   detail: "Cada nível de progresso tem representação visual clara e consistente." },
  { rule: "Reaproveitamento visual",   detail: "Mesmo card, badge e botão usados no app e no site do case." },
  { rule: "Feedback de gamificação",   detail: "XP, conquistas e barras de progresso reforçam o loop motivacional." },
];

export default function DesignSystemSection() {
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("dark");
  const isDark = previewTheme === "dark";

  // Inline palette for the interactive preview (independent of site global theme)
  const pv = {
    bg:       isDark ? "#120E10" : "#FFFBFD",
    surface:  isDark ? "#1E1A1D" : "#FDF2F5",
    elevated: isDark ? "#2A2228" : "#FFFFFF",
    text:     isDark ? "#FCE4EC" : "#1D1518",
    muted:    isDark ? "#9E9EAE" : "#6E5E64",
    border:   isDark ? "rgba(255,255,255,0.08)" : "rgba(216,27,96,0.08)",
  };

  const lessonItems = [
    { Icon: CheckCircle2, color: "#10b981", label: "Técnicas Pomodoro",      active: false },
    { Icon: CheckCircle2, color: "#10b981", label: "Flow State e Deep Work", active: false },
    { Icon: Clock,        color: "#D81B60", label: "Gestão de Distrações",   active: true  },
    { Icon: Lock,         color: pv.muted,  label: "Revisão Espaçada",       active: false },
  ];

  const statusBadges = [
    { label: "Concluído",    bg: "rgba(16,185,129,0.12)",  color: "#10b981" },
    { label: "Em andamento", bg: "rgba(216,27,96,0.12)",   color: "#D81B60" },
    { label: "Não iniciado", bg: isDark ? "rgba(255,255,255,0.06)" : "rgba(110,94,100,0.1)", color: pv.muted },
    { label: "Bloqueado",    bg: isDark ? "rgba(255,255,255,0.04)" : "rgba(110,94,100,0.07)", color: pv.muted },
    { label: "Novo",         bg: "rgba(216,27,96,0.12)",   color: "#F06292" },
  ];

  return (
    <section id="design-system" className="py-24 bg-surface/20 border-t border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand mb-4 block">
              Sistema Visual
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Design System aplicado ao produto
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
              A solução visual do UNIEDU foi construída para funcionar como um sistema: cores, componentes, estados e temas se repetem entre app e apresentação, reforçando consistência, acessibilidade e viabilidade de implementação.
            </p>
          </div>
        </RevealOnScroll>

        {/* ── 01 · Tipografia ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              01 · Tipografia
            </h3>
            <div className="rounded-2xl border border-border bg-surface-elevated overflow-hidden">
              <div className="px-5 py-3 border-b border-border flex items-center gap-2 bg-surface/50">
                <span className="w-2 h-2 rounded-full bg-brand/40 block" />
                <span className="text-[11px] text-text-secondary font-medium">
                  Plus Jakarta Sans (headers) + Inter (body) — sistema tipográfico do UNIEDU
                </span>
              </div>
              <div className="divide-y divide-border">
                {typeSamples.map((t) => (
                  <div key={t.role} className="px-5 py-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div className="w-16 shrink-0">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-brand">{t.role}</span>
                    </div>
                    <div className="flex-1">
                      <p className={`${t.className} text-text-primary leading-tight`}>{t.sample}</p>
                    </div>
                    <div className="text-[10px] text-text-secondary font-mono shrink-0 hidden md:block">{t.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 02 · Cores e Tokens ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              02 · Cores e Tokens
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {colorTokens.map((c) => (
                <div key={c.label} className="rounded-xl border border-border overflow-hidden bg-surface-elevated">
                  <div className="h-12 w-full" style={{ background: c.bg }} />
                  <div className="p-3">
                    <p className="text-[11px] font-bold text-text-primary leading-tight">{c.label}</p>
                    <p className="text-[10px] text-text-secondary font-mono mt-0.5">{c.hex}</p>
                    <p className="text-[10px] text-text-secondary mt-1.5 leading-tight">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 03 · Componentes com toggle local ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand">
                03 · Componentes
              </h3>
              {/* Local Light / Dark toggle */}
              <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-surface text-[11px]">
                <button
                  onClick={() => setPreviewTheme("light")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 ${
                    !isDark
                      ? "bg-surface-elevated text-text-primary shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <Sun size={11} />Light
                </button>
                <button
                  onClick={() => setPreviewTheme("dark")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 ${
                    isDark
                      ? "bg-[#1E1A1D] text-[#FCE4EC] shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <Moon size={11} />Dark
                </button>
              </div>
            </div>

            {/* Preview canvas */}
            <div
              className="rounded-2xl border overflow-hidden transition-all duration-500"
              style={{ background: pv.bg, borderColor: pv.border }}
            >
              {/* Window chrome */}
              <div
                className="px-5 py-3 flex items-center justify-between border-b transition-all duration-500"
                style={{ background: pv.surface, borderColor: pv.border }}
              >
                <span style={{ fontSize: "11px", fontWeight: 700, color: pv.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Prévia — {isDark ? "Dark Mode" : "Light Mode"}
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/50 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50 block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/50 block" />
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Left column — module card + lesson list */}
                <div className="flex flex-col gap-4">

                  {/* Module card */}
                  <div
                    className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-500"
                    style={{ background: pv.surface, border: `1px solid ${pv.border}` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D81B60", marginBottom: "4px" }}>
                          Módulo 2
                        </p>
                        <p style={{ fontSize: "15px", fontWeight: 700, color: pv.text, lineHeight: 1.3 }}>
                          Gestão do Tempo e Foco
                        </p>
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", color: "#D81B60", borderRadius: "8px", padding: "4px 8px", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", gap: "3px", flexShrink: 0 }}>
                        <Zap size={10} />+120 XP
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                        <span style={{ fontSize: "11px", color: pv.muted }}>Progresso</span>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#D81B60" }}>65%</span>
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", borderRadius: "9999px", height: "6px", overflow: "hidden" }}>
                        <div style={{ background: "linear-gradient(to right, #D81B60, #F06292)", width: "65%", height: "100%", borderRadius: "9999px" }} />
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: pv.muted }}>
                        <BookOpen size={12} />3 de 5 aulas
                      </div>
                      <div style={{ background: "rgba(216,27,96,0.12)", color: "#D81B60", borderRadius: "9999px", padding: "3px 10px", fontSize: "11px", fontWeight: 600 }}>
                        Em andamento
                      </div>
                    </div>
                  </div>

                  {/* Lesson list */}
                  <div
                    className="rounded-xl px-4 py-2 transition-all duration-500"
                    style={{ background: pv.elevated, border: `1px solid ${pv.border}` }}
                  >
                    {lessonItems.map((item, i) => (
                      <div
                        key={item.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "9px 0",
                          borderBottom: i < lessonItems.length - 1 ? `1px solid ${pv.border}` : "none",
                        }}
                      >
                        <item.Icon size={13} color={item.color} strokeWidth={2.5} />
                        <span style={{ fontSize: "12px", color: item.active ? pv.text : pv.muted, fontWeight: item.active ? 600 : 400, flex: 1 }}>
                          {item.label}
                        </span>
                        {item.active && (
                          <span style={{ fontSize: "10px", fontWeight: 700, color: "#D81B60" }}>Atual</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column — achievement + badges + buttons */}
                <div className="flex flex-col gap-4">

                  {/* Achievement card */}
                  <div
                    className="rounded-xl p-4 flex items-center gap-3 transition-all duration-500"
                    style={{ background: pv.elevated, border: `1px solid ${pv.border}` }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(216,27,96,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Trophy size={18} color="#D81B60" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: pv.text }}>Semana Consistente</p>
                      <p style={{ fontSize: "11px", color: pv.muted, marginTop: 2 }}>7 dias de acesso consecutivo</p>
                    </div>
                    <div style={{ background: "linear-gradient(135deg,#D81B60,#F06292)", color: "#fff", borderRadius: 8, padding: "4px 8px", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>
                      +50 XP
                    </div>
                  </div>

                  {/* Status badges */}
                  <div
                    className="rounded-xl p-4 transition-all duration-500"
                    style={{ background: pv.surface, border: `1px solid ${pv.border}` }}
                  >
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: pv.muted, marginBottom: 12 }}>
                      Status de Progresso
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {statusBadges.map((b) => (
                        <span key={b.label} style={{ background: b.bg, color: b.color, borderRadius: "9999px", padding: "4px 12px", fontSize: "11px", fontWeight: 600 }}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    className="rounded-xl p-4 transition-all duration-500"
                    style={{ background: pv.surface, border: `1px solid ${pv.border}` }}
                  >
                    <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: pv.muted, marginBottom: 12 }}>
                      Botões
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                      <button style={{ background: "#D81B60", color: "#fff", borderRadius: 10, padding: "8px 18px", fontSize: "13px", fontWeight: 700, border: "none", cursor: "pointer" }}>
                        Continuar
                      </button>
                      <button style={{ background: "transparent", color: isDark ? "#F48FB1" : "#A31545", borderRadius: 10, padding: "8px 18px", fontSize: "13px", fontWeight: 600, border: `1.5px solid ${isDark ? "rgba(244,143,177,0.3)" : "rgba(163,21,69,0.25)"}`, cursor: "pointer" }}>
                        Ver detalhes
                      </button>
                      <button style={{ background: "transparent", color: pv.muted, borderRadius: 10, padding: "8px 18px", fontSize: "13px", fontWeight: 600, border: `1.5px solid ${pv.border}`, cursor: "pointer" }}>
                        Cancelar
                      </button>
                      <button style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(110,94,100,0.08)", color: pv.muted, borderRadius: 10, padding: "8px 18px", fontSize: "13px", fontWeight: 600, border: "none", cursor: "not-allowed", opacity: 0.45 }}>
                        Bloqueado
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── 04 · Regras de Uso ── */}
        <RevealOnScroll direction="up" delay={100}>
          <div>
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand mb-5">
              04 · Regras de Uso
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {usageRules.map((r, i) => (
                <div key={r.rule} className="rounded-xl p-5 bg-surface-elevated border border-border">
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-brand/50 font-mono shrink-0 mt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-text-primary mb-1">{r.rule}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{r.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
