"use client";

import {
  Behance,
  Dribble,
  Fiverr,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/icons";
import {
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Logo & Brand Identity", href: "/services/logo-branding" },
  { name: "Social Media Design", href: "/services/social-media" },
  { name: "Marketing Creatives", href: "/services/marketing" },
  { name: "Video Editing", href: "/services/video" },
  { name: "Social Media Management", href: "/services/smm" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: LinkedIn,
    href: "https://linkedin.com/in/moriumakter",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Behance",
    icon: Behance,
    href: "https://behance.net/moriumakter",
    color: "hover:text-[#1769FF]",
  },
  {
    name: "Dribbble",
    icon: Dribble,
    href: "https://dribbble.com/moriumakter",
    color: "hover:text-[#EA4C89]",
  },
  {
    name: "Fiverr",
    icon: Fiverr,
    href: "https://fiverr.com/moriumakter",
    color: "hover:text-green-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/moriumakter",
    color: "hover:text-pink-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/moriumakter",
    color: "hover:text-sky-500",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Morium Akter
              </h2>
              <p className="text-sm text-gray-400 mt-1">Jannatul</p>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Graphic Designer & Marketing Specialist helping brands
              grow with impactful visuals.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-rose-400" />
              <span>Available for freelance work</span>
            </div>
            {/* Contact info compact */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <a
                  href="mailto:morium@graphicsmm.com"
                  className="hover:text-white transition-colors"
                >
                  morium@graphicsmm.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-3.5 w-3.5 text-indigo-400" />
                <a
                  href="tel:+8801234567890"
                  className="hover:text-white transition-colors"
                >
                  +880 1234 567890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                <span>Dhaka, Bangladesh (Remote)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                      transition-all duration-300 hover:bg-gray-700 hover:scale-110
                      ${social.color}
                    `}
                    aria-label={social.name}
                  >
                    {typeof Icon === "string" ? (
                      <span className="text-lg">{Icon}</span>
                    ) : (
                      <Icon size={18} />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Newsletter / Stay updated */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <h4 className="text-white text-sm font-medium">
                  Stay Updated
                </h4>
              </div>
              <p className="text-gray-400 text-xs mb-3">
                Get latest updates about my work
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:border-indigo-500 text-white placeholder-gray-400"
                />
                <button className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Morium Akter Jannatul. All
              rights reserved.
            </div>

            {/* Footer links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
