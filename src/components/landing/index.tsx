import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
