import { motion } from "motion/react";

const steps = [
  { 
    title: "Audit & Strategy", 
    desc: "We analyze your workflows and identify AI automation opportunities tailored to your unique requirements.",
    id: "LOG_01"
  },
  { 
    title: "Build & Integrate", 
    desc: "We design and implement custom AI systems, integrating them directly into your existing toolset.",
    id: "LOG_02"
  },
  { 
    title: "Launch & Optimize", 
    desc: "We deploy your systems and continuously improve performance through data-driven refinement.",
    id: "LOG_03"
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-40 bg-base border-t border-titanium/5 relative grid-pattern">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-32">
          <div className="lg:col-span-4 space-y-12 md:space-y-24 lg:sticky lg:top-40 h-fit text-center lg:text-left">
            <div className="space-y-4 md:space-y-8">
              <span className="micro-label">/ Deployment_Timeline</span>
              <h2 className="text-5xl md:text-8xl lg:text-9xl titanium-gradient leading-none italic tracking-tighter">
                Impact.
              </h2>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-light opacity-20 leading-loose max-w-xs mx-auto lg:mx-0">
              Simple Process. Measurable Impact. Our linear sequence ensures your business evolves without friction.
            </p>
            <div className="flex justify-center lg:justify-start gap-2">
               {Array.from({ length: 12 }).map((_, i) => (
                 <div key={i} className="w-[1px] h-4 bg-titanium/10" />
               ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: i * 0.2 }}
                className="group relative border-l border-titanium/5 pl-6 md:pl-12 pb-16 md:pb-32 last:pb-0"
              >
                <div className="absolute top-0 -left-[1.5px] w-[3px] h-3 bg-bronze scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-top" />
                
                <div className="space-y-12">
                   <div className="flex items-center gap-6">
                      <span className="font-mono text-[7px] tracking-[0.6em] opacity-40 uppercase">{step.id}</span>
                      <div className="h-px flex-grow bg-titanium/[0.03]" />
                      <span className="text-[7px] font-mono opacity-10">Step_Verified</span>
                   </div>
                   
                   <div className="space-y-6">
                     <h3 className="text-4xl md:text-6xl lg:text-8xl font-light text-titanium group-hover:pl-4 transition-all duration-1000 ease-out italic">
                       {step.title}
                     </h3>
                     <p className="max-w-2xl text-lg lg:text-2xl font-light text-titanium/20 group-hover:text-titanium/60 transition-all duration-1000 leading-tight italic">
                       {step.desc}
                     </p>
                   </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="mt-20 flex gap-1">
                     {Array.from({ length: 8 }).map((_, idx) => (
                       <div key={idx} className="w-1 h-1 bg-titanium/5 rounded-full" />
                     ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-10 bottom-20 hidden lg:block opacity-5">
         <span className="writing-vertical text-[7px] font-mono tracking-[0.8em] uppercase rotate-180 text-bronze">Sequential_Audit_Log_Status_Alpha</span>
      </div>
    </section>
  );
}
