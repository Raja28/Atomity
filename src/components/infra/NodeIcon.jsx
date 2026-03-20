
import { motion as Motion } from "framer-motion";

const colorMap = {
  primary: { bg: "var(--glow-primary)", text: "hsl(var(--glow-primary))" },
  secondary: { bg: "var(--glow-secondary)", text: "hsl(var(--glow-secondary))" },
  accent: { bg: "var(--glow-accent)", text: "hsl(var(--glow-accent))" },
  muted: { bg: "var(--muted-foreground)", text: "hsl(var(--muted-foreground))" },
};

const icons = {
  server: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="4" width="18" height="6" rx="2" stroke={c} strokeWidth="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="2" stroke={c} strokeWidth="1.5" />
      <circle cx="7" cy="7" r="1" fill={c} />
      <circle cx="7" cy="17" r="1" fill={c} />
      <line x1="11" y1="7" x2="17" y2="7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="17" x2="17" y2="17" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  database: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke={c} strokeWidth="1.5" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke={c} strokeWidth="1.5" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  container: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22V12" stroke={c} strokeWidth="1.5" />
      <path d="M21 7l-9 5-9-5" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  function: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M7 8l5 4-5 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="16" x2="18" y2="16" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="2" y="3" width="20" height="18" rx="3" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  storage: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={c} strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={c} strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={c} strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  network: (c) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="5" r="3" stroke={c} strokeWidth="1.5" />
      <circle cx="5" cy="19" r="3" stroke={c} strokeWidth="1.5" />
      <circle cx="19" cy="19" r="3" stroke={c} strokeWidth="1.5" />
      <line x1="10" y1="7.5" x2="6.5" y2="16.5" stroke={c} strokeWidth="1.5" />
      <line x1="14" y1="7.5" x2="17.5" y2="16.5" stroke={c} strokeWidth="1.5" />
      <line x1="8" y1="19" x2="16" y2="19" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
};

const NodeIcon = ({ variant = "server", color = "primary", label, delay = 0 }) => {
  const { bg, text } = colorMap[color];

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.2, 0, 0, 1] }}
      className="flex flex-col items-center gap-1.5"
    >
      <div
        className="w-8 h-8 sm:w-9 sm:h-9 p-1.5 rounded-lg"
        style={{
          background: `hsl(${bg} / 0.1)`,
          border: `1px solid hsl(${bg} / 0.2)`,
        }}
      >
        {icons[variant](text)}
      </div>
      {label && (
        <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground whitespace-nowrap">
          {label}
        </span>
      )}
    </Motion.div>
  );
};

export default NodeIcon;
