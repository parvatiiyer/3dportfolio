import { useState } from "react"
import { Link } from "react-router-dom"
import { Github, Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      {/* MAIN BAR */}
      <div
        className="
          relative
          flex items-center justify-between
          gap-12
          px-10 py-5
          rounded-3xl
          bg-black/75 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_60px_rgba(139,92,246,0.25),_0_0_40px_rgba(0,0,0,0.6)]
        "
      >
        {/* Purple glow */}
        <div
          className="
            pointer-events-none
            absolute inset-0 -z-10
            rounded-3xl
            blur-2xl
            bg-gradient-to-r
            from-purple-500/20
            via-indigo-500/15
            to-transparent
          "
        />

        {/* LOGO */}
        <Link
          to="/"
          className="
            font-mono text-[13px] tracking-[0.3em]
            text-white
            hover:text-white/80
            transition
          "
        >
          PARVATI.EXE<span className="animate-pulse">▌</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-widest text-white/70">
          <Link to="/projects" className="hover:text-white transition">
            PROJECTS
          </Link>
          <Link to="/about" className="hover:text-white transition">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            CONTACT
          </Link>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/parvatiiyer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <Github size={20} />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-white transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            mt-4
            rounded-3xl
            bg-black/80 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_50px_rgba(139,92,246,0.25)]
            px-8 py-6
            flex flex-col gap-6
            text-center
          "
        >
          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest text-white/80 hover:text-white transition"
          >
            PROJECTS
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest text-white/80 hover:text-white transition"
          >
            ABOUT
          </Link>
          <Link
            to="/skills"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest text-white/80 hover:text-white transition"
          >
            SKILLS
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest text-white/80 hover:text-white transition"
          >
            CONTACT
          </Link>

          <a
            href="https://github.com/parvatiiyer"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-2 text-white/60 hover:text-white transition"
          >
            <Github size={20} className="mx-auto" />
          </a>
        </div>
      )}
    </nav>
  )
}
