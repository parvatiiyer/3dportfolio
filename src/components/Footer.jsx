const Footer = () => {
  return (
    <footer
      className="
        fixed bottom-0 sm:bottom-6
        left-0 sm:left-1/2
        sm:-translate-x-1/2
        w-full sm:w-[94%] sm:max-w-6xl
        z-40
      "
    >
      <div
        className="
          relative
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4
          px-4 py-3 sm:px-6 sm:py-3
          bg-black/60 backdrop-blur-xl
          border border-white/10
          rounded-none sm:rounded-2xl
          shadow-[0_0_60px_rgba(139,92,246,0.22)]
        "
      >
        {/* AMBIENT GLOW */}
        <div
          className="
            pointer-events-none
            absolute inset-0 -z-10
            rounded-2xl
            bg-gradient-to-r
            from-purple-500/20
            via-indigo-500/10
            to-transparent
            blur-2xl
          "
        />

        {/* LEFT */}
        <div className="text-white/50 text-xs sm:text-sm flex gap-2">
          <a href="/terms" className="hover:text-white transition">
            Terms
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>
        </div>

        {/* CENTER ICONS */}
        <div className="flex gap-3">
          {[
            { href: "https://linkedin.com/in/parvatiiyer", icon: "/assets/linkedin.png" },
            { href: "https://leetcode.com/u/Parvati_Iyer_2302/", icon: "/assets/leetcode.png" },
            { href: "https://codeforces.com/profile/parvatiiyer2007", icon: "/assets/codeforces.png" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-9 h-9
                rounded-full
                bg-white/10
                backdrop-blur-sm
                border border-white/10
                flex items-center justify-center
                hover:bg-white/20 transition
              "
            >
              <img src={item.icon} alt="" className="w-4 h-4 opacity-80" />
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <p className="text-white/40 text-xs sm:text-sm">
          © 2024 Parvati Iyer
        </p>
      </div>
    </footer>
  )
}

export default Footer
