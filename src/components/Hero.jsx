import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full blob-purple float" />
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full blob-pink float-delayed" />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blob-purple float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full glass border border-primary/30"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary tracking-widest">Available for work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm{" "}
          <span
            className="gradient-text"
            style={{ filter: "drop-shadow(0 0 30px hsl(258 92% 76% / 0.5))" }}
          >
            Mansi Sharma
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-bold"
        >
          Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-lg mx-auto text-muted-foreground mb-10 leading-relaxed"
        >
          I create beautiful, responsive websites with modern technologies.
          Let's build something amazing together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 gradient-bg text-white rounded-xl font-medium shadow-glow hover:scale-105 transition-transform"
          >
            Let's Talk
          </a>

          <a
            href="#projects"
            className="px-8 py-4 glass rounded-xl font-medium hover:scale-105 transition-transform border border-primary/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download="Mansi_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-xl font-medium hover:scale-105 transition-transform border border-primary/20 text-primary"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-primary/60" />
      </motion.a>
    </section>
  );
};

export default Hero;
