import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TeaCollection } from "./components/TeaCollection";
import { OurStory } from "./components/OurStory";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <TeaCollection />
      <OurStory />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
