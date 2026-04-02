import About from "@/components/About";
import Newes from "@/components/News";
import Banner from "@/components/Banner";
import Review from "@/components/Review";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Newes />
      <Projects />
      <Banner />
      <Review />
    </main>
  );
}
