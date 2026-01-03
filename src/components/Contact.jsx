import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://backend-portfolio-k4jk.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const data = await res.json();
      console.log("Success:", data);

      // success UI
      setStatus("success");
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };


  return (
    <main
      className="
        relative min-h-[100svh] w-full
        bg-black text-white overflow-hidden
        pt-28 sm:pt-32 lg:pt-24 pb-24
      "
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[260px]" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Let’s talk
            </h1>

            <p className="text-white/60 max-w-md leading-relaxed">
              Whether you’re looking to build a new product, improve an existing
              one, or just say hi — my inbox is always open.
            </p>

            <p className="text-white/40 text-sm">I usually reply within 24 hours.</p>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="
              relative
              bg-black/60 backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8 sm:p-10
              space-y-6
              shadow-[0_0_60px_rgba(139,92,246,0.18)]
              mt-16 lg:mt-12
            "
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-purple-600/10 blur-[120px]" />

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm text-white/60">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="ex., John Doe"
                className="
                  w-full rounded-xl
                  bg-black/40
                  border border-white/10
                  px-4 py-3
                  text-white placeholder:text-white/30
                  outline-none
                  focus:border-purple-500/60
                  focus:ring-1 focus:ring-purple-500/30
                "
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-white/60">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ex., johndoe@gmail.com"
                className="
                  w-full rounded-xl
                  bg-black/40
                  border border-white/10
                  px-4 py-3
                  text-white placeholder:text-white/30
                  outline-none
                  focus:border-purple-500/60
                  focus:ring-1 focus:ring-purple-500/30
                "
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm text-white/60">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Share your thoughts or inquiries..."
                className="
                  w-full rounded-xl
                  bg-black/40
                  border border-white/10
                  px-4 py-3
                  text-white placeholder:text-white/30
                  outline-none resize-none
                  focus:border-purple-500/60
                  focus:ring-1 focus:ring-purple-500/30
                "
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-full mt-4
                rounded-xl
                bg-white/10
                border border-white/20
                py-3
                font-medium
                text-white
                transition
                hover:bg-purple-600/20
                hover:border-purple-500/40
                shadow-[0_0_30px_rgba(139,92,246,0.35)]
              "
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message ↗"}
            </motion.button>

            {status === "success" && (
              <p className="text-sm text-green-400">Thanks — message saved.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Try again later.</p>
            )}
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
