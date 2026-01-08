import { Button } from "../components/ui/Button";
import BrainIcon from "../icons/BrainIcon";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useRef } from "react";

export default function Signup() {
    const usernameRef= useRef<HTMLInputElement>(null);
    const passwordRef= useRef<HTMLInputElement>(null);
    const navigate=useNavigate();

    async function signup(){
        const username=usernameRef.current?.value;
        const password=usernameRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/signup",{
                username,
                password
        })
        navigate("/signin");
        alert("You have signed up !")
        }


  return (
    <div className="min-h-screen bg-gray-50 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.35),transparent_60%)]" />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur">
        <div className="flex justify-center items-center gap-2 text-xl font-semibold mb-6">
          <div className="w-10 h-10 rounded-2xl bg-purple-600/20 flex items-center justify-center">
            <BrainIcon size="md" />
          </div>
          Brainly
        </div>
        <h1 className="text-2xl font-bold text-center">
          Create your account
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Start building your second brain today
        </p>
        <div className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Username
            </label>
            <Input ref={usernameRef} type="text" placeholder="Choose a username"></Input>
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <Input ref={passwordRef} type="password" placeholder="Create a password (min 8 chars)"></Input>
          </div>
          <Button
            variant="primary"
            size="lg"
            text="Create Account →"
            fullWidth
            onClick={() => {
              signup()
            }}
          />
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
