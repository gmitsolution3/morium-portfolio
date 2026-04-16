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
    role: "Co-founder & Graphic Designer & Marketing Specialist",
    period: "2022 - Present",
    duration: "1+ years",
    location: "Bangladesh",
    icon: Briefcase,
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-50 to-purple-50",
    borderColor: "border-indigo-200",
    achievements: [
      "Co-founded Graphics Multimedia and led end-to-end design and marketing operations",
      "Managed and coordinated a team of 20+ designers and marketers",
      "Worked with 30+ clients globally delivering graphics, video, and marketing solutions",
      "Successfully sold 20+ digital marketing packages in the local market",
    ],
  },
  {
    id: 2,
    company: "Fiverr & Independent Clients",
    role: "Freelance Graphic Designer",
    period: "2022 - Present",
    duration: "1+ years",
    location: "Remote",
    icon: Award,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    achievements: [
      "Completed 30+ design projects for clients across multiple industries",
      "Designed logos, branding materials, and marketing creatives",
      "Created social media posts, banners, and promotional visuals",
    ],
  },
  {
    id: 3,
    company: "Brand of Blue",
    role: "Graphic Designer",
    period: "2023 - 2024",
    duration: "1 year",
    location: "Bangladesh",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    achievements: [
      "Designed marketing creatives for social media campaigns",
      "Collaborated with marketing teams to improve brand engagement",
      "Supported campaign visuals aligned with brand strategy",
    ],
  },
  {
    id: 4,
    company: "Digitech UK",
    role: "Social Media Manager",
    period: "2022 - 2023",
    duration: "1 year",
    location: "Bangladesh",
    icon: TrendingUp,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200",
    achievements: [
      "Managed social media content, visuals, and brand assets",
      "Designed creatives to support digital marketing campaigns",
      "Worked with UI/UX team to maintain consistent visual communication",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary rounded-full px-4 py-1.5 mb-4">
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
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary hidden md:block" />

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
              <div className="absolute left-[1.35rem] md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-secondary transform -translate-x-1/2 hidden md:block z-10" />

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
                    group relative bg-primary border border-secondary rounded-2xl shadow-sm hover:shadow-xl 
                    border border-gray-100 overflow-hidden
                    transition-all duration-300 hover:-translate-y-1
                  `}
                >
                  {/* Gradient accent bar on top */}
                  <div className={`h-1.5`} />

                  <div className="p-5 md:p-6">
                    {/* Header with icon and period */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                          p-3 rounded-xl bg-background border border-secondary
                          transition-all duration-300 group-hover:scale-110
                        `}
                        >
                          <exp.icon className={`h-5 w-5 `} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">
                            {exp.company}
                          </h3>
                          <p className="text-foreground font-medium text-xs">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Duration badge */}
                      <div className="hidden sm:flex items-center gap-1.5 bg-background border border-secondary px-2.5 py-1 rounded-full">
                        <Clock className="h-3 w-3 text-foreground" />
                        <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-700">
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
      </div>
    </section>
  );
}
