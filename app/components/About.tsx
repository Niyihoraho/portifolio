"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { companyInfo, stats, highlights } from "@/lib/data";
import { Target, Users, Network, DollarSign, Briefcase, Award, Factory, Compass, Eye } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWhatWeDoVisible, setIsWhatWeDoVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const whatWeDoRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

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

    const whatWeDoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhatWeDoVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (whatWeDoRef.current) {
      whatWeDoObserver.observe(whatWeDoRef.current);
    }

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCounters();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
      whatWeDoObserver.disconnect();
      contentObserver.disconnect();
    };
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
    <>
      {/* Hero Section with Background Image */}
      <section
        id="home"
        ref={sectionRef}
        className="relative py-32 min-h-screen flex items-center"
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
              From Idea to Market —
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

      {/* What We Do Section */}
      <section ref={whatWeDoRef} className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Text Content - Left */}
            <div
              className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
                isWhatWeDoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                  Do
                </span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed font-medium">
                <p>
                  We transform innovative ideas into manufacturable products through comprehensive engineering services. Our team combines cutting-edge design tools, precision prototyping, and strategic manufacturing partnerships to deliver high-quality solutions.
                </p>
                <p>
                  From concept sketches to detailed CAD drawings and production-ready specifications, we guide you through every stage of product development. Whether you're an inventor with a groundbreaking idea or a company optimizing manufacturing processes, we provide the expertise to bring your vision to market.
                </p>
              </div>
            </div>

            {/* Image - Right */}
            <div
              className={`relative h-full min-h-[400px] transition-all duration-700 delay-300 ${
                isWhatWeDoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/blueprints/architectural-blueprints (1).jpg"
                  alt="Architectural blueprints and engineering drawings"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={contentRef}
        className="py-24 sm:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
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

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
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

          {/* Stats Counter with Blueprint Backgrounds */}
          <div className="mb-20">
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
                    className="group relative h-[300px] sm:h-[340px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                    <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
                      {IconComponent && (
                        <div className="w-20 h-20 mb-6 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      )}
                      <div className="text-5xl sm:text-6xl font-extrabold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        {counters[index]}
                        {stat.suffix}
                      </div>
                      <div className="text-base sm:text-lg text-white/95 font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
    </>
  );
}
