import SidebarItem from "./SidebarItem";
import TwitterIcon from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import BrainIcon from "../../icons/BrainIcon";
import HomeIcon from "../../icons/HomeIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import { useNavigate } from "react-router-dom";
import { Logouticon } from "../../icons/Logout";
import { useState } from "react";

interface SidebarProps {
  setFilter: (value: any) => void;
  sidebarOpen: boolean;
}

type FilterType = "all" | "youtube" | "twitter" | "instagram" | "facebook" | "linkedin";

const navItems: { label: string; value: FilterType; icon: any }[] = [
  { label: "All Items", value: "all", icon: HomeIcon },
  { label: "YouTube", value: "youtube", icon: YoutubeIcon },
  { label: "Twitter", value: "twitter", icon: TwitterIcon },
  { label: "Instagram", value: "instagram", icon: InstagramIcon },
  { label: "Facebook", value: "facebook", icon: FacebookIcon },
  { label: "LinkedIn", value: "linkedin", icon: LinkedinIcon },
];

const Sidebar = ({ setFilter, sidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<FilterType>("all");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function handleFilter(value: FilterType) {
    setActive(value);
    setFilter(value);
  }

  return (
    <aside
      className={`h-screen sticky top-0 bg-slate-950 border-r border-white/5 flex flex-col transition-all duration-300 shrink-0 z-40 ${
        sidebarOpen ? "w-72 p-10" : "w-0 overflow-hidden p-0 border-none"
      }`}
    >
      {/* Branding */}
      <div 
        className="flex items-center gap-4 mb-16 select-none group cursor-pointer" 
        onClick={() => navigate("/")}
      >
        <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/20 group-hover:scale-105 transition-transform">
          <BrainIcon size="md" />
        </div>
        <span className="text-xl font-bold tracking-tight uppercase">Brainly</span>
      </div>

      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 px-1">
        Folders
      </p>

      {/* Nav */}
      <nav className="space-y-2 flex-1 scrollbar-hide">
        {navItems.map((item) => (
          <div key={item.value} onClick={() => handleFilter(item.value)}>
            <SidebarItem
              text={item.label}
              icon={<item.icon size="sm" />}
              active={active === item.value}
            />
          </div>
        ))}
      </nav>

      {/* Footer Branding */}
      <div className="mt-10 pt-10 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="w-full h-12 rounded-xl flex items-center justify-between px-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-red-400 hover:bg-white/5 transition-all"
        >
          Sign Out
          <Logouticon size="sm" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;