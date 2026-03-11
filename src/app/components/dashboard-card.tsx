import { ReactNode } from "react";
import { motion } from "motion/react";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function DashboardCard({ 
  title, 
  children, 
  className = "",
  glowColor = "#00C2FF"
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-xl border border-[#1F2937] bg-[#111827]/50 backdrop-blur-sm p-6 ${className}`}
    >
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${glowColor}40, transparent 70%)`,
        }}
      />
      <h3 
        className="text-lg font-semibold mb-4"
        style={{ color: glowColor }}
      >
        {title}
      </h3>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
