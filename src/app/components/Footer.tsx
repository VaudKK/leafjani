import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-white sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {/* Logo and Social */}
          <div className="sm:col-span-2 xl:col-span-1">
            <div className="mb-4 text-xl font-semibold tracking-wider">
              LEAFJANI
            </div>
            <p className="max-w-sm text-sm leading-6 text-gray-400">
              Premium tea blends crafted for calm mornings, shared rituals, and slow moments that deserve better flavor.
            </p>
            <div className="mt-5 flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#teas" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400 break-words">
              <li>
                <a href="mailto:info@leafjani.com" className="hover:text-white transition-colors">
                  info@leafjani.com
                </a>
              </li>
              <li>Euless, TX 76039</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 border-t border-gray-800 pt-8 text-center text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; 2026 LeafJani. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
