import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "neutral";
  color?: "blue" | "green" | "orange";
}

export function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  trend, 
  color = "blue" 
}: MetricCardProps) {
  const colorClasses = {
    blue: "from-[#00C2FF]/20 to-[#00C2FF]/5 border-[#00C2FF]/30",
    green: "from-[#00E5A8]/20 to-[#00E5A8]/5 border-[#00E5A8]/30",
    orange: "from-[#FF6B3D]/20 to-[#FF6B3D]/5 border-[#FF6B3D]/30",
  };

  const iconColors = {
    blue: "#00C2FF",
    green: "#00E5A8",
    orange: "#FF6B3D",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 backdrop-blur-sm ${colorClasses[color]}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5" style={{ color: iconColors[color] }} />
            <p className="text-sm text-gray-400">{label}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-semibold" style={{ color: iconColors[color] }}>
              {value}
            </p>
            {unit && <span className="text-lg text-gray-500">{unit}</span>}
          </div>
        </div>
        {trend && (
          <div className={`text-xs px-2 py-1 rounded ${
            trend === "up" ? "bg-green-500/20 text-green-400" :
            trend === "down" ? "bg-red-500/20 text-red-400" :
            "bg-gray-500/20 text-gray-400"
          }`}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
          </div>
        )}
      </div>
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${iconColors[color]}20, transparent 50%)`,
        }}
      />
    </motion.div>
  );
}
