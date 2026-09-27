"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const containers = Array.from(
      document.querySelectorAll<HTMLElement>("main section, main article"),
    );
    const contentTargets = Array.from(
      document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, main .experience-card"),
    ).filter((target) => target.matches(".experience-card") || !target.closest(".experience-card"));
    const targets = contentTargets.length > 0 ? contentTargets : containers;
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("site-motion-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );

    const revealCounts = new Map<Element, number>();
    targets.forEach((target) => {
      target.classList.add("site-motion-target");
      const group = target.closest("section, article") ?? target.parentElement ?? target;
      const index = revealCounts.get(group) ?? 0;
      revealCounts.set(group!, index + 1);
      target.style.setProperty("--site-motion-delay", `${index * 140}ms`);
      observer.observe(target);
    });
    document.documentElement.classList.add("site-motion-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("site-motion-ready");
      targets.forEach((target) => {
        target.classList.remove("site-motion-target", "site-motion-visible");
        target.style.removeProperty("--site-motion-delay");
      });
    };
  }, [pathname]);

  return null;
}
