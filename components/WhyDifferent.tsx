import React from 'react';
import { Layers, Microscope, GraduationCap, BarChart, Dumbbell, Zap, Waves, Bike, Activity, ArrowRight, Globe, Settings, Rocket, Users, ShieldCheck, Cpu, Info } from 'lucide-react';

const differentiators = [
  {
    icon: Globe,
    title: "KSA Localization",
    desc: "Strategic integration of Altipeak™ IP within the Kingdom's supply chain, supporting local manufacturing and self-sufficiency.",
    delay: "0s"
  },
  {
    icon: GraduationCap,
    title: "Saudi Workforce Enablement",
    desc: "Empowering Saudi nationals through technical certification and high-performance education via the Altipeak™ Academy.",
    delay: "0.1s"
  },
  {
    icon: Settings,
    title: "Industrial Scalability",
    desc: "Industrial-grade simulation technology engineered for sustained, high-volume performance in major Giga-Project environments.",
    delay: "0.2s"
  },
  {
    icon: Rocket,
    title: "National-Scale Deployment",
    desc: "Modular and scalable architectures designed for seamless nationwide rollout across military, sport, and healthcare sectors.",
    delay: "0.3s"
  }
];

const featuredConcepts = [
  {
    name: "AltiHITT™",
    tagline: "Superior Conditioning",
    desc: "Advanced interval treadmill + strength training. The apex alternative to traditional studio models.",
    icon: Zap,
    status: "Pilot Ready",
    img: "https://res.cloudinary.com/dpweu2ene/image/upload/v1768828039/671_fgfb6d.jpg"
  },
  {
    name: "BIKE LAB™",
    tagline: "Performance Cycling",
    desc: "Lab-grade cycling environments simulating altitude + extreme heat variables.",
    icon: Bike,
    status: "Active Deployment",
    img: "https://res.cloudinary.com/dpweu2ene/image/upload/v1768809592/3_i7mvps.png"
  }
];

const modularModules = [
  { name: "Altibox™", icon: Dumbbell, tagline: "High-Intensity Boxing", status: "Pilot Ready" },
  { name: "AltiRow™", icon: Waves, tagline: "Elite Rowing Eco", status: "Pilot Ready" },
  { name: "RUN LAB™", icon: Activity, tagline: "Gait & Stress Analysis", status: "Active Deployment" }
];

const galleryImages = [
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768828140/927_oqdrbc.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768828157/730_tt6toi.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768828131/706_pdps0y.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768828125/734_sjzv83.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768809685/WhatsApp_Image_2025-11-03_at_22.49.46_e5d5a180_yogk0l.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768809684/WhatsApp_Image_2025-11-03_at_22.49.47_57ae934d_wb4own.jpg",
  "https://res.cloudinary.com/dpweu2ene/image/upload/v1768809612/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_tpnutm.png",
  "https://res.cloudinary.com/dokxiosv2/image/upload/v1764419341/WhatsApp_Image_2025-07-30_at_19.10.04_2_b9fpjn.jpg",
  "https://res.cloudinary.com/dokxiosv2/image/upload/v1764404320/WhatsApp_Image_2025-11-03_at_22.49.47_b526046e_weskju.jpg",
  "https://res.cloudinary.com/dokxiosv2/image/upload/v1764419330/Screenshot_2025-05-16_131524_tpw078.png"
];

