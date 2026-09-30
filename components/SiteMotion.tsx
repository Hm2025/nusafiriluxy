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
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h1, main h2, main h3, main p, main blockquote, main .experiences-service-card__features li, main .experience-card, main .experiences-services__index nav a, main .experiences-services button, main .experiences-service-card__number, main .experiences-service-card__footer button, main .experiences-closing button, img, footer.site-footer",
      ),
    ).filter(
      (target) =>
        target instanceof HTMLImageElement ||
        target.matches(".experience-card") ||
        !target.closest(".experience-card"),
    );
    const revealTargets = targets.length > 0 ? targets : containers;
    if (revealTargets.length === 0) return;

    const revealGroups = new Map<Element, HTMLElement[]>();
    const revealCounts = new Map<Element, number>();
    revealTargets.forEach((target) => {
      const isImage = target instanceof HTMLImageElement;
      target.classList.add(isImage ? "site-motion-image-target" : "site-motion-target");
      const group = target.closest("section, article") ?? target.parentElement ?? target;
      const groupTargets = revealGroups.get(group) ?? [];
      const index = revealCounts.get(group) ?? 0;
      groupTargets.push(target);
      revealGroups.set(group, groupTargets);
      revealCounts.set(group, index + 1);
      target.style.setProperty("--site-motion-delay", `${index * 140}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealGroups.get(entry.target)?.forEach((target) => {
            target.classList.add("site-motion-visible");
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px -10% 0px" },
    );

    revealGroups.forEach((_, group) => observer.observe(group));
    document.documentElement.classList.add("site-motion-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("site-motion-ready");
      revealTargets.forEach((target) => {
        target.classList.remove("site-motion-target", "site-motion-image-target", "site-motion-visible");
        target.style.removeProperty("--site-motion-delay");
      });
    };
  }, [pathname]);

  return null;
}
