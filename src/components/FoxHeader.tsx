import { Menu } from 'lucide-react';

export default function FoxHeader() {
  return (
    <header className="w-full bg-[#003366] text-white h-14 flex items-center justify-between px-4 sticky top-0 z-40 shadow-md">
      {/* FOX NEWS Logo (Exact high-fidelity SVG Wordmark) */}
      <div className="flex items-center select-none">
        <svg 
          viewBox="0 0 210 38" 
          className="h-8 w-auto" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Iconic Fox News sharp slanted star chevron emblem */}
          <g transform="translate(4, 2)" fill="white">
            {/* Big slanted main block */}
            <polygon points="12,28 20,2 27,2 17,28" />
            {/* Small slanted right block */}
            <polygon points="26,28 31,15 35,15 29,28" />
            {/* Superimposed Star */}
            <polygon points="6,15 15,15 18,6 21,15 30,15 22,20 25,29 18,24 11,29 14,20" />
          </g>
          

        </svg>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">
        {/* Watch TV Button */}
        <div
          id="btn-watch-tv"
          className="bg-[#CC0000] text-white text-[11px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm select-none border border-[#CC0000]"
        >
          Watch TV
        </div>

        {/* Hamburger Menu Trigger */}
        <div
          id="btn-menu-trigger"
          className="p-1.5 rounded-md text-white"
          aria-label="Toggle menu"
        >
          <Menu className="w-5.5 h-5.5" strokeWidth={2.2} />
        </div>
      </div>
    </header>
  );
}
