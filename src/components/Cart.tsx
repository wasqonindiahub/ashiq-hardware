import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Cart() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, getCartTotal, walletBalance } = useStore();

  if (!isCartOpen) return null;

  const subtotal = getCartTotal();
  const delivery = subtotal > 500 ? 0 : 50;
  const cashback = subtotal * 0.02; // 2% cashback
  const total = subtotal + delivery;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col transform transition-transform">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="w-10 h-10 text-gray-400" />
              </div>
              <p className="font-medium text-lg text-gray-900 mb-1">Your cart is empty</p>
              <p className="text-sm">Looks like you haven't added anything yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 border-b pb-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg p-2 border border-gray-100 shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <div className="text-xs text-gray-500 mt-1">₹{item.product.discountedPrice} / {item.product.unit}</div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-500 hover:text-black hover:border-gray-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-500 hover:text-black hover:border-gray-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-900">
                          ₹{(item.product.discountedPrice * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary & Checkout */}
        {items.length > 0 && (
          <div className="border-t bg-gray-50 p-6">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery Fee</span>
                {delivery === 0 ? (
                  <span className="font-medium text-green-600">Free</span>
                ) : (
                  <span className="font-medium text-gray-900">₹{delivery.toFixed(2)}</span>
                )}
              </div>
              <div className="flex justify-between text-sm text-gray-600 border-b pb-3 border-gray-200">
                <span>Wallet Balance</span>
                <span className="font-medium text-green-600">₹{walletBalance.toFixed(2)} available</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
                You will earn ₹{cashback.toFixed(2)} cashback on this order
              </div>
            </div>
            
            <button className="w-full bg-[#4a9b2b] hover:bg-[#3d8023] text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-sm">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
