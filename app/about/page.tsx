import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Delight Consultancy Ltd",
  description: "Learn about Delight Consultancy Ltd - Our mission, vision, and why we're the leading product design and engineering consultancy in Rwanda.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}

