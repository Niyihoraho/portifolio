"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

export default function Services() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-700 mb-8 text-xl font-semibold">
            Ready to bring your innovation to life?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

