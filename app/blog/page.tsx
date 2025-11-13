import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog | Delight Consultancy Ltd",
  description: "Read our latest articles and insights on product design, engineering, and manufacturing.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 sm:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Coming soon - Stay tuned for our latest articles and insights.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

