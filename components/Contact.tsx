"use client";

import {
  Behance,
  Dribble,
  Fiverr,
  LinkedIn,
} from "@/components/icons";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
} from "lucide-react";
import { useState } from "react";
import PrimaryButton from "./ui/primary-button";

const socialLinks = [
  {
    name: "Fiverr",
    icon: Fiverr,
    href: "https://www.fiverr.com/morium_akter1",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    hoverColor: "hover:text-green-600",
    username: "@moriumakter",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/morium-akter-jannatul-043ab8253",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    hoverColor: "hover:text-blue-600",
    username: "morium-akter",
  },
  {
    name: "Behance",
    icon: Behance,
    href: "https://www.behance.net/morium_akter1",
    color: "from-blue-600 to-indigo-700",
    bgColor: "bg-blue-50",
    hoverColor: "hover:text-blue-700",
    username: "moriumakter",
  },
  {
    name: "Dribbble",
    icon: Dribble,
    href: "https://dribbble.com/morium_akter1",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    hoverColor: "hover:text-pink-600",
    username: "moriumakter",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+8801706959364",
      href: "tel:+8801706959364",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "moriumakter575@gmail.com",
      href: "mailto:moriumakter575@gmail.com",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary border border-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-foreground">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Let's Work{" "}
            <span className="text-foreground">Together</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left column - Contact Info & Social */}
          <div>
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-primary border border-secondary shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div
                    className={`p-3 rounded-xl bg-background border border-secondary/50 transition-all duration-300 group-hover:scale-110`}
                  >
                    <info.icon
                      className={`h-5 w-5 text-foreground`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      {info.title}
                    </div>
                    <div className="text-gray-900 font-medium text-sm mt-0.5 word-break break-all">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-2 mb-6 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-sm text-emerald-700 font-medium">
                Available for new projects
              </span>
            </div>

            {/* Social Links Section */}
            <div className="bg-primary rounded-2xl p-6 border border-secondary shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold">Find me on</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-background border border-secondary/50 transition-all duration-300 hover:shadow-md"
                    >
                      <div
                        className={`p-1.5 rounded-lg ${social.bgColor} transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon
                          size={18}
                          className={`${social.hoverColor.replace("hover:", "")} text-gray-600`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">
                          {social.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {social.username}
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-foreground transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Trust message */}
            <div className="flex items-center gap-4 mt-6 text-xs text-gray-700 justify-center">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>100% Confidential</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>24h Response</span>
              </div>
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                <span>No Spam</span>
              </div>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div className="rounded-2xl shadow-xl border border-secondary/50 overflow-hidden">
            <div className="bg-background px-6 py-4">
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5 " />
                <h3 className=" font-semibold text-lg">
                  Send a Message
                </h3>
              </div>
              <p className=" text-sm mt-1">
                I'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-primary border border-secondary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-primary border border-secondary transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-primary border border-secondary transition-all outline-none resize-none"
                />
              </div>

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </PrimaryButton>

              {/* Form note */}
              <p className="text-xs text-gray-700 text-center">
                I respect your privacy. Your information is safe with
                me.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
