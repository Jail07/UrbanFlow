import { LucideIcon } from "lucide-react";

interface TechIconProps {
  icon: LucideIcon;
  label: string;
  color?: string;
}

export function TechIcon({ icon: Icon, label, color = "#00C2FF" }: TechIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#1F2937] bg-[#111827]/30 backdrop-blur-sm hover:border-opacity-50 transition-all group">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}
