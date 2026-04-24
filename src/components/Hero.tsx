import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Globe, Command, Terminal } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const revealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 2.2, 
        delay: custom, 
        ease: [0.19, 1, 0.22, 1] 
      }
    })
  };

  const trackingVariants = {
    hidden: { letterSpacing: "0.2em", opacity: 0 },
    visible: { 
      letterSpacing: "-0.08em", 
      opacity: 1,
      transition: { 
        duration: 2.5, 
        ease: [0.19, 1, 0.22, 1] 
      }
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center md:justify-end px-6 md:px-12 lg:px-24 pb-12 md:pb-24 overflow-hidden bg-base neural-bg grid-pattern">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="absolute h-full w-[1px] bg-titanium hidden md:block" style={{ left: `${(i + 1) * 8.33}%` }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] bg-titanium hidden md:block" style={{ top: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>

      <div className="absolute top-0 inset-x-0 h-[2px] bg-titanium/10 scan-line z-20" />

      {/* Atmospheric Objects - Simplified on Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            opacity: [0.015, 0.04, 0.015],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[15%] -left-[10%] w-[30rem] md:w-[70rem] h-[30rem] md:h-[70rem] bg-titanium/20 blur-[100px] md:blur-[200px] rounded-full"
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            opacity: [0.03, 0.07, 0.03],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-[10%] md:top-[30%] -right-[15%] w-[25rem] md:w-[50rem] h-[25rem] md:h-[50rem] bg-bronze/30 blur-[150px] md:blur-[250px] rounded-full"
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-30 w-full max-w-[100rem] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-end gap-12 md:gap-16 mb-12 md:mb-24 text-center lg:text-left">
          <div className="w-full lg:max-w-4xl space-y-8 md:space-y-16">
            <div className="overflow-hidden">
              <motion.div
                custom={0.1}
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center lg:justify-start gap-6 text-bronze"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  <span className="text-[6px] font-mono tracking-[1em] uppercase">Status:_ALIGNED</span>
                </div>
                <div className="hidden md:block w-12 h-px bg-titanium/10" />
                <span className="micro-label mb-0 text-titanium/40 hidden md:block">ARCHIVAL_INDEX_0.245</span>
              </motion.div>
            </div>

            <div className="space-y-4 md:space-y-2">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={trackingVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-[12vw] md:text-[10vw] lg:text-[10rem] titanium-gradient font-display italic leading-[0.85]"
                >
                  Automate
                </motion.h1>
              </div>
              <div className="overflow-hidden flex justify-center lg:justify-end">
                <motion.span 
                  custom={0.4}
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-[12vw] md:text-[10vw] lg:text-[10rem] text-titanium font-sans font-light tracking-[-0.1em] lg:pr-[4vw] leading-[0.85]"
                >
                  Scale_Smarter.
                </motion.span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end gap-8 md:gap-12 lg:text-right">
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 2, delay: 1.2 }}
               className="text-lg md:text-xl lg:text-3xl font-light text-titanium/30 leading-tight italic max-w-sm"
             >
               We design and implement AI-powered systems that automate workflows, qualify leads, and streamline operations — so your business runs efficiently, 24/7.
             </motion.p>
             
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.15 }}
               transition={{ duration: 2, delay: 1.5 }}
               className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-mono leading-relaxed max-w-[320px] hidden md:block"
             >
               Built for startups, agencies, and growing businesses looking to reduce manual work and improve operational efficiency.
             </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-titanium/5 pt-12 md:pt-16 items-center gap-12 md:gap-16">
          <div className="lg:col-span-9 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-magnetic group px-12 md:px-24 h-16 md:h-20 w-full md:w-auto"
            >
              FREE_STRATEGY_CALL
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-700" />
            </motion.button>
            <motion.button 
              className="text-[8px] md:text-[7px] uppercase tracking-[0.8em] font-mono text-titanium opacity-30 hover:opacity-100 hover:text-blue-400 transition-all flex items-center gap-4 md:pl-8"
            >
              See_How_It_Works
              <ArrowRight className="w-3 h-3" />
            </motion.button>
            <div className="hidden lg:flex flex-col gap-2 pl-12 opacity-10">
               <span className="text-[6px] font-mono tracking-[0.8em] uppercase">Structural_Integrity_v2.1</span>
               <div className="w-48 h-[1px] bg-titanium" />
            </div>
          </div>

          <div className="lg:col-span-3 flex justify-center lg:justify-end">
             <div className="flex gap-2 items-end h-8">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [2, 16, 2] }}
                    transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
                    className="w-[1px] bg-titanium/20"
                  />
                ))}
             </div>
          </div>
        </div>
      </motion.div>

      {/* Edge Details - Hidden on very small screens */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block opacity-5 pointer-events-none">
         <span className="writing-vertical text-[6px] font-mono tracking-[1.2em] uppercase rotate-180">NEXUS_SYSTEM_ARCHIVE_2026_GENESIS</span>
      </div>
      <div className="absolute right-6 md:right-12 bottom-12 md:bottom-24 hidden sm:block opacity-5 pointer-events-none">
        <span className="text-[6px] font-mono tracking-[1.2em] uppercase">SYSTEM_LOAD_BALANCED_011</span>
      </div>
    </section>
  );
}
