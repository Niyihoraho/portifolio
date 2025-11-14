import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesCategories from "./components/ServicesCategories";
import HomePreview from "./components/HomePreview";
import Footer from "./components/Footer";
import ImagePreloader from "./components/ImagePreloader";

export const metadata = {
  title: "Delight engineering consultancy ltd | Product Design & Engineering | Kigali, Rwanda",
  description: "From Idea to Market. Expert product design, engineering, prototyping, and manufacturing services in Rwanda.",
};

export default function Home() {
  return (
    <>
      <ImagePreloader />
      <Header />
      <main>
        <Hero />
        <ServicesCategories />
        <HomePreview />
      </main>
      <Footer />
    </>
  );
}
