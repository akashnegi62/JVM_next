import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Review from "@/components/Review";

import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <News />
      <Projects />
      <Banner />
      <Review />
    </main>
  );
}
