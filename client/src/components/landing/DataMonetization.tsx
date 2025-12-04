import { Coins, Database, Network, ArrowRightLeft, Wallet, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import ragImg from "@assets/generated_images/rag_data_monetization_diagram.png";

// Force refresh
export function DataMonetization() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
              <img 
                src={ragImg} 
                alt="RAG Data Monetization Architecture" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-background/90 backdrop-blur-xl p-6 rounded-lg border border-primary/30 shadow-xl hidden md:block max-w-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">Earnings/Mo</span>
                <span className="text-green-400 font-bold">+12.4%</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Logistics Data</span>
                  <span className="text-white font-mono">$2,490</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[75%]" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pricing History</span>
                  <span className="text-white font-mono">$1,850</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-[55%]" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-3 py-1 text-xs font-mono border rounded-full border-accent/30 bg-accent/10 text-accent mb-2">
              <Database className="w-3 h-3 mr-2" />
              RAG ARCHITECTURE
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Monetize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                Data Intelligence
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your proprietary data is valuable. Plug it into our Retrieval-Augmented Generation (RAG) pipeline to enhance the global model. You maintain ownership, control access, and get paid when your data improves an answer.
            </p>

            <div className="grid gap-6 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Network className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Dynamic RAG Pipeline</h3>
                  <p className="text-muted-foreground text-sm">
                    Your data is retrieved only when relevant. It's never trained into the model weights, ensuring you can remove it instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Wallet className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Attribution & Royalties</h3>
                  <p className="text-muted-foreground text-sm">
                    Smart contracts track every time your data contributes to a generated insight. Receive automated payouts for your intelligence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <ArrowRightLeft className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Full Ownership Control</h3>
                  <p className="text-muted-foreground text-sm">
                    Toggle your data availability on/off in real-time. You decide who can access your specialized knowledge base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
