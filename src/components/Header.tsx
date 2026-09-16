import { Search, MapPin, Wallet, User, ShoppingCart, Menu, PhoneCall, ChevronDown } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Header() {
  const walletBalance = useStore((state) => state.walletBalance);
  const cartItems = useStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full bg-[#1f102b] shadow-md sticky top-0 z-50 text-white overflow-hidden">
      {/* Top Bar - Open Timings & Offers (Marquee) */}
      <div className="bg-gradient-to-r from-[#311c41] to-[#8e254d] py-1.5 text-[10px] sm:text-xs font-medium text-white tracking-wide border-b border-[#4a2c58] overflow-hidden whitespace-nowrap flex items-center">
        <div className="animate-marquee inline-block">
          <span className="mx-4">🔥 MEGA SALE: UPTO 40% OFF ON PAINTS & TOOLS</span>
          <span className="mx-4">•</span>
          <span className="mx-4">OPEN 8 AM TO 8 PM ALL DAYS</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🚚 FREE DELIVERY ON ORDERS OVER ₹5000</span>
          <span className="mx-4">•</span>
          <span className="mx-4">✅ ASHIQ HARDWARE - ASK EVERYWHERE</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-1 sm:gap-3 cursor-pointer mr-1 sm:mr-4">
          <Menu className="w-6 h-6 sm:hidden text-white" />
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-2xl tracking-tight leading-none uppercase italic">
              Ashiq <span className="text-[#facc15]">Hardware</span>
            </span>
            <span className="text-[8px] sm:text-[10px] text-gray-300 uppercase tracking-widest mt-0.5 font-semibold">"Ask Everywhere"</span>
          </div>
        </div>

        {/* Location (Desktop) */}
        <div className="hidden md:flex flex-col text-sm pl-2 cursor-pointer hover:border-white border border-transparent p-1 rounded">
          <span className="text-gray-300 text-xs flex items-center gap-1">
            Delivering to Mangaluru
          </span>
          <div className="flex items-center gap-1 font-bold text-white leading-none">
            <MapPin className="w-4 h-4" />
            <span>Update location</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full order-last sm:order-none mt-2 sm:mt-0 min-w-[200px]">
          <div className="flex rounded-md overflow-hidden bg-white">
            <button className="hidden sm:flex items-center gap-1 bg-gray-100 px-3 py-2 text-gray-700 text-sm border-r border-gray-300 hover:bg-gray-200 focus:outline-none">
              All <ChevronDown className="w-3 h-3" />
            </button>
            <input
              type="text"
              placeholder="Search for Paints, Cement, Tools..."
              className="flex-1 px-3 py-2 text-black focus:outline-none text-sm sm:text-base w-full"
            />
            <button className="bg-[#eb6123] hover:bg-[#cf521b] px-4 py-2 flex items-center justify-center transition-colors">
              <Search className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {/* Wallet (Desktop) */}
          <div className="hidden lg:flex flex-col hover:border-white border border-transparent p-1 rounded cursor-pointer text-left">
             <span className="text-[10px] text-gray-300 leading-none">Wallet</span>
             <span className="font-bold text-sm leading-none flex items-center gap-1">
               <Wallet className="w-3 h-3 text-[#eb6123]" /> ₹{walletBalance}
             </span>
          </div>

          {/* Login */}
          <div className="hidden sm:flex flex-col hover:border-white border border-transparent p-1 rounded cursor-pointer text-left">
             <span className="text-[10px] text-gray-300 leading-none">Hello, Sign in</span>
             <span className="font-bold text-sm leading-none flex items-center gap-1">
               Account & Lists <ChevronDown className="w-3 h-3 text-gray-400" />
             </span>
          </div>
          
          <button className="sm:hidden text-white p-1">
            <User className="w-6 h-6" />
          </button>
          
          {/* Cart */}
          <div 
            className="relative cursor-pointer hover:border-white border border-transparent p-1 rounded flex items-center"
            onClick={() => useStore.getState().setIsCartOpen(true)}
          >
            <div className="relative flex items-end">
              <ShoppingCart className="w-8 h-8 text-white" />
              <span className="absolute -top-1 left-3 text-[#eb6123] font-bold text-[14px]">
                {cartCount}
              </span>
            </div>
            <span className="hidden sm:block font-bold mt-3 ml-1">Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="bg-[#311c41] text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col sm:flex-row sm:items-center">
          <div className="flex items-center py-1 border-b border-[#4a2c58] sm:border-none sm:py-0">
            <button className="flex items-center gap-1 hover:border-white border border-transparent p-1.5 rounded font-bold text-sm">
              <Menu className="w-5 h-5" /> All
            </button>
          </div>
          <nav className="flex flex-wrap gap-x-1 gap-y-1 py-2 sm:py-1 sm:ml-2">
            {['Paints & Finishes', 'Hardware & Tools', 'Electrical', 'Plumbing', 'Today\'s Deals', 'Contractor Store'].map((cat) => (
              <a
                key={cat}
                href="#"
                className="text-[11px] sm:text-sm font-medium hover:border-white border border-transparent px-2 py-1 rounded whitespace-nowrap bg-white/10 sm:bg-transparent"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
