import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquareCode, FileCode, Database, Lock, Globe, Cpu } from "lucide-react";
import chatImg from "@assets/generated_images/ai_interface_analyzing_logistics_documents.png";
import codeImg from "@assets/generated_images/secure_data_vault_with_code_streams.png";

export function Features() {
  const features = [
    {
      title: "The Oracle Chat",
      description: "Ask complex questions about commodities, sourcing, and logistics. Get answers backed by real-time data and historical archives.",
      icon: <MessageSquareCode className="w-8 h-8 text-primary" />,
      image: chatImg,
      tags: ["Natural Language", "Market Analysis", "Supplier Discovery"]
    },
    {
      title: "Vibe Coding Agent",
      description: "Generate custom supply chain tools and dashboards. Vibe Coding Agent accesses your proprietary data silos securely to build what you need.",
      icon: <FileCode className="w-8 h-8 text-accent" />,
      image: codeImg,
      tags: ["Python Generation", "Proprietary Data", "Secure Execution"]
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Dual Intelligence Engines</h2>
          <p className="text-muted-foreground text-lg">
            Whether you need instant answers or custom tooling, SourceChain provides the specialized AI infrastructure for modern manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/30 border-white/10 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors duration-500 rounded-none">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-sm">
                    {feature.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 border border-white/10 bg-white/5 text-primary/80 rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
