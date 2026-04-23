import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-10 px-12 lg:px-20"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="text-xl italic font-display lowercase titanium-gradient">Nexus.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-mono opacity-40">
        <a href="#services" className="hover:opacity-100 transition-opacity">Design.v4</a>
        <a href="#process" className="hover:opacity-100 transition-opacity">Methodology</a>
        <a href="#results" className="hover:opacity-100 transition-opacity">Archive</a>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-[10px] uppercase tracking-[0.4em] font-mono border-b border-titanium/20 pb-1 hover:border-titanium transition-all"
      >
        Initiate_Contact
      </motion.button>
    </motion.nav>
  );
}
