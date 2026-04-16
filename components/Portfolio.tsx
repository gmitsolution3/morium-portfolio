// components/PortfolioSection.tsx
// Portfolio section with categories and project cards

"use client";

import {
  ExternalLink,
  Eye,
  Layers,
  Megaphone,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { useState } from "react";

// Category configuration
const categories = [
  { id: "all", name: "All Work", icon: Layers },
  { id: "logo", name: "Logo Design", icon: Palette },
  { id: "branding", name: "Branding", icon: Sparkles },
  { id: "social", name: "Social Media Posts", icon: Share2 },
  { id: "marketing", name: "Marketing Creatives", icon: Megaphone },
  { id: "video", name: "Video Content", icon: Video },
];

// Portfolio projects data
const projects = [
  // Logo Design
  {
    id: 1,
    title: "Nexus Tech Logo",
    category: "logo",
    image: "/portfolio/nexus-logo.jpg", // Replace with actual image path
    description:
      "Designed modern tech logo for Nexus Technologies, increasing brand recognition by 45%",
    result: "45% increase in brand recognition",
    tags: ["Minimalist", "Tech", "Modern"],
  },
  {
    id: 2,
    title: "Bloom Beauty",
    category: "logo",
    image: "/portfolio/bloom-logo.jpg",
    description:
      "Created elegant floral-inspired logo for Bloom Beauty, boosting social media engagement by 62%",
    result: "62% boost in engagement",
    tags: ["Elegant", "Beauty", "Feminine"],
  },
  {
    id: 3,
    title: "Urban Eats",
    category: "logo",
    image: "/portfolio/urbaneats-logo.jpg",
    description:
      "Designed bold restaurant logo for Urban Eats, increasing foot traffic by 38%",
    result: "38% increase in foot traffic",
    tags: ["Bold", "Food", "Urban"],
  },

  // Branding
  {
    id: 4,
    title: "EcoLife Brand Identity",
    category: "branding",
    image: "/portfolio/ecolife-brand.jpg",
    description:
      "Complete branding package for EcoLife, resulting in 78% higher customer trust scores",
    result: "78% higher trust scores",
    tags: ["Eco", "Sustainable", "Complete Brand"],
  },
  {
    id: 5,
    title: "Fitness First Rebrand",
    category: "branding",
    image: "/portfolio/fitness-brand.jpg",
    description:
      "Rebranded Fitness First gym chain, leading to 53% increase in membership signups",
    result: "53% more signups",
    tags: ["Fitness", "Dynamic", "Rebrand"],
  },
  {
    id: 6,
    title: "Luxe Hotel Collection",
    category: "branding",
    image: "/portfolio/luxe-brand.jpg",
    description:
      "Luxury branding for hotel chain, increasing direct bookings by 67%",
    result: "67% increase in bookings",
    tags: ["Luxury", "Sophisticated", "Premium"],
  },

  // Social Media Posts
  {
    id: 7,
    title: "Fashion Week Campaign",
    category: "social",
    image: "/portfolio/fashion-social.jpg",
    description:
      "Designed 20+ social media posts for Fashion Week, generating 125K+ organic reach",
    result: "125K+ organic reach",
    tags: ["Instagram", "Campaign", "Fashion"],
  },
  {
    id: 8,
    title: "Wellness Wednesday Series",
    category: "social",
    image: "/portfolio/wellness-social.jpg",
    description:
      "Created viral social series for wellness brand, increasing engagement by 156%",
    result: "156% engagement boost",
    tags: ["Engagement", "Wellness", "Series"],
  },
  {
    id: 9,
    title: "Tech Product Launch",
    category: "social",
    image: "/portfolio/tech-social.jpg",
    description:
      "Social media teasers for product launch, driving 45K+ pre-orders",
    result: "45K+ pre-orders",
    tags: ["Product Launch", "Tech", "Teaser"],
  },

  // Marketing Creatives
  {
    id: 10,
    title: "Black Friday Campaign",
    category: "marketing",
    image: "/portfolio/blackfriday-creative.jpg",
    description:
      "Designed high-converting ad creatives, achieving 285% ROI on ad spend",
    result: "285% ROI",
    tags: ["Sales", "Ads", "High Converting"],
  },
  {
    id: 11,
    title: "Email Newsletter Design",
    category: "marketing",
    image: "/portfolio/email-creative.jpg",
    description:
      "Redesigned email templates, boosting open rates by 42% and clicks by 38%",
    result: "42% open rate increase",
    tags: ["Email", "Newsletter", "Conversion"],
  },
  {
    id: 12,
    title: "Billboard Advertising",
    category: "marketing",
    image: "/portfolio/billboard-creative.jpg",
    description:
      "Outdoor ad campaign for retail brand, increasing store visits by 34%",
    result: "34% more store visits",
    tags: ["OOH", "Billboard", "High Impact"],
  },

  // Video Content
  {
    id: 13,
    title: "Brand Story Video",
    category: "video",
    image: "/portfolio/brand-video.jpg",
    description:
      "Produced brand storytelling video, generating 2.3M views and 15K+ shares",
    result: "2.3M views",
    tags: ["Storytelling", "Emotional", "Viral"],
  },
  {
    id: 14,
    title: "Product Demo Reel",
    category: "video",
    image: "/portfolio/demo-video.jpg",
    description:
      "Created product demo video, increasing conversion rate by 89%",
    result: "89% higher conversion",
    tags: ["Demo", "Product", "Conversion"],
  },
  {
    id: 15,
    title: "Social Media Reels",
    category: "video",
    image: "/portfolio/reels-video.jpg",
    description:
      "Short-form video content for TikTok/IG, gaining 500K+ organic views",
    result: "500K+ views",
    tags: ["Reels", "TikTok", "Short Form"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">
              My Creative Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Featured{" "}
            <span className="text-foreground">Portfolio</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Hover over any image to see the story behind the work
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full
                  transition-all duration-300 text-sm font-medium
                  ${
                    isActive
                      ? "bg-primary text-foreground shadow-lg scale-105 border border-secondary"
                      : " text-gray-900  border border-secondary"
                  }
                `}
              >
                <span>{category.name}</span>
                {isActive && (
                  <span className="ml-1 bg-background rounded-full px-1.5 py-0.5 text-xs border border-secondary">
                    {filteredProjects.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Image Grid - Masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl bg-gray-100"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                {/* Image placeholder - replace with actual next/image */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center">
                  <Palette className="h-8 w-8 text-indigo-300 mb-2" />
                  <span className="text-xs text-gray-400 text-center px-2">
                    {project.title}
                  </span>
                </div>

                {/* Actual image would go here:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                */}

                {/* Hover Overlay - reveals description and details */}
                <div
                  className={`
                    absolute inset-0 bg-foreground/40
                    flex flex-col justify-end p-4
                    transition-all duration-300 ease-out
                    ${
                      hoveredId === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }
                  `}
                >
                  {/* Category tag */}
                  <div className="mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {
                        categories.find(
                          (c) => c.id === project.category,
                        )?.name
                      }
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-sm md:text-base mb-1 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-xs mb-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Result badge with icon */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <TrendingUp className="h-3 w-3 text-emerald-300" />
                    <span className="text-emerald-300 text-xs font-medium">
                      {project.result}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/80 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm">
                      <Eye className="h-3.5 w-3.5 text-white" />
                    </button>
                    <button className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Subtle gradient overlay on idle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-200">
            Load More Work
            <ExternalLink className="h-4 w-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
