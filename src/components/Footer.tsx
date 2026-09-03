import { Shield, Globe, Landmark, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/images/logo.jpg";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Footer Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-slate-800 shadow-sm">
                <img 
                  src={logoImg} 
                  alt="PESA Consulting Group Logo" 
                  className="w-full h-full object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans text-base tracking-wider uppercase text-blue-400 font-bold">
                {t("PESA Consulting Group")}
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                {t("PESA Consulting Group LLC")}
              </p>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto md:mx-0 font-sans">
              {t("An elite multinational advisory firm delivering absolute execution rigor across North America and Central Africa.")}
            </p>

            <div className="space-y-1.5 font-mono text-[10px] text-slate-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{t("Dallas Desk: +1 (682) 424-5857")}</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{t("Kinshasa Desk: +243 821 368 004")}</span>
              </p>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-extrabold">{t("Corporate Index")}</h5>
            <ul className="space-y-2 font-sans text-xs">
              {[
                { path: "/", label: "Home Base" },
                { path: "/about", label: "About History" },
                { path: "/system", label: "PESA System Core" },
                { path: "/team", label: "Executive Biographies" },
                { path: "/offices", label: "Global Hubs" },
                { path: "/careers", label: "Careers & Internships" },
                { path: "/resources", label: "Insights & FAQs" }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                  >
                    {t(link.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Divisions Col */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-extrabold">{t("Advisory Desk")}</h5>
            <ul className="space-y-2 font-sans text-xs">
              {[
                { id: "strategy-consulting", title: "Strategy Consulting" },
                { id: "technology-consulting", title: "Technology Consulting" },
                { id: "digital-transformation", title: "Digital Transformation" },
                { id: "human-resources-consulting", title: "Human Resources Consulting" },
                { id: "project-management-consulting", title: "Project Management Office" },
                { id: "government-consulting", title: "Government & Public Sector" }
              ].map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate(`/services/${srv.id}`)}
                    className="text-slate-400 hover:text-white transition-colors text-xs cursor-pointer truncate max-w-xs block mx-auto md:mx-0"
                  >
                    {t(srv.title)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Global disclaimer on corporate operations */}
        <p className="text-slate-500 text-[10px] leading-relaxed max-w-4xl mx-auto text-center font-sans border-t border-slate-900 pt-8">
          {t("PESA Consulting Group LLC is an independent global consulting firm. Operational support, technical auditing, and strategic outsourcing solutions adhere to local legal, tax, and licensing frameworks in the Democratic Republic of Congo and the State of Texas. PESA maintains a strict zero-cash payment policy.")}
        </p>

        {/* Development attribution + copyright block + Language option */}
        <div className="pt-8 border-t border-slate-900 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>© {currentYear} PESA Consulting Group. All Rights Reserved.</span>
          </div>

          {/* Quick translator selector in Footer */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider">{t("Developed by")} <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline transition-colors font-bold">iWebNext</a></span>
            <span className="text-slate-800">|</span>
            <div className="flex items-center bg-slate-900 p-0.5 rounded border border-slate-800" id="footer-lang-selector">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'en' ? 'bg-slate-800 text-blue-400 shadow-sm' : 'text-slate-600 hover:text-slate-400'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'fr' ? 'bg-slate-800 text-blue-400 shadow-sm' : 'text-slate-600 hover:text-slate-400'}`}
              >
                FR
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
