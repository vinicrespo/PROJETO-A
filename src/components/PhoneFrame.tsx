import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Smartphone, Monitor, ChevronRight } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  const [time, setTime] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(98);

  useEffect(() => {
    // Dynamic clock matching local time
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      // format as HH:MM
      const timeStr = `${String(hours).padStart(2, '0')}:${minutes}`;
      setTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isFullscreen) {
    return (
      <div id="fullscreen-view" className="w-full min-h-screen bg-slate-50 flex flex-col relative transition-all duration-300">
        {/* Toggle back floating button */}
        <button
          id="btn-toggle-frame"
          onClick={() => setIsFullscreen(false)}
          className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl hover:bg-neutral-800 transition-all cursor-pointer text-sm font-medium border border-neutral-700/50"
        >
          <Smartphone className="w-4 h-4" />
          <span>Ver no Smartphone</span>
        </button>
        <div className="w-full flex-1 max-w-2xl mx-auto bg-white shadow-sm border-x border-slate-100">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div id="desktop-wrapper" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 font-sans overflow-x-hidden">
      {/* Intro & Instructions Panel - Elegant minimalist left card */}
      <div id="info-panel" className="max-w-md text-white md:mr-12 mb-8 md:mb-0 flex flex-col justify-center space-y-6 animate-fade-in">
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded">FOX NEWS</span>
          <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Mobile Clone</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Clone de Alta Fidelidade
        </h1>
        
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Esta aplicação recria meticulosamente a página de artigo móvel do portal <b>Fox News</b> em formato interativo e responsivo.
        </p>

        <div className="space-y-4 border-l-2 border-red-600/50 pl-4 py-1">
          <div className="text-sm">
            <span className="text-red-500 font-bold block mb-1">Totalmente Interativo</span>
            <span className="text-zinc-400 block text-xs">Navegue pelas abas "Recommended", mude de artigo clicando nos cards, adicione reações interativas e assista ao simulador de TV Ao Vivo!</span>
          </div>
          <div className="text-sm">
            <span className="text-red-500 font-bold block mb-1">Design Responsivo</span>
            <span className="text-zinc-400 block text-xs">Otimizado para smartphones, com barra de status dinâmica, notch, barra de navegação e home indicator simulado.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            id="btn-go-fullscreen"
            onClick={() => setIsFullscreen(true)}
            className="flex items-center justify-center gap-2 bg-white text-zinc-900 font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-zinc-100 transition-all cursor-pointer shadow-md"
          >
            <Monitor className="w-4 h-4" />
            <span>Ver Tela Cheia</span>
          </button>
          
          <a
            href="#mobile-viewport-anchor"
            className="md:hidden flex items-center justify-center gap-1 text-zinc-300 hover:text-white transition-all text-sm font-medium py-2.5"
          >
            <span>Ir para o celular abaixo</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Smartphone Device Frame Container */}
      <div 
        id="mobile-viewport-anchor" 
        className="relative scale-95 md:scale-100 transition-all duration-500"
      >
        {/* Outer Phone Case Shadow & Glow */}
        <div className="absolute -inset-1.5 bg-gradient-to-b from-white/10 to-transparent rounded-[52px] blur-xl opacity-30 pointer-events-none"></div>

        {/* Outer Shell Bezel */}
        <div className="relative w-[390px] h-[844px] bg-black rounded-[50px] p-[11px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-4 border-zinc-700/80 ring-1 ring-white/10 flex flex-col overflow-hidden">
          {/* Hardware elements: Side buttons indicators (simulated inside frame padding) */}
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-full z-50 flex items-center justify-between px-3.5 pointer-events-none">
            {/* Camera lens */}
            <div className="w-3.5 h-3.5 bg-zinc-900/90 rounded-full border border-zinc-800/40 relative">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-blue-900/60 rounded-full"></div>
            </div>
            {/* Speaker element */}
            <div className="w-11 h-1 bg-zinc-900/80 rounded-full"></div>
          </div>

          {/* SIMULATED STATUS BAR */}
          <div className="w-full h-11 bg-white text-zinc-900 flex items-center justify-between px-6 z-40 select-none font-medium text-xs">
            {/* Left: Time indicator */}
            <span className="text-zinc-900 tracking-tight font-semibold text-[13px]">{time}</span>
            
            {/* Right: Status Icons */}
            <div className="flex items-center gap-1.5">
              <Signal className="w-3.5 h-3.5 text-zinc-900 fill-current" strokeWidth={2.5} />
              <span className="text-[10px] font-bold">5G</span>
              <Wifi className="w-3.5 h-3.5 text-zinc-900" strokeWidth={2.5} />
              <div className="flex items-center gap-0.5">
                <Battery className="w-4 h-4 text-zinc-900" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* APP SCREEN CONTAINER */}
          <div className="flex-1 bg-white rounded-t-[5px] rounded-b-[34px] overflow-hidden flex flex-col relative select-text">
            <div className="w-full flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin">
              {children}
            </div>

            {/* Simulated iOS Home Indicator bar */}
            <div className="w-full h-7 bg-white flex items-center justify-center pointer-events-none z-40 shrink-0">
              <div className="w-32 h-1 bg-zinc-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
