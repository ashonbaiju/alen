import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "alenjoseph4115@gmail.com",
    href: "mailto:alenjoseph4115@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9747518522",
    href: "tel:+919747518522",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "alenjoseph005",
    href: "https://github.com/alenjoseph005",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Alen Joseph",
    href: "https://www.linkedin.com/in/alen-joseph",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                04 — Contact
              </span>
              <h2 className="font-display font-bold text-4xl md:text-6xl mt-3 leading-[1.05]">
                Let's build <span className="text-gradient">something</span> together.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-md">
                Open to internships, collaborations, and entry-level developer
                roles. I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:alenjoseph4115@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/alen-joseph"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass rounded-2xl p-5 group hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(var(--primary),0.4)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                      <c.icon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {c.label}
                  </div>
                  <div className="font-display font-medium mt-1 truncate">{c.value}</div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
