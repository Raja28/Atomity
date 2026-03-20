// import { motion } from "framer-motion";
import { motion as Motion } from "framer-motion";

const ConnectionLines = () => {
  const lines = [
    { x1: "18%", y1: "22%", x2: "38%", y2: "38%", delay: 0.6, color: "var(--node-aws)" },
    { x1: "82%", y1: "22%", x2: "62%", y2: "38%", delay: 0.7, color: "var(--node-azure)" },
    { x1: "18%", y1: "78%", x2: "38%", y2: "62%", delay: 0.8, color: "var(--node-gcp)" },
    { x1: "82%", y1: "78%", x2: "62%", y2: "62%", delay: 0.9, color: "var(--node-onprem)" },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        {lines.map((_, i) => (
          <linearGradient key={i} id={`line-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={`hsl(${lines[i].color} / 0.5)`} />
            <stop offset="100%" stopColor={`hsl(${lines[i].color} / 0.1)`} />
          </linearGradient>
        ))}
      </defs>
      {lines.map((line, i) => (
        <g key={i}>
          {/* Glow line */}
          <Motion.line
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke={`hsl(${line.color} / 0.15)`}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: line.delay }}
          />
          {/* Main line */}
          <Motion.line
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke={`url(#line-grad-${i})`}
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.8, pathLength: 1 }}
            transition={{ duration: 1.2, delay: line.delay, ease: [0.2, 0, 0, 1] }}
          />
        </g>
      ))}
    </svg>
  );
};

export default ConnectionLines
