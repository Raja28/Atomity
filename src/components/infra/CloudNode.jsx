import { motion as Motion } from "framer-motion";

const CloudNode = ({ label, children, glowColor = "var(--glow-primary)", delay = 0, className = "" }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0, 0, 1] }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      <Motion.div
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
        className="glass rounded-2xl p-4 sm:p-5 relative overflow-hidden group cursor-pointer"
        style={{
          boxShadow: `0 0 30px hsl(${glowColor} / 0.1), 0 0 60px hsl(${glowColor} / 0.05)`,
        }}
      >
        {/* Hover glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at center, hsl(${glowColor} / 0.08), transparent 70%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-4 right-4 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${glowColor} / 0.5), transparent)`,
          }}
        />

        <div className="relative z-10">{children}</div>
      </Motion.div>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground">{label}</span>
    </Motion.div>
  );
};

export default CloudNode;