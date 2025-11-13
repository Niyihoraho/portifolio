"use client";

import { Service } from "@/lib/data";
import { FlaskConical, Cog, Wrench, Factory, Globe, Lightbulb } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "research-development": FlaskConical,
  "product-design": Cog,
  "prototyping": Wrench,
  "design-for-manufacturing": Factory,
  "global-manufacturing": Globe,
  "innovation-consulting": Lightbulb,
};

export default function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const IconComponent = iconMap[service.id] || Cog;
  
  return (
    <div
      className={`group p-8 rounded-xl bg-white shadow-md hover:shadow-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon Badge */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <IconComponent className="w-6 h-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-4">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-5 leading-relaxed text-base font-medium">
        {service.description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2">
        {service.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-600">
            <svg
              className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

