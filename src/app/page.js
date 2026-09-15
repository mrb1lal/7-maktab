import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teachers from "@/components/Teachers";
import Achievements from "@/components/Achievements";
import MapContact from "@/components/MapContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Teachers />
      <Achievements />
      <MapContact />
      <Footer />
    </main>
  );
}