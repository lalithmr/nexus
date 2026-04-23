import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, MessageSquare, Rocket, Zap, Bot, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI Workflow Automation",
    description: "Seamlessly connect your tools to create a zero-touch operational ecosystem.",
    icon: Cpu,
  },
  {
    title: "AI Chatbots (Web + WhatsApp)",
    description: "Multi-channel autonomous agents that convert traffic and support customers 24/7.",
    icon: MessageSquare,
  },
  {
    title: "Lead Generation Systems",
    description: "Hyper-personalized outbound and inbound engines powered by neural data matching.",
    icon: Rocket,
  },
  {
    title: "CRM Integrations",
    description: "Deep bidirectional synchronization that ensures your data is always pristine.",
    icon: Zap,
  },
  {
    title: "Business Process Automation",
    description: "Deep engineering of complex internal tasks into automated, self-healing cycles.",
    icon: Bot,
  },
  {
    title: "Growth Automation",
    description: "Algorithmic scaling of your marketing and sales efforts based on real-time ROI tracking.",
    icon: BarChart3,
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-40 bg-base relative overflow-hidden neural-bg">
      <div className="max-w-7xl mx-auto px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-32">
          <div className="space-y-4">
             <span className="text-[10px] font-mono tracking-[0.6em] uppercase opacity-30">Capabilities_Inventory</span>
             <h2 className="text-[8vw] lg:text-[7rem] italic leading-none titanium-gradient">Operational Modules.</h2>
          </div>
          <p className="max-w-xs text-sm uppercase tracking-widest font-light opacity-30 leading-loose">
            Precision instruments for the digital enterprise. Modular, autonomous, and strictly objective.
          </p>
        </div>

        <div className="divide-y divide-titanium/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.01, 
                backgroundColor: "rgba(89, 130, 145, 0.02)",
                boxShadow: "0 25px 50px -12px rgba(89, 130, 145, 0.1)"
              }}
              className="group py-12 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10 cursor-pointer relative px-6 lg:px-10 -mx-6 lg:-mx-10 rounded-2xl transition-all duration-500"
            >
              <div className="flex items-center gap-10 lg:w-1/3">
                 <span className="font-mono text-[10px] opacity-20">0{i+1}</span>
                 <h3 className="text-4xl lg:text-6xl font-light titanium-gradient group-hover:pl-4 transition-all duration-700">{service.title}</h3>
              </div>
              
              <div className="lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                 <p className="max-w-md text-sm lg:text-lg opacity-30 group-hover:opacity-100 transition-opacity duration-700 italic">
                   {service.description}
                 </p>
                 <motion.div 
                   animate={{ 
                     opacity: hovered === i ? 1 : 0, 
                     x: hovered === i ? 0 : -20,
                     filter: hovered === i ? "blur(0px)" : "blur(4px)"
                   }}
                   className="flex items-center gap-6"
                 >
                   <button className="text-[10px] font-mono tracking-[0.4em] uppercase border border-titanium/20 px-6 py-3 rounded-full hover:bg-titanium hover:text-base transition-all duration-500 shadow-lg shadow-titanium/10">
                     Learn More
                   </button>
                   <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono tracking-[0.4em] uppercase text-titanium">
                     Deploy /
                     <div className="w-10 h-10 rounded-full border border-titanium/20 flex items-center justify-center bg-base group-hover:border-titanium transition-colors">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                   </div>
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
