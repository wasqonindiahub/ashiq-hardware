import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="relative w-full overflow-hidden bg-gray-200">
        
        {/* Banner image wrapper - simulated carousel */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative bg-gradient-to-r from-[#311c41] to-[#8e254d]">
          {/* Faded Background Pattern / Image */}
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop" 
            alt="Paints & Hardware" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-white">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 bg-[#eb6123] text-white text-[10px] sm:text-xs font-bold rounded mb-2 sm:mb-4 uppercase tracking-wider shadow-sm">
                Mega Hardware Sale
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4 leading-tight">
                Up to <span className="text-[#facc15]">40% OFF</span> on Paints & Tools
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 sm:mb-8 max-w-md hidden sm:block">
                Direct from manufacturers. Assured quality, GST invoicing, and scheduled site delivery.
              </p>
              
              <button className="bg-[#eb6123] hover:bg-[#cf521b] text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-md shadow-md transition-colors text-sm sm:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Carousel controls - visual only */}
        <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-12 sm:w-10 sm:h-16 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center rounded transition-colors z-20">
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-12 sm:w-10 sm:h-16 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center rounded transition-colors z-20">
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        
        {/* Shadow overlap gradient for the typical ecommerce bleed effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-gray-100 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
