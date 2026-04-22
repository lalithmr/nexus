import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-60 bg-base relative overflow-hidden px-12 lg:px-20">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-32">
        <div className="space-y-6">
           <span className="text-[10px] font-mono tracking-[0.6em] uppercase opacity-30">Final_Transmission</span>
           <motion.h2 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="text-[12vw] lg:text-[10rem] italic font-display leading-[0.7] titanium-gradient"
           >
             Join the <br/>
             <span className="not-italic font-sans font-light tracking-tighter">Genesis.</span>
           </motion.h2>
        </div>

        <div className="flex flex-col items-center gap-16">
           <p className="max-w-xl text-xl lg:text-3xl font-light text-titanium/40 leading-relaxed italic">
             Our partnership slots for this cycle are effectively populated. We are accepting priority requests for restricted integration cycles.
           </p>
           
           <motion.button 
             whileHover={{ scale: 1.05 }}
             className="btn-magnetic group"
           >
             Initiate Priority Contact
             <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4" />
             </div>
           </motion.button>
        </div>

        <div className="flex items-center gap-10 text-[8px] tracking-[0.4em] uppercase font-mono opacity-20">
           <span>AUTHENTICATION: REQUIRED</span>
           <span>LATENCY: 12ms</span>
           <span>AVAILABILITY: 02/10</span>
        </div>
      </div>
    </section>
  );
}
