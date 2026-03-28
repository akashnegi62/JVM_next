import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Review from "@/components/Review";
import Slider from "@/components/Slider";
import Banner from "@/components/Banner";
import Change from "@/components/Change";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Card />
      <News />
      <Slider />
      <Projects />
      <Change />
      <Banner />
      <Review />
    </main>
  );
}
