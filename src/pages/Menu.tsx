import { useState } from 'react';

type Category =
  | 'all'
  | 'wraps'
  | 'sandwiches'
  | 'small-bites'
  | 'fries'
  | 'burgers'
  | 'pasta'
  | 'waffles'
  | 'desserts'
  | 'ice-cream-sundaes'
  | 'scoops'
  | 'beverages'
  | 'mojitos'
  | 'cold-coffee'
  | 'iced-coffee'
  | 'iced-tea'
  | 'milkshakes'
  | 'others'
  | 'hot-coffee';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuSection {
  id: Category;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

const beverageCategories: Category[] = ['mojitos', 'cold-coffee', 'iced-coffee', 'iced-tea', 'milkshakes', 'others'];

const menuData: MenuSection[] = [
  {
    id: 'wraps',
    title: 'Wraps',
    items: [
      { name: 'Veggie Fiesta', price: 119 },
      { name: 'Crisp Aloo Wrap', price: 119 },
      { name: 'Veg + Paneer Wrap', price: 129 },
      { name: 'Veg Mexican Wrap', price: 129 },
      { name: 'Paneer Mexican Wrap', price: 149 },
      { name: 'Cheese Burst Veg Wrap', price: 159 },
      { name: 'Lebanese Falafel Wrap', price: 149 },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches & Buns',
    items: [
      { name: 'Hazelnut Banana Toastie', price: 89 },
      { name: 'Veggie Delight Sandwich', price: 109 },
      { name: 'Paneerilicious Sandwich', price: 129 },
      { name: 'Korean Cheese Bun', price: 99 },
    ],
  },
  {
    id: 'small-bites',
    title: 'Small Bites',
    items: [
      { name: 'Cheesy Corn Triangles', price: 99 },
      { name: 'Cheesy Jalapeno Poppers', price: 99 },
      { name: 'Chilli Garlic Potato', price: 89 },
      { name: 'Onion Rings', price: 99 },
      { name: 'Potato Wedges', price: 99 },
      { name: 'Veggie Pizza Fingers', price: 109 },
      { name: 'Lebanese Falafel', price: 119 },
    ],
  },
  {
    id: 'fries',
    title: 'Fries',
    items: [
      { name: 'Classic Fries', price: 99 },
      { name: 'Peri Peri Fries', price: 109 },
      { name: 'Cheesy Fries', price: 119 },
      { name: 'Loaded Fries', price: 119 },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    items: [
      { name: 'Veg Burger', price: 99 },
      { name: 'Veg Cheese Burger', price: 119 },
      { name: 'Spicy Veg Burger', price: 119 },
      { name: 'Spicy Paneer Burger', price: 139 },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    items: [
      { name: 'Creamy Alfredo', price: 169 },
      { name: 'Arrabbiata', price: 159 },
      { name: 'Spicy Schezwan', price: 159 },
    ],
  },
  {
    id: 'waffles',
    title: 'Waffles',
    items: [
      { name: 'Belgian Chocomelt', price: 109 },
      { name: 'Triple Chocomelt', price: 119 },
      { name: 'Nutella Delight', price: 119 },
      { name: 'Brownie Waffle', price: 119 },
      { name: 'Oreo Overload', price: 119 },
      { name: 'KitKat Crunch', price: 129 },
      { name: 'Nutty Indulgence', price: 139 },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Brownie with Vanilla Ice Cream', price: 129 },
      { name: 'Walnut Brownie', price: 79 },
      { name: 'Nutella Waffle with Ice Cream', price: 159 },
      { name: 'Waffle with Banana & Ice Cream', price: 149 },
      { name: 'Affogato', price: 139 },
    ],
  },
  {
    id: 'ice-cream-sundaes',
    title: 'Ice Cream Sundaes',
    items: [
      { name: 'Triple Treat', price: 149 },
      { name: 'Cookie Crush', price: 149 },
      { name: 'Blackcurrant Bliss', price: 149 },
      { name: 'Vanilla Strawberry Delight', price: 139 },
      { name: 'Fruity Delight', price: 149 },
      { name: 'Royal Sundae', price: 149 },
      { name: 'DBC', price: 159 },
      { name: 'Banana Split', price: 149 },
      { name: 'Rainbow Fun', price: 139 },
      { name: 'Sinful Chocolate', price: 159 },
      { name: 'Kit-Kat Sundae', price: 159 },
    ],
  },
  {
    id: 'scoops',
    title: 'Scoops',
    items: [
      { name: 'Vanilla', price: 59 },
      { name: 'Chocolate', price: 69 },
      { name: 'Mango', price: 59 },
      { name: 'Blackcurrant', price: 69 },
    ],
  },
  {
    id: 'mojitos',
    title: 'Mojitos & Coolers',
    items: [
      { name: 'Blueberry Boba Shake', price: 139 },
      { name: 'Lime Mint Breeze', price: 129 },
      { name: 'Blueberry Lagoon', price: 139 },
      { name: 'Strawberry Splash', price: 129 },
      { name: 'Chilli Guava Mojito', price: 139 },
      { name: 'Blue Curacao Mojito', price: 129 },
      { name: 'Orange Zest', price: 129 },
    ],
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
    items: [
      { name: 'Classic Cold Coffee', price: 109 },
      { name: 'Hazelnut Cold Coffee', price: 129 },
      { name: 'Mocha Cold Coffee', price: 119 },
    ],
  },
  {
    id: 'iced-coffee',
    title: 'Iced Coffee',
    items: [
      { name: 'Iced Cappuccino', price: 109 },
      { name: 'Iced Latte', price: 109 },
      { name: 'Iced Americano', price: 99 },
      { name: 'Iced Mocha', price: 119 },
      { name: 'Iced Spanish Latte', price: 119 },
      { name: 'Nutella Iced Coffee', price: 129 },
      { name: 'Coffee Float', price: 129 },
      { name: 'Lemon Cold Brew', price: 129 },
      { name: 'Orange Espresso Tonic', price: 129 },
      { name: 'Strawberry Mocha Latte', price: 129 },
    ],
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    items: [
      { name: 'Lemon', price: 109 },
      { name: 'Green Apple', price: 109 },
      { name: 'Peach', price: 119 },
      { name: 'Lychee', price: 119 },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    items: [
      { name: 'Oreo', price: 119 },
      { name: 'KitKat', price: 129 },
      { name: 'Hazelnut', price: 129 },
      { name: 'Chocolate', price: 119 },
      { name: 'Vanilla', price: 109 },
    ],
  },
  {
    id: 'others',
    title: 'Others',
    items: [
      { name: 'Lime Soda', price: 99 },
      { name: 'Coke', price: 89 },
    ],
  },
  {
    id: 'hot-coffee',
    title: 'Hot Coffee',
    items: [
      { name: 'Cappuccino', price: 79 },
      { name: 'Latte', price: 79 },
      { name: 'Flat White', price: 79 },
      { name: 'Americano', price: 79 },
      { name: 'Espresso Macchiato', price: 79 },
      { name: 'Hazelnut Cappuccino', price: 89 },
      { name: 'Mocha Cappuccino', price: 89 },
      { name: 'Caramel Cappuccino', price: 89 },
      { name: 'Hazelnut Latte', price: 89 },
      { name: 'Mocha Latte', price: 89 },
      { name: 'Caramel Latte', price: 89 },
      { name: 'Hot Chocolate', price: 89 },
    ],
  },
];

const filterTabs: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'wraps', label: 'Wraps' },
  { id: 'sandwiches', label: 'Sandwiches & Buns' },
  { id: 'small-bites', label: 'Small Bites' },
  { id: 'fries', label: 'Fries' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'waffles', label: 'Waffles' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'ice-cream-sundaes', label: 'Ice Cream Sundaes' },
  { id: 'scoops', label: 'Scoops' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'hot-coffee', label: 'Hot Coffee' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const visibleSections = activeCategory === 'all'
    ? menuData
    : activeCategory === 'beverages'
      ? menuData.filter((s) => beverageCategories.includes(s.id))
      : menuData.filter((s) => s.id === activeCategory);

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-blue-800 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/WhatsApp%20Image%202026-07-29%20at%2012.44.35%20PM.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-widest mb-2">Nib & Nosh</p>
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
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
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
            <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-blue-50 overflow-hidden">
              {/* Section Header */}
              <div className="bg-blue-700 px-6 py-4">
                <h2 className="font-serif text-xl font-bold text-white">{section.title}</h2>
                {section.subtitle && (
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">{section.subtitle}</p>
                )}
              </div>

              {/* Items */}
              <div className="divide-y divide-blue-50">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="px-6 py-3.5 flex items-start justify-between gap-4 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                      {item.description && (
                        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    <span className="menu-price text-sm shrink-0">₹{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              {section.note && (
                <div className="px-6 py-3 bg-amber-50 border-t border-amber-100">
                  <p className="text-amber-700 text-xs font-medium">{section.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Additional 5% GST
          </p>
        </div>
      </div>
    </div>
  );
}
