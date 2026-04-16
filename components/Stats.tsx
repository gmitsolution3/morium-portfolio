"use client";

import { useCounter } from "@/hooks/useCounter";
import {
  Award,
  Briefcase,
  FolderKanban,
  Package,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    id: 1,
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
    gradient: "from-indigo-500 to-purple-600",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    description: "Global brands & local businesses",
  },
  {
    id: 2,
    value: 20,
    suffix: "+",
    label: "Marketing Packages Sold",
    icon: Package,
    gradient: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    description: "ROI-focused solutions",
  },
  {
    id: 3,
    value: 30,
    suffix: "+",
    label: "Projects Completed",
    icon: FolderKanban,
    gradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50",
    iconColor: "text-amber-600",
    description: "Across 5+ industries",
  },
  {
    id: 4,
    value: 20,
    suffix: "+",
    label: "Team Members Led",
    icon: Briefcase,
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-600",
    description: "Designers & marketers",
  },
];

const achievements = [
  {
    title: "98% Client Satisfaction",
    description: "Average rating across all platforms",
    icon: Star,
    color: "amber",
  },
  {
    title: "Top Rated Seller",
    description: "Fiverr & Upwork certified",
    icon: Award,
    color: "indigo",
  },
  {
    title: "Global Reach",
    description: "Clients in 12+ countries",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    title: "100% Delivery Rate",
    description: "On-time project completion",
    icon: Zap,
    color: "purple",
  },
];

export default function Stats() {
  const clientCounter = useCounter(30);
  const packagesCounter = useCounter(20);
  const projectsCounter = useCounter(30);
  const teamCounter = useCounter(20);

  const counters = [
    clientCounter,
    packagesCounter,
    projectsCounter,
    teamCounter,
  ];

  return (
    <section className="py-20 md:py-28  relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - light text for dark background */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium">
              Performance Metrics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Results That{" "}
            <span className="text-foreground">Speak Volumes</span>
          </h2>
          <p className=" mt-4 text-lg">
            Numbers don't lie — here's what I've accomplished
          </p>
        </div>

        {/* Main Stats Grid - Bold Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const counter = counters[index];
            return (
              <div
                key={stat.id}
                className="group relative bg-primary border border-secondary backdrop-blur-md rounded-2xl p-6 text-center border transition-all duration-300 hover:scale-105"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div
                  className={`
                  w-16 h-16 mx-auto rounded-2xl bg-background border border-secondary
                  flex items-center justify-center mb-4 shadow-lg
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                `}
                >
                  <stat.icon className="h-8 w-8 " />
                </div>

                {/* Counter */}
                <div
                  ref={counter.countRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tighter text-secondary"
                >
                  {counter.count}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="text-gray-900 font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-900 text-xs">
                  {stat.description}
                </div>

                {/* Decorative line */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
