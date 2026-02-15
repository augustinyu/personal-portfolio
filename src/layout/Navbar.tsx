import styles from "./Navbar.module.css";

import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <a href="#">
          AY<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          <div>
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.ctaButtonsContainer}>
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div>
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}>
                {link.label}
              </a>
            ))}

            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
