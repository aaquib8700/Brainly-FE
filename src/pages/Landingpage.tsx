import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import BrainIcon from "../icons/BrainIcon";

const features = [
  {
    title: "YouTube Videos",
    desc: "Save and embed YouTube videos directly in your collection. Watch them without leaving the app.",
    bullets: ["Full video embedding", "Supports shorts & regular videos", "Add notes & descriptions"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    title: "Twitter Posts",
    desc: "Keep track of important tweets and threads. Never lose that perfect tweet again.",
    bullets: ["Save tweets & threads", "Quick access to originals", "Organize by topics"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    color: "text-blue-400",
    bgColor: "bg-blue-400/10"
  },
  {
    title: "Smart Organization",
    desc: "Use tags to categorize your content. Find anything in seconds with powerful search.",
    bullets: ["Unlimited tags", "Instant search & filter", "Multiple tags per item"],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
     title: "Easy Sharing",
     desc: "Share your curated library with friends or colleagues with a single click.",
     bullets: ["Private sharing links", "Collaborative collections", "View-only access"],
     icon: (
       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
         <circle cx="18" cy="5" r="3" />
         <circle cx="6" cy="12" r="3" />
         <circle cx="18" cy="19" r="3" />
         <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
         <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
       </svg>
     ),
     color: "text-green-400",
     bgColor: "bg-green-400/10"
  },
  {
     title: "AI Insights",
     desc: "Let AI help you summarize and extract key details from your saved content.",
     bullets: ["Auto-summarization", "Key topic extraction", "Smart recommendations"],
     icon: (
       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-3.5-6.5c0 2.5-1.5 4.9-3.5 6.5S6 13 6 15a7 7 0 0 0 7 7z" />
       </svg>
     ),
     color: "text-indigo-400",
     bgColor: "bg-indigo-400/10"
  },
  {
     title: "Secure & Private",
     desc: "Your data is encrypted and secure. You have full control over your privacy.",
     bullets: ["End-to-end encryption", "No data sharing", "Private collections"],
     icon: (
       <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
         <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
         <path d="M7 11V7a5 5 0 0110 0v4" />
       </svg>
     ),
     color: "text-yellow-400",
     bgColor: "bg-yellow-400/10"
  }
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white overflow-x-hidden">
      {/* Background Texture Layers */}
      <div className="fixed inset-0 bg-mesh opacity-30 z-0" />
      <div className="fixed inset-0 bg-dot-grid opacity-[0.2] z-0" />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div 
             className="flex items-center gap-3 group cursor-pointer" 
             onClick={() => navigate("/")}
          >
             <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/20">
               <BrainIcon size="md" />
             </div>
             <span className="text-xl font-bold tracking-tight uppercase leading-none">
                Brainly
             </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/signin")}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white px-4 py-2 transition-colors"
            >
              Log In
            </button>
            <Button
              onClick={() => navigate("/signup")}
              text="Sign Up"
              size="md"
              variant="secondary"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="pt-56 pb-32 px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-12">
             Save everything you <br />
             <span className="text-indigo-400">find online.</span>
          </h1>

          <p className="max-w-xl text-xl text-slate-400 leading-relaxed font-medium mb-16">
             Your second brain for the web. Simple organization for your links, videos, and professional insights.
          </p>

          <Button
            onClick={() => navigate("/signup")}
            text="Get started for free"
            size="lg"
            variant="secondary"
          />
        </section>

        {/* Feature Grid - Everything You Need */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Everything You Need</h2>
              <p className="text-xl text-slate-400">Simple, powerful tools to organize your digital life</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="p-10 bg-white/5 border border-white/5 rounded-[48px] backdrop-blur-sm group hover:border-indigo-500/20 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl ${f.bgColor} ${f.color} flex items-center justify-center mb-8`}>
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">{f.desc}</p>
                  
                  <ul className="space-y-3">
                    {f.bullets.map(bullet => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-slate-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                         {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </section>

        {/* CTA - Matched to Screenshot */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
           <div className="bg-slate-950 rounded-[48px] p-20 lg:p-32 text-center relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] -mr-64 -mt-64 rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-700/10 blur-[150px] -ml-64 -mb-64 rounded-full pointer-events-none" />
              
              <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1]">
                 Ready to build your <br />
                 <span className="text-indigo-400">Private Library?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-16 max-w-xl mx-auto font-medium">
                 Join thousands who never forget a useful resource. <br />
                 Save your first link in under 2 minutes.
              </p>
              <div className="flex justify-center">
                 <Button
                   onClick={() => navigate("/signup")}
                   text="Join the network (free) →"
                   size="lg"
                   variant="primary"
                 />
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-white/5 relative z-10 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                 <BrainIcon size="sm" />
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">Brainly</span>
           </div>
           <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>© 2025 Brainly</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
