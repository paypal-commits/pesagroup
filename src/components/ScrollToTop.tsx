import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="scroll-to-top-btn"
      className="fixed bottom-24 right-6 z-40 p-3.5 rounded-full bg-[#0A2540] text-white border border-blue-500/20 shadow-xl hover:bg-[#123050] hover:scale-110 active:scale-95 transition-all duration-300"
      title="Scroll back to top of page"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
