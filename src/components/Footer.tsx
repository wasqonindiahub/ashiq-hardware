import { CheckCircle, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f102b] text-white pt-12 pb-6 border-t border-[#311c41] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 border-b border-[#311c41] pb-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#311c41] rounded-full flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#eb6123]" />
            </div>
            <h4 className="font-bold text-white text-sm sm:text-base">100% Original Materials</h4>
            <p className="text-xs sm:text-sm text-gray-400">Verify product authenticity using official manufacturer apps.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#311c41] rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#eb6123]" />
            </div>
            <h4 className="font-bold text-white text-sm sm:text-base">Quality Checked</h4>
            <p className="text-xs sm:text-sm text-gray-400">All materials pass rigorous quality assurance.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#311c41] rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#eb6123]" />
            </div>
            <h4 className="font-bold text-white text-sm sm:text-base">Fast Delivery</h4>
            <p className="text-xs sm:text-sm text-gray-400">Get your materials delivered to site in 60 minutes.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#311c41] rounded-full flex items-center justify-center">
              <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8 text-[#eb6123]" />
            </div>
            <h4 className="font-bold text-white text-sm sm:text-base">Easy Returns</h4>
            <p className="text-xs sm:text-sm text-gray-400">Hassle-free returns on unused materials.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#311c41] to-[#8e254d] rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner border border-[#4a2c58]">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get a first peek at New Products, Special Offers.</h3>
            <p className="text-gray-200 text-sm">Subscribe to our newsletter for exclusive Ashiq Hardware contractor deals.</p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full py-3 px-4 rounded-md border-none focus:ring-2 focus:ring-[#eb6123] bg-white text-black"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#eb6123] text-white px-4 py-2 rounded font-medium hover:bg-[#cf521b] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          <div>
            <div className="flex flex-col mb-4 justify-center sm:justify-start">
              <span className="font-black text-xl tracking-tight text-white uppercase italic">
                Ashiq <span className="text-[#facc15]">Hardware</span>
              </span>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest mt-0.5 font-semibold">"Ask Everywhere"</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted hyperlocal partner for construction, paints, and building materials.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Price Lists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Hub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop by Category</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Policy</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><span className="font-medium text-gray-200">Email:</span> hello@ashiqhardware.com</li>
              <li>
                <span className="font-medium text-gray-200">Address:</span><br/>
                Ashiq Hardware,<br/>
                Surathkal, Mangaluru,<br/>
                Karnataka 575014
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#311c41] pt-6 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()}, Ashiq Hardware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
