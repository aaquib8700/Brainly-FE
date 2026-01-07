import { Button } from "../components/ui/Button";
import BrainIcon from "../icons/BrainIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  const navigate=useNavigate();
  function navigatingSignup(){
    navigate("/signup")
  }
  function navigatingSignin(){
    navigate("/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(109,40,217,0.35),_transparent_60%)]" />

      {/* HERO */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center"><BrainIcon size="lg" /></div>
            Brainly
          </div>
          <div className="flex items-center gap-6">
            <Button onClick={navigatingSignin} text="SignIn" size="sm" variant="secondary"></Button>
            <Button onClick={navigatingSignup} text="Get Started" size="sm" variant="primary"></Button>
          </div>
        </nav>

        <div className="mt-28 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            ✨ Your personal knowledge vault
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
            Your <span className="text-purple-500">Second Brain</span> for <br /> Digital Content
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Store, organize, and share your favorite YouTube videos, tweets, and more.
            Never lose track of valuable content again.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button onClick={navigatingSignup} text="Start for Free →" size="md" variant="primary"></Button>
            <Button size="md" variant="secondary" text="I have an account" onClick={navigatingSignin}></Button>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-40">
        <h2 className="text-4xl font-bold text-center">
          Everything you need to <span className="text-purple-500">remember</span>
        </h2>
        <p className="text-center text-gray-400 mt-4">
          Powerful features to help you capture and organize your digital knowledge
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "YouTube Videos",
              desc: "Save and embed your favorite YouTube videos with automatic previews",
              icon: <YoutubeIcon size="lg" />,
            },
            {
              title: "Twitter Threads",
              desc: "Capture tweets and threads before they disappear into the void",
              icon: <TwitterIcon size="lg" />,
            },
            {
              title: "Share Your Brain",
              desc: "Generate shareable links to showcase your curated collections",
              icon: <BrainIcon size="lg" />,
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mt-40">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-16 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6">
            <BrainIcon size="lg" />
          </div>
          <h2 className="text-4xl font-bold">Ready to build your second brain?</h2>
          <p className="mt-4 text-gray-400">
            Join thousands of users who never forget important content anymore.
          </p>
          <div className="mt-8 flex justify-center items-center">
            <Button onClick={navigatingSignup} text="Get Started Free →" size="lg" variant="primary"></Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 mt-40 border-t border-white/10 py-6 px-6 flex justify-between items-center text-gray-400">
        <div className="flex items-center gap-2"><BrainIcon size="sm" /> Brainly</div>
        <div>© 2024 Brainly. All rights reserved.</div>
      </footer>
    </div>
  );
}
