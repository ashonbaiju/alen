import { motion } from "framer-motion";
import { Code, Layers, Wrench, Brain } from "lucide-react";

const groups = [
  {
    icon: Code,
    title: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript"],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"],
  },
  {
    icon: Brain,
    title: "Computer Science",
    items: ["Data Structures", "Algorithms", "OOP", "Computer Organization"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["VS Code", "Git", "GitHub", "Vite"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            02 — Skills
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 leading-tight">
            My <span className="text-gradient">technical toolkit</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <g.icon className="h-6 w-6 text-primary mb-4 relative" />
              <h3 className="font-display font-semibold text-lg mb-4 relative">{g.title}</h3>
              <ul className="space-y-2 relative">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
