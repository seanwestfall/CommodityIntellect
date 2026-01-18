import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Database, Search, Target } from "lucide-react";

export function StatsSection() {
  const stats = [
    { label: "Partner Contributions", value: "500+", icon: <Users className="w-5 h-5" /> },
    { label: "E-commerce Transactions", value: "$10B+", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Sourcing Professionals", value: "15M+", icon: <Target className="w-5 h-5" /> },
    { label: "Annual Commodity Spend", value: "$20B+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Engineering Design Cycles", value: "5M+", icon: <Database className="w-5 h-5" /> },
    { label: "Commodities Analyzed", value: "1,000+", icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Decision Support Powered by Real-World Data</h2>
          <p className="text-muted-foreground">Unrivaled scale and accuracy for global manufacturing intelligence.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold font-heading text-white">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
