import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Music, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Nib & Nosh Cafe, Rajajinagar" },
      {
        name: "description",
        content:
          "The story behind Nib & Nosh — a cafe built for slowing down, connecting, board games, great food and moments worth sharing.",
      },
      { property: "og:title", content: "Our Story | Nib & Nosh Cafe" },
      {
        property: "og:description",
        content: "A place where good food, board games and great conversations come together.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every dish is crafted with care, using fresh ingredients and family-inspired recipes that keep our guests coming back.",
  },
  {
    icon: Leaf,
    title: "100% Vegetarian",
    desc: "Our entire menu is vegetarian — because great food doesn't need anything else to be delicious and satisfying.",
  },
  {
    icon: Music,
    title: "Music & Community",
    desc: "We believe in the power of music to bring people together. Our jamming nights are open to artists of all skill levels.",
  },
  {
    icon: Users,
    title: "For Everyone",
    desc: "From solo visits and date nights to birthday parties and corporate gatherings — Nib & Nosh is for every occasion.",
  },
];

const storyParagraphs = [
  "Nib & Nosh was created with one simple idea—to build a place where people could slow down, connect, and enjoy life's little moments.",
  "We wanted more than just a café. We wanted a space where friends could catch up over coffee, families could spend quality time, colleagues could unwind, and everyone could enjoy great food, fun board games, and meaningful conversations.",
  "Every dish we serve and every corner of our café is designed to make you feel welcome, whether you're here for a quick bite, a long chat, a game night, or a peaceful work session.",
  "We believe that good food tastes even better when shared, that the best conversations happen around a table, and that the happiest memories are often the simplest ones.",
  "Today, Nib & Nosh is a place where birthdays are celebrated, friendships grow stronger, families spend quality time together, remote workers find inspiration, and every guest becomes part of our story.",
  "So come in, make yourself at home, and create moments worth sharing.",
];

function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/images/cafe-indoor.jpeg"
          alt="Nib & Nosh Cafe indoor seating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-900/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
              About Nib & Nosh
            </h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title mb-6">Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {storyParagraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/cafe-courtyard.jpeg"
                alt="Nib & Nosh courtyard"
                loading="lazy"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-lg border border-blue-50">
                <p className="font-serif text-2xl font-bold text-blue-700">2+</p>
                <p className="text-gray-500 text-sm">Years of Joy</p>
              </div>
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
            <img
              src="/images/cafe-indoor.jpeg"
              alt="Cafe indoor seating and foosball"
              loading="lazy"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="/images/cafe-courtyard.jpeg"
              alt="Outdoor courtyard"
              loading="lazy"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="/images/cafe-party.jpeg"
              alt="Party decor setup at Nib & Nosh"
              loading="lazy"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">Come Visit Us!</h2>
          <p className="text-blue-200 mb-6">
            No 59, 13, 19th Main Rd, 2nd Block, Rajajinagar, Bengaluru
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/location"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}