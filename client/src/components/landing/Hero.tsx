import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Bot, Database, ShieldCheck } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_visualization_of_global_supply_chain_data_network.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Global Supply Chain Network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 z-0 grid-bg opacity-20" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center px-3 py-1 text-sm border rounded-full border-primary/30 bg-primary/10 text-primary backdrop-blur-md mb-6">
            <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-pulse" />
            SourceChain AI v2.0 Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white leading-tight">
            Supply Chain Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
              Reimagined by AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The first AI platform built specifically for commodities, sourcing,
            and manufacturing. Secure, proprietary, and copyright-compliant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-none border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group w-full sm:w-auto"
            >
              <Bot className="mr-2 h-5 w-5" />
              <a href="https://llm-chat-app-template.sean-westfall.workers.dev/">
                Start Chat Analysis
              </a>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-none border-white/20 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              <Terminal className="mr-2 h-5 w-5 text-accent" />
              <a href="https://alphonse86-deepsitev3.hf.space/">
                Launch Vibe Coder
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Footer Elements in Hero */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute bottom-8 left-0 w-full z-20 border-t border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between text-xs text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            SYSTEM OPTIMAL
          </div>
          <div className="flex gap-8">
            <span>LATENCY: 12ms</span>
            <span>NODES: 4,291</span>
            <span>DATA: ENCRYPTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
