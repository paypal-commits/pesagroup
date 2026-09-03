import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, HelpCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ChatMessage } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Welcome to PESA Consulting Group's digital headquarters. I am your Executive Ambassador, trained on PESA's verified services and global operations under CEO Camy Likobe. \n\nHow may I assist you with Strategy Consulting, Luxury Real Estate listings, Land development, Private Jet sales, US Visa services, or Mining inquiries today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Synchronize first welcome message when language changes
  useEffect(() => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === "welcome"
          ? { ...msg, content: t("Welcome to PESA Consulting Group's digital headquarters. I am your Executive Ambassador, trained on PESA's verified services and global operations under CEO Camy Likobe. \n\nHow may I assist you with Strategy Consulting, Luxury Real Estate listings, Land development, Private Jet sales, US Visa services, or Mining inquiries today?") }
          : msg
      )
    );
  }, [language]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsgText = inputValue;
    setInputValue("");

    // Add user message to state
    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      content: userMsgText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Package conversation history (excluding first welcome msg)
      const formattedHistory = messages
        .filter(m => m.id !== "welcome")
        .map(m => ({
          role: m.role,
          content: m.content
        }));

      // Post to our secure Express backend
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: userMsgText,
          history: formattedHistory
        })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with PESA servers.");
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: Math.random().toString(),
        role: "assistant",
        content: data.text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error("Chat error:", err);
      const errorMessage: ChatMessage = {
        id: Math.random().toString(),
        role: "assistant",
        content: "I apologize, but our international communications lines are currently occupied. Please get in touch directly by emailing info@pesagroup.org, or calling our US Office at +1 (682) 424-5857.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const selectSuggestedPrompt = (promptText: string) => {
    setInputValue(promptText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="pesa-chatbot-widget">
      {/* 1. Chat Window */}
      {isOpen && (
        <div 
          className="w-[340px] sm:w-[380px] h-[450px] max-h-[calc(100vh-180px)] rounded-2xl shadow-2xl border border-slate-200 bg-white flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-6 duration-300"
          id="chat-window-container"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-[#0A2540] p-4 text-white flex items-center justify-between border-b border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-sans font-extrabold text-sm shadow shadow-blue-500/30">
                P
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold tracking-wide text-blue-300">{t("PESA Ambassador")}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">{t("Secure AI Portal")}</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              id="close-chat-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Secure disclaimer */}
          <div className="bg-slate-50 border-b border-slate-100 px-3 py-1.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t("End-to-End Encrypted Secure Server Link")}</span>
          </div>

          {/* Message History */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 no-scrollbar">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col max-w-[85%] ${msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"}`}
              >
                <div 
                  className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none font-medium shadow-md shadow-blue-500/10 font-sans" 
                      : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm font-sans"
                  }`}
                >
                  {msg.content}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 font-mono">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[120px] shadow-sm">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-150"></span>
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-300"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts panel (Quick assists) */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex flex-col gap-1.5">
              <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{t("Suggested Inquiries:")}</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Who is CEO Camy Likobe?",
                  "Tell me about EB-5 Consulting",
                  "What real estate listings are for sale?"
                ].map((promptText, i) => (
                  <button
                    key={i}
                    onClick={() => selectSuggestedPrompt(promptText)}
                    className="text-[11px] text-slate-600 bg-white border border-slate-200 hover:border-blue-400 px-2.5 py-1 rounded-full text-left transition-colors flex items-center gap-1 font-sans"
                  >
                    <span>{t(promptText)}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* User Input Form */}
          <form 
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t("Ask about PESA services, team...")}
              className="flex-1 bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-sans"
              id="chatbot-input-field"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`p-2 rounded-full transition-all ${
                inputValue.trim() && !isLoading
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
              id="chatbot-send-btn"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Floating Launcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0A2540] to-slate-950 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500/20 active:scale-95 transition-all duration-300 group"
        title="Connect with PESA Executive AI"
        id="chatbot-launcher-btn"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border border-slate-900 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border border-slate-900"></span>
          </div>
        )}
      </button>
    </div>
  );
}
