"use client";

import { motion } from "framer-motion";
import { BarChart3, Braces, CloudCog, Database, Sparkles } from "lucide-react";

const cards = [
  { Icon: Database, label: "DATA", x: "8%", y: "14%", delay: 0 },
  { Icon: Braces, label: "CODE", x: "65%", y: "10%", delay: 0.3 },
  { Icon: BarChart3, label: "BI", x: "70%", y: "65%", delay: 0.55 },
  { Icon: CloudCog, label: "SYSTEMS", x: "18%", y: "68%", delay: 0.8 },
];

export default function TechVisual() {
  return (
    <div className="tech-visual" aria-hidden="true">
      <div className="visual-ring ring-one" />
      <div className="visual-ring ring-two" />
      <motion.div
        className="visual-core"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={28} />
      </motion.div>
      {cards.map(({ Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="float-card"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            y: { duration: 4.2 + delay, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <Icon size={20} />
          <span>{label}</span>
        </motion.div>
      ))}
      <svg className="visual-chart" viewBox="0 0 240 110">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#f1b939" />
          </linearGradient>
        </defs>
        <motion.path
          d="M8 91 C32 78, 46 82, 66 68 S104 61, 119 50 S148 43, 164 35 S195 32, 230 12"
          fill="none"
          stroke="url(#line)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.1, delay: 0.45 }}
        />
      </svg>
    </div>
  );
}
