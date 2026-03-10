import { useRef, useState } from "react";
import CrossIcon from "../../icons/CrossIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import Instagram from "../../icons/InstagramIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Instagram = "instagram",
  Facebook = "facebook",
  LinkedIn = "linkedin",
}

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

const contentTypes = [
  { value: ContentType.Youtube, label: "YouTube", icon: YoutubeIcon },
  { value: ContentType.Twitter, label: "Twitter", icon: TwitterIcon },
  { value: ContentType.Instagram, label: "Instagram", icon: Instagram },
  { value: ContentType.Facebook, label: "Facebook", icon: FacebookIcon },
  { value: ContentType.LinkedIn, label: "LinkedIn", icon: LinkedinIcon },
];

const CreateContentModal = ({ open, onClose }: CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      BACKEND_URL + "/api/v1/content",
      { title, link, type },
      { headers: { Authorization: localStorage.getItem("token") } }
    );

    onClose();
  }

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-xl animate-fade-in"
      />

      <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-slate-900 border border-white/5 rounded-[48px] shadow-3xl p-12 animate-scale-in relative overflow-hidden backdrop-blur-3xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />

          <div className="flex items-start justify-between mb-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight uppercase mb-2">
                Add Item
              </h2>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Save a new link to your library
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer"
            >
              <CrossIcon size="md" />
            </button>
          </div>

          <div className="space-y-10 relative z-10">
            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest px-6">
                Name
              </label>
              <Input ref={titleRef} placeholder="Give your link a name..." />
            </div>

            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest px-6">
                URL
              </label>
              <Input ref={linkRef} placeholder="Paste social link here..." />
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest px-6">
                Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {contentTypes.map((ct) => (
                  <button
                    key={ct.value}
                    onClick={() => setType(ct.value)}
                    className={`flex flex-col items-center justify-center gap-3 rounded-[24px] border px-2 py-6 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${type === ct.value
                        ? "bg-white border-white text-indigo-600 shadow-2xl scale-105"
                        : "border-white/5 text-slate-500 hover:border-white/10 hover:bg-white/5"
                      }`}
                  >
                    <ct.icon size="sm" />
                    <span className="mt-1">{ct.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={addContent}
                variant="primary"
                size="lg"
                text="Save link →"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContentModal;
