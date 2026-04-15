// components/HeroSection.tsx
// A professional hero section with name, title, subheading, CTA buttons, and social proof stats

"use client";

import { Behance, Dribble, LinkedIn } from "@/components/icons";
import { ArrowRight, Calendar, Package, Users } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "./ui/primary-button";

export default function Hero() {
  const stats = [
    {
      icon: Users,
      value: "30+",
      label: "Clients",
    },
    {
      icon: Package,
      value: "20+",
      label: "Marketing Packages Sold",
    },
    {
      icon: Calendar,
      value: "1+",
      label: "Years Experience",
    },
  ];

  const socialLinks = [
    {
      icon: LinkedIn,
      href: "https://linkedin.com/in/moriumakter",
      label: "LinkedIn",
    },
    {
      icon: Behance,
      href: "https://behance.net/moriumakter",
      label: "Behance",
    },
    {
      icon: Dribble,
      href: "https://dribbble.com/moriumakter",
      label: "Dribbble",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements - matching the screenshot aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating water/abstract shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-3xl" />

        {/* Water ripple effect inspired by the screenshot */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div>
          {/* Social links - top right aligned aesthetic */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Badge / Small intro tag */}
          <div className="inline-flex items-center gap-2 bg-indigo-50/80 backdrop-blur-sm border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-medium text-indigo-700">
              Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Morium Akter{" "}
            <span className="text-foreground">Jannatul</span>
          </h1>

          {/* Title - impactful rewrite from CV */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
              <span className="inline-block bg-gradient-to-r from-indigo-100 to-cyan-100 px-3 py-1 rounded-lg">
                Graphic Designer & Marketing Specialist
              </span>
              <br />
              <span className="text-foreground">
                helping brands grow with impactful visuals
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
            Helping 30+ clients increase sales through design, video
            content, and social media strategies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <PrimaryButton asChild>
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </PrimaryButton>

            <PrimaryButton asChild varient="outline">
              <Link href="/contact">Hire Me</Link>
            </PrimaryButton>
          </div>

          {/* Stats / Social Proof */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200/50 max-w-2xl">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                  <stat.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator - subtle */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs text-gray-400 font-medium">
                Scroll
              </span>
              <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-gray-400 rounded-full mt-1 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
