import { motion, useScroll, useTransform } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotateScroll = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 lg:px-20 overflow-hidden bg-base neural-bg">
      <div className="absolute inset-0 noise-overlay animate-pulse pointer-events-none" />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Blob 1 */}
        <motion.div 
          style={{ y: y1, rotate: rotateScroll }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[40rem] h-[40rem] bg-sea/20 blur-[120px] rounded-full"
        />
        
        {/* Animated Blob 2 */}
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[50rem] h-[50rem] bg-titanium/10 blur-[150px] rounded-full"
        />

        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ 
            top: ["-10%", "110%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-titanium/20 to-transparent z-0"
        />
      </div>
      
      {/* Background Floating Element */}
      <motion.div
        style={{ rotate: rotateScroll }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-[60rem] h-[60rem] border border-titanium/10 rounded-full z-0 opacity-50"
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
            <p className="text-xl lg:text-2xl font-light text-titanium/60 leading-relaxed italic">
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
             <div className="absolute inset-0 bg-gradient-to-br from-titanium/10 to-transparent group-hover:scale-110 transition-transform duration-1000" />
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
