"use client";

import { useEffect, useRef, useState } from "react";
import { companyInfo } from "@/lib/data";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section with Blueprint */}
    <section
        ref={heroRef}
        className="relative py-32 min-h-[500px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/blueprints/architectural-blueprints.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 transition-all duration-700 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get In{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary to-white bg-clip-text text-transparent font-extrabold">
              Touch
            </span>
            </h1>
          <p
              className={`text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed transition-all duration-700 delay-100 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ready to transform your idea into reality? Let's discuss your project.
          </p>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={sectionRef}
        className="py-24 sm:py-32 bg-gray-light"
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-8 text-lg">
                We're here to help bring your innovation to life. Reach out to us through any of the following channels:
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-xl">Location</h4>
                <p className="text-gray-700 font-medium">{companyInfo.location}</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-xl">Email</h4>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-xl">Phone</h4>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center mt-12">
              <h4 className="font-bold text-foreground mb-6 text-xl">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                {Object.entries(companyInfo.socialMedia).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label={platform}
                  >
                    <span className="text-sm font-bold uppercase">
                      {platform.slice(0, 2)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

