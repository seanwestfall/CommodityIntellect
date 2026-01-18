import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquareCode, FileCode, Database, Lock, Globe, Cpu, Server, TrendingUp, AlertTriangle, Search } from "lucide-react";
import chatImg from "@assets/generated_images/ai_interface_analyzing_logistics_documents.png";
import codeImg from "@assets/generated_images/secure_data_vault_with_code_streams.png";
import dbImg from "@assets/generated_images/high_tech_database_plugin_connector.png";

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
    },
    {
      title: "ERP Data Connector",
      description: "Seamlessly extract data from MySQL, Postgres, and Oracle systems. Our plugin extends your existing ERP software to feed the AI pipeline.",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      image: dbImg,
      tags: ["MySQL", "PostgreSQL", "Oracle", "ERP Integration"]
    }
  ];

  const insights = [
    {
      title: "Anticipate Risk, Improve Outcomes",
      description: "Gain foresight with a combination of operational commodity intelligence and industry-leading analysis, all on one platform.",
      icon: <AlertTriangle className="w-10 h-10 text-accent" />
    },
    {
      title: "Procure With Precision",
      description: "Know when to buy and who to buy from with a solution that provides all the contextual intelligence needed for better negotiations.",
      icon: <Search className="w-10 h-10 text-primary" />
    },
    {
      title: "Become Proactive",
      description: "Configure alerts and define parameters with a fully configurable dashboard to arrive at critical insights faster.",
      icon: <TrendingUp className="w-10 h-10 text-blue-400" />
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Strategic Insights Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="mb-6">{insight.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-white">{insight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{insight.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Intelligence Infrastructure</h2>
          <p className="text-muted-foreground text-lg">
            Unrivaled analytics and analysis powered by a global network of professionals and real-world commodity spend.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/30 border-white/10 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors duration-500 rounded-none flex flex-col">
                <div className="h-56 overflow-hidden relative flex-shrink-0">
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
                <CardHeader className="flex-grow-0 pb-2">
                  <CardTitle className="text-xl font-heading text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end pt-0">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {feature.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-1 border border-white/10 bg-white/5 text-primary/80 rounded-none uppercase tracking-wider">
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
