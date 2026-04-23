import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const steps = [
  { 
    title: "Audit & Strategy", 
    desc: "We analyze every bottleneck in your current operation and map out the highest ROI automation path.",
    number: "01"
  },
  { 
    title: "Build & Integrate", 
    desc: "Our engineers build your custom AI systems and integrate them natively with your existing tech stack.",
    number: "02"
  },
  { 
    title: "Launch & Scale", 
    desc: "We deploy the autonomous engines and continuously optimize performance to ensure maximum scaling.",
    number: "03"
  },
];

export default function Process() {
  return (
    <section id="process" className="py-40 bg-base border-t border-titanium/10">
      <div className="max-w-7xl mx-auto px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-20 lg:sticky lg:top-40 h-fit">
           <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.6em] uppercase opacity-30">Sequence_Analysis</span>
              <h2 className="text-7xl lg:text-9xl italic titanium-gradient">The Method.</h2>
           </div>
           <p className="max-w-xs text-sm uppercase tracking-widest font-light opacity-30 leading-loose">
             A strictly linear implementation cycle tailored for zero-latency execution.
           </p>
        </div>

        <div className="space-y-1">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group p-12 lg:p-20 interactive-panel border-titanium/10 flex flex-col gap-10 hover:border-titanium/20"
            >
              <div className="flex justify-between items-start">
                 <span className="font-mono text-[10px] opacity-20">Step_0{i+1}</span>
                 <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45" />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-light italic titanium-gradient">{step.title}</h3>
                <p className="text-titanium/40 text-lg leading-relaxed">{step.desc}</p>
              </div>
              <div className="pt-10 flex gap-2">
                 {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className={`h-1 w-8 rounded-full ${idx === i ? 'bg-titanium/20' : 'bg-titanium/5'}`} />
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
