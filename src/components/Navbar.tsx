import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CafeLogo from './CafeLogo';

const navLinks: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Location', to: '/location' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => setScrolled(window.scrollY > 20);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group">
            <CafeLogo size={44} className="shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform duration-200" />
            <div className="leading-none hidden sm:block">
              <span className="font-serif text-lg font-bold text-blue-800 block">Nib & Nosh</span>
              <span className="text-[10px] text-blue-500 tracking-widest uppercase font-medium">Eat. Drink. Play.</span>
            </div>
            <span className="hidden xl:block ml-4 pl-4 border-l border-blue-100 text-xs font-medium text-blue-400 tracking-wide">
              Good Food, Good Vibes, Great Time
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden p-2 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-blue-50 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
