"use client";

import { useEffect, useRef, useState } from "react";
import { companyInfo } from "@/lib/data";

export default function Hero() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        id="home"
        ref={sectionRef}
        className="relative py-32 min-h-screen flex items-center bg-[#1a1a2e]"
        style={{
          backgroundImage: `url('/blueprints/architectural-blueprints.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        {/* Additional subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078D7]/10 via-transparent to-[#0078D7]/10 pointer-events-none" />
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              From Idea to Market,
              <br />
              <span className="bg-gradient-to-r from-secondary via-secondary to-white bg-clip-text text-transparent font-extrabold">
                We Design, Prototype, and Manufacture
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

