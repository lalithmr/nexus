import { Twitter, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-12 lg:px-32 border-t border-titanium/[0.03] bg-carbon relative z-10 overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-20 relative z-10">
        <div className="lg:col-span-4 space-y-8 md:space-y-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl italic font-display lowercase titanium-gradient">NEXUS</span>
          </div>
          <p className="text-titanium/20 text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-mono leading-loose max-w-xs">
            Building Efficient, Scalable Businesses with AI / Automation Architecture / v.2026.
          </p>
          <div className="flex items-center gap-8 md:gap-12 text-titanium/20">
            <Twitter className="w-4 h-4 hover:text-[#00b3ff] transition-colors cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-[#00b3ff] transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <h4 className="micro-label">/ Services</h4>
          <ul className="space-y-4 md:space-y-6 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-mono opacity-30">
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">Automation</li>
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">AI_Chatbots</li>
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <h4 className="micro-label">/ Company</h4>
          <ul className="space-y-4 md:space-y-6 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-mono opacity-30">
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">Archive</li>
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">Methodology</li>
            <li className="hover:opacity-100 hover:text-[#00b3ff] transition-all cursor-pointer">Strategy_Call</li>
          </ul>
        </div>

        <div className="lg:col-span-4 space-y-12 md:space-y-16 lg:text-right flex flex-col items-center lg:items-end">
           <div className="space-y-4 w-full">
              <h4 className="micro-label lg:text-right">/ Contact</h4>
              <div className="flex flex-col items-center lg:items-end gap-2 text-[9px] md:text-[10px] font-mono tracking-[0.2em] opacity-30">
                <span className="hover:text-titanium transition-colors cursor-pointer">hello@nexus.com</span>
                <span>Location: India</span>
              </div>
           </div>

           <div className="space-y-6 w-full max-w-sm">
              <span className="micro-label lg:text-right block">/ Intelligence_Feed</span>
              <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="SUBSCRIBE_OPS" 
                    className="w-full bg-transparent border-b border-white/[0.05] py-4 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] focus:border-[#00b3ff] transition-all outline-none text-center lg:text-right placeholder:opacity-20"
                 />
                 <ArrowRight className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 opacity-0 group-focus-within:opacity-100 text-[#00b3ff] transition-all duration-700 hidden md:block" />
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 md:pt-40 mt-12 md:mt-40 border-t border-titanium/[0.03] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-[7px] md:text-[8px] font-mono tracking-[0.5em] text-titanium/10 uppercase">
        <p>© 2026 NEXUS All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <span className="hover:text-[#00b3ff] cursor-pointer transition-colors">Privacy_Protocol</span>
          <span className="hover:text-[#00b3ff] cursor-pointer transition-colors">Security_Gateway</span>
        </div>
      </div>
    </footer>
  );
}
