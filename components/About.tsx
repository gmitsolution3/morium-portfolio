// components/AboutSection.tsx
// About section with profile image, human-tone bio, and key highlights

"use client";

import PrimaryButton from "@/components/ui/primary-button";
import {
  ArrowRight,
  Award,
  Briefcase,
  Globe,
  Layout,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Co-founder",
      description: "of Graphics Multimedia",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Users,
      title: "20+",
      description: "Designers & marketers led",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Globe,
      title: "30+",
      description: "Clients worldwide",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Layout,
      title: "30+",
      description: "Design projects across industries",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: TrendingUp,
      title: "ROI-focused",
      description: "Design & marketing solutions",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Get to know{" "}
            <span className="text-foreground">Morium</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Designer, strategist, and creative problem-solver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Profile Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto flex items-center justify-center lg:mx-0">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="relative ">
                {/* Circular image */}
                <div className="w-[350px] h-[350px] rounded-full border-2 border-secondary overflow-hidden bg-primary">
                  <img
                    src="https://randomuser.me/api/portraits/women/25.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top-right plus marks */}
                <span className="absolute top-1.5 -right-1 text-secondary font-bold text-lg tracking-tighter">
                  + + +
                </span>

                {/* Bottom-left slash marks */}
                <span className="absolute bottom-3 -left-2 text-secondary text-sm -rotate-6">
                  /////
                </span>
              </div>
            </div>
          </div>

          {/* Right column - Bio and highlights */}
          <div>
            {/* Human-tone bio - rewritten from CV summary */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Turning ideas into{" "}
                <span className="text-foreground">
                  impactful visuals
                </span>
              </h3>
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  I'm Morium — a Graphic Designer and Marketing
                  Specialist who believes great design isn't just
                  about looking good. It's about telling stories,
                  building connections, and driving real results for
                  the brands I work with.
                </p>
                <p>
                  Over the past year, I've helped 30+ clients across
                  the globe grow their presence through strategic
                  design, engaging video content, and data-driven
                  social media campaigns. Whether it's a logo that
                  captures a brand's soul or a marketing package that
                  converts, I pour my heart into every project.
                </p>
                <p>
                  As the co-founder of Graphics Multimedia, I've
                  learned that the best work happens when creativity
                  meets strategy. I don't just design — I solve
                  problems.
                </p>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/20 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* "My Journey" short paragraph */}
            <div className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl p-6 mb-8 border border-indigo-100">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    My Journey
                  </h4>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                    <p>
                      My journey started with a deep interest in
                      creativity and visual storytelling, which led me
                      to pursue a Diploma in Graphic Design from the
                      Government Graphic Arts Institute.{" "}
                    </p>
                    <p>
                      Early on, I began working with clients through
                      freelance platforms and independent projects,
                      where I quickly learned how powerful good design
                      can be for businesses. What started as small
                      projects soon turned into opportunities to work
                      with clients from different industries and
                      countries.
                    </p>
                    <p>
                      In 2022, I co-founded Graphics Multimedia, where
                      I took on a bigger role — not just designing,
                      but also leading a team of 20+ creatives and
                      marketers, handling client communication, and
                      contributing to business growth.{" "}
                    </p>
                    <p>
                      Along the way, I’ve also worked with agencies
                      like Brand of Blue and Digitech UK, where I
                      collaborated on marketing campaigns and managed
                      social media content.
                    </p>

                    <p>
                      Today, I continue to combine design + marketing
                      thinking to help brands communicate better,
                      connect with their audience, and grow faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <PrimaryButton asChild>
              <Link href="/about">
                More about me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
