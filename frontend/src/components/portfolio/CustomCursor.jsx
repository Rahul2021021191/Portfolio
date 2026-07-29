import { useEffect, useRef } from "react";

// Glowing dot + ring cursor that follows the mouse and expands over interactive elements.
export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    let rx = 0, ry = 0, mx = 0, my = 0;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring) {
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor='hover'], input, textarea")) {
        ring?.classList.add("hovered");
      }
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor='hover'], input, textarea")) {
        ring?.classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
};
