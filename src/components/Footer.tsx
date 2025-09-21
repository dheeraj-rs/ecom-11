'use client'

import { Star, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-wood-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">Royalwood</h3>
            <p className="text-wood-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Creating exceptional furniture pieces since 1985. Our commitment to quality 
              craftsmanship and timeless design continues to set us apart in the industry.
            </p>
            
            {/* Reviews */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base text-wood-300">5.0 (127 reviews)</span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-wood-800 hover:bg-amber-500 p-2 sm:p-3 rounded-full transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-wood-800 hover:bg-amber-500 p-2 sm:p-3 rounded-full transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-wood-800 hover:bg-amber-500 p-2 sm:p-3 rounded-full transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-wood-800 hover:bg-amber-500 p-2 sm:p-3 rounded-full transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-wood-200">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('catalog')} 
                  className="hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-amber-400 transition-colors text-sm sm:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3 text-wood-200 text-sm sm:text-base">
              <li>(555) 123-4567</li>
              <li>info@royalwoodfurniture.com</li>
              <li className="leading-relaxed">
                1234 Craftsman Lane<br />
                Woodville, NY 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-wood-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-wood-400 text-sm sm:text-base text-center sm:text-left">
              &copy; 2024 Royalwood Furniture Manufacturing. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-wood-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer