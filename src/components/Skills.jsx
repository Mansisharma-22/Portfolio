import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, color: "from-orange-400 to-red-500" },
    { name: "CSS", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 70, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", level: 80, color: "from-teal-400 to-cyan-500" },
  ];

  const techStack = ["Git", "VS Code", "Figma", "npm", "Vite", "GitHub"];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blob-purple" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blob-pink" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 border border-primary/15"
            >
              <div className="flex justify-between mb-3">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ boxShadow: "0 0 10px rgba(167,139,250,0.4)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 16px hsl(258 92% 76% / 0.4)" }}
              className="px-5 py-2 glass rounded-full text-sm font-medium cursor-default border border-primary/20 text-primary"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
