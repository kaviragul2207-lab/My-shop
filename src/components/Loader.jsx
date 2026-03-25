import React from "react";

const Loader = ({ fullScreen = false }) => {
  return (
    <div className={`flex items-center justify-center ${fullScreen ? "fixed inset-0 bg-white/80 backdrop-blur-md z-50" : "min-h-[300px] w-full py-16"}`}>
      <div className="relative flex flex-col items-center">
        {/* Outer Glow Circle */}
        <div className="absolute -inset-4 bg-green-200/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* Multi-layered Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-green-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-slate-50 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-reverse delay-150"></div>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-600 to-emerald-500 animate-pulse">
            Fetching Freshness
          </span>
          <div className="mt-2 flex gap-1">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
             <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
             <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

