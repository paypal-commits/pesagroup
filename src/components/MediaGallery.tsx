import { useState, useMemo } from "react";
import { propertiesData, landListingsData } from "../data";
import { Home, Trees, Filter, MapPin, BedDouble, Bath, Maximize, FileText, Check, ArrowRight } from "lucide-react";

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState<"all" | "properties" | "land">("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(15000000); // Default to maximum possible price
  const [inquireAssetId, setInquireAssetId] = useState<string | null>(null);

  // Locations list derived from data
  const locations = useMemo(() => {
    const pLocs = propertiesData.map(p => {
      if (p.address.includes("Fairview")) return "Fairview";
      if (p.address.includes("Prosper")) return "Prosper";
      if (p.address.includes("Celina")) return "Celina";
      if (p.address.includes("Frisco")) return "Frisco";
      if (p.address.includes("Plano")) return "Plano";
      return "Texas";
    });
    const lLocs = landListingsData.map(l => {
      if (l.location.includes("Frisco")) return "Frisco";
      return "Texas";
    });
    return Array.from(new Set(["all", ...pLocs, ...lLocs]));
  }, []);

  // Parse price string to number for numeric filters
  const parsePrice = (priceStr: string) => {
    return Number(priceStr.replace(/[^0-9]/g, ""));
  };

  // Filter products
  const filteredAssets = useMemo(() => {
    const list: any[] = [];
    
    // Add properties
    if (activeTab === "all" || activeTab === "properties") {
      propertiesData.forEach(p => {
        const numPrice = parsePrice(p.price);
        const matchesLoc = selectedLocation === "all" || p.address.includes(selectedLocation);
        const matchesPrice = numPrice <= maxPrice;
        if (matchesLoc && matchesPrice) {
          list.push({ ...p, type: "property" });
        }
      });
    }

    // Add land
    if (activeTab === "all" || activeTab === "land") {
      landListingsData.forEach(l => {
        const numPrice = parsePrice(l.price);
        const matchesLoc = selectedLocation === "all" || l.location.includes(selectedLocation);
        const matchesPrice = numPrice <= maxPrice;
        if (matchesLoc && matchesPrice) {
          list.push({ ...l, type: "land" });
        }
      });
    }

    return list;
  }, [activeTab, selectedLocation, maxPrice]);

  const handleInquire = (id: string) => {
    setInquireAssetId(id);
    setTimeout(() => {
      setInquireAssetId(null);
      // Smoothly scroll down to contact section
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 2000);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="assets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
              Premium Portfolio
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              Acreage & Residential Assets
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mt-3 mb-4 md:mb-0"></div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md font-sans">
            Under President Camy Likobe, Pesa Group acquires and brokers multi-million dollar residential estates and development land parcels in high-growth North Texas sectors.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6" id="portfolio-filters-toolbar">
          
          {/* Left Side: Category Tabs */}
          <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-lg self-start">
            <button
              onClick={() => setActiveTab("all")}
              id="tab-assets-all"
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono rounded transition-all ${
                activeTab === "all"
                  ? "bg-[#0A2540] text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setActiveTab("properties")}
              id="tab-assets-properties"
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono rounded transition-all flex items-center gap-1.5 ${
                activeTab === "properties"
                  ? "bg-[#0A2540] text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Estates</span>
            </button>
            <button
              onClick={() => setActiveTab("land")}
              id="tab-assets-land"
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono rounded transition-all flex items-center gap-1.5 ${
                activeTab === "land"
                  ? "bg-[#0A2540] text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Trees className="w-3.5 h-3.5" />
              <span>Acreage</span>
            </button>
          </div>

          {/* Right Side: Specific Filter Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 max-w-2xl justify-end">
            
            {/* Location dropdown */}
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500" />
                <span>Sector Location</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                id="select-filter-location"
                className="bg-slate-50 border border-slate-200 text-xs text-slate-700 px-3 py-2 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "all" ? "All Sectors (North Texas)" : `${loc}, TX`}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Cap range slider */}
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex justify-between text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold">
                <span className="flex items-center gap-1">
                  <Filter className="w-3 h-3 text-blue-500" />
                  <span>Max Price Limit</span>
                </span>
                <span className="text-blue-600 font-bold">
                  ${(maxPrice / 1000000).toFixed(2)}M
                </span>
              </div>
              <input
                type="range"
                min={1500000}
                max={15000000}
                step={500000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                id="range-filter-price"
                className="accent-blue-600 w-full cursor-ew-resize mt-1"
              />
            </div>

          </div>

        </div>

        {/* Assets Grid */}
        {filteredAssets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="assets-listings-grid">
            {filteredAssets.map((asset) => {
              const isProperty = asset.type === "property";

              return (
                <div 
                  key={asset.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:scale-[1.01] transition-all duration-300 flex flex-col group"
                >
                  {/* Image wrapper */}
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img 
                      src={asset.image} 
                      alt={asset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.92]"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-mono font-bold bg-[#0A2540] text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
                      {isProperty ? "Luxury Home" : "Development Land"}
                    </span>

                    {/* Price tag */}
                    <div className="absolute bottom-4 right-4 bg-white/95 px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-900 font-sans font-extrabold text-sm shadow">
                      {asset.price}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {asset.title}
                    </h3>
                    
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">{isProperty ? asset.address : asset.location}</span>
                    </p>

                    {/* Specifications Row */}
                    {isProperty ? (
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-slate-600 text-xs font-mono mb-4">
                        <div className="flex items-center gap-1 justify-center">
                          <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                          <span>{asset.beds} Beds</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center border-x border-slate-100">
                          <Bath className="w-3.5 h-3.5 text-slate-400" />
                          <span>{asset.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                          <Maximize className="w-3.5 h-3.5 text-slate-400" />
                          <span>{asset.sqft} SF</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 py-3 border-y border-slate-100 text-slate-600 text-xs font-mono mb-4 justify-center">
                        <Maximize className="w-3.5 h-3.5 text-slate-400" />
                        <span>Sizing Range: <strong className="text-slate-800">{asset.acres}</strong></span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-6 font-sans">
                      {isProperty 
                        ? `A signature mastercrafted estate built with premium layout spacing, high-end thermal insulation, custom cabinetry, and magnificent luxury accents.` 
                        : asset.description
                      }
                    </p>

                    {/* Inquiry action */}
                    <div className="mt-auto pt-4">
                      <button
                        onClick={() => handleInquire(asset.id)}
                        id={`btn-inquire-${asset.id}`}
                        className={`w-full py-2.5 text-xs font-mono uppercase tracking-widest rounded font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                          inquireAssetId === asset.id
                            ? "bg-emerald-600 text-white"
                            : "bg-slate-50 hover:bg-[#0A2540] hover:text-white text-slate-700 border border-slate-200"
                        }`}
                      >
                        {inquireAssetId === asset.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Inquiry Registered!</span>
                          </>
                        ) : (
                          <>
                            <span>Request Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm" id="empty-listings-panel">
            <p className="text-slate-500 font-mono text-xs uppercase tracking-wider font-bold">No matching assets found</p>
            <p className="text-slate-400 text-xs mt-1.5 font-sans">Try widening your price range or switching the category tab.</p>
          </div>
        )}

      </div>
    </section>
  );
}
