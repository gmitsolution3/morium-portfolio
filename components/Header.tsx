"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Behance, Dribble, LinkedIn } from "./icons";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "linkedin",
    url: "#",
    icon: LinkedIn,
  },
  {
    name: "dribble",
    url: "#",
    icon: Dribble,
  },
  {
    name: "behance",
    url: "#",
    icon: Behance,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    setScrolled(window.scrollY > 10);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "/#header" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      id="header"
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "backdrop-blur-md shadow-md" : ""}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand - John Doe */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight   transition-colors"
            >
              Morium Akter
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons: 🔗, Bê, ♥ (desktop) */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  href={link.url}
                  key={link.name}
                  className="transition-colors text-xl font-medium"
                  aria-label={`${link.name}-icon`}
                  target="_blank"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Panel - Slide down */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile icons row */}
              <div className="flex items-center space-x-6 pt-3 mt-2 border-t border-gray-100">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      href={link.url}
                      key={link.name}
                      className="transition-colors text-xl font-medium"
                      aria-label={`${link.name}-icon`}
                      target="_blank"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
