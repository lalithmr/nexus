import { Github, Twitter, Linkedin, Bot, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-12 lg:px-20 border-t border-titanium/10 bg-base relative z-10 overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-5" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="md:col-span-1 space-y-10">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display italic titanium-gradient">Nexus.</span>
          </div>
          <p className="text-titanium/20 text-xs uppercase tracking-[0.3em] font-mono leading-loose">
            Boutique Intelligence Architecture / Engineering the exceptional / 2026 Edition_04.
          </p>
          <div className="flex items-center gap-8 text-titanium/20">
            <Twitter className="w-4 h-4 hover:text-titanium transition-colors cursor-pointer" />
            <Github className="w-4 h-4 hover:text-titanium transition-colors cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-titanium transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[8px] font-mono tracking-[0.5em] uppercase opacity-20">Systems</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] font-mono opacity-40">
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Protocol_Zenith</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Archive_Aether</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Neural_Ops</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[8px] font-mono tracking-[0.5em] uppercase opacity-20">Agency</h4>
          <ul className="space-y-4 text-[10px] uppercase tracking-[0.3em] font-mono opacity-40">
            <li className="hover:opacity-100 transition-opacity cursor-pointer">The Studio</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Methodology</li>
            <li className="hover:opacity-100 transition-opacity cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="space-y-10 text-right">
           <div className="space-y-4">
              <span className="block text-[8px] font-mono tracking-[0.5em] uppercase opacity-20">Current_Time</span>
              <span className="block text-sm font-mono opacity-40">SEOUL / 09:24 AM KST</span>
           </div>
           <div className="space-y-4">
              <span className="block text-[8px] font-mono tracking-[0.5em] uppercase opacity-20">Newsletter</span>
              <div className="group relative">
                 <input 
                    type="text" 
                    placeholder="ENTER_EMAIL" 
                    className="w-full bg-transparent border-b border-titanium/10 py-2 text-[10px] font-mono uppercase tracking-widest focus:border-titanium transition-all outline-none text-right"
                 />
                 <ArrowRight className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 opacity-0 group-focus-within:opacity-100 transition-opacity" />
              </div>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-titanium/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-mono tracking-[0.4em] text-titanium/10 uppercase">
        <p>© 2026 Nexus Engineering Studio. All rights strictly reserved. v.104</p>
        <div className="flex gap-12">
          <span className="hover:text-titanium cursor-pointer transition-colors">Privacy_Protocol</span>
          <span className="hover:text-titanium cursor-pointer transition-colors">Legal_Terms</span>
        </div>
      </div>
    </footer>
  );
}
