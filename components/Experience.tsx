"use client";

import {
  Award,
  Briefcase,
  ChevronRight,
  Clock,
  Globe,
  Star,
  TrendingUp,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Graphics Multimedia",
    role: "Co-founder & Creative Director",
    period: "2023 - Present",
    duration: "2+ years",
    location: "Remote / Global",
    icon: Briefcase,
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-50 to-purple-50",
    borderColor: "border-indigo-200",
    achievements: [
      "Co-founded and scaled design agency serving 50+ clients across 12 countries",
      "Grew team from 2 to 20+ designers and marketers in 18 months",
      "Increased client retention rate to 92% through quality delivery and strategic support",
    ],
  },
  {
    id: 2,
    company: "Fiverr",
    role: "Freelance Graphic Designer & Marketer",
    period: "2022 - Present",
    duration: "2+ years",
    location: "Freelance Platform",
    icon: Award,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    achievements: [
      "Completed 150+ design projects with 5-star rating and 98% client satisfaction",
      "Ranked as Top Rated Seller in Branding & Logo Design category",
      "Generated $85K+ revenue through repeat clients and premium packages",
    ],
  },
  {
    id: 3,
    company: "Brand of Blue",
    role: "Senior Graphic Designer",
    period: "2021 - 2023",
    duration: "2 years",
    location: "Hybrid",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    achievements: [
      "Led rebranding campaign that increased brand recognition by 67% across social platforms",
      "Designed 200+ marketing creatives that generated $500K+ in attributed sales",
      "Mentored 5 junior designers, improving team output efficiency by 40%",
    ],
  },
  {
    id: 4,
    company: "Digitech UK",
    role: "Marketing Design Specialist",
    period: "2020 - 2021",
    duration: "1 year",
    location: "Remote",
    icon: TrendingUp,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    achievements: [
      "Created video content strategy that grew YouTube subscribers from 2K to 25K in 8 months",
      "Designed email campaign templates achieving 54% open rate (industry avg: 21%)",
      "Collaborated with UK/EU clients to deliver localized marketing assets across 6 markets",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">
              Professional Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Work <span className="text-foreground">Experience</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            A visual timeline of my professional growth and impact
          </p>
        </div>

        {/* Timeline - Desktop (vertical line) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground hidden md:block" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`
                relative flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >
              {/* Timeline node - center dot */}
              <div className="absolute left-[1.35rem] md:left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-foreground transform -translate-x-1/2 hidden md:block z-10" />

              {/* Left/Right alternating content */}
              <div
                className={`
                w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0
                ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
              `}
              >
                {/* Card */}
                <div
                  className={`
                    group relative bg-white/20 rounded-2xl shadow-sm hover:shadow-xl 
                    border border-gray-100 overflow-hidden
                    transition-all duration-300 hover:-translate-y-1
                  `}
                >
                  {/* Gradient accent bar on top */}
                  <div
                    className={`h-1.5 bg-gradient-to-r ${exp.gradient}`}
                  />

                  <div className="p-5 md:p-6">
                    {/* Header with icon and period */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                          p-2.5 rounded-xl bg-gradient-to-br ${exp.bgGradient}
                          transition-all duration-300 group-hover:scale-110
                        `}
                        >
                          <exp.icon
                            className={`h-5 w-5 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            {exp.company}
                          </h3>
                          <p className="text-indigo-600 font-medium text-sm">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="hidden sm:flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-full">
                        <Clock className="h-3 w-3 text-gray-500" />
                        <span className="text-xs font-medium text-gray-600">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3.5 w-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Key Achievements - NOT responsibilities */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <span className="text-sm font-semibold text-gray-700">
                          Key Achievements
                        </span>
                      </div>
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 group/achievement"
                        >
                          <ChevronRight
                            className={`
                            h-4 w-4 mt-0.5 flex-shrink-0
                            bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent
                            transition-transform duration-200 group-hover/achievement:translate-x-0.5
                          `}
                          />
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -right-3 -top-3 w-20 h-20 rounded-full bg-gradient-to-br opacity-5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white shadow-md md:hidden" />
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-white/10 border border-gray-100 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-indigo-600">
                4+
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Years Experience
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10 border border-gray-100 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                50+
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Global Clients
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10 border border-gray-100 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-cyan-600">
                150+
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/10 border border-gray-100 shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-rose-600">
                98%
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
