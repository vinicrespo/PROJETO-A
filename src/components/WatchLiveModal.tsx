import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Volume2, Maximize2, Send, Flame, Radio } from 'lucide-react';

interface WatchLiveModalProps {
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  time: string;
}

export default function WatchLiveModal({ onClose }: WatchLiveModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', user: 'Liberty_96', message: 'Assitindo ao vivo de Ohio!', time: '20:35' },
    { id: '2', user: 'TexanGuy', message: 'Ótima cobertura jornalística', time: '20:35' },
    { id: '3', user: 'Sara_M', message: 'Tyrus mandou muito bem ontem', time: '20:36' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate new chat messages popping up every few seconds
  useEffect(() => {
    const randomUsers = ['JohnState', 'MiamiDolf', 'Brenda_Lee', 'FreedomLover', 'Politico_W', 'NewsJunkie'];
    const randomComments = [
      'Alguém viu os relatórios de Michigan?',
      'Impressionante essa divulgação do Briefing.',
      'A estabilidade cibernética é chave para os estados.',
      'Sintonizado no Fox Business também!',
      'Gosto muito das análises da Kennedy.',
      'Espero que falem sobre a reforma tributária também.',
      'Transparência total é o único caminho.'
    ];

    const interval = setInterval(() => {
      const newUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
      const newComment = randomComments[Math.floor(Math.random() * randomComments.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      setMessages(prev => [
        ...prev,
        {
          id: String(Date.now()),
          user: newUser,
          message: newComment,
          time: timeStr
        }
      ].slice(-50)); // limit to last 50 messages
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    setMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        user: 'viniccrespo (Você)',
        message: inputValue.trim(),
        time: timeStr
      }
    ]);
    setInputValue('');
  };

  return (
    <div className="absolute inset-0 z-50 bg-black flex flex-col animate-fade-in select-text">
      {/* Video Stream Header */}
      <div className="h-12 bg-zinc-950 flex items-center justify-between px-4 text-white">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-[11px] font-black uppercase tracking-widest text-red-500 flex items-center gap-1">
            <Radio className="w-3.5 h-3.5" />
            LIVE BROADCAST
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Simulated Video Player */}
      <div className="relative aspect-[16/9] bg-zinc-900 overflow-hidden group flex items-center justify-center border-y border-zinc-800">
        {/* Mock Broadcast Stream background */}
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
          alt="Live TV"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-65"
        />

        {/* Video Player Graphics & Ticker */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-[2px] px-2 py-0.5 rounded text-[10px] font-bold text-white flex items-center gap-1.5 select-none">
          <Flame className="w-3.5 h-3.5 text-orange-500 fill-current" />
          <span>720p HD</span>
          <span className="text-zinc-400">|</span>
          <span className="text-red-500">Ao Vivo</span>
        </div>

        {/* Big Play Overlay in Center */}
        {!isPlaying && (
          <button 
            onClick={() => setIsPlaying(true)}
            className="absolute bg-red-600/90 text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </button>
        )}

        {/* Lower Third Ticker exactly representing cable news */}
        <div className="absolute bottom-10 left-0 right-0 bg-[#003366] text-white py-1 px-3 border-l-4 border-red-600 select-none">
          <p className="text-[11px] font-black tracking-wide uppercase text-red-400">BREAKING NEWS</p>
          <p className="text-[12px] font-bold truncate">FORMER PRESIDENT TRUMP RELEASES DECLASSIFIED SECURITY BRIEFS</p>
        </div>

        {/* Video Controls bar at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent flex items-center justify-between px-3 text-white select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-white hover:text-red-500 transition-colors cursor-pointer"
            >
              <span className="text-xs font-bold">{isPlaying ? 'PAUSAR' : 'REPRODUZIR'}</span>
            </button>
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="text-white hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <Volume2 className={`w-4 h-4 ${isMuted ? 'text-zinc-500 line-through' : ''}`} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] bg-red-600 px-1 py-0.2 rounded font-black uppercase">LIVE</span>
            <Maximize2 className="w-4 h-4 cursor-pointer text-zinc-300 hover:text-white" />
          </div>
        </div>
      </div>

      {/* Live Chat Panel below player */}
      <div className="flex-1 bg-zinc-950 flex flex-col min-h-0">
        <div className="bg-zinc-900 py-2 px-4 border-b border-zinc-800 flex justify-between items-center text-xs">
          <span className="text-zinc-300 font-bold tracking-tight uppercase">Live Audience Chat</span>
          <span className="text-zinc-400 text-[10px]">23,491 espectadores</span>
        </div>

        {/* Messages Feed scrolling */}
        <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-2.5">
          {messages.map((msg) => (
            <div key={msg.id} className="text-xs leading-relaxed animate-fade-in">
              <span className="text-zinc-400 text-[9px] mr-1.5">{msg.time}</span>
              <span className={`font-black mr-1.5 ${
                msg.user.includes('Você') 
                  ? 'text-red-400' 
                  : msg.user.includes('Liberty') || msg.user.includes('Texan') 
                    ? 'text-blue-400' 
                    : 'text-zinc-300'
              }`}>
                {msg.user}:
              </span>
              <span className="text-zinc-100 font-medium">{msg.message}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Send message form */}
        <form 
          onSubmit={handleSendMessage}
          className="p-3 bg-zinc-900 border-t border-zinc-800 flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite algo no chat..."
            className="flex-1 bg-zinc-800 text-white rounded-lg px-3 py-2 text-xs border border-zinc-700 focus:outline-none focus:border-red-600 transition-colors"
          />
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 active:scale-95 transition-all cursor-pointer flex items-center justify-center shrink-0"
            aria-label="Send message"
          >
            <Send className="w-3.5 h-3.5 fill-current" />
          </button>
        </form>
      </div>
    </div>
  );
}
