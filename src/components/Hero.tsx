import { useState, useRef } from "react";
import { ArrowRight, Sparkles, Building, Globe, Landmark, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:py-28 text-white min-h-[90vh] flex flex-col justify-center isolate bg-slate-950" id="hero">
      
      {/* Background Video behind all text content */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20" id="hero-media-wrapper">
        <video
          ref={videoRef}
          src="https://uakg9u0vtibqfzny.public.blob.vercel-storage.com/Animate_storyboard_sequence_Pesa%E2%80%A6_202607042233.mp4"
          className="w-full h-full object-cover scale-100 transition-transform duration-700"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      </div>

      {/* Minimal shadow overlay for text legibility without blocking the video */}
      <div className="absolute inset-0 bg-black/20 -z-10 pointer-events-none" />

      {/* Floating premium audio toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 bg-slate-900/80 hover:bg-blue-600 hover:text-white px-3.5 py-2 rounded-full text-xs text-blue-300 font-mono border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer select-none active:scale-95"
          title={isMuted ? "Unmute Video" : "Mute Video"}
          id="hero-video-mute-toggle"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="uppercase tracking-wider font-extrabold text-[10px]">UNMUTE AUDIO</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-blue-400" />
              <span className="uppercase tracking-wider font-extrabold text-[10px]">MUTE AUDIO</span>
            </>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Elite top badge */}
        <div className="flex justify-center mb-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 text-blue-300 border border-blue-500/30 shadow-md backdrop-blur-md animate-fade-in"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold">
              Redefining Global Excellence
            </span>
          </div>
        </div>

        {/* Hero Copywriting Content */}
        <div className="text-center max-w-4xl mx-auto">
          <p 
            className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 mb-3 font-bold"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            PESA CONSULTING GROUP LLC
          </p>
          
          <h1 
            className="font-sans text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.1] mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
            We Provide <span className="text-blue-400 font-black">Real Solutions</span> <br className="hidden sm:inline" />
            for Real People
          </h1>

          <p 
            className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-medium"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
          >
            A diversified multi-national corporation and elite advisory firm. Under President Camy Likobe, we deliver strategic consulting, luxury real estate brokerage, sustainable construction, private jet procurement, international student visas, and ethical mining logistics.
          </p>

          {/* Official Brochure Branding: PESA Framework */}
          <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800/80 text-center backdrop-blur-md animate-fade-in" id="pesa-acronym-showcase">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-blue-400 font-extrabold mb-6 text-center">
              PESA Philosophy: Purpose • Expansion • Structure • Assembly
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-slate-100">
              {/* Card P */}
              <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                  P • PURPOSE
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                  {language === "fr" ? "Objectif" : "Purpose"}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                  {language === "fr" 
                    ? "Nous donnons un sens stratégique à chaque projet." 
                    : "We provide a strategic purpose and direction to every project."}
                </p>
              </div>

              {/* Card E */}
              <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                  E • EXPANSION
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                  {language === "fr" ? "Expansion" : "Expansion"}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                  {language === "fr" 
                    ? "Nous favorisons la croissance durable et l'innovation." 
                    : "We foster sustainable growth and continuous innovation."}
                </p>
              </div>

              {/* Card S */}
              <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                  S • STRUCTURE
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                  {language === "fr" ? "Structure" : "Structure"}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                  {language === "fr" 
                    ? "Nous mettons en place des bases solides et performantes." 
                    : "We establish robust, high-performance foundations."}
                </p>
              </div>

              {/* Card A */}
              <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                  A • ASSEMBLY
                </span>
                <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                  {language === "fr" ? "Assemblage" : "Assembly"}
                </span>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                  {language === "fr" 
                    ? "Nous coordonnons les ressources pour un impact maximal." 
                    : "We coordinate resources for maximum global impact."}
                </p>
              </div>
            </div>
          </div>

          {/* Luxury CTA button block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold rounded-lg shadow-lg shadow-blue-500/20 hover-blue-glow transition-all duration-300 flex items-center justify-center gap-3"
              id="hero-explore-pillars-btn"
            >
              <span>Explore Strategic Pillars</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-700/80 font-sans font-bold rounded-lg shadow-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              id="hero-contact-office-btn"
            >
              <span>Global Office Directory</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Stat 1 */}
          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80 shadow-md flex items-start gap-4 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 flex items-center justify-center text-blue-400 border border-blue-900/60">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-white tracking-tight">$300M+</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">Capital Market Advisory</p>
              <p className="text-[11px] text-slate-300 mt-1 leading-snug">Empowering companies with custom financial structures & allocation projections.</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80 shadow-md flex items-start gap-4 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 flex items-center justify-center text-blue-400 border border-blue-900/60">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-white tracking-tight">100% Approval</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">EB-5 Visa Programs</p>
              <p className="text-[11px] text-slate-300 mt-1 leading-snug">Adjudicated approval rate for over 300 global immigrant investors across 30+ nations.</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/80 shadow-md flex items-start gap-4 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md">
            <div className="w-12 h-12 rounded-lg bg-blue-950/80 flex items-center justify-center text-blue-400 border border-blue-900/60">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-white tracking-tight font-black">Multi-Pillar</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">Diversified Ecosystem</p>
              <p className="text-[11px] text-slate-300 mt-1 leading-snug">Seamless operations across luxury real estate, mining, aviation, and student visas.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
