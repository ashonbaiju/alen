import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Responsive Web Pages",
    tag: "Web Development",
    desc: "Crafted clean, responsive multi-page websites using semantic HTML and modern CSS layouts, with JavaScript for dynamic user interactions.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "from-primary/20 to-transparent",
  },
  {
    title: "Algorithm Practice Suite",
    tag: "Problem Solving",
    desc: "A growing collection of programs across C, C++, Python, and Java covering arrays, loops, recursion, and core data-structure problems.",
    stack: ["Python", "Java", "C++", "C"],
    accent: "from-secondary/20 to-transparent",
  },
  {
    title: "OOP Mini Projects",
    tag: "Object-Oriented Design",
    desc: "Designed small applications applying OOP principles — encapsulation, inheritance, and polymorphism — to model real-world entities.",
    stack: ["Java", "C++"],
    accent: "from-primary/20 to-secondary/20",
  },
  {
    title: "Number & Array Utilities",
    tag: "Algorithms",
    desc: "Utility programs for number generation, array manipulation, and search/sort experiments — sharpening logic and complexity intuition.",
    stack: ["Python", "C"],
    accent: "from-secondary/20 to-primary/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              03 — Projects
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 leading-tight">
              Selected <span className="text-gradient">work</span> & experiments.
            </h2>
          </div>
          <a
            href="https://github.com/alenjoseph005"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2 group"
          >
            See all on GitHub
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="https://github.com/alenjoseph005"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 relative overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-primary uppercase tracking-widest">
                    {p.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                <h3 className="font-display font-semibold text-2xl md:text-3xl mb-3 group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-border/60 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
