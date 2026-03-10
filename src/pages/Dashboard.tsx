import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Plusicon } from "../icons/Plusicon";
import { Shareicon } from "../icons/Shareicon";
import Card from "../components/ui/Card";
import CreateContentModal from "../components/ui/CreateContentModal";
import Sidebar from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

type FilterType = "all" | "youtube" | "twitter" | "instagram" | "facebook" | "linkedin";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filter, setFilter] = useState<FilterType>("all");

  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  const filteredContents =
    filter === "all"
      ? contents
      : contents.filter((item) => item.type === filter);

  async function handleShare() {
    const response = await axios.post(
      BACKEND_URL + "/api/v1/brain/share",
      { share: true },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    const shareUrl = `${window.location.origin}/share/${response.data.hash}`;
    navigator.clipboard.writeText(shareUrl);
    alert(`Share link copied to clipboard.`);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex relative overflow-hidden">
      {/* Background Texture Layers */}
      <div className="fixed inset-0 bg-mesh opacity-20 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-dot-grid opacity-[0.2] pointer-events-none z-0" />

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setFilter={setFilter} />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10 transition-all duration-300">
        {/* Superior Header */}
        <header className="sticky top-0 z-30 h-24 bg-slate-950/50 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-12">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-3 rounded-2xl text-indigo-400 hover:bg-white/10 hover:text-white transition-all duration-300 shadow-sm border border-white/5 bg-white/5"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex flex-col">
               <h1 className="text-2xl font-bold tracking-tight text-white uppercase leading-none">
                 My Library
               </h1>
               <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-2">
                 {filteredContents.length} Items Saved
               </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleShare}
              variant="ghost"
              size="md"
              text="Share Library"
              startIcon={<Shareicon size="sm" />}
            />
            <Button
              onClick={() => setModalOpen(true)}
              variant="secondary"
              size="md"
              text="Add Item"
              startIcon={<Plusicon size="sm" />}
            />
          </div>
        </header>

        {/* Modal Entry */}
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

        {/* Data Grid */}
        <main className="flex-1 p-12 overflow-y-auto scroll-smooth">
          {filteredContents.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center border-2 border-dashed border-white/5 rounded-[60px] bg-white/5 p-20 backdrop-blur-xl">
              <div className="w-20 h-20 rounded-[30px] bg-white/5 border border-white/5 shadow-2xl flex items-center justify-center mb-8 rotate-3">
                <Plusicon size="md" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Library Empty</h2>
              <p className="text-slate-400 max-w-sm leading-relaxed mb-10">
                Your brain is currently offline. Save your first link to get started.
              </p>
              <Button 
                 onClick={() => setModalOpen(true)}
                 text="Add your first item" 
                 variant="secondary" 
                 size="lg" 
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-16">
              {filteredContents.map(({ type, link, title, _id }) => (
                <Card key={_id} _id={_id} type={type} link={link} title={title} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}