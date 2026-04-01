import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Admin Dashboard",
      description:
        "A modern online store with cart functionality and beautiful UI.",
      tags: ["React", "Tailwind", "API"],
      image: "",
      github: "https://github.com/Mansisharma-22/React-Dashboard",
      live: "https://react-dashboard-nine-puce.vercel.app/",
      featured: true,
    },
    {
      title: "Food Recipe App",
      description: "Real-time weather app with location search and forecasts.",
      tags: ["React", "API", "CSS"],
      github: "https://github.com/Mansisharma-22/food-project",
      live: "https://food-project-vert.vercel.app/",
    },

 
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blob-purple" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">Some things I&apos;ve built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group glass rounded-2xl overflow-hidden border border-primary/15 hover:border-primary/40 transition-colors ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`p-8 ${
                  project.featured ? "md:flex md:items-center md:gap-8" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center rounded-xl bg-primary/10 mb-6 ${
                    project.featured ? "w-32 h-32 md:mb-0 shrink-0" : "h-40"
                  }`}
                >
                  <span className={project.featured ? "text-6xl" : "text-5xl"}>
                    {project.image}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Folder className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
