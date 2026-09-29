"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

const blockedMenuUrls = new Set([
  "/plan-my-trip/",
  "/travel-notes/",
]);

const navItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCE", href: "/ultra-luxury/" },
  { label: "MEMORIES", href: "/travel-notes/" },
  { label: "BOOKINGS", href: "/plan-my-trip/" },
];

const aboutHeroNavItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCES", href: "/ultra-luxury/" },
  { label: "PLAN MY TRIP", href: "/plan-my-trip/" },
  { label: "MEMORIES", href: "/travel-notes/" },
];

const homeHeroNavItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  { label: "EXPERIENCES", href: "/ultra-luxury/" },
  { label: "PLAN MY TRIP", href: "/plan-my-trip/" },
  { label: "MEMORIES", href: "/travel-notes/" },
];

type HeaderProps = {
  variant?: "default" | "aboutHero" | "homeHero";
  logoSrc?: string;
};

export default function Header({ variant = "default", logoSrc = "/figma/nusafiri-logo.svg" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHero = variant !== "default";
  const currentNavItems = variant === "aboutHero"
    ? aboutHeroNavItems
    : variant === "homeHero"
      ? homeHeroNavItems
      : navItems;

  return (
    <header
      className={isHero ? "about-hero-header" : "absolute left-0 right-0 top-0 z-50 text-white"}
    >
      <div className={isHero ? "about-hero-header__inner" : "flex flex-col items-center"}>
        <div className={isHero ? "about-hero-header__stack" : "flex h-[190px] w-full items-start justify-center sm:h-[230px] lg:h-[304px]"}>
          <Link
            href="/"
            className={isHero ? "about-hero-header__logo" : "flex h-full w-[150px] items-start justify-center sm:w-[180px] lg:w-[234px]"}
          >
            <Image
              src={logoSrc}
              alt="Nusafiri"
              width={234}
              height={199}
              className={isHero ? "about-hero-header__logo-image" : "h-full w-full object-contain"}
              priority
            />
          </Link>

        {!isHero && <nav className="hidden w-full border-y border-white/10 bg-white/10 backdrop-blur-[2px] lg:block">
          <ul className="mx-auto flex h-[64px] max-w-[1170px] items-center justify-center gap-8 px-6 sm:gap-12 lg:gap-16">
            {currentNavItems.map((item) => (
              <li key={item.label} className="relative group">
                {blockedMenuUrls.has(item.href) ? (
                  <span
                    aria-disabled="true"
                    className="block max-w-[140px] cursor-not-allowed text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] text-white/40 sm:text-[11px]"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                    className={`block max-w-[140px] text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] transition-colors duration-300 hover:text-white sm:text-[11px] ${pathname === item.href.replace(/\/$/, "") ? "text-white" : "text-white/75"}`}
                  >
                    {item.label}
                  </Link>
                  )
                }
              </li>
            ))}
          </ul>
        </nav>}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={isHero ? "about-hero-header__toggle" : "absolute right-6 top-8 text-white transition-colors duration-300 lg:hidden"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
        {isHero && (
          <nav className="about-hero-header__desktop-nav" aria-label="Main navigation">
            <ul>
              {currentNavItems.map((item) => (
                <li key={item.label} className="relative">
                  {blockedMenuUrls.has(item.href) ? (
                    <span className="site-nav-disabled" aria-disabled="true">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nusafiri-cream border-t border-nusafiri-border shadow-lg">
          <nav className="container-wide mx-auto px-6 py-8">
            <ul className="space-y-5">
              {currentNavItems.map((item) => (
                <li key={item.label}>
                  {blockedMenuUrls.has(item.href) ? (
                    <span
                      className="site-nav-disabled block text-xs uppercase tracking-widest-xl font-medium"
                      aria-disabled="true"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                      className={`block text-xs uppercase tracking-widest-xl font-medium transition-colors hover:text-nusafiri-gold ${pathname === item.href.replace(/\/$/, "") ? "text-nusafiri-gold" : "text-nusafiri-charcoal"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
