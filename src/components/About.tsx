'use client'

import { Users, Hammer, Award, Leaf, Shield, Clock } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'We source only the finest, responsibly harvested wood from certified forests.'
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Every piece comes with our comprehensive lifetime craftsmanship guarantee.'
    },
    {
      icon: Clock,
      title: 'Timeless Design',
      description: 'Our furniture transcends trends, creating pieces that last for generations.'
    }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-wood-900 mb-4 sm:mb-6">
            Our Craftsmanship Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For nearly four decades, Royalwood has been synonymous with exceptional 
            furniture craftsmanship, combining time-honored techniques with innovative design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-wood-900">
              Heritage of Excellence
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Founded in 1985 by master craftsman Robert Royalwood, our company began as a small 
                workshop dedicated to creating custom furniture pieces for local families. Today, 
                we've grown into a renowned manufacturer serving clients across the nation.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Every piece that leaves our workshop represents our commitment to quality, 
                sustainability, and timeless design. We source only the finest materials and 
                employ skilled artisans who share our passion for perfection.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="bg-wood-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-wood-800" />
                </div>
                <p className="font-bold text-xl sm:text-2xl text-wood-900">500+</p>
                <p className="text-gray-600 text-xs sm:text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="bg-wood-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Hammer className="h-6 w-6 sm:h-8 sm:w-8 text-wood-800" />
                </div>
                <p className="font-bold text-xl sm:text-2xl text-wood-900">2000+</p>
                <p className="text-gray-600 text-xs sm:text-sm">Pieces Crafted</p>
              </div>
              <div className="text-center">
                <div className="bg-wood-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-wood-800" />
                </div>
                <p className="font-bold text-xl sm:text-2xl text-wood-900">15</p>
                <p className="text-gray-600 text-xs sm:text-sm">Design Awards</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img 
              src="https://images.pexels.com/photos/5974937/pexels-photo-5974937.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Craftsman at work" 
              className="rounded-lg shadow-lg w-full h-48 sm:h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/6634286/pexels-photo-6634286.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Wood workshop" 
              className="rounded-lg shadow-lg mt-4 sm:mt-8 w-full h-48 sm:h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-wood-100 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-wood-800" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-wood-900 mb-2 sm:mb-3">{feature.title}</h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About