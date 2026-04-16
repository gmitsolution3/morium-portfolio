// components/SkillsSection.tsx

"use client";

export default function Skills() {
  const skills = [
    { name: "Graphic Design", level: 95 },
    { name: "Branding & Identity", level: 90 },
    { name: "Social Media Marketing", level: 88 },
    { name: "Digital Marketing Strategy", level: 85 },
    { name: "Video Content Design", level: 82 },
    { name: "UI/UX Basics", level: 75 },
  ];

  const tools = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Illustrator", level: 92 },
    { name: "InDesign", level: 85 },
    { name: "Premiere Pro", level: 80 },
    { name: "Figma", level: 75 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & <span className="text-foreground">Tools</span>
          </h2>
          <p className="text-gray-600 mt-2">
            What I bring to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-primary border border-secondary rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-12 h-12 bg-background border border-secondary/50 rounded-lg flex items-center justify-center">
                🎯
              </span>
              Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-primary border border-secondary rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-12 h-12 bg-background border border-secondary/50 rounded-lg flex items-center justify-center">
                🛠️
              </span>
              Tools
            </h3>
            <div className="space-y-4">
              {tools.map((tool, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{tool.name}</span>
                    <span className="text-gray-400">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
