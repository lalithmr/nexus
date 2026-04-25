import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Workflow Automation",
    description: "Automate repetitive and time-consuming tasks using intelligent workflows designed for efficiency.",
    tags: ["Core_Audit", "Process_Eng", "Scale"],
    accent: "bg-titanium/5"
  },
  {
    id: "02",
    title: "AI Chatbots",
    description: "Deploy conversational AI (Web & WhatsApp) that handles queries, qualifies leads, and responds instantly.",
    tags: ["Conversational", "Lead_Qual", "24/7"],
    accent: "bg-bronze/5"
  },
  {
    id: "03",
    title: "Lead Generation",
    description: "Capture, qualify, and follow up with leads automatically through data-driven synthesis.",
    tags: ["Growth_Alg", "Conversion", "Auto_Follow"],
    accent: "bg-titanium/5"
  },
  {
    id: "04",
    title: "System Integrations",
    description: "Connect tools like HubSpot, Salesforce, and Notion into one unified, high-performing system.",
    tags: ["Fabric_Deep", "API_Ultra", "Unified"],
    accent: "bg-bronze/5"
  },
  {
    id: "05",
    title: "Process Automation",
    description: "Streamline internal workflows like onboarding and reporting to minimize manual friction.",
    tags: ["Ops_Refine", "Internal_Audit", "Sync"],
    accent: "bg-titanium/5"
  },
  {
    id: "06",
    title: "Growth Systems",
    description: "Build scalable automation architectures that support long-term business expansion.",
    tags: ["Architect", "Future_Proof", "Scale_Max"],
    accent: "bg-bronze/5"
  },
];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="py-40 bg-carbon relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 md:mb-60 text-center lg:text-left">
          <div className="lg:col-span-8 w-full">
             <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="micro-label"
                >
                  / Services_Portfolio_v1.0
                </motion.span>
             </div>
             <motion.h2 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1.5 }}
               className="text-4xl md:text-7xl lg:text-[9rem] titanium-gradient leading-none tracking-tighter italic"
             >
               AI Systems That <br/> Actually Work.
             </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end justify-center lg:justify-start w-full">
             <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-light opacity-30 leading-loose border-l border-titanium/10 pl-6 md:pl-8 max-w-sm">
               We don’t sell tools. We build complete automation systems tailored to your workflows.
             </p>
          </div>
        </div>

        <div className="space-y-px bg-titanium/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === service.id ? null : service.id)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
              className="group relative bg-base py-12 md:py-24 lg:py-40 flex flex-col lg:flex-row gap-12 md:gap-20 items-start lg:items-center justify-between px-6 md:px-12 lg:px-20 cursor-pointer border-b border-titanium/[0.03] transition-all duration-1000"
            >
              <div className="flex gap-8 md:gap-16 lg:w-3/5 relative z-10">
                <span className="font-mono text-[6px] md:text-[7px] tracking-[0.2em] opacity-10 pt-2 md:pt-4">/{service.id}</span>
                <div className="space-y-6 md:space-y-12">
                   <h3 className="text-3xl md:text-5xl lg:text-[8rem] xl:text-[10rem] font-light titanium-gradient tracking-[-0.08em] group-hover:italic transition-all duration-1000 group-hover:pl-4">
                     {service.title}
                   </h3>
                   <div className="flex flex-wrap gap-2 md:gap-4">
                      {service.tags.map((tag, idx) => (
                        <motion.span 
                          key={tag}
                          animate={{ 
                            opacity: (active === service.id || i < 3) ? 0.6 : 0.1,
                            y: (active === service.id || i < 3) ? 0 : 5
                          }}
                          transition={{ duration: 0.8, delay: idx * 0.05 }}
                          className="text-[5px] md:text-[6px] font-mono tracking-[0.6em] uppercase py-1 md:py-2 px-2 md:px-4 border border-titanium/10"
                        >
                          {tag}
                        </motion.span>
                      ))}
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-1/4 space-y-8 md:space-y-16 lg:text-right relative z-10">
                 <p className="text-lg md:text-xl lg:text-3xl font-light text-titanium/60 group-hover:text-titanium/100 transition-all duration-1000 italic leading-tight tracking-tighter">
                   {service.description}
                 </p>
                 <div className="flex justify-start lg:justify-end">
                    <motion.div 
                      animate={{ 
                        rotate: active === service.id ? 90 : 0,
                        borderColor: active === service.id ? "#00b3ff" : "rgba(238,226,222,0.1)"
                      }}
                      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border transition-all duration-1000 bg-transparent"
                    >
                      <Plus className={`w-3 h-3 md:w-4 md:h-4 transition-colors duration-1000 ${active === service.id ? 'text-[#00b3ff]' : 'text-titanium/50'}`} />
                    </motion.div>
                 </div>
              </div>

              {/* Sophisticated Hover Portal */}
              <AnimatePresence>
                {active === service.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(100px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(150px)" }}
                    exit={{ opacity: 0, scale: 0.8, filter: "blur(100px)" }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    className={`absolute inset-0 mx-auto w-[60%] h-full ${service.accent} -z-10`}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute right-10 top-1/3 hidden xl:block opacity-5">
         <span className="writing-vertical text-[7px] font-mono tracking-[0.8em] uppercase">Service_Index_Operational_Units_77X</span>
      </div>
    </section>
  );
}
