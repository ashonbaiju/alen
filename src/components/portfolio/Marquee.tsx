const items = [
  "Python", "C++", "Java", "JavaScript", "HTML", "CSS",
  "Data Structures", "Algorithms", "Git", "Problem Solving",
];

export const Marquee = () => {
  return (
    <div className="border-y border-border/50 py-6 overflow-hidden bg-card/30 backdrop-blur">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-display font-semibold text-2xl md:text-3xl text-muted-foreground/60 hover:text-primary transition-colors">
              {item}
            </span>
            <span className="ml-16 w-2 h-2 rounded-full bg-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
};