const WhyDifferent: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section-reveal relative py-32 overflow-hidden bg-[#0A192F] group">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #3881FC 1px, transparent 1px), linear-gradient(to bottom, #3881FC 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute bottom-10 left-0 w-full whitespace-nowrap pointer-events-none select-none z-0 opacity-[0.03] transform -translate-x-20">
        <h2 className="text-[20rem] font-black italic uppercase tracking-tighter text-white">
          KSA Capability Development • Human Performance Evolution
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.5em] text-xs mb-6">The Altipeak™ Edge</h3>
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">
            National Human <br/>
            <span className="gold-text">Capability</span>
          </h2>
          <div className="w-48 h-2 gold-gradient rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {differentiators.map((diff, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-[3rem] glass-card border-white/5 hover:border-[#D4AF37]/60 transition-all duration-700 hover:-translate-y-4 animate-float shadow-2xl"
              style={{ animationDelay: diff.delay }}
            >
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 transition-colors duration-700 rounded-[3rem]"></div>
              
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-[#D4AF37]/30 mb-8 flex items-center justify-center text-[#D4AF37] shadow-xl group-hover:rotate-[360deg] transition-all duration-1000">
                <diff.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">{diff.title}</h4>
              <p className="text-slate-400 text-lg leading-relaxed font-medium group-hover:text-slate-200 transition-colors">{diff.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.4em] text-xs mb-4">Market Deployment</h3>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                Scalable Training <br/> <span className="text-[#3881FC]">Ecosystems</span>
              </h2>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs border-r-2 border-[#3881FC] pr-6 mb-2">
                Strategic National <br/> Framework Modules
              </p>
              <span className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 text-red-500 text-[9px] font-black uppercase tracking-widest bg-red-500/5 backdrop-blur-sm">
                Government / Institutional Deployment Only
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured Section: AltiHITT and BIKE LAB */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              {featuredConcepts.map((concept, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-[#112240]/40 backdrop-blur-xl rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-2xl flex flex-col overflow-hidden"
                >
                  <div className="h-64 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={concept.img} alt={concept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-[#3881FC] text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-xl animate-shimmer">
                        Pilot Configuration Available
                      </span>
                      <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md text-[#D4AF37] text-[9px] font-black uppercase tracking-widest rounded-lg border border-[#D4AF37]/20">
                        {concept.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500">
                        <concept.icon size={24} />
                      </div>
                      <Cpu size={16} className="text-slate-600 group-hover:text-[#3881FC] transition-colors" />
                    </div>
                    
                    <h5 className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{concept.tagline}</h5>
                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{concept.name}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-1">{concept.desc}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Component ID: AT-SYS{idx + 1}</span>
                      <div className="flex items-center gap-2 text-[#3881FC] text-[10px] font-black uppercase tracking-widest cursor-pointer hover:gap-4 transition-all">
                        Technical Spec <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modular Component List: Altibox, AltiRow, RUN LAB */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 mb-2">
                <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-3">
                  <Layers size={14} className="text-[#3881FC]" /> Modular Infrastructure
                </h4>
                <div className="space-y-4">
                  {modularModules.map((mod, i) => (
                    <div key={i} className="group p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-[#D4AF37]/30 transition-all flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <mod.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="text-sm font-black text-white uppercase tracking-tight">{mod.name}</h5>
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{mod.status}</span>
                        </div>
                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{mod.tagline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#3881FC]/10 to-transparent border border-[#3881FC]/20 flex flex-col justify-center text-center">
                <Info size={32} className="text-[#3881FC] mx-auto mb-6" />
                <h5 className="text-white font-black uppercase tracking-tight text-lg mb-4">Bespoke Pilot Integration</h5>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                  Every training ecosystem is engineered specifically for the site's unique environmental and physiological requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block px-10 py-6 rounded-[2rem] bg-slate-950/80 border border-white/5 backdrop-blur-md shadow-2xl">
              <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] italic max-w-4xl leading-relaxed">
                "Modules shown are examples only. Pilot configurations are customized per ministry, site, and objective."
              </p>
            </div>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 mb-16 group/scroller">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll-fast gap-6 py-4 hover:[animation-play-state:paused]">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div 
                  key={idx} 
                  className="flex-none w-[300px] h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 shadow-2xl"
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Altipeak Showcase ${idx}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#0A192F] to-transparent z-10 pointer-events-none"></div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Proprietary Engineering • ISO 9001 • CE Certified</p>
          <a href="#contact" className="inline-flex items-center gap-4 bg-[#3881FC]/10 hover:bg-[#3881FC]/20 border border-[#3881FC]/30 px-12 py-6 rounded-full transition-all duration-500 shadow-xl group">
             <span className="text-sm font-black uppercase tracking-widest text-white">Scale Your National Strategy</span>
             <ArrowRight className="text-[#D4AF37] group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 40s linear infinite;
        }
        @keyframes shimmer-fast {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, #3881FC 0%, #60A5FA 50%, #3881FC 100%);
          background-size: 200% 100%;
          animation: shimmer-fast 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default WhyDifferent;