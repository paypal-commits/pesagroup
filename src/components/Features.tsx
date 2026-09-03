import { useState } from "react";
import { servicesData } from "../data";
import { 
  Briefcase, 
  Home, 
  Trees, 
  GraduationCap, 
  Plane, 
  Compass, 
  ChevronRight, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

// Helper function to map string iconName to Lucide components
const IconMap: { [key: string]: any } = {
  Briefcase: Briefcase,
  Home: Home,
  Trees: Trees,
  GraduationCap: GraduationCap,
  Plane: Plane,
  Compass: Compass,
};

export default function Features() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("consulting");

  const selectedPillar = servicesData.find(s => s.id === selectedPillarId) || servicesData[0];
  const ActiveIcon = IconMap[selectedPillar.iconName] || Briefcase;

  return (
    <section className="py-20 bg-white border-y border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
            Corporate Ecosystem
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
            Our Six Strategic Pillars
          </h2>
          <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4 mb-4"></div>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            PESA Group operates across a meticulously curated spectrum of global services, providing integrated advisory, luxury physical asset management, and ethical sourcing channels.
          </p>
        </div>

        {/* Bento-Inspired Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Pillars Navigation Button Grid (4 Cols) */}
          <div className="lg:col-span-5 space-y-3" id="pillars-navigation-grid">
            {servicesData.map((service) => {
              const PillarIcon = IconMap[service.iconName] || Briefcase;
              const isSelected = service.id === selectedPillarId;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedPillarId(service.id)}
                  id={`btn-pillar-tab-${service.id}`}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                    isSelected 
                      ? "bg-[#0A2540] text-white border-[#0A2540] shadow-lg shadow-blue-900/10" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100/70 hover:border-blue-350 hover:border-blue-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-sm font-bold tracking-wide ${isSelected ? "text-blue-300" : "text-slate-900"}`}>
                      {service.title}
                    </h4>
                    <p className={`text-[11px] truncate max-w-[220px] ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                      {service.tagline}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-blue-400 translate-x-1" : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Portfolio (7 Cols) */}
          <div className="lg:col-span-7" id="pillar-deep-dive-panel">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden">
              
              {/* Decorative accent background indicator */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-slate-900">
                <ActiveIcon className="w-60 h-60" />
              </div>

              {/* Headings */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-blue-400 flex items-center justify-center border border-slate-800 shadow-md">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-600 font-extrabold">
                    Strategic Division
                  </span>
                  <h3 className="font-sans text-2xl text-slate-950 font-bold leading-tight">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-blue-800 font-sans text-sm italic mb-4 font-semibold">
                "{selectedPillar.tagline}"
              </p>

              {/* Body */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                {selectedPillar.description}
              </p>

              {/* Specific Facts Audit List */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold">
                  Key Operational Facts & Deliverables:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 leading-snug font-sans">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help tip to communicate with bot */}
              <div className="mt-8 p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5">
                <HelpCircle className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-normal font-sans">
                  Want to explore custom projections or investment parameters for <strong className="text-slate-800">{selectedPillar.title}</strong>? Speak with our <strong className="text-slate-800">PESA Ambassador AI chatbot</strong> at the bottom right of the screen for instant, verified assistance!
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
