import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code, label: "Clean Code", desc: "Simple & readable" },
    { icon: Palette, label: "UI Design", desc: "Beautiful interfaces" },
    { icon: Zap, label: "Fast", desc: "Optimized performance" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Neon blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blob-pink" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer who loves creating amazing web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 gradient-bg rounded-3xl rotate-6 opacity-40 blur-sm" />
              <div className="absolute inset-0 glass rounded-3xl shadow-soft flex items-center justify-center border border-primary/20">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 border border-primary/15">
              <p className="text-lg mb-4 leading-relaxed">
                Hello! I&apos;m a{" "}
                <span className="gradient-text font-semibold">
                  frontend developer
                </span>{" "}
                who recently started my journey in web development. I&apos;m
                passionate about creating clean, user-friendly interfaces.
              </p>

              <p className="text-muted-foreground mb-4">
                I&apos;m currently learning React, and Tailwind CSS.
                I believe in writing simple, readable, and maintainable code.
              </p>

              <p className="text-muted-foreground mb-6">
                When I&apos;m not coding, I enjoy reading tech blogs and
                exploring new technologies.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-xl border border-primary/15 bg-primary/5"
                  >
                    <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
