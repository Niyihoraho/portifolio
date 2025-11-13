import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Delight Consultancy Ltd",
  description: "Get in touch with Delight Consultancy Ltd. Ready to transform your idea into reality? Contact us today.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

