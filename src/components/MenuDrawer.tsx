import { X, Search, Globe, ChevronRight, User, Settings, Info, Bell } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

export default function MenuDrawer({ isOpen, onClose, onSelectCategory }: MenuDrawerProps) {
  if (!isOpen) return null;

  const categories = [
    { name: 'DONALD TRUMP', label: 'Donald Trump Coverage', count: '14 articles' },
    { name: 'POLITICS', label: 'U.S. Politics', count: '38 articles' },
    { name: 'OPINION', label: 'Opinion & Editorials', count: '9 articles' },
    { name: 'NATIONAL SECURITY', label: 'National Security', count: '12 articles' },
    { name: 'WORLD', label: 'World News', count: '24 articles' },
    { name: 'BUSINESS', label: 'Fox Business', count: '19 articles' },
    { name: 'TECH', label: 'Science & Technology', count: '15 articles' },
  ];

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-[2px] flex justify-end select-text animate-fade-in">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-out Menu Panel */}
      <div className="relative w-[280px] h-full bg-[#001D42] text-white flex flex-col shadow-2xl animate-slide-left z-10 border-l border-white/5">
        {/* Header block with close */}
        <div className="h-14 border-b border-white/10 px-4 flex items-center justify-between bg-[#00142F] shrink-0">
          <span className="font-serif font-black text-xs tracking-widest text-red-500 uppercase">FOX SECTIONS</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories list */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
          {/* Mock Search inside menu */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search news, videos..."
              className="w-full bg-[#002B5C] border border-white/10 text-white rounded-md pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-red-600 transition-colors"
            />
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* User Email Badge */}
          <div className="bg-[#002D62] border border-white/5 rounded-lg p-3 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 border border-red-500/20 flex items-center justify-center">
              <User className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-zinc-300">viniccrespo@gmail.com</p>
              <p className="text-[9px] text-zinc-400 font-semibold tracking-wide">ASSINANTE PREMIUM</p>
            </div>
          </div>

          {/* Category Sections */}
          <div className="space-y-1">
            <h4 className="text-[10px] text-slate-400 font-black tracking-widest uppercase mb-2">Editorias</h4>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  onSelectCategory(cat.name);
                  onClose();
                }}
                className="w-full flex items-center justify-between text-left py-2.5 px-2 rounded hover:bg-[#002D62] active:bg-[#00234D] transition-colors group cursor-pointer text-xs"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-bold text-zinc-100">{cat.label}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-slate-400 font-medium">{cat.count}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </button>
            ))}
          </div>

          {/* Settings Mock List */}
          <div className="space-y-1 pt-3 border-t border-white/10">
            <h4 className="text-[10px] text-slate-400 font-black tracking-widest uppercase mb-2">Opções</h4>
            <div className="flex items-center justify-between py-2.5 px-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Bell className="w-3.5 h-3.5 text-slate-400" />
                <span>Notificações Urgentes</span>
              </div>
              <div className="w-8 h-4.5 bg-red-600 rounded-full p-0.5 cursor-pointer relative transition-colors">
                <div className="w-3.5 h-3.5 bg-white rounded-full ml-3.5 shadow"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2.5 px-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Settings className="w-3.5 h-3.5 text-slate-400" />
                <span>Visualização Compacta</span>
              </div>
              <div className="w-8 h-4.5 bg-slate-600 rounded-full p-0.5 cursor-pointer relative transition-colors">
                <div className="w-3.5 h-3.5 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="h-12 border-t border-white/10 px-4 flex items-center gap-2 bg-[#00142F] shrink-0 text-[10px] text-slate-400 select-none">
          <Info className="w-3.5 h-3.5" />
          <span>Sessão segura criptografada</span>
        </div>
      </div>
    </div>
  );
}
