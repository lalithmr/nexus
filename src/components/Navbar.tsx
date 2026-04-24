import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.2, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-6 md:px-12 lg:px-24 bg-base/80 backdrop-blur-xl border-b border-titanium/5 lg:bg-transparent lg:backdrop-blur-none lg:border-none"
    >
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex flex-col gap-1 cursor-pointer group relative"
      >
        <motion.span 
          whileHover={{ opacity: [1, 0.5, 1], x: [0, 2, -2, 0] }}
          transition={{ duration: 0.2 }}
          className="text-2xl md:text-4xl italic font-display lowercase text-titanium tracking-tighter"
        >
          NEXUS
        </motion.span>
        <div className="h-[1px] w-0 group-hover:w-full bg-titanium transition-all duration-1000 ease-out" />
      </div>
      
      {/* Tablet/Desktop Nav */}
      <div className="hidden lg:flex items-start gap-32">
        <div className="flex flex-col gap-6 text-[6px] uppercase tracking-[1em] font-mono opacity-20 hover:opacity-100 transition-all duration-1000">
           <span className="text-titanium/40 border-b border-titanium/5 pb-2">/ Index</span>
           <div className="flex flex-col gap-4">
              <a href="#services" className="hover:text-bronze transition-colors flex items-center gap-2 group/link">
                Operational_Fabric
                <div className="w-0 h-[1px] bg-bronze group-hover/link:w-4 transition-all" />
              </a>
              <a href="#process" className="hover:text-bronze transition-colors flex items-center gap-2 group/link">
                Methodology
                <div className="w-0 h-[1px] bg-bronze group-hover/link:w-4 transition-all" />
              </a>
              <a href="#results" className="hover:text-bronze transition-colors flex items-center gap-2 group/link">
                Yield_Archive
                <div className="w-0 h-[1px] bg-bronze group-hover/link:w-4 transition-all" />
              </a>
           </div>
        </div>

        <div className="flex flex-col gap-6 text-[6px] uppercase tracking-[1em] font-mono opacity-20">
           <span className="text-titanium/40 border-b border-titanium/5 pb-2">/ Status</span>
           <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-bronze" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-bronze animate-ping opacity-40" />
              </div>
              <span className="text-titanium">Node_01_Online</span>
           </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="hidden md:flex btn-magnetic h-14 md:h-20 px-8 md:px-24 border-titanium/5"
      >
        BOOK_CALL
      </motion.button>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden text-titanium p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-base z-40 lg:hidden flex flex-col p-12 justify-center items-start gap-12"
          >
            <div className="flex flex-col gap-8">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-4xl font-display italic titanium-gradient">Operational_Fabric</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-4xl font-display italic titanium-gradient">Methodology</a>
              <a href="#results" onClick={() => setIsOpen(false)} className="text-4xl font-display italic titanium-gradient">Yield_Archive</a>
            </div>
            
            <div className="mt-12 w-full border-t border-titanium/10 pt-12 space-y-12">
               <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full btn-magnetic h-20 text-lg font-mono"
              >
                BOOK_CALL
              </motion.button>

              <div className="flex justify-between items-center px-4">
                <div className="flex gap-8 text-titanium/30">
                   <div className="w-8 h-8 rounded-full border border-titanium/10 flex items-center justify-center hover:border-bronze hover:text-bronze transition-colors">
                      <Globe size={14} />
                   </div>
                   <div className="w-8 h-8 rounded-full border border-titanium/10 flex items-center justify-center hover:border-bronze hover:text-bronze transition-colors">
                      <Terminal size={14} />
                   </div>
                </div>
                <div className="flex flex-col items-end gap-1 opacity-20">
                   <span className="text-[6px] font-mono tracking-[0.4em] uppercase">Security_Status</span>
                   <span className="text-[6px] font-mono tracking-[0.4em] uppercase text-bronze">Active_Encrypted</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-12">
               <div className="flex items-center gap-4 opacity-50">
                  <Terminal size={12} className="text-bronze" />
                  <span className="text-[8px] font-mono tracking-widest uppercase">Node_Connected // v.2026</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
