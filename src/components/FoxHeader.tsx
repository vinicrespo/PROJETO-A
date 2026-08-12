import { Menu, Bell } from 'lucide-react';

export default function FoxHeader() {
  return (
    <header className="w-full bg-white h-[68px] flex items-center justify-between px-4 sticky top-0 z-40 border-t-[8px] border-[#fff5db]">
      {/* TODAY Logo */}
      <div className="flex items-center select-none">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Today_Show_Logo.svg" 
          alt="TODAY" 
          className="h-8 w-auto ml-2 mt-1" 
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-5 mr-1">
        {/* Bell Icon (Not clickable) */}
        <div className="text-[#333333]">
          <Bell className="w-7 h-7 fill-current stroke-current" />
        </div>

        {/* Hamburger Menu (Not clickable) */}
        <div className="text-[#333333]">
          <Menu className="w-8 h-8" strokeWidth={2.5} />
        </div>
      </div>
    </header>
  );
}
