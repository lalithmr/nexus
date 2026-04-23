import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  { value: "40+", label: "Hours Saved / Week" },
  { value: "2–5x", label: "Conv. Increase" },
  { value: "90%", label: "Lead Response Time" },
  { value: "60%", label: "Cost Reduction" },
  { value: "∞", label: "Scalability Limit" },
  { value: "24/7", label: "Uptime Operations" },
];

export default function Benefits() {
  return (
    <section id="results" className="py-40 bg-base border-t border-titanium/10">
      <div className="max-w-7xl mx-auto px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="space-y-40">
          <div className="space-y-8">
             <span className="text-[10px] font-mono tracking-[0.6em] uppercase opacity-30">Archive_04</span>
             <h2 className="text-7xl lg:text-9xl italic titanium-gradient">The Returns.</h2>
          </div>
          
          <div className="space-y-20">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-6 border-b border-titanium/10 pb-16"
              >
                 <span className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-20">{benefit.label}</span>
                 <div className="text-7xl lg:text-9xl font-light titanium-gradient">{benefit.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-end space-y-40">
           <div className="space-y-32">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-12"
              >
                  <p className="text-3xl lg:text-5xl font-light italic leading-tight text-titanium/30">
                    "We observed a complete reconfiguration of our operational logic. Nexus didn't just automate; it designed an entirely new layer of intelligence."
                  </p>
                  <div className="flex flex-col gap-2 uppercase tracking-widest text-[10px] font-mono">
                     <span className="text-titanium">Director of Global Ops</span>
                     <span className="text-titanium/20">Project: Zenith_Protocol</span>
                  </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-12"
              >
                  <p className="text-3xl lg:text-5xl font-light italic leading-tight text-titanium/30">
                    "Precision that feels invisible. The latency between intent and execution has been effectively negated."
                  </p>
                  <div className="flex flex-col gap-2 uppercase tracking-widest text-[10px] font-mono">
                     <span className="text-titanium">Chief Strategy Officer</span>
                     <span className="text-titanium/20">Project: Aether_Ops</span>
                  </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  // Refactored into Benefits as a unified Archive section for boutique agency aesthetic
  return null;
}

