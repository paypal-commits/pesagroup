import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotWidget from "./components/ChatbotWidget";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ExecutiveTeam from "./pages/ExecutiveTeam";
import HumanResources from "./pages/HumanResources";
import PesaSystemPage from "./pages/PesaSystemPage";
import OfficesPage from "./pages/OfficesPage";
import CareersPage from "./pages/CareersPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import ServiceDetailComponent from "./pages/ServiceDetail";
import SomptueuxRealty from "./pages/SomptueuxRealty";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  // Handle route navigation changes securely
  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Synchronize initial URL hash or load state if needed
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPath]);

  // Page dispatcher / router
  const renderPage = () => {
    if (currentPath === "/") {
      return <Home onNavigate={navigateTo} />;
    }
    if (currentPath === "/about") {
      return <AboutUs onNavigate={navigateTo} />;
    }
    if (currentPath === "/team") {
      return <ExecutiveTeam />;
    }
    if (currentPath === "/hr") {
      return <HumanResources />;
    }
    if (currentPath === "/system") {
      return <PesaSystemPage />;
    }
    if (currentPath === "/realty") {
      return <SomptueuxRealty />;
    }
    if (currentPath === "/offices") {
      return <OfficesPage />;
    }
    if (currentPath === "/careers") {
      return <CareersPage />;
    }
    if (currentPath === "/resources") {
      return <ResourcesPage />;
    }
    if (currentPath === "/contact") {
      return <ContactPage />;
    }

    // Dynamic services sub-routing
    if (currentPath.startsWith("/services/")) {
      const serviceId = currentPath.replace("/services/", "");
      return <ServiceDetailComponent serviceId={serviceId} onNavigate={navigateTo} />;
    }

    // Default fallback
    return <Home onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-[#0A2540]" id="pesa-app-root">
      
      {/* 1. Header Navigation Bar */}
      <Header currentPath={currentPath} onNavigate={navigateTo} />

      {/* 2. Dynamic Main Viewport Container */}
      <main className="flex-grow flex flex-col">
        {renderPage()}
      </main>

      {/* 3. Corporate Compliance Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Scroll to top utility button */}
      <ScrollToTop />

      {/* 5. Floating Executive AI Chatbot */}
      <ChatbotWidget />

    </div>
  );
}
