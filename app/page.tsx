import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Slider from "@/components/News";
import Banner from "@/components/Banner";
import Change from "@/components/Projects";
import Card from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Card />
      <Slider />
      <Change />
      <Banner />
      <Review />
    </main>
  );
}
