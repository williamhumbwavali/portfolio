"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const art = document.getElementById("art");
    const st = document.getElementById("stage");
    const cleanups: Array<() => void> = [];

    if (!rm && art && st && matchMedia("(hover:hover)").matches) {
      const onMove = (e: PointerEvent) => {
        const r = art.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        st.style.setProperty("--ry", -18 + x * 26 + "deg");
        st.style.setProperty("--rx", 12 - y * 22 + "deg");
      };
      document.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => document.removeEventListener("pointermove", onMove));
    }

    document.querySelectorAll<HTMLElement>(".pj").forEach((p) => {
      const onMove = (e: PointerEvent) => {
        const r = p.getBoundingClientRect();
        p.style.setProperty("--mx", e.clientX - r.left + "px");
        p.style.setProperty("--my", e.clientY - r.top + "px");
      };
      p.addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => p.removeEventListener("pointermove", onMove));
    });

    const it = document.querySelectorAll(".rv");
    if (rm || !("IntersectionObserver" in window)) {
      it.forEach((e) => e.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      it.forEach((e) => io.observe(e));
      cleanups.push(() => io.disconnect());
    }

    const links = document.querySelectorAll(".dock a");
    const secs = ["top", "work", "experience", "stack", "contact"].map((i) =>
      document.getElementById(i)
    );
    const onScroll = () => {
      const y = scrollY + innerHeight * 0.4;
      let c = 0;
      secs.forEach((s, i) => {
        if (s && s.offsetTop <= y) c = i;
      });
      links.forEach((a, i) => a.classList.toggle("on", i === c));
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
