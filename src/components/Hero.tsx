import { motion } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 lg:px-20 overflow-hidden bg-base">
      <div className="absolute inset-0 noise-overlay animate-pulse" />
      
      {/* Background Floating Element */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[60rem] h-[60rem] border border-white/[0.02] rounded-full"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-4 mb-20 overflow-hidden">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.6em] font-mono opacity-30"
          >
            Digital Architecture / Future Ops
          </motion.p>
        </div>

        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] lg:text-[10rem] italic font-display leading-[0.8] mb-12 titanium-gradient"
        >
          Architecting <br/>
          <span className="pl-[5vw] lg:pl-40 not-italic font-sans font-light tracking-tighter titanium-gradient">Intelligence.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="lg:col-span-5 space-y-12"
          >
            <p className="text-xl lg:text-2xl font-light text-titanium/40 leading-relaxed italic">
              We design and deploy high-performance autonomous systems that transcend industrial standards.
            </p>
            
            <div className="flex items-center gap-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="btn-magnetic"
              >
                Launch Protocol
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="hidden lg:flex flex-col gap-1 text-[8px] tracking-[0.4em] uppercase font-mono opacity-20">
                <span>EST. 2026</span>
                <span>BASED. SEOUL / LONDON</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-1" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="lg:col-span-6 relative aspect-square lg:aspect-video interactive-panel overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:scale-110 transition-transform duration-1000" />
             <div className="absolute bottom-8 left-8 space-y-2">
                <span className="block text-[8px] tracking-widest uppercase font-mono opacity-40">System Preview</span>
                <span className="block text-sm italic font-display">Autonomous Visualizer v.104</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
