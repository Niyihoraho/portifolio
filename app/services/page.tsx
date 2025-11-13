import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Services | Delight Consultancy Ltd",
  description: "Comprehensive product design, engineering, prototyping, and manufacturing services. From concept to market-ready products.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </>
  );
}

