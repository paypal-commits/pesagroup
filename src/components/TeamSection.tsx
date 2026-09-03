import { useState } from "react";
import { teamData } from "../data";
import { X, Award, Briefcase, Mail, ArrowUpRight } from "lucide-react";
import { TeamMember } from "../types";

export default function TeamSection() {
  const [activeBioMember, setActiveBioMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 bg-white border-y border-slate-200" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
            Executive Leadership
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
            The PESA Governing Board
          </h2>
          <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4 mb-4"></div>
          <p className="text-slate-600 text-sm max-w-xl mx-auto font-sans">
            Our multi-disciplinary team brings decades of combined international advisory, luxury brokerage, and financial compliance expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="team-members-grid">
          {teamData.map((member) => (
            <div 
              key={member.name}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-72 bg-slate-200 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <h3 className="font-sans text-lg font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-blue-300 mt-1">
                      {member.role.split("&")[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-slate-700">
                    <Award className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed font-sans text-slate-600">
                      {member.experience}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200">
                  <button
                    onClick={() => setActiveBioMember(member)}
                    id={`btn-read-bio-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="w-full py-2 bg-[#0A2540] hover:bg-[#123050] text-white rounded font-mono text-[10px] uppercase tracking-widest hover:text-blue-300 transition-all flex items-center justify-center gap-1.5 font-bold"
                  >
                    <span>Read Executive Biography</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Biography Modal */}
        {activeBioMember && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300" id="executive-bio-modal">
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-250 animate-in zoom-in-95 duration-300">
              
              {/* Header block */}
              <div className="bg-[#0A2540] text-white p-6 sm:p-8 relative border-b border-blue-500/20">
                <button 
                  onClick={() => setActiveBioMember(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
                  id="close-bio-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-5">
                  <img 
                    src={activeBioMember.image} 
                    alt={activeBioMember.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-blue-300">{activeBioMember.name}</h3>
                    <p className="text-xs uppercase tracking-widest font-mono text-slate-300 mt-1">{activeBioMember.role}</p>
                  </div>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                    Direct Scope & Background
                  </h4>
                  <p className="text-xs text-blue-700 font-mono italic">
                    {activeBioMember.experience}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-1.5">
                    Professional Biography
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {activeBioMember.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                    PESA Advisory Board LLC
                  </span>
                  <a 
                    href="mailto:info@pesagroup.org"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-mono hover:text-blue-700 font-bold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact Officer</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
