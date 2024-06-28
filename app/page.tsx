import About from "@/components/About/About";
import Writeups from "@/components/Writeups/Writeups";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items- overflow-hidden">
      <HeroSection />
      <About />
      <Writeups />
      <section id="cheatsheets">
        <h1>Cheatsheets</h1>
      </section>
    </main>
  );
}
