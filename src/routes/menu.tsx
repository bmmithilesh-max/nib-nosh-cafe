import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Nib & Nosh Cafe — Wraps, Waffles, Coffees & More" },
      {
        name: "description",
        content:
          "Explore the Nib & Nosh menu: wraps, burgers, pasta, waffles, sundaes, mojitos, iced teas, milkshakes and hot coffees. 100% vegetarian.",
      },
      { property: "og:title", content: "Menu | Nib & Nosh Cafe" },
      {
        property: "og:description",
        content: "Wraps, burgers, waffles, sundaes, mojitos, shakes and coffees — all vegetarian.",
      },
    ],
  }),
  component: MenuPage,
});

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuSection {
  id: string;
  group: "food" | "drinks";
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    id: "wraps",
    group: "food",
    title: "Wraps",
    subtitle:
      "Fresh lettuce, onion, tomatoes, veg patty, creamy mayo sauce, wrapped in soft tortilla",
    note: "Add any Mojito @89 with Burger/Wrap",
    items: [
      { name: "Veggie Fiesta", price: 109 },
      { name: "Crisp Aloo Wrap", price: 109 },
      { name: "Veg + Paneer Wrap", price: 119 },
      { name: "Veg Mexican Wrap", price: 119 },
      { name: "Paneer Mexican Wrap", price: 149 },
      { name: "Cheese Burst Veg Wrap", price: 159 },
    ],
  },
  {
    id: "burgers",
    group: "food",
    title: "Burgers",
    subtitle:
      "Delicious veg patty made from mixed vegetables, served with lettuce, onion, tomato and our signature mayo sauce in soft bun",
    note: "Add any Mojito @89 with Burger/Wrap",
    items: [
      { name: "Veg Burger", price: 99 },
      { name: "Veg Cheese Burger", price: 109 },
      { name: "Spicy Veg Burger", price: 109 },
      { name: "Spicy Paneer Burger", price: 139 },
    ],
  },
  {
    id: "quick-bites",
    group: "food",
    title: "Quick Bites",
    items: [
      { name: "Hazelnut Banana Toastie", price: 89 },
      { name: "Jalapeno Cheese Sandwich", price: 99 },
      { name: "Veggie Delight Sandwich", price: 89 },
      { name: "Paneerlicious Sandwich", price: 99 },
      { name: "Korean Cheese Bun", price: 89 },
    ],
  },
  {
    id: "fries",
    group: "food",
    title: "Fries",
    note: "Add any Hot coffee @49",
    items: [
      { name: "Classic Fries", price: 79 },
      { name: "Peri Peri Fries", price: 89 },
      { name: "Cheesy Fries", price: 99 },
      { name: "Loaded Fries", price: 99 },
      { name: "Crinkle Cut Fries", price: 109 },
    ],
  },
  {
    id: "pasta",
    group: "food",
    title: "Pasta",
    items: [
      { name: "Arrabbiata", price: 139 },
      { name: "Creamy Alfredo", price: 139 },
      { name: "Spicy Schezwan", price: 149 },
      { name: "Tandoori Paneer", price: 149 },
    ],
  },
  {
    id: "sides",
    group: "food",
    title: "Sides",
    items: [
      { name: "Cheesy Corn Triangles", price: 79 },
      { name: "Cheese n Jalapeno Poppers", price: 79 },
      { name: "Chilli Garlic Potato Shots", price: 79 },
    ],
  },
  {
    id: "waffles",
    group: "food",
    title: "Waffles",
    subtitle:
      "Golden, crispy on the outside and fluffy within — served with topping of your choice. A luxurious treat for dessert lovers.",
    note: "Add any Hot coffee @49 with Waffle · Add-ons: Sprinkles, Choco Chips, Gems @10 each",
    items: [
      { name: "Belgian Chocomelt", price: 109, description: "Choose milk / white / dark chocolate" },
      {
        name: "Triple Chocomelt",
        price: 119,
        description: "Topped with milk, white & dark chocolate",
      },
      { name: "Nutella Delight", price: 119 },
      { name: "Berrylicious", price: 119, description: "Topped with blueberry and strawberry" },
      { name: "Oreo Overload", price: 119 },
      { name: "Kitkat Crunch", price: 129 },
      { name: "Nutty Indulgence", price: 139 },
    ],
  },
  {
    id: "sundaes",
    group: "food",
    title: "Ice-cream Sundaes & Specials",
    items: [
      {
        name: "Affogato",
        price: 139,
        description:
          "Italian dessert served in martini glass with vanilla ice-cream drowned in espresso",
      },
      {
        name: "Rainbow Fun",
        price: 129,
        description: "Vanilla ice-cream, brownie, gems, sprinkles, strawberry sauce",
      },
      {
        name: "Sinful Chocolate",
        price: 139,
        description: "Chocolate ice-cream, brownie, choco chips, choco sprinkles, choco sauce",
      },
      {
        name: "Cookies & Cream",
        price: 139,
        description: "Mixed ice-cream, Oreo cookies, choc sprinkles, brownie, choc sauce",
      },
      {
        name: "Kit-Kat Special",
        price: 149,
        description: "Mixed ice-cream, Kit-Kat, choc sprinkles, brownie, choco sauce",
      },
    ],
  },
  {
    id: "ice-cream",
    group: "food",
    title: "Make Your Own Soft Serve",
    subtitle: "Pick your ice-cream, add a sauce and a topping for the perfect treat.",
    note: "Upgrade to cone +₹10",
    items: [
      { name: "Vanilla Soft Serve", price: 49 },
      { name: "Chocolate Soft Serve", price: 59 },
      { name: "Mixed Soft Serve", price: 59 },
      { name: "Sauce Add-on (Chocolate / Caramel / Strawberry)", price: 10 },
      { name: "Topping Add-on (Sprinkles / Choco Chips / Nuts etc.)", price: 10 },
    ],
  },
  {
    id: "mojitos",
    group: "drinks",
    title: "Mojitos & Coolers",
    subtitle: "Fizzy, fruity and refreshing — our most-loved way to beat the Bengaluru heat.",
    items: [
      { name: "Blue Curacao Mojito", price: 139 },
      { name: "Chilli Guava Mojito", price: 139 },
      { name: "Lime Mint Breeze", price: 129 },
      { name: "Blueberry Lagoon", price: 139 },
      { name: "Orange Zest", price: 129 },
      { name: "Strawberry Splash", price: 129 },
      { name: "Blueberry Boba Shake", price: 129 },
      { name: "Lime Soda", price: 99 },
      { name: "Coke", price: 89 },
    ],
  },
  {
    id: "iced-coffee",
    group: "drinks",
    title: "Iced Coffees",
    items: [
      { name: "Iced Cappuccino", price: 109 },
      { name: "Iced Latte", price: 109 },
      { name: "Iced Americano", price: 99 },
      { name: "Iced Mocha", price: 119 },
      { name: "Iced Spanish Latte", price: 119 },
      { name: "Coffee Float", price: 129 },
      { name: "Nutella Iced Coffee", price: 129 },
      { name: "Lemon Cold Brew", price: 129 },
      { name: "Orange Espresso Tonic", price: 129 },
      { name: "Strawberry Mocha Latte", price: 129 },
    ],
  },
  {
    id: "cold-coffee",
    group: "drinks",
    title: "Cold Coffees",
    items: [
      { name: "Classic Cold Coffee", price: 109 },
      { name: "Mocha Cold Coffee", price: 119 },
      { name: "Hazelnut Cold Coffee", price: 129 },
    ],
  },
  {
    id: "iced-tea",
    group: "drinks",
    title: "Iced Teas",
    items: [
      { name: "Lemon Iced Tea", price: 109 },
      { name: "Green Apple Iced Tea", price: 109 },
      { name: "Peach Iced Tea", price: 119 },
      { name: "Lychee Iced Tea", price: 119 },
    ],
  },
  {
    id: "shakes",
    group: "drinks",
    title: "Milkshakes",
    items: [
      { name: "Vanilla", price: 109 },
      { name: "Chocolate", price: 119 },
      { name: "Oreo", price: 119 },
      { name: "KitKat", price: 129 },
      { name: "Hazelnut", price: 129 },
    ],
  },
  {
    id: "hot-coffee",
    group: "drinks",
    title: "Hot Coffees",
    note: "Additional 5% GST",
    items: [
      { name: "Cappuccino", price: 79 },
      { name: "Latte", price: 79 },
      { name: "Flat White", price: 79 },
      { name: "Americano", price: 79 },
      { name: "Espresso Macchiato", price: 79 },
      { name: "Hazelnut Cappuccino", price: 89 },
      { name: "Mocha Cappuccino", price: 89 },
      { name: "Caramel Cappuccino", price: 89 },
      { name: "Hazelnut Latte", price: 89 },
      { name: "Mocha Latte", price: 89 },
      { name: "Caramel Latte", price: 89 },
      { name: "Hot Chocolate", price: 89 },
    ],
  },
];

