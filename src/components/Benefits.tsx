import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const metrics = [
  { label: "Time_Saved", value: "40h+", status: "WEEKLY", detail: "Significant reduction in manual workflow hours." },
  { label: "Response_Time", value: "Instant", status: "OPTIMIZED", detail: "24/7 autonomous responses to all queries." },
  { label: "Lead_Conv", value: "+45%", status: "INCREASED", detail: "Qualified leads through AI filtering." },
  { label: "Op_Costs", value: "-60%", status: "REDUCED", detail: "Operational overhead optimization." },
];

export default function Benefits() {
  const [focus, setFocus] = useState<number | null>(null);

  return (
    <section id="results" className="py-20 md:py-40 bg-carbon relative overflow-hidden border-t border-titanium/5 grid-pattern">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-32 mb-20 md:mb-80 items-center md:items-end text-center lg:text-left">
          <div className="lg:col-span-9 w-full">
             <span className="micro-label">/ Performance_Metric_Audit_026</span>
             <h2 className="text-4xl md:text-7xl lg:text-[11rem] titanium-gradient leading-[0.75] tracking-[-0.1em] italic pb-4">
               Measureable <br/> 
               <span className="not-italic text-titanium font-sans font-light">Impact.</span>
             </h2>
          </div>
          <div className="lg:col-span-3 w-full">
             <div className="space-y-6 md:space-y-8 border-l border-titanium/10 pl-6 md:pl-10">
                <p className="text-lg md:text-xl font-light text-titanium/20 italic leading-tight">
                  Scale operations without increasing headcount. Improve consistency and response times instantly.
                </p>
                <div className="flex justify-center lg:justify-start gap-2">
                   {Array.from({ length: 6 }).map((_, i) => (
                     <motion.div 
                       key={i} 
                       animate={{ opacity: [0.1, 0.4, 0.1] }}
                       transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                       className="w-1.5 h-1.5 bg-bronze rounded-full" 
                     />
                   ))}
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-titanium/5">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              onMouseEnter={() => setFocus(i)}
              onMouseLeave={() => setFocus(null)}
              onClick={() => setFocus(focus === i ? null : i)}
              animate={{ 
                opacity: focus === null || focus === i ? 1 : 0.4,
                scale: focus === i ? 1.02 : 1
              }}
              className="bg-base py-12 md:py-16 px-8 md:px-12 lg:px-16 space-y-12 md:space-y-16 group cursor-crosshair transition-all duration-1000 border border-transparent hover:border-titanium/5"
            >
              <div className="flex justify-between items-start">
                <span className="text-[5px] md:text-[6px] font-mono tracking-[0.6em] opacity-20 uppercase group-hover:text-titanium transition-colors">/{metric.label}</span>
                <span className="text-[5px] md:text-[6px] font-mono text-bronze opacity-0 group-hover:opacity-100 transition-opacity">[{metric.status}]</span>
              </div>
              <div className="space-y-2 md:space-y-4">
                <span className="text-3xl md:text-6xl lg:text-[6rem] font-light text-titanium block tracking-[-0.08em] group-hover:italic transition-all duration-1000">
                  {metric.value}
                </span>
                <AnimatePresence>
                  {focus === i && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[6px] md:text-[7px] font-mono tracking-[0.2em] text-titanium/40 uppercase"
                    >
                      {metric.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-80 pt-20 md:pt-80 border-t border-titanium/5 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-32">
          <div className="lg:col-span-4 flex flex-col justify-between items-start">
             <span className="micro-label">/ Intelligence_Archive_Log</span>
             <p className="text-[9px] md:text-[10px] text-titanium/10 uppercase tracking-[0.4em] mb-8 font-mono max-w-xs"> Trusted by growing businesses to scale smarter. </p>
             <div className="hidden md:flex gap-1 items-end h-16 w-full opacity-10">
                {Array.from({ length: 32 }).map((_, i) => (
                   <div key={i} className="flex-grow bg-titanium" style={{ height: `${Math.random() * 100}%` }} />
                ))}
             </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-12 md:gap-32">
             <motion.blockquote 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
               className="text-2xl md:text-3xl lg:text-5xl font-light text-titanium/30 leading-tight italic tracking-[-0.06em] group"
             >
               "We were spending hours managing leads manually. After automation, everything runs smoothly and <span className="text-titanium">response time improved significantly."</span>
               <footer className="mt-8 md:mt-12 flex items-center gap-6 md:gap-10">
                  <div className="h-[2px] w-12 md:w-16 bg-bronze/20" />
                  <div className="space-y-1 md:space-y-2">
                    <cite className="not-italic text-[8px] md:text-[10px] font-display text-titanium tracking-widest block uppercase">Founder, Digital Agency</cite>
                  </div>
               </footer>
             </motion.blockquote>

             <motion.blockquote 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
               className="text-2xl md:text-3xl lg:text-5xl font-light text-titanium/30 leading-tight italic tracking-[-0.06em] group border-t border-titanium/5 pt-12"
             >
               "The AI chatbot reduced our support workload and <span className="text-titanium">handles most queries instantly."</span>
               <footer className="mt-8 md:mt-12 flex items-center gap-6 md:gap-10">
                  <div className="h-[2px] w-12 md:w-16 bg-bronze/20" />
                  <div className="space-y-1 md:space-y-2">
                    <cite className="not-italic text-[8px] md:text-[10px] font-display text-titanium tracking-widest block uppercase">Operations Manager, E-commerce</cite>
                  </div>
               </footer>
             </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return null;
}
