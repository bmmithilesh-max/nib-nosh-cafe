import { ArrowRight, Star, Music, Calendar, Utensils, Coffee, Gamepad2, ChevronRight } from 'lucide-react';
import type { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const highlights = [
  {
    icon: Utensils,
    title: 'Fresh & Flavorful',
    desc: 'Wraps, burgers, pasta, and waffles made with love and the freshest ingredients.',
  },
  {
    icon: Gamepad2,
    title: 'Board Games',
    desc: 'Grab a table and dive into our collection of board games with friends and family.',
  },
  {
    icon: Music,
    title: 'Live Jamming Nights',
    desc: 'Join our vibrant jamming sessions – whether you play or just want to soak in the music.',
  },
  {
    icon: Calendar,
    title: 'Private Parties',
    desc: 'Host your celebration in our charming semi-outdoor space with personalised service.',
  },
];

const galleryImages = [
  { src: '/images/unnamed_(4).webp', alt: 'Nib & Nosh cafe interior with blue chairs' },
  { src: '/images/unnamed_(5).webp', alt: 'Creamy pasta served at Nib & Nosh' },
  { src: '/images/unnamed_(2).webp', alt: 'Cafe courtyard with the signature tree' },
];

const reviews = [
  { name: 'Priya R.', rating: 5, text: 'The waffles are absolutely divine and the ambiance is so cozy. Perfect spot for a relaxed evening with friends!' },
  { name: 'Arjun M.', rating: 5, text: 'Came for the jamming night and fell in love with the food. The Sinful Chocolate sundae is a must-try!' },
  { name: 'Sneha K.', rating: 5, text: 'Great place for a party booking. The team was super responsive and the outdoor garden setting is gorgeous.' },
];

export default function Home({ onNavigate }: HomeProps) {
  const navigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/unnamed_(2).webp"
            alt="Nib & Nosh Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/60 to-blue-800/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
          <div className="max-w-xl">
            <span className="inline-block bg-amber-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Rajajinagar, Bengaluru
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
              Nib &<br />Nosh Cafe
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
              Your neighbourhood haven for great food, cool drinks, and soulful music. Eat. Drink. Play.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('menu')}
                className="btn-primary flex items-center gap-2"
              >
                View Menu
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('location')}
                className="btn-outline border-white text-white hover:bg-white hover:text-blue-800 flex items-center gap-2"
              >
                Find Us
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:block">
          <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-blue-900 text-sm">Open Daily</p>
              <p className="text-gray-500 text-xs">12 PM – 10 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Why You'll Love Us</p>
            <h2 className="section-title">Everything You Need,<br />All in One Place</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-blue-50"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/5">
              <p className="section-subtitle">The Vibe</p>
              <h2 className="section-title mb-4">A Space Like No Other</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Nestled beneath a beautiful open-sky glass roof with a majestic tree at the centre, Nib & Nosh blends the freshness of the outdoors with the comfort of a cozy cafe. Blue chairs, warm lights, and good company make every visit memorable.
              </p>
              <button
                onClick={() => navigate('about')}
                className="btn-outline flex items-center gap-2 w-fit"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-3/5 grid grid-cols-2 gap-3">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="rounded-2xl object-cover w-full h-56 col-span-2"
              />
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="rounded-2xl object-cover w-full h-44"
              />
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="rounded-2xl object-cover w-full h-44"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Banner */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Our Offerings</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                Wraps, Burgers, Waffles,<br />Ice-Cream & More
              </h2>
              <p className="text-blue-200">
                Add a Mojito with your Burger/Wrap for just ₹89 · Hot Coffee with Waffle for ₹49
              </p>
            </div>
            <button
              onClick={() => navigate('menu')}
              className="shrink-0 bg-white text-blue-700 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              Explore Full Menu
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Guest Love</p>
            <h2 className="section-title">What People Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-semibold text-blue-800 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Join the Fun</p>
          <h2 className="section-title mb-4">Ready to Visit Nib & Nosh?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Whether it's a quiet date, a birthday party, or a live music night – we have something special for every occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => navigate('menu')} className="btn-primary">
              View Menu
            </button>
            <button onClick={() => navigate('location')} className="btn-outline">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
