"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "ABOUT", href: "/about/" },
  {
    label: "EXPERIENCE",
    href: "/ultra-luxury/",
    dropdown: [
      { label: "Luxury African Safaris", href: "/ultra-luxury/luxury-african-safaris/" },
      { label: "Around the World Journeys", href: "/ultra-luxury/around-the-world/" },
      { label: "Private Islands", href: "/ultra-luxury/private-islands/" },
      { label: "Expedition Cruises", href: "/ultra-luxury/expedition-cruises/" },
      { label: "Bespoke Celebrations", href: "/ultra-luxury/bespoke-celebrations/" },
    ],
  },
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
};

export default function Header({ variant = "default" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
              src="/figma/nusafiri-logo.svg"
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
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="flex max-w-[140px] items-center justify-center gap-1 text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] text-white/75 transition-colors duration-300 hover:text-white sm:text-[11px]"
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                        <div className="bg-nusafiri-cream shadow-xl border border-nusafiri-border rounded-sm py-4 px-6 min-w-[260px]">
                          <ul className="space-y-3">
                            {item.dropdown.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  className="block text-sm text-nusafiri-charcoal hover:text-nusafiri-gold transition-colors duration-200 font-body"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                    className={`block max-w-[140px] text-center text-[10px] font-medium uppercase leading-tight tracking-[0.2em] transition-colors duration-300 hover:text-white sm:text-[11px] ${pathname === item.href.replace(/\/$/, "") ? "text-white" : "text-white/75"}`}
                  >
                    {item.label}
                  </Link>
                )}
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
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
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
                  {item.dropdown ? (
                    <div className="space-y-3">
                      <span className="text-xs uppercase tracking-widest-xl font-medium text-nusafiri-charcoal">
                        {item.label}
                      </span>
                      <ul className="pl-4 space-y-2 border-l border-nusafiri-border">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-nusafiri-muted hover:text-nusafiri-gold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
