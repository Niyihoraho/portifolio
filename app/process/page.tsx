import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Process | Delight Consultancy Ltd",
  description: "Learn about our product design and engineering process.",
};

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">
                Our Process
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn about how we transform ideas into market-ready products.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

