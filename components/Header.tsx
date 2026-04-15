"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Behance, Dribbble, LinkedIn } from "./icons";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
  ];

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "backdrop-blur-md shadow-sm" : ""}
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
              John Doe
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
            <button
              className="transition-colors text-xl"
              aria-label="Links"
            >
              <LinkedIn />
            </button>
            <button
              className="transition-colors font-medium text-lg"
              aria-label="Bê"
            >
              <Behance />
            </button>
            <button
              className="font-medium text-lg"
              aria-label="Favorite"
            >
              <Dribbble />
            </button>
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
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile icons row */}
              <div className="flex items-center space-x-6 pt-3 mt-2 border-t border-gray-100">
                <button className="text-gray-600 hover:text-gray-900 text-xl">
                  🔗
                </button>
                <button className="text-gray-600 hover:text-gray-900 font-medium text-lg">
                  Bê
                </button>
                <button className="text-gray-600 hover:text-red-500 text-xl">
                  ♥
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
