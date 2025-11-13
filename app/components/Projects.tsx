"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-5xl sm:text-6xl font-extrabold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
              Projects
            </span>
          </h2>
          <p
            className={`text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-medium transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Showcasing innovation through engineering excellence
          </p>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  filter === category
                    ? "bg-[#0078D7] text-white shadow-lg hover:bg-[#005a9e]"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#0078D7] hover:text-[#0078D7]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View More */}
        {filteredProjects.length > 6 && (
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="px-8 py-4 bg-white text-foreground border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

