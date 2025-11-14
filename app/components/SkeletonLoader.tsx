"use client";

import { useEffect, useState } from "react";

interface SkeletonLoaderProps {
  isVisible: boolean;
}

export default function SkeletonLoader({ isVisible }: SkeletonLoaderProps) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible && mounted) {
      // Delay removal for smooth fade out
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isVisible, mounted]);

  if (!shouldRender || !mounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-white overflow-hidden transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Hero Section Skeleton */}
      <div className="relative min-h-screen flex items-center bg-white">
        {/* Background shimmer effect */}
        <div className="absolute inset-0 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 skeleton opacity-20"></div>
        </div>

        {/* Content Skeleton */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Title Skeleton */}
            <div className="space-y-4">
              <div className="h-12 sm:h-16 lg:h-20 skeleton skeleton-shimmer mx-auto max-w-3xl rounded-xl"></div>
              <div className="h-12 sm:h-16 lg:h-20 skeleton skeleton-shimmer mx-auto max-w-2xl rounded-xl"></div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-3 pt-6">
              <div className="h-5 skeleton skeleton-shimmer mx-auto max-w-2xl rounded-md"></div>
              <div className="h-5 skeleton skeleton-shimmer mx-auto max-w-xl rounded-md"></div>
              <div className="h-5 skeleton skeleton-shimmer mx-auto max-w-lg rounded-md"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Additional sections skeleton (below fold) */}
      <div className="bg-gray-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Text skeleton */}
            <div className="space-y-4">
              <div className="h-10 skeleton skeleton-shimmer w-3/4 rounded-xl"></div>
              <div className="h-4 skeleton skeleton-shimmer w-full rounded-md"></div>
              <div className="h-4 skeleton skeleton-shimmer w-full rounded-md"></div>
              <div className="h-4 skeleton skeleton-shimmer w-5/6 rounded-md"></div>
            </div>

            {/* Right side - Image skeleton */}
            <div className="h-96 skeleton skeleton-shimmer rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 skeleton skeleton-shimmer w-64 mx-auto mb-12 rounded-xl"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 skeleton skeleton-shimmer rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

