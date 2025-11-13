"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project) {
      router.push("/#projects");
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Breadcrumb Header */}
        <header className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/#projects"
                className="flex items-center gap-2 text-gray-700 hover:text-[#0078D7] transition-colors font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
              <div className="px-3 py-1 bg-[#0078D7]/10 text-[#0078D7] text-xs font-bold rounded-lg uppercase tracking-wide">
                {project.category}
              </div>
            </div>
          </div>
        </header>

      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">Project Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700">
                      Image {index + 1} of {project.images.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Category
                  </span>
                  <p className="text-lg text-gray-800 font-medium mt-1">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Description
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Images
                  </span>
                  <p className="text-lg text-gray-800 font-medium mt-1">
                    {project.images.length} {project.images.length === 1 ? "Image" : "Images"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Interested in Similar Projects?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#projects"
                className="px-8 py-3 bg-white border-2 border-[#0078D7] text-[#0078D7] rounded-full font-semibold hover:bg-[#0078D7] hover:text-white transition-all shadow-md"
              >
                View All Projects
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-3 bg-[#0078D7] text-white rounded-full font-semibold hover:bg-[#005a9e] transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

