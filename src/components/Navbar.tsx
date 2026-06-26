import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CafeLogo from './CafeLogo';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Menu', page: 'menu' },
  { label: 'About', page: 'about' },
  { label: 'Location', page: 'location' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => setScrolled(window.scrollY > 20);
  }

  const handleNav = (page: Page) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 group">
            <CafeLogo size={44} className="shrink-0 drop-shadow-sm group-hover:scale-105 transition-transform duration-200" />
            <div className="leading-none hidden sm:block">
              <span className="font-serif text-lg font-bold text-blue-800 block">Nib & Nosh</span>
              <span className="text-[10px] text-blue-500 tracking-widest uppercase font-medium">Eat. Drink. Play.</span>
            </div>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => handleNav(page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden p-2 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-blue-50 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => handleNav(page)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
