import { Product } from '../types';
import { useStore } from '../store/useStore';
import { Star, Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, setIsCartOpen } = useStore();

  const handleAdd = () => {
    addItem(product);
    setIsCartOpen(true);
  };

  // Mock rating
  const rating = (4.0 + Math.random()).toFixed(1);
  const reviews = Math.floor(Math.random() * 500) + 12;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 flex flex-col h-full relative group">
      {/* Discount Badge */}
      {product.discountPercentage > 0 && (
        <div className="absolute top-0 left-0 bg-[#8e254d] text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-br-lg z-10">
          {product.discountPercentage}% OFF
        </div>
      )}

      {/* Image Area */}
      <div className="relative aspect-square sm:aspect-[4/3] p-2 sm:p-4 bg-white flex items-center justify-center cursor-pointer overflow-hidden border-b border-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Content Area */}
      <div className="p-2 sm:p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-medium text-gray-900 text-[11px] sm:text-sm line-clamp-2 mb-1 hover:text-[#8e254d] cursor-pointer leading-snug">
          {product.name}
        </h3>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 mb-1 sm:mb-2">
          <div className="flex text-[#ffa41c]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-[#8e254d] text-[9px] sm:text-xs font-medium ml-1 cursor-pointer hover:underline">{reviews}</span>
        </div>

        {/* Pricing */}
        <div className="mb-2">
          <div className="flex items-end gap-1 sm:gap-2">
            <span className="text-base sm:text-xl font-bold text-gray-900 leading-none">
              <span className="text-[10px] sm:text-sm align-top mr-0.5">₹</span>{product.discountedPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5 text-[9px] sm:text-xs text-gray-500">
            <span>M.R.P:</span>
            <span className="line-through">₹{product.basePrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Assured Badge */}
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          <div className="bg-[#311c41] text-white text-[8px] sm:text-[10px] font-bold px-1 py-0.5 rounded flex items-center gap-1">
            <Check className="w-2 h-2 sm:w-3 sm:h-3 text-[#facc15]" /> Assured
          </div>
        </div>
        
        {product.bulkTiers && (
           <div className="text-[9px] sm:text-xs text-[#8e254d] font-medium mb-2 sm:mb-3 leading-tight">
             Bulk discount for {product.bulkTiers[0].minQty}+
           </div>
        )}

        {/* Actions */}
        <div className="mt-auto pt-2 grid grid-cols-1 gap-1.5 sm:gap-2">
          <button 
            onClick={handleAdd}
            className="w-full bg-[#eb6123] hover:bg-[#cf521b] text-white font-medium py-1 sm:py-1.5 rounded text-[10px] sm:text-sm shadow-sm transition-colors"
          >
            Add
          </button>
          
          {product.bulkTiers && (
             <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-1 sm:py-1.5 rounded text-[10px] sm:text-sm border border-gray-300 transition-colors flex items-center justify-center gap-0.5 sm:gap-1">
               {product.bulkTiers.length + 1} Options <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
             </button>
          )}
        </div>
      </div>
    </div>
  );
}
