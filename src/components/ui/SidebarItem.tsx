import { type ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  active?: boolean;
}

const SidebarItem = ({ text, icon, active = false }: SidebarItemProps) => {
  return (
    <div
      className={`flex items-center gap-4 px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-300 text-[11px] font-bold uppercase tracking-widest group ${
        active
          ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
          : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className={`shrink-0 transition-all duration-300 ${active ? "scale-110" : "group-hover:scale-110"}`}>
        {icon}
      </span>
      {text}
    </div>
  );
};

export default SidebarItem;