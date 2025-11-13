import Header from "./components/Header";
import About from "./components/About";
import HomePreview from "./components/HomePreview";
import Footer from "./components/Footer";

export const metadata = {
  title: "Delight Consultancy Ltd | Product Design & Engineering | Kigali, Rwanda",
  description: "From Idea to Market. Expert product design, engineering, prototyping, and manufacturing services in Rwanda.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <HomePreview />
      </main>
      <Footer />
    </>
  );
}
