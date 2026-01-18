import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { TrustSection } from "@/components/landing/TrustSection";
import { DataMonetization } from "@/components/landing/DataMonetization";
import { DemoSection } from "@/components/landing/DemoSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md h-16 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
            <div className="w-4 h-4 bg-primary rounded-none transform rotate-45" />
            SOURCECHAIN
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="hover:text-primary transition-colors">Data Marketplace</a>
            <a href="#" className="hover:text-primary transition-colors">Enterprise</a>
          </div>
          <button className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-none transition-all">
            Access Portal
          </button>
        </div>
      </nav>
      
      <main>
        <Hero />
        <TrustSection />
        <StatsSection />
        <Features />
        <DataMonetization />
        <DemoSection />
      </main>
      
      <Footer />
    </div>
  );
}
