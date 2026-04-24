import { motion } from "motion/react";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-40 bg-base relative overflow-hidden px-6 md:px-12 lg:px-20 grid-pattern">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-24 md:space-y-48 relative z-10">
        <div className="space-y-8 md:space-y-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center justify-center gap-4 md:gap-8 text-[6px] md:text-[7px] font-mono tracking-[0.8em] uppercase opacity-20"
            >
               <Lock className="w-3 h-3" />
               <span className="hidden sm:inline">Access_Restricted_Gateway</span>
               <span className="sm:hidden text-center">Protocol_Secure</span>
               <ShieldCheck className="w-3 h-3" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
              className="text-6xl md:text-8xl lg:text-[14rem] italic font-display leading-[0.75] titanium-gradient tracking-tighter"
            >
              Ready to <br/>
              <span className="not-italic font-sans font-light text-titanium">Automate?</span>
            </motion.h2>
        </div>

        <div className="flex flex-col items-center gap-12 md:gap-24 w-full">
           <p className="max-w-3xl text-lg md:text-xl lg:text-4xl font-light text-titanium/30 leading-tight italic tracking-tighter px-4">
             Let’s identify where AI can save you time and improve performance. No obligation—we’ll walk you through real growth opportunities.
           </p>
           
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="btn-magnetic group h-16 md:h-24 w-full md:w-auto px-12 md:px-24"
           >
             Get_Free_AI_Blueprint
             <div className="hidden md:flex w-12 h-12 items-center justify-center border-l border-titanium/10 group-hover:border-bronze transition-colors ml-4 md:ml-8">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
             </div>
           </motion.button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-[6px] md:text-[7px] tracking-[0.6em] uppercase font-mono opacity-10">
           <div className="flex items-center gap-4">
              <div className="w-1 h-1 rounded-full bg-bronze animate-pulse" />
              <span>Auth_Level: RED</span>
           </div>
           <span>System_Load: 92%</span>
           <span>Available: 01/10</span>
           <span>Cipher: AE_X9_24</span>
        </div>
      </div>
      
      {/* Structural Archival Markers */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
         <span className="writing-vertical text-[6px] font-mono tracking-[1em] uppercase opacity-10 rotate-180">Structural_Grid_Ref_0944_EX_09</span>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
         <span className="writing-vertical text-[6px] font-mono tracking-[1em] uppercase opacity-10">Nexus_Engineering_Studio_Bespoke_Intelligence</span>
      </div>
    </section>
  );
}
