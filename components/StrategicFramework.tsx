import React from 'react';
import { Trophy, HeartPulse, Landmark, ArrowUpRight } from 'lucide-react';
import { PillarData } from '../types';

const pillarsData: PillarData[] = [
  {
    id: 'pillar1',
    title: "Elite Performance",
    subtitle: "Olympic & Military Readiness",
    icon: Trophy,
    visualUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    visualType: 'image',
    details: [
      { label: "VO2 Max Optimization", text: "Demonstrated improvements in oxygen transport capacity and lactate threshold through controlled Hypoxic conditioning.", statValue: "15+", statUnit: "Year", statColor: "#D4AF37" },
      { label: "Cellular Power", text: "Peer-reviewed evidence supports the stimulation of natural EPO production and enhancement of mitochondrial density for sustained endurance.", statValue: "5+", statUnit: "Nation", statColor: "#3881FC" },
      { label: "Rapid Acclimatization", text: "Optimized pre-acclimatization protocols to enhance physiological adaptation efficiency for global competitions and high-altitude deployment.", statValue: "1", statUnit: "Tier", statColor: "#D4AF37" },
      { label: "Military Readiness", text: "Specialized thermal adaptation and cognitive resilience frameworks designed for elite tactical performance in comparable operational environments.", statValue: "2030", statUnit: "Vision", statColor: "#3881FC" }
    ]
  },
  {
    id: 'pillar2',
    title: "Clinical & Metabolic Rehab",
    subtitle: "Evidence-Led Recovery",
    icon: HeartPulse,
    visualUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    visualType: 'image',
    details: [
      { label: "Metabolic Support", text: "Evidence-led protocols for metabolic rate modulation and endocrine regulation to support sustainable weight management.", statValue: "100%", statUnit: "Medical", statColor: "#D4AF37" },
      { label: "Neuro-Recovery Systems", text: "Intermittent hypoxia protocols designed to enhance neurological recovery and complement traditional physical therapy outcomes.", statValue: "Phase 1", statUnit: "Ready", statColor: "#3881FC" },
      { label: "Chronic Condition Mgmt", text: "Innovative therapeutic support for type-2 diabetes glucose management and respiratory health (asthma) recovery.", statValue: "24/7", statUnit: "Monitoring", statColor: "#D4AF37" },
      { label: "Institutional Integration", text: "Modular, medically-certified systems engineered for seamless deployment within leading saudi healthcare infrastructure.", statValue: "ISO", statUnit: "CERTIFIED", statColor: "#3881FC" }
    ]
  },
  {
    id: 'pillar3',
    title: "Urban Human Resilience",
    subtitle: "Mega-Project Integration",
    icon: Landmark,
    visualUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    visualType: 'image',
    details: [
      { label: "Strategic Infrastructure", text: "First-mover integration of specialized human performance systems within saudi giga-project urban frameworks.", statValue: "1st", statUnit: "Mover", statColor: "#D4AF37" },
      { label: "Operational Reliability", text: "Documented high utilization rates of environmental systems in institutional and commercial deployments..", statValue: "99%", statUnit: "Uptime", statColor: "#3881FC" },
      { label: "Giga-Project Scalability", text: "Bespoke climate simulation solutions engineered for iconic urban centers, supporting physiological resilience at scale.", statValue: "10+", statUnit: "Projects", statColor: "#D4AF37" },
      { label: "National Service Ecosystem", text: "Strategic maintenance partnerships with local engineering entities to ensure consistent technical uptime and reliability.", statValue: "24/7", statUnit: "Support", statColor: "#3881FC" }
    ]
  }
];

interface StrategicFrameworkProps {
  id: string;
  onSelectPillar: (pillar: PillarData) => void;
}

const StrategicFramework: React.FC<StrategicFrameworkProps> = ({ id, onSelectPillar }) => {
  return (
    <section id={id} className="section-reveal py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[180px] -z-10"></div>
      
      <div className="container mx-auto text-center mb-24">
        <h3 className="text-[#3881FC] font-black uppercase tracking-[0.5em] text-sm mb-6">Execution Strategy</h3>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Saudi <span className="gold-text">Use-Cases</span></h2>
        <p className="text-slate-300 max-w-3xl mx-auto text-xl font-semibold leading-relaxed">
          Directly aligned with Vision 2030 <span className="text-[#D4AF37]">Human Capability Development Program</span>.
        </p>
      </div>

      <div className="container mx-auto grid lg:grid-cols-3 gap-10">
        {pillarsData.map((pillar) => (
          <div 
            key={pillar.id}
            onClick={() => onSelectPillar(pillar)}
            className="group relative h-[650px] glass-card rounded-[3.5rem] cursor-pointer overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={pillar.visualUrl} 
                alt={pillar.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full p-12 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-[#D4AF37] mb-8 border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-500 shadow-2xl">
                  <pillar.icon size={40} />
                </div>
                <h4 className="text-4xl font-black mb-4 uppercase tracking-tighter leading-tight group-hover:text-white transition-colors">{pillar.title}</h4>
                <p className="text-[#3881FC] font-bold text-sm uppercase tracking-widest mb-6 border-l-2 border-[#D4AF37] pl-4">{pillar.subtitle}</p>
              </div>

              <div>
                <div className="space-y-4 mb-10">
                  {pillar.details.slice(0, 2).map((d, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 group-hover:border-white/10 transition-all">
                      <p className="text-xs font-black text-[#D4AF37] uppercase mb-1">{d.label}</p>
                      <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors line-clamp-2">{d.text}</p>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-white font-black uppercase tracking-[0.2em] text-xs pb-2 border-b-2 border-[#D4AF37] group-hover:gap-4 transition-all">
                  Analyze Case Study <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicFramework;
