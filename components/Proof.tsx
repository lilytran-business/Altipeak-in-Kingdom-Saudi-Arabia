import React from 'react';
import { Trophy, Activity, Microscope, Settings, ShieldAlert, CheckCircle2 } from 'lucide-react';

const trustTiles = [
  {
    icon: Trophy,
    title: "Olympic Partner",
    highlight: "Institutional Trust",
    desc: "Deployment for France, Ireland, and Thailand National Councils.",
    delay: "delay-[100ms]"
  },
  {
    icon: Activity,
    title: "Tactical Adaptation",
    highlight: "Operational Readiness",
    desc: "Engineered for rapid physiological acclimatization in extreme environments.",
    delay: "delay-[200ms]"
  },
  {
    icon: Microscope,
    title: "University Validated",
    highlight: "Evidence-Led",
    desc: "Physiological and metabolic study oversight by Emory University.",
    delay: "delay-[300ms]"
  },
  {
    icon: Settings,
    title: "ISO/CE Certified",
    highlight: "Regulatory Excellence",
    desc: "Proprietary simulation technology meeting global safety standards.",
    delay: "delay-[400ms]"
  }
];

const galleryImages = [
  { 
    url: "https://res.cloudinary.com/dpweu2ene/image/upload/v1768821937/13_nuve5b.png", 
    caption: "French Olympic Council Official Partner",
    size: "col-span-2 md:col-span-1"
  },
  { 
    url: "https://res.cloudinary.com/dpweu2ene/image/upload/v1768821927/15_jlqraa.png", 
    caption: "Ministry of Sport & Olympic Council of Asia (2026 Project) Partner",
    size: "col-span-2 md:col-span-1"
  },
  { 
    url: "https://res.cloudinary.com/dpweu2ene/image/upload/v1768821927/14_uwpzgv.png", 
    caption: "Irish Rugby & Super Sevens teams Official partners",
    size: "col-span-2 md:col-span-2"
  }
];

const Proof: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="section-reveal relative py-32 overflow-hidden bg-[#0A192F]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3881FC]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h3 className="text-[#3881FC] font-black uppercase tracking-[0.5em] text-xs mb-6">Credential Portfolio</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none mb-8">
            Global <br/>
            <span className="gold-text uppercase">Wall of Trust</span>
          </h2>
          <div className="w-32 h-1.5 gold-gradient rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authority & Endorsement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {trustTiles.map((tile, idx) => (
                <div 
                  key={idx} 
                  className={`group relative p-6 rounded-[2rem] glass-card border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-default animate-in slide-in-from-left-10 ${tile.delay}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500 shadow-lg">
                      <tile.icon size={28} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#3881FC] group-hover:text-[#D4AF37] transition-colors">{tile.highlight}</span>
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">{tile.title}</h4>
                      <p className="text-slate-400 text-sm font-medium mt-1 leading-relaxed">{tile.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Noel O'Brien Interview Endorsement */}
            <div className="mt-8 p-10 bg-[#112240] rounded-[2.5rem] border-l-8 border-[#D4AF37] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                <Trophy size={140} />
              </div>
              <div className="relative z-10">
                <p className="italic text-slate-200 text-lg font-medium leading-relaxed mb-8">
                  "Altipeak's technology doesn't just simulate altitude; it replicates the physiological adaptations required for elite operational success in any environment."
                </p>
                <div className="flex flex-col border-t border-white/10 pt-6">
                  <span className="text-[10px] font-black gold-text uppercase tracking-widest mb-1">Official Endorsement</span>
                  <p className="text-2xl font-bold text-white tracking-tight leading-none mb-1">— Noel O'Brien</p>
                  <p className="text-xs font-black text-[#3881FC] uppercase tracking-widest">CEO of Altipeak International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Proof & Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-10 duration-1000">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${img.size} relative rounded-[2rem] overflow-hidden border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group hover:-translate-y-2 transition-all duration-700`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#112240]/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl shadow-xl">
                      <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Disclaimer */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group hover:bg-[#3881FC]/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-500">
                  <ShieldAlert size={28} />
                </div>
                <div>
                  <h5 className="text-slate-400 font-black uppercase tracking-tight text-sm leading-tight">National Capability <br/> <span className="text-[#3881FC]">Operational Framework</span></h5>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed max-w-[240px]">
                  Specific deployments subject to <br/>NDA and government approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;