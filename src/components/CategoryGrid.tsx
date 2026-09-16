import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="bg-transparent">
      {/* Mega Ecommerce style category blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* We'll slice the categories into groups of 4 to create the typical "4-item block" look */}
        {[0, 4, 8].map((startIndex, groupIdx) => {
          const catGroup = categories.slice(startIndex, startIndex + 4);
          
          return (
            <div key={groupIdx} className="bg-white p-4 sm:p-5 shadow-sm border border-gray-200 flex flex-col h-full rounded-md">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {groupIdx === 0 ? "Paints & Finishes" : groupIdx === 1 ? "Hardware & Tools" : "Electrical & Plumbing"}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                {catGroup.map((category) => (
                  <div key={category.id} className="group cursor-pointer flex flex-col items-start gap-1">
                    <div className="w-full aspect-square bg-gray-50 overflow-hidden relative rounded-md border border-gray-100">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-[13px] text-gray-900 line-clamp-1 group-hover:text-[#8e254d] font-medium">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
              <a href="#" className="text-[#8e254d] hover:text-[#56152e] hover:underline text-xs sm:text-[13px] font-medium mt-4 block">
                Explore all categories
              </a>
            </div>
          );
        })}
        
        {/* A promotional/banner block in the 4th column */}
        <div className="bg-white p-4 sm:p-5 shadow-sm border border-gray-200 flex-col h-full hidden lg:flex rounded-md">
           <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">Sign in for your best experience</h3>
           <button className="w-full bg-[#eb6123] hover:bg-[#cf521b] text-white font-medium py-2 rounded-md text-sm transition-colors mb-4">
             Sign in securely
           </button>
           
           <div className="relative w-full flex-1 min-h-[150px] bg-gray-50 border border-gray-100 mt-2 overflow-hidden flex items-center justify-center rounded-md">
             <img 
               src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=500&q=80&fit=crop" 
               alt="Contractor Promo"
               className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
             />
             <div className="relative z-10 text-center p-4 bg-white/80 rounded m-2">
               <span className="font-bold text-lg text-gray-900">Contractor Prime</span>
               <p className="text-xs font-medium mt-1 text-gray-800">Get free delivery on 10,000+ items</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
