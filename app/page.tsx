import About from "@/components/About/About";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items- overflow-hidden">
      <HeroSection />
      <About />
    </main>
  );
}
