import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRef, useState } from "react";
import BrainIcon from "../icons/BrainIcon";

export default function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signup() {
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await axios.post(BACKEND_URL + "/api/v1/signup", { username, password });
      navigate("/signin");
      alert("Account created successfully. Proceed to login.");
    } catch (e) {
      setError("Username already exist");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden selection:bg-indigo-600 selection:text-white">
      {/* Background Texture Layers */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.2] pointer-events-none" />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px] -mr-80 -mt-80 opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-700/10 rounded-full blur-[180px] -ml-80 -mb-80 opacity-50 pointer-events-none" />

      <div className="w-full max-w-lg relative z-10">
        <div className="flex flex-col items-center mb-16">
           <div 
             className="w-16 h-16 rounded-[24px] bg-indigo-600 flex items-center justify-center text-white mb-10 cursor-pointer shadow-3xl shadow-indigo-600/30 group hover:scale-110 transition-transform duration-700"
             onClick={() => navigate("/")}
           >
             <BrainIcon size="md" />
           </div>
           <h1 className="text-5xl font-bold tracking-tight text-white uppercase leading-none">Sign Up</h1>
           <p className="text-[10px] font-bold tracking-[0.4em] text-slate-500 mt-4 uppercase">Create your free library</p>
        </div>

        <div className="bg-slate-900 border border-white/5 p-16 rounded-[72px] shadow-3xl shadow-white/5 backdrop-blur-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
          
          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] px-8">Username</label>
              <Input
                ref={usernameRef}
                type="text"
                placeholder="Choose unique identifier..."
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] px-8">Password</label>
              <Input
                ref={passwordRef}
                type="password"
                placeholder="Min. 8 characters..."
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm font-bold text-center bg-red-500/10 border border-red-500/20 py-3 rounded-xl uppercase tracking-widest">
                {error}
              </div>
            )}

            <div className="pt-8">
              <Button
                variant="primary"
                size="lg"
                text="Initialize Node Path →"
                fullWidth
                onClick={signup}
                loading={loading}
              />
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/5 text-center relative z-10">
            <p className="text-sm text-slate-500 font-bold uppercase tracking-tight">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/signin")}
                className="text-white font-bold cursor-pointer hover:underline underline-offset-8 ml-2 transition-all"
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
