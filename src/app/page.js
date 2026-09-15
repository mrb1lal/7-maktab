import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DirectorMessage from "@/components/DirectorMessage";
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
      <Stats />
      <DirectorMessage />
      <About />
      <Teachers />
      <Achievements />
      <MapContact />
      <Footer />
    </main>
  );
}