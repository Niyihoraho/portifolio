"use client";

import { useEffect, useRef, useState } from "react";
import { companyInfo, stats, highlights } from "@/lib/data";
import { Target, Users, Network, DollarSign } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            animateCounters();
            hasAnimated.current = true;
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, duration / steps);
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className={`p-8 rounded-xl bg-white shadow-md border-l-4 border-[#0078D7] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-extrabold text-[#1a1a2e] mb-5">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              {companyInfo.mission}
            </p>
          </div>

          <div
            className={`p-8 rounded-xl bg-[#0078D7] text-white border-l-4 border-[#F39C12] transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-3xl font-extrabold mb-5 text-white">Our Vision</h3>
            <p className="leading-relaxed text-white/95 text-lg font-medium">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* Stats Counter */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {counters[index]}
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-gray-medium font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3
            className={`text-4xl sm:text-5xl font-extrabold text-foreground mb-6 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Why Choose Us
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}

