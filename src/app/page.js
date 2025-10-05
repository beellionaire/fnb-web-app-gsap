import About from "@/components/About";
import Art from "@/components/Art";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Art />
    </main>
  );
}
