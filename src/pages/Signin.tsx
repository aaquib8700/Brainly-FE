import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import BrainIcon from "../icons/BrainIcon";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from '../config';

export default function Signin() {
    const usernameRef= useRef<HTMLInputElement>();
    const passwordRef= useRef<HTMLInputElement>();
    const navigate=useNavigate();

    async function signin(){
        const username=usernameRef.current?.value;
        const password=usernameRef.current?.value;

       const response= await axios.post(BACKEND_URL + "/api/v1/signin",{
                username,
                password
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt)
        navigate("/dashboard"); 
        }


  return (
    <div className="min-h-screen bg-gray-50 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(109,40,217,0.35),_transparent_60%)]" />
      <div className="relative z-10 w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8 text-xl font-semibold">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
            <BrainIcon size="md" />
          </div>
          Brainly
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-center">Welcome back</h1>
          <p className="text-center text-gray-400 mt-2">
            Sign in to access your second brain
          </p>
          <div className="mt-8">
            <label className="text-sm text-gray-400">Username</label>
            <Input ref={usernameRef} type="text" placeholder="Enter your username"></Input>
          </div>
          <div className="mt-6">
            <label className="text-sm text-gray-400">Password</label>
            <Input ref={passwordRef} type="password" placeholder="Enter your password"></Input>
          </div>
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              text="Sign In →"
              fullWidth
              onClick={() => {signin()}}
            />
          </div>

          {/* footer */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-500 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
