'use client';

import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { FiPlus, FiSearch } from 'react-icons/fi';

const CATEGORIES = ['All', 'Fashion', 'Food', 'Electronics', 'Services', 'Vehicles', 'Other'];

const MOCK_PRODUCTS = [
  {
    id: '1',
    title: 'Traditional Habesha Dress (Habesha Kemis)',
    price: '$150',
    condition: 'New',
    category: 'Fashion',
    seller: { name: 'Tigist Wolde', rating: 4.9 },
    location: 'Washington, DC',
  },
  {
    id: '2',
    title: 'Ethiopian Coffee Beans (5lb)',
    price: '$35',
    condition: 'New',
    category: 'Food',
    seller: { name: 'Abebe Kebede', rating: 4.8 },
    location: 'Silver Spring, MD',
  },
  {
    id: '3',
    title: 'Hand-woven Basket (Mesob)',
    price: '$80',
    condition: 'New',
    category: 'Other',
    seller: { name: 'Hiwet Tekle', rating: 5.0 },
    location: 'Seattle, WA',
  },
  {
    id: '4',
    title: 'Gold Jewelry Set',
    price: '$250',
    condition: 'New',
    category: 'Fashion',
    seller: { name: 'Selam Gebremedhin', rating: 4.7 },
    location: 'Dallas, TX',
  },
  {
    id: '5',
    title: 'Injera Mitad (Electric)',
    price: '$120',
    condition: 'Like New',
    category: 'Electronics',
    seller: { name: 'Dawit Tesfaye', rating: 4.6 },
    location: 'Minneapolis, MN',
  },
  {
    id: '6',
    title: 'Eritrean Silver Cross Pendant',
    price: '$65',
    condition: 'New',
    category: 'Fashion',
    seller: { name: 'Yonas Berhe', rating: 4.9 },
    location: 'Oakland, CA',
  },
  {
    id: '7',
    title: 'Used iPhone 14',
    price: '$500',
    condition: 'Used',
    category: 'Electronics',
    seller: { name: 'Kidist Alemayehu', rating: 4.5 },
    location: 'Arlington, VA',
  },
  {
    id: '8',
    title: 'Home Cooking Service',
    price: '$25/meal',
    condition: 'New',
    category: 'Services',
    seller: { name: 'Meron Haile', rating: 5.0 },
    location: 'Alexandria, VA',
  },
  {
    id: '9',
    title: 'Traditional Paintings',
    price: '$100',
    condition: 'New',
    category: 'Other',
    seller: { name: 'Amanuel Fisseha', rating: 4.8 },
    location: 'Denver, CO',
  },
  {
    id: '10',
    title: 'Amharic Tutoring',
    price: '$40/hr',
    condition: 'New',
    category: 'Services',
    seller: { name: 'Bethlehem Tadesse', rating: 5.0 },
    location: 'Atlanta, GA',
  },
  {
    id: '11',
    title: 'Berbere Spice Mix (Homemade)',
    price: '$15',
    condition: 'New',
    category: 'Food',
    seller: { name: 'Rahel Solomon', rating: 4.9 },
    location: 'Chicago, IL',
  },
  {
    id: '12',
    title: 'Car Detailing Service',
    price: '$75',
    condition: 'New',
    category: 'Services',
    seller: { name: 'Ermias Hagos', rating: 4.7 },
    location: 'Houston, TX',
  },
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.seller.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Buy and sell within the community
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90">
            <FiPlus size={18} />
            Sell Something
          </button>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search marketplace..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-dark-700 dark:bg-dark-800 dark:text-white"
          />
        </div>

        {/* Category filter pills */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-primary/30 hover:text-primary dark:border-dark-700 dark:bg-dark-800 dark:text-gray-400 dark:hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white py-16 text-center dark:border-dark-700 dark:bg-dark-800">
            <FiSearch className="mx-auto mb-3 text-gray-300 dark:text-dark-600" size={48} />
            <p className="text-gray-500 dark:text-gray-400">No items found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
