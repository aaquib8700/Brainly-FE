import { Shareicon } from "../../icons/Shareicon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import Instagram from "../../icons/InstagramIcon";
import Facebook from "../../icons/FacebookIcon";
import Linkedin from "../../icons/LinkedinIcon";
import { DeletIcon } from "../../icons/DeleteIcon";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useContent } from "../../hooks/useContent";

interface CardProps {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube" | "instagram" | "facebook" | "linkedin";
}

const typeMeta: Record<string, { label: string; icon: any; color: string; bgColor: string }> = {
  youtube:   { label: "YouTube",   icon: YoutubeIcon, color: "text-red-500",    bgColor: "bg-red-500/10"    },
  twitter:   { label: "Twitter",   icon: TwitterIcon, color: "text-indigo-400", bgColor: "bg-indigo-400/10" },
  instagram: { label: "Instagram", icon: Instagram,   color: "text-pink-500",   bgColor: "bg-pink-500/10"   },
  facebook:  { label: "Facebook",  icon: Facebook,    color: "text-blue-500",   bgColor: "bg-blue-500/10"   },
  linkedin:  { label: "LinkedIn",  icon: Linkedin,    color: "text-sky-400",    bgColor: "bg-sky-400/10"    },
};

const Card = ({ title, link, type, _id }: CardProps) => {
  const { refresh } = useContent();
  const meta = typeMeta[type];

  async function deleteContent() {
    await axios.delete(BACKEND_URL + "/api/v1/content", {
      headers: { Authorization: localStorage.getItem("token") },
      data: { contentId: _id },
    });
    refresh();
  }

  return (
    <div className="group bg-white/5 rounded-[40px] border border-white/5 p-8 flex flex-col gap-6 transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:shadow-indigo-600/5 hover:-translate-y-1 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className={`p-3.5 rounded-2xl ${meta?.bgColor || "bg-indigo-500/10"} ${meta?.color || "text-indigo-400"} transition-all duration-300 group-hover:scale-110`}>
            {meta && <meta.icon size="sm" />}
          </div>
          <div className="flex flex-col min-w-0">
             <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">
                {meta?.label || "Item"}
             </span>
             <h3 className="text-lg font-bold text-white truncate tracking-tight leading-tight uppercase">
                {title}
             </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 transition-all"
          >
            <Shareicon size="sm" />
          </a>
          <button
            onClick={deleteContent}
            className="p-2.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-white/5 transition-all"
          >
            <DeletIcon size="sm" />
          </button>
        </div>
      </div>

      {/* Embed area */}
      <div className="rounded-[30px] overflow-hidden border border-white/5 bg-slate-900/50 aspect-video relative group/embed">
        {type === "youtube" && (
          <iframe
            className="w-full h-full grayscale-[1] group-hover/embed:grayscale-0 transition-all duration-1000 brightness-75 group-hover/embed:brightness-100"
            src={link.replace("watch?v=", "embed/").split("&")[0]}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          />
        )}

        {type === "twitter" && (
          <div className="p-6 overflow-y-auto max-h-full scrollbar-none flex items-center justify-center">
            <div className="scale-90 group-hover/embed:scale-100 transition-transform duration-700 w-full">
               <blockquote className="twitter-tweet m-0 mx-auto" data-theme="dark">
                 <a href={link.replace("x.com", "twitter.com")}></a>
               </blockquote>
            </div>
          </div>
        )}

        {(type === "instagram" || type === "facebook" || type === "linkedin") && (
          <div className="h-full flex flex-col items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-500">
                {meta && <meta.icon size="md" />}
             </div>
             <a 
               href={link} 
               target="_blank" 
               className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all py-2.5 px-6 rounded-xl border border-white/5 hover:bg-white/5"
             >
               Explore Post ↗
             </a>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
         <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">
            Saved to Vault
         </span>
         <div className="w-2 h-2 rounded-full bg-indigo-500/50" />
      </div>
    </div>
  );
};

export default Card;
