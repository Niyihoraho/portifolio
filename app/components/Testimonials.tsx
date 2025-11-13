"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { testimonials, projects } from "@/lib/data";
import { Quote, Star, Plus } from "lucide-react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    project: "",
  });
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
              Client{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary to-white bg-clip-text text-transparent font-extrabold">
                Testimonials
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto font-medium leading-relaxed transition-all duration-700 delay-100 ${
                isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              What our clients say about working with us
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={sectionRef}
        className="py-24 sm:py-32 bg-white"
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#0078D7] opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#F39C12] text-[#F39C12]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-base font-medium">
                "{testimonial.content}"
              </p>

              {/* Project Badge */}
              {testimonial.project && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0078D7]/10 text-[#0078D7] text-xs font-semibold rounded-md">
                    {testimonial.project}
                  </span>
                </div>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-[#0078D7] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Form */}
        <div
          className={`mt-16 max-w-4xl mx-auto transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-300">
            <div className="text-center mb-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0078D7] text-[#0078D7] rounded-full font-semibold hover:bg-[#0078D7] hover:text-white transition-all shadow-md"
              >
                <Plus className="w-5 h-5" />
                {showForm ? "Cancel" : "Add Testimonial"}
              </button>
            </div>

            {showForm && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Here you would typically send to a backend API
                  console.log("New testimonial:", formData);
                  alert("Testimonial submitted! (In production, this would be saved to your database)");
                  setFormData({
                    name: "",
                    role: "",
                    company: "",
                    content: "",
                    rating: 5,
                    project: "",
                  });
                  setShowForm(false);
                }}
                className="space-y-6 bg-white p-6 rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">
                  Add New Testimonial
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0078D7] focus:ring-2 focus:ring-[#0078D7]/20 outline-none transition-all"
                    placeholder="e.g., Jean Baptiste"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0078D7] focus:ring-2 focus:ring-[#0078D7]/20 outline-none transition-all"
                    placeholder="e.g., Founder, CEO, Director"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0078D7] focus:ring-2 focus:ring-[#0078D7]/20 outline-none transition-all"
                    placeholder="e.g., AgriTech Solutions"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Testimonial Content *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0078D7] focus:ring-2 focus:ring-[#0078D7]/20 outline-none transition-all resize-none"
                    placeholder="Enter the testimonial text here..."
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating })}
                        className={`p-2 rounded-lg transition-all ${
                          formData.rating >= rating
                            ? "bg-[#F39C12]/20"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            formData.rating >= rating
                              ? "fill-[#F39C12] text-[#F39C12]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600 font-medium">
                      {formData.rating} / 5
                    </span>
                  </div>
                </div>

                {/* Project (Optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Related Project (Optional)
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#0078D7] focus:ring-2 focus:ring-[#0078D7]/20 outline-none transition-all"
                  >
                    <option value="">Select a project (optional)</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.title}>
                        {project.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-700 mb-6 text-lg font-medium">
            Ready to become our next success story?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#0078D7] hover:bg-[#005a9e] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </div>
      </section>
    </>
  );
}

