import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import CafeLogo from './CafeLogo';
import type { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const nav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CafeLogo size={52} className="shrink-0" />
              <div>
                <span className="font-serif text-xl font-bold block">Nib & Nosh</span>
                <span className="text-xs text-blue-300 tracking-widest uppercase">Eat. Drink. Play.</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A cozy semi-outdoor cafe in the heart of Rajajinagar, where every visit is a delightful experience.
            </p>
            <a
              href="https://instagram.com/nib_and_nosh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-300 hover:text-white transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @nib_and_nosh
            </a>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <nav aria-label="Footer quick links">
              <ul className="space-y-2">
              {(['menu', 'about', 'location'] as Page[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => nav(page)}
                    className="text-blue-200 hover:text-white transition-colors text-sm capitalize"
                  >
                    {page.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-blue-200 text-sm">
                  No 59, 13, 19th Main Rd,<br />
                  2nd Block, Rajajinagar,<br />
                  Bengaluru, Karnataka 560010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919986088681" className="text-blue-200 hover:text-white transition-colors text-sm">
                  +91 99860 88681
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-blue-200">Mon – Fri</p>
                  <p className="text-white font-medium">12:00 PM – 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-blue-200">Sat – Sun</p>
                  <p className="text-white font-medium">12:00 PM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-center text-blue-400 text-xs">
            &copy; {new Date().getFullYear()} Nib & Nosh Cafe. All rights reserved.
          </p>
          <span className="hidden sm:block text-blue-700 text-xs">|</span>
          <p className="text-center text-blue-400 text-xs">
            Built by <span className="text-white font-semibold">Artinu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
