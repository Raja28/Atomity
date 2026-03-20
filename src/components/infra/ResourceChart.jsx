
import { motion as Motion } from "framer-motion";

const resources = [
  { label: "CPU", value: 90, color: "var(--glow-primary)" },
  { label: "GPU", value: 68, color: "var(--glow-secondary)" },
  { label: "RAM", value: 74, color: "var(--glow-accent)" },
  { label: "PV", value: 50, color: "var(--glow-primary)" },
  { label: "Net", value: 58, color: "var(--glow-secondary)" },
  { label: "I/O", value: 44, color: "var(--glow-accent)" },
];

const maxBarH = 100;

const ResourceChart = ({ delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0, 0, 1] }}
      className="glass rounded-2xl px-4 py-5 sm:px-6 sm:py-6 glow-primary"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs sm:text-sm font-semibold text-foreground">Resource Usage</span>
        <span className="text-[10px] sm:text-xs text-muted-foreground">Live</span>
      </div>
      <div className="flex items-end justify-center gap-2 sm:gap-3" style={{ height: maxBarH }}>
        {resources.map((r, i) => {
        //   const barH = (r.value / 100) * maxBarH;
          return (
            <div key={r.label} className="flex flex-col items-center gap-1.5 flex-1">
              <span className="text-[9px] sm:text-[10px] font-bold" style={{ color: `hsl(${r.color})` }}>
                {r.value}%
              </span>
              <div className="w-full max-w-[32px] relative rounded-md overflow-hidden" style={{ height: maxBarH * 0.7 }}>
                <div className="absolute inset-0 rounded-md" style={{ background: `hsl(${r.color} / 0.08)` }} />
                <Motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(r.value / 100) * 100}%` }}
                  transition={{
                    duration: 0.8,
                    delay: delay + 0.2 + i * 0.08,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="absolute bottom-0 left-0 right-0 rounded-md"
                  style={{
                    background: `linear-gradient(to top, hsl(${r.color} / 0.6), hsl(${r.color} / 0.2))`,
                    boxShadow: `0 0 12px hsl(${r.color} / 0.3)`,
                  }}
                />
              </div>
              <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">
                {r.label}
              </span>
            </div>
          );
        })}
      </div>
    </Motion.div>
  );
};

export default ResourceChart;
