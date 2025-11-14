import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portfolio | Delight engineering consultancy ltd",
  description: "View our portfolio of successful projects and engineering solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                This page redirects to our Projects page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

