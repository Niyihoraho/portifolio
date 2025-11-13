import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Projects | Delight Consultancy Ltd",
  description: "Explore our portfolio of innovative product design and engineering projects. From industrial machinery to consumer products.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}

