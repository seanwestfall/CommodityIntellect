import { Shield, Copyright, Database, Lock, Server, FileCheck } from "lucide-react";

export function TrustSection() {
  const trustItems = [
    {
      icon: <Copyright className="w-6 h-6" />,
      title: "Copyright Compliant",
      description: "Models trained strictly on licensed and public domain data. Zero IP risk."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Proprietary Silos",
      description: "Your data never leaves your private instance. Training happens in isolation."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Grade",
      description: "SOC2 Type II compliant infrastructure with end-to-end encryption."
    }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:bg-white/5 p-6 transition-colors rounded-lg">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
