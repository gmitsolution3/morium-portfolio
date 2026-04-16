"use client";

import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  Heart,
  LayoutDashboard,
  Megaphone,
  Palette,
  Share2,
  Star,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";
import PrimaryButton from "./ui/primary-button";

const services = [
  {
    id: 1,
    title: "Logo & Brand Identity Design",
    icon: Palette,
    gradient: "from-indigo-500 to-purple-600",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-100",
    features: [
      "Custom logo design (3-5 unique concepts)",
      "Complete brand style guide",
      "Color palette & typography system",
      "Logo files (PNG, SVG, EPS, PDF)",
      "Business card & stationery design",
      "Social media profile kit",
    ],
    outcome:
      "A memorable brand identity that increases recognition by up to 80% and builds instant trust with your audience",
    outcomeHighlight: "80% higher brand recognition",
    timeline: "5-7 business days",
    price: "Starting at $399",
    popular: true,
  },
  {
    id: 2,
    title: "Social Media Design",
    icon: Share2,
    gradient: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-100",
    features: [
      "Custom post designs (carousels, quotes, announcements)",
      "Story templates & highlight covers",
      "Profile & cover photo design",
      "Engaging visual content calendar",
      "Reel & short video thumbnails",
      "Branded GIFs & animations",
    ],
    outcome:
      "Scroll-stopping visuals that boost engagement by 60-150% and grow your following organically",
    outcomeHighlight: "60-150% engagement boost",
    timeline: "48-hour turnaround",
    price: "Starting at $249/month",
    popular: false,
  },
  {
    id: 3,
    title: "Marketing Campaign Creatives",
    icon: Megaphone,
    gradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-100",
    features: [
      "Facebook & Instagram ad creatives",
      "Google display banner ads",
      "Email newsletter templates",
      "Landing page visuals",
      "Print materials (flyers, brochures)",
      "Seasonal campaign assets",
    ],
    outcome:
      "High-converting campaign assets that drive 2-3x ROI on your ad spend and boost conversion rates",
    outcomeHighlight: "2-3x ROI on ad spend",
    timeline: "3-5 business days",
    price: "Starting at $349/project",
    popular: false,
  },
  {
    id: 4,
    title: "Video Editing & Content",
    icon: Video,
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-100",
    features: [
      "Short-form video editing (Reels, TikToks, Shorts)",
      "Brand story & promotional videos",
      "Product demo & explainer videos",
      "Testimonial compilation",
      "Motion graphics & captions",
      "Background music & sound design",
    ],
    outcome:
      "Engaging video content that increases watch time by 200% and drives 5x more shares than static posts",
    outcomeHighlight: "200% increase in watch time",
    timeline: "3-7 business days",
    price: "Starting at $199/video",
    popular: false,
  },
  {
    id: 5,
    title: "Social Media Management",
    icon: LayoutDashboard,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    features: [
      "Content strategy & planning",
      "Daily post scheduling (15-20 posts/month)",
      "Community engagement & responses",
      "Monthly performance analytics",
      "Hashtag research & strategy",
      "Competitor analysis",
    ],
    outcome:
      "Consistent brand presence that grows engaged community by 30-50% monthly and converts followers into customers",
    outcomeHighlight: "30-50% monthly growth",
    timeline: "Ongoing monthly support",
    price: "Starting at $549/month",
    popular: true,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">
              What I Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Services That{" "}
            <span className="text-foreground">Deliver Results</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Strategic design and marketing solutions tailored to grow
            your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                group relative rounded-2xl overflow-hidden
                transition-all duration-400 hover:shadow-xl hover:-translate-y-1
                border border-secondary/20
                shadow-sm
              `}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-primary text-foreground px-2.5 py-1 rounded-full text-xs font-medium shadow-md">
                    <Star className="h-3 w-3 fill-foreground" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Icon with animation */}
                <div
                  className={`
                  w-14 h-14 rounded-xl bg-primary border border-secondary/50
                  flex items-center justify-center mb-5
                  transition-all duration-300
                  ${hoveredId === service.id ? "scale-110 shadow-md" : ""}
                `}
                >
                  <service.icon
                    className={`h-7 w-7 text-secondary`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Timeline & price row */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{service.timeline}</span>
                  </div>
                  <div className="font-bold text-gray-900">
                    {service.price}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 my-4" />

                {/* What You Get section */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      What You Get
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {service.features
                      .slice(0, 4)
                      .map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-indigo-500 font-medium ml-6">
                        +{service.features.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>

                {/* OUTCOME - Most important for conversion */}
                <div
                  className={`
                  mb-5 p-4 rounded-xl transition-all duration-300
                  bg-primary border border-secondary/50 border border-opacity-50
                  ${hoveredId === service.id ? "shadow-inner" : ""}
                `}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp
                      className={`h-4 w-4 ${service.iconColor}`}
                    />
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      The Outcome You Get
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">
                    {service.outcome}
                  </p>
                  <div
                    className={`
                    mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold
                    bg-background border border-secondary/50 text-secondary
                  `}
                  >
                    <Zap className="h-3 w-3" />
                    <span>{service.outcomeHighlight}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <PrimaryButton varient="outline">
                  <Heart className="h-4 w-4" />
                  Get This Service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </PrimaryButton>
              </div>

              {/* Bottom gradient bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-center">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>30+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>Revisions Until Perfect</span>
          </div>
        </div>
      </div>
    </section>
  );
}
