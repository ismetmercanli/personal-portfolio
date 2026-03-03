import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Goals from "@/components/Goals";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100">
      <SiteBackground />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Goals />
        <Interests />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
