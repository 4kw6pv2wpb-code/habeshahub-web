'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { FiPlus, FiSearch, FiLoader } from 'react-icons/fi';
import api from '@/lib/api';

const CATEGORIES = ['All', 'Fashion', 'Food', 'Electronics', 'Services', 'Vehicles', 'Other'];

export default function MarketplacePage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const params = {};
        if (category !== 'All') params.category = category;
        if (search) params.search = search;
        const res = await api.get('/marketplace', { params });
        setProducts(res.data?.data || res.data || []);
      } catch (err) {
        // Marketplace API may not be available yet
        setProducts([]);
        console.error('Marketplace fetch:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <AppLayout>
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white">
            <FiPlus /> Sell Item
          </button>
        </div>

        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search marketplace..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                category === c ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <FiLoader className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center my-4">{error}</div>
        )}

        {!loading && products.length === 0 && !error && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center text-gray-500">
            <p className="text-lg font-medium">No products yet</p>
            <p className="mt-1">Be the first to list something for sale!</p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
