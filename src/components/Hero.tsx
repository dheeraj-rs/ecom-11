'use client'

import { ArrowRight, Award, Users, Hammer } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-hero flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight text-shadow">
                Crafting
                <span className="text-amber-400 block sm:inline"> Excellence</span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2">Since 1985</span>
              </h1>
            </div>
            
            <div className="animate-slide-up">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Royalwood creates bespoke furniture pieces that blend traditional craftsmanship 
                with contemporary design, delivering heirloom quality for discerning clients.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start animate-slide-up">
              <button 
                onClick={() => scrollToSection('catalog')}
                className="group bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
              >
                View Catalog
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-wood-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 animate-scale-in">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-400" />
                  </div>
                  <p className="font-bold text-2xl sm:text-3xl text-white">500+</p>
                  <p className="text-gray-300 text-sm sm:text-base">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Hammer className="h-8 w-8 text-amber-400" />
                  </div>
                  <p className="font-bold text-2xl sm:text-3xl text-white">2000+</p>
                  <p className="text-gray-300 text-sm sm:text-base">Pieces Crafted</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-amber-400" />
                  </div>
                  <p className="font-bold text-2xl sm:text-3xl text-white">15</p>
                  <p className="text-gray-300 text-sm sm:text-base">Design Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero