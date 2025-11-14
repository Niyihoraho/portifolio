import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Delight engineering consultancy ltd",
  description: "Learn about Delight engineering consultancy ltd - Our mission, vision, and why we're the leading product design and engineering consultancy in Rwanda.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}

