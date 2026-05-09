import { motion } from "framer-motion";
import { GraduationCap, Code2, Github } from "lucide-react";

const stats = [
  { icon: Code2, label: "Languages", value: "7+" },
  { icon: Github, label: "GitHub Repos", value: "15+" },
  { icon: GraduationCap, label: "BCA Year", value: "2024+" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            01 — About Me
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 leading-tight">
            Building things with <span className="text-gradient">curiosity</span> and code.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              I'm a <span className="text-foreground">motivated BCA student</span> at
              Noorul Islam Centre For Higher Education with a strong foundation
              in full-stack web development and object-oriented programming.
            </p>
            <p>
              Comfortable across the front-end (HTML, CSS, JavaScript) and
              back-end (C, C++, Java, Python), I love translating ideas into
              structured, working programs — from small algorithmic puzzles to
              responsive web pages.
            </p>
            <p>
              Currently exploring web technologies, UI/UX design, and project
              management as part of my coursework, while constantly building on
              the side to sharpen my craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <s.icon className="h-6 w-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-display font-bold text-3xl text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}

            <div className="sm:col-span-3 glass rounded-2xl p-6 mt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">
                    Bachelor's in Computer Applications
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Noorul Islam Centre For Higher Education · 2024 – Present
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">
                    Web Development · UI/UX · Project Management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
