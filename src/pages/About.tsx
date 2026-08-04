import { Heart, Leaf, Music, Users } from 'lucide-react';
import { usePageMeta } from '../lib/seo';
import type { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const values = [
  { icon: Heart, title: 'Made with Love', desc: 'Every dish is crafted with care, using fresh ingredients and family-inspired recipes that keep our guests coming back.' },
  { icon: Leaf, title: '100% Vegetarian', desc: 'Our entire menu is vegetarian — because great food doesn\'t need anything else to be delicious and satisfying.' },
  { icon: Music, title: 'Music & Community', desc: 'We believe in the power of music to bring people together. Our jamming nights are open to artists of all skill levels.' },
  { icon: Users, title: 'For Everyone', desc: 'From solo visits and date nights to birthday parties and corporate gatherings — Nib & Nosh is for every occasion.' },
];

export default function About({ onNavigate }: AboutProps) {
  usePageMeta(
    'Our Story | Nib & Nosh Cafe',
    'Discover the story behind Nib & Nosh Cafe in Rajajinagar, Bengaluru — a cozy 100% vegetarian cafe built for friends, families and good times.'
  );

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/WhatsApp%20Image%202026-07-29%20at%201.12.50%20PM.jpeg"
          alt="Nib & Nosh Cafe interior"
          width={1920}
          height={768}
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">About Nib & Nosh</h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Story</p>
              <h2 className="section-title mb-6">A Cafe Born from Passion</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nib & Nosh was created with one simple idea—to build a place where people could slow down, connect, and enjoy life's little moments.
                </p>
                <p>
                  We wanted more than just a café. We wanted a space where friends could catch up over coffee, families could spend quality time, colleagues could unwind, and everyone could enjoy great food, fun board games, and meaningful conversations.
                </p>
                <p>
                  Every dish we serve and every corner of our café is designed to make you feel welcome, whether you're here for a quick bite, a long chat, a game night, or a peaceful work session.
                </p>
                <p>
                  We believe that good food tastes even better when shared, that the best conversations happen around a table, and that the happiest memories are often the simplest ones.
                </p>
                <p>
                  Today, Nib & Nosh is a place where birthdays are celebrated, friendships grow stronger, families spend quality time together, remote workers find inspiration, and every guest becomes part of our story. So come in, make yourself at home, and create moments worth sharing.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/WhatsApp%20Image%202026-07-29%20at%2012.16.46%20PM.jpeg"
                alt="Nib & Nosh courtyard"
                width={800}
                height={640}
                loading="lazy"
                decoding="async"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
              <div className="absolute -top-5 -right-5 bg-blue-600 rounded-2xl p-4 shadow-lg">
                <p className="font-serif text-2xl font-bold text-white">100%</p>
                <p className="text-blue-200 text-sm">Vegetarian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subtitle">The Space</p>
            <h2 className="section-title">A Glimpse of Nib & Nosh</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/WhatsApp%20Image%202026-07-31%20at%201.03.29%20PM%20(1).jpeg" alt="Cafe interior evening" width={800} height={512} loading="lazy" decoding="async" className="rounded-2xl w-full h-64 object-cover" />
            <img src="/images/WhatsApp%20Image%202026-07-31%20at%201.03.29%20PM.jpeg" alt="Outdoor courtyard" width={800} height={512} loading="lazy" decoding="async" className="rounded-2xl w-full h-64 object-cover" />
            <img src="/images/WhatsApp%20Image%202026-07-29%20at%2012.16.46%20PM.jpeg" alt="Food at Nib & Nosh" width={800} height={512} loading="lazy" decoding="async" className="rounded-2xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Come Visit Us!</h2>
          <p className="text-blue-200 mb-6">No 59, 13, 19th Main Rd, 2nd Block, Rajajinagar, Bengaluru</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { onNavigate('location'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
