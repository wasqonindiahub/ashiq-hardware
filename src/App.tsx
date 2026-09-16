/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { mockCategories, mockDeals, mockLaunched } from './data/mockData';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Cart />
      <main className="flex-1 -mt-1 relative z-0">
        <Hero />
        
        {/* Pull content up to overlap the hero banner gradient slightly */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-20 relative z-20 space-y-4 sm:space-y-6 pb-12">
          
          <CategoryGrid categories={mockCategories} />

          {/* First product strip */}
          <section className="bg-white p-3 sm:p-6 shadow-sm border border-gray-200 rounded-md">
            <div className="flex items-end justify-between mb-3 sm:mb-4 border-b border-gray-100 pb-2 sm:pb-3">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Blockbuster Deals in Building Materials</h2>
              <a href="#" className="text-[#8e254d] hover:text-[#56152e] hover:underline text-xs sm:text-sm font-medium">See all deals</a>
            </div>
            {/* Grid on both mobile and desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
              {mockDeals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Second product strip */}
          <section className="bg-white p-3 sm:p-6 shadow-sm border border-gray-200 rounded-md">
            <div className="flex items-end justify-between mb-3 sm:mb-4 border-b border-gray-100 pb-2 sm:pb-3">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900">New Launches for Contractors</h2>
              <a href="#" className="text-[#8e254d] hover:text-[#56152e] hover:underline text-xs sm:text-sm font-medium">See all</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
              {mockLaunched.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="bg-white p-4 sm:p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative rounded-md">
            <div className="relative z-10 flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Ashiq Hardware Business Account
              </h2>
              <p className="text-gray-700 mb-4 max-w-2xl text-xs sm:text-sm">
                Register as a contractor or business to unlock GST invoices, volume discounts, and dedicated account managers. Save up to 15% on bulk paint, cement, and steel purchases.
              </p>
              <button className="bg-[#311c41] text-white hover:bg-[#20122b] px-6 py-2.5 rounded-md shadow-sm text-sm font-medium transition-colors w-full sm:w-auto">
                Register for Free
              </button>
            </div>
            {/* Minimal decoration */}
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#8e254d]/10 to-transparent pointer-events-none"></div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