const filterTabs: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "wraps", label: "Wraps" },
  { id: "burgers", label: "Burgers" },
  { id: "quick-bites", label: "Quick Bites" },
  { id: "fries", label: "Fries" },
  { id: "pasta", label: "Pasta" },
  { id: "sides", label: "Sides" },
  { id: "waffles", label: "Waffles" },
  { id: "sundaes", label: "Sundaes" },
  { id: "ice-cream", label: "Ice-Cream" },
  { id: "mojitos", label: "Mojitos" },
  { id: "iced-coffee", label: "Iced Coffees" },
  { id: "cold-coffee", label: "Cold Coffees" },
  { id: "iced-tea", label: "Iced Teas" },
  { id: "shakes", label: "Shakes" },
  { id: "hot-coffee", label: "Hot Coffees" },
];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const visibleSections =
    activeCategory === "all" ? menuData : menuData.filter((s) => s.id === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-blue-800 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/cafe-indoor.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">
            Nib & Nosh
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Our Menu</h1>
          <p className="text-blue-200 max-w-md mx-auto text-sm px-4">
            All vegetarian · Made fresh daily
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {filterTabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleSections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-sm border border-blue-50 overflow-hidden"
            >
              <div className="bg-blue-700 px-6 py-4">
                <h2 className="font-serif text-xl font-bold text-white">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">{section.subtitle}</p>
                )}
              </div>

              <div className="divide-y divide-blue-50">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="px-6 py-3.5 flex items-start justify-between gap-4 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                      {item.description && (
                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="menu-price text-sm shrink-0">₹{item.price}</span>
                  </div>
                ))}
              </div>

              {section.note && (
                <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
                  <p className="text-amber-700 text-xs font-medium">{section.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            All items are 100% vegetarian · We use fresh ingredients daily.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Prices exclusive of 5% GST · For custom orders, please speak to our team.
          </p>
        </div>
      </div>
    </div>
  );
}