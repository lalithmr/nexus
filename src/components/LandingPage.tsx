import { motion } from "motion/react";
import { Bot, Cpu, Zap, BarChart3, MessageSquare, Rocket } from "lucide-react";
import { cn } from "@/src/lib/utils";

/**
 * Navbar component with sticky positioning and glass effect.
 */
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-7xl px-6 py-3 glass-card pointer-events-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-spring-green to-electric-violet flex items-center justify-center">
            <Cpu className="w-5 h-5 text-woodsmoke" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display">NEXUS AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-spring-green transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-spring-green transition-colors">Process</a>
          <a href="#results" className="hover:text-spring-green transition-colors">Results</a>
          <a href="#testimonials" className="hover:text-spring-green transition-colors">Clients</a>
        </div>

        <button className="hidden sm:block btn-primary px-5 py-2 text-sm">
          Book Audit
        </button>
      </div>
    </nav>
  );
}

/**
 * Hero section with animated background elements and strong positioning.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden neural-bg bg-[#0B0F1A]">
      {/* Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] glow-green rounded-full blur-[40px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] glow-violet rounded-full blur-[40px]" />
      
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-spring-green/30 w-fit mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-spring-green animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-spring-green">New: AI Integration v4.0</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] md:leading-[1.05]"
        >
          Automate Your Business with <br/><span className="text-gradient">AI Agents.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          The high-end AI agency for companies ready to leverage autonomous agents, lead generation systems, and seamless CRM integrations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="btn-primary w-full sm:w-auto text-base px-8 py-4 rounded-xl shadow-lg">
            Book Free AI Strategy Call
          </button>
          <button className="btn-secondary w-full sm:w-auto text-base px-8 py-4 rounded-xl">
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Features section showing the 6 core services.
 */
export function Features() {
  const services = [
    {
      title: "AI Workflow Automation",
      description: "Connect 1000+ tools into a single autonomous flow.",
      icon: Cpu,
      color: "#00FF85"
    },
    {
      title: "AI Chatbots (Web + WhatsApp)",
      description: "Web + WhatsApp agents that close sales 24/7.",
      icon: MessageSquare,
      color: "#8B5CF6"
    },
    {
      title: "Lead Generation Systems",
      description: "Hyper-personalized AI outreach systems.",
      icon: Rocket,
      color: "#00FF85"
    },
    {
      title: "CRM & Tool Integrations",
      description: "Bi-directional data flow with Salesforce & HubSpot.",
      icon: Zap,
      color: "#8B5CF6"
    },
    {
      title: "Business Process Automation",
      description: "Automated reporting and scaling strategies.",
      icon: Bot,
      color: "#00FF85"
    },
    {
      title: "Growth Automation Systems",
      description: "Scaling marketing and ops through data-driven autonomous workflows.",
      icon: BarChart3,
      color: "#8B5CF6"
    },
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Premium AI <span className="text-gradient">Solutions</span></h2>
        <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold font-mono">Autonomous power for enterprise teams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative p-8 glass-card card-hover-frosted border-white/10"
          >
            <div className="relative z-10 flex flex-col h-full gap-4 text-center items-center">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: `${service.color}10`, color: service.color }}
              >
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/**
 * Process section explaining how they work.
 */
export function HowItWorks() {
  const steps = [
    { title: "Strategy", desc: "Audit & Strategy" },
    { title: "Build", desc: "Build & Integrate" },
    { title: "Launch", desc: "Launch & Scale" },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center mb-16">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">How it works</span>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold tracking-widest text-[#00FF85] uppercase">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span>0{i + 1}</span>
                  <span className="text-white">{step.title}</span>
                </div>
                {i < steps.length - 1 && <div className="hidden sm:block w-8 h-[1px] bg-white/10"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 glass-card border-white/5 text-center space-y-4"
            >
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-white/40">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Results section showing metrics.
 */
export function Results() {
  const stats = [
    { value: "20–40+", label: "Hours Saved / Wk" },
    { value: "2–5x", label: "Conv. Increase" },
    { value: "60%", label: "Cost Reduction" },
  ];

  return (
    <section id="results" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/**
 * Testimonials and Trust section.
 */
export function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "CEO, Quantum Dynamics",
      quote: "Nexus transformed our chaotic ops into a well-oiled machine. We scaled 3x in 6 months without adding a single headcount.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, Bloom Digital",
      quote: "The AI chatbots they built are scarily efficient. Our lead qualification is now 100% automated and higher quality than our manual process.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto space-y-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 glass-card bg-white/[0.02]">
        <div className="space-y-4 md:w-1/3">
          <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
          <p className="text-white/40 text-sm">Automating the workflows of the next generation of tech unicorns.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full grayscale opacity-30 hover:opacity-100 transition-all">
          {/* Mock Logos */}
          <div className="flex items-center justify-center font-bold text-xl tracking-tighter">STRIPE</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-tighter italic">OPENAI</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-tighter">NOTION</div>
          <div className="flex items-center justify-center font-bold text-xl tracking-tighter italic">Linear</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-10 glass-card space-y-6 relative overflow-hidden">
            <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
            <p className="text-xl italic text-white/80 leading-relaxed relative z-10">"{t.quote}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-spring-green/30" />
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Final CTA section.
 */
export function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-spring-green to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-violet to-transparent" />
        
        <div className="space-y-4">
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            className="text-4xl md:text-6xl font-bold"
          >
            Ready to Automate Your Business?
          </motion.h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto italic">
            Stop trading time for money. Build your autonomous engine today.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button className="btn-primary text-xl px-12 py-5 w-full sm:w-auto">
            Get Your Free AI Blueprint
          </button>
          <div className="flex items-center gap-2 text-sm text-electric-violet font-medium animate-pulse">
            <span className="w-2 h-2 rounded-full bg-electric-violet" />
            Limited onboarding slots available for Q2
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Footer component.
 */
export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-spring-green to-electric-violet" />
            <span className="font-bold tracking-tight">NEXUS AI</span>
          </div>
          <p className="text-white/30 text-xs max-w-xs text-center md:text-left">
            Building Autonomous Businesses with AI. © 2026 Nexus Automation Agency. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-spring-green transition-colors">Services</a>
          <a href="#" className="hover:text-spring-green transition-colors">About</a>
          <a href="#" className="hover:text-spring-green transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4 grayscale opacity-40">
          <div className="w-5 h-5 rounded-full border border-white/20" />
          <div className="w-5 h-5 rounded-full border border-white/20" />
          <div className="w-5 h-5 rounded-full border border-white/20" />
        </div>
      </div>
    </footer>
  );
}
