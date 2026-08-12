import { Menu, Bell } from 'lucide-react';

export default function FoxHeader() {
  return (
    <header className="w-full bg-white h-[68px] flex items-center justify-between px-4 sticky top-0 z-40 border-t-[8px] border-[#fff5db]">
      {/* TODAY Logo */}
      <div className="flex items-center select-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40" className="h-7 w-auto ml-2 mt-1">
          <path d="M 2 32 A 15 15 0 0 1 32 32" fill="none" stroke="#FF5A36" strokeWidth="4.5" />
          <path d="M 9 32 A 8 8 0 0 1 25 32" fill="none" stroke="#FF5A36" strokeWidth="4.5" />
          <path d="M 14 32 A 3 3 0 0 1 20 32 Z" fill="#FF5A36" />
          <text x="37" y="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" fill="#111" letterSpacing="-1.5">TODAY</text>
        </svg>
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
