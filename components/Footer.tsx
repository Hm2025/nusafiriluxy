import Image from "next/image";
import Link from "next/link";

const footerGroups: { title: string; links: { label: string; href?: string }[] }[] = [
  {
    title: "Experiences",
    links: [
      { label: "Guest Management" },
      { label: "VIP Concierge" },
      { label: "Travel Concierge" },
      { label: "Bespoke Experiences" },
      { label: "Destination Celebrations" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { label: "About NuSafiri" },
      { label: "Memories & Gallery" },
      { label: "Book Consultation" },
      { label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__intro">
          <Link href="/" className="site-footer__logo" aria-label="NuSafiri home">
            <Image src="/nusafiri-logo.svg.png" alt="NuSafiri" width={103} height={102} />
          </Link>
          <p>
            An Experience Design and Hospitality Company creating seamless, personalized
            experiences for individuals, families, executives and organizations worldwide.
          </p>
        </div>

        {footerGroups.map((group) => (
          <section key={group.title} className="site-footer__group" aria-labelledby={`footer-${group.title.toLowerCase()}`}>
            <h2 id={`footer-${group.title.toLowerCase()}`}>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.href ? <Link href={link.href}>{link.label}</Link> : link.label}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="site-footer__group site-footer__contact" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Concierge Desk</h2>
          <p>Personal Inquiries</p>
          <a className="site-footer__email" href="mailto:info@nusafiri.com">
            info@nusafiri.com
          </a>
          <a href="tel:+180068723474">+1 (800) NUSAFIRI</a>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} NuSafiri Experience &amp; Hospitality Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
