import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl transition-transform duration-300 ease-out"
      style={{
        background:
          "radial-gradient(circle, hsl(174 86% 55% / 0.4), transparent 60%)",
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
      }}
    />
  );
};
