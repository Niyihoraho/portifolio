"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services, projects, companyInfo, stats, highlights } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import ProjectCard from "./ProjectCard";
import { ArrowRight, Target, Users, Network, DollarSign, Briefcase, Award, Factory, Compass, Eye } from "lucide-react";

export default function HomePreview() {
  const [isVisible, setIsVisible] = useState(false);
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

  // Show only first 3 services and 6 projects
  const previewServices = services.slice(0, 3);
  const previewProjects = projects.slice(0, 6);

  return (
    <>
      {/* About Preview */}
      <section
        ref={sectionRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl sm:text-6xl font-extrabold text-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                Delight Consultancy
              </span>
            </h2>
            <p
              className={`text-xl text-gray-700 max-w-2xl mx-auto font-medium transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Bridging Innovation, Engineering, and Manufacturing
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2
                className={`text-4xl sm:text-5xl font-extrabold text-foreground mb-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Mission &{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                  Vision
                </span>
              </h2>
              <p
                className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Compass className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {companyInfo.mission}
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0078D7] to-[#005a9e] shadow-lg hover:shadow-2xl transition-all duration-500 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                <div className="relative p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors border-2 border-white/30">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-secondary to-white mb-6 rounded-full"></div>
                  <p className="leading-relaxed text-white/95 text-lg font-medium">
                    {companyInfo.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Counter with Blueprint Backgrounds */}
          <div className="mb-16">
            {/* Section Header for Stats */}
            <div className="text-center mb-12">
              <h2
                className={`text-4xl sm:text-5xl font-extrabold text-foreground mb-4 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                  Achievements
                </span>
              </h2>
              <p
                className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {stats.map((stat, index) => {
                const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                  Briefcase,
                  Award,
                  Users,
                  Factory,
                };
                const IconComponent = stat.icon ? iconMap[stat.icon] : null;
                
                // Assign different blueprint images to each stat
                const blueprintImages = [
                  "/blueprints/architectural-blueprints (1).jpg",
                  "/blueprints/architectural-blueprints (2).jpg",
                  "/blueprints/architectural-blueprints (3).jpg",
                  "/blueprints/architectural-blueprints (4).jpg",
                ];
                
                return (
                  <div
                    key={index}
                    className="group relative h-[280px] sm:h-[320px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Blueprint Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={blueprintImages[index] || blueprintImages[0]}
                        alt={`Blueprint background for ${stat.label}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      {/* Dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
                      {IconComponent && (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300">
                          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                      )}
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                        {stat.suffix}
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg text-white/95 font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us Preview */}
          <div className="text-center mb-12">
            <h3
              className={`text-4xl sm:text-5xl font-extrabold text-foreground mb-6 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Why Choose Us
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const icons = [Target, Users, Network, DollarSign];
              const IconComponent = icons[index];
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed font-medium">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-10 py-5 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl sm:text-6xl font-extrabold text-foreground mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                Services
              </span>
            </h2>
            <p
              className={`text-xl text-gray-700 max-w-2xl mx-auto font-medium transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Comprehensive solutions from concept to market-ready products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {previewServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-10 py-5 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-10 py-5 bg-white text-foreground border-2 border-primary rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

