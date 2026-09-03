import { useState } from "react";
import { Menu, X, Shield, Globe, ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/images/logo.jpg";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/system", label: "PESA System" },
    { path: "/team", label: "Executive Team" },
    { path: "/realty", label: "Somptueux Realty" },
    { path: "/offices", label: "Offices" },
    { path: "/careers", label: "Careers" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Signature */}
          <div 
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="brand-logo-trigger"
          >
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm transition-colors group-hover:border-blue-300">
              <img 
                src={logoImg} 
                alt="PESA Consulting Group Logo" 
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase">
                {t("PESA Consulting")}
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase -mt-1 font-semibold">
                {t("Group & Global Capital")}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
              return (
                <button
                   key={item.path}
                   onClick={() => handleNavClick(item.path)}
                   id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                   className={`text-[10px] uppercase font-mono tracking-widest transition-all duration-300 cursor-pointer ${
                     isActive 
                       ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                       : "text-slate-600 hover:text-slate-900 font-medium hover:border-b-2 hover:border-slate-300 pb-1"
                   }`}
                >
                  {t(item.label)}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Global indicator */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language Translator pill selector */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded border border-slate-200" id="desktop-lang-selector">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'fr' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-950'}`}
              >
                FR
              </button>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-[9px] font-mono font-medium text-slate-600">
              <Globe className="w-3.5 h-3.5 text-blue-500 animate-spin-slow" />
              <span>{t("Dallas // Kinshasa Hubs")}</span>
            </div>
            
            <button
              onClick={() => handleNavClick("/contact")}
              id="header-cta-btn"
              className="px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow"
            >
              <span>{t("Connect Desk")}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Translator */}
          <div className="xl:hidden flex items-center gap-3">
            {/* Language Translator pill selector for mobile */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded border border-slate-200 mr-1" id="mobile-top-lang-selector">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'fr' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 p-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300" id="mobile-navigation-drawer">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-left px-4 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {t(item.label)}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-mono font-medium">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>{t("Dallas // Kinshasa Hubs")}</span>
              </div>
              
              <div className="flex items-center bg-slate-100 p-0.5 rounded border border-slate-200" id="mobile-drawer-lang-selector">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded transition-all cursor-pointer ${language === 'fr' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'}`}
                >
                  FR
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick("/contact")}
              id="mobile-header-cta-btn"
              className="w-full text-center py-3 text-xs uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-colors cursor-pointer"
            >
              {t("Inquire Securely")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
