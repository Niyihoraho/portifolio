import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export const metadata = {
  title: "Client Testimonials | Delight Consultancy Ltd",
  description: "Read what our clients say about working with Delight Consultancy Ltd. Real feedback from satisfied customers.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

