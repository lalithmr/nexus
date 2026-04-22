import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nexus transformed our lead qualification from a manual bottleneck into an autonomous engine. Revenue per headcount has doubled.",
    name: "Thomas Reeds",
    role: "VP of Ops, Cloudscale",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    quote: "The level of engineering behind their AI chatbots is scarily good. It handles 90% of our support flow with 100% accuracy.",
    name: "Sarah Jenkins",
    role: "Founder, Zenith Digital",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 px-6 max-w-7xl mx-auto space-y-32">
      <div className="flex flex-col items-center text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-[0.5em] text-magenta-glow">Strategic Validation</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85]">
          Client <br/>
          <span className="text-white/20 italic">Transmission.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 glass-panel relative border-white/5 space-y-10 group overflow-hidden"
          >
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.02] transform rotate-12" />
            <p className="text-2xl md:text-3xl text-white/70 leading-snug tracking-tight relative z-10 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-6 relative z-10 pt-8 border-t border-white/5">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover border border-white/10" />
              <div>
                <div className="font-bold text-xl text-white tracking-tight">{t.name}</div>
                <div className="text-[10px] font-black tracking-[0.3em] uppercase text-cyber-blue">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-20 pt-20">
        {["STRIPE", "OPENAI", "LINEAR", "NOTION", "VERCEL"].map((logo, i) => (
          <span key={i} className="text-3xl font-black tracking-tighter hover:opacity-100 transition-opacity cursor-default">{logo}</span>
        ))}
      </div>
    </section>
  );
}
