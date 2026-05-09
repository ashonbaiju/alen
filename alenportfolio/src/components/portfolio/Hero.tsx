import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-orb.jpg";

export const Hero = () => {
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);
  const yRight = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div style={{ y: yLeft, opacity: opacityContent }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Alen Joseph</span>
            <br />
            <span className="text-foreground/90">a Web Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            BCA student crafting clean, responsive interfaces and writing solid
            backend logic in Python, Java & C++. Eager to build real-world
            products that people love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Sparkles className="mr-1 h-4 w-4" /> Get in Touch
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="/resume.pdf" download="resume.pdf">
                <Download className="mr-1 h-4 w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-6"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Connect
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-border" />
            <a
              href="https://github.com/alenjoseph005"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alen-joseph"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ y: yRight }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-radial blur-3xl opacity-50" />

          {/* Animated Aura */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[450px] h-[450px] rounded-full bg-primary/20 blur-3xl pointer-events-none"
          />

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer dashed ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[480px] h-[480px] sm:w-[540px] sm:h-[540px] rounded-full border-[1.5px] border-dashed border-primary/30" 
            />
            {/* Inner solid ring rotating opposite */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border-[1.5px] border-secondary/40" 
            />
            {/* 3D spinning ring */}
            <motion.div 
              animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full border border-primary/30"
              style={{ transformStyle: "preserve-3d" }}
            />
            {/* Accent dots orbital path */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[480px] h-[480px] sm:w-[540px] sm:h-[540px]"
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--primary-glow)] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_var(--secondary)] -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 40% 60% / 50% 70% 30% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              borderRadius: { duration: 12, repeat: Infinity, ease: "linear" }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
            dragElastic={0.2}
            className="relative z-10 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden border-4 border-primary/20 bg-background/50 backdrop-blur-sm shadow-2xl"
            style={{
              boxShadow: "0 0 80px hsl(174 86% 55% / 0.2)",
            }}
          >
            <img 
              src={heroImage} 
              alt="Hero" 
              className="w-full h-full object-cover pointer-events-none hover:scale-110 transition-transform duration-700"
            />
            {/* Gradient overlay to blend it nicely with the theme */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-4 glass rounded-xl px-4 py-2 font-mono text-xs"
          >
            <span className="text-primary">{"<"}</span>code<span className="text-primary">/{">"}</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 -right-2 glass rounded-xl px-4 py-2 font-mono text-xs"
          >
            <span className="text-secondary">{"{ }"}</span> design
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-6 glass rounded-xl px-4 py-2 font-mono text-xs"
          >
            ⚡ build
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
};
