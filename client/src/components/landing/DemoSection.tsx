import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function DemoSection() {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const script = [
      "> Initializing SourceChain Agent...",
      "> Connecting to secure data vault...",
      "> Access granted: Manufacturing_DB_v4",
      "> User: 'Find alternative lithium suppliers in Vietnam with ISO 9001'",
      "> Analyzing 42,000 records...",
      "> Filter applied: Region='Vietnam'",
      "> Filter applied: Cert='ISO 9001'",
      "> Found 3 high-confidence matches:",
      "> 1. VietLithium Corp (Confidence: 98%)",
      "> 2. Saigon Energy Tech (Confidence: 94%)",
      "> 3. Hanoi Battery Systems (Confidence: 91%)",
      "> Generating procurement report...",
      "> Done."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < script.length) {
        setLines(prev => [...prev, script[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            "Vibe Coding" <br />
            <span className="text-primary">Meets Proprietary Data</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just chat—build. Our agents can write code to scrape your internal databases, format reports, and trigger supply chain workflows.
          </p>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary" />
              <span>Python & SQL Generation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary" />
              <span>Live API Integrations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary" />
              <span>Secure Sandboxed Execution</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="rounded-lg bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden font-mono text-sm relative">
            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 flex items-center px-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-xs text-white/30">agent_session_4921.py</div>
            </div>
            <div className="p-6 pt-12 min-h-[400px] text-green-400/90 space-y-2">
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {line}
                </motion.div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-green-400 inline-block ml-1 align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
