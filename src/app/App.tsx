import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OpportunityCost } from "./components/OpportunityCost";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased overflow-x-hidden">
      {/* Custom scrollbar */}
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #14b8a6; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <OpportunityCost />
        <Services />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
