'use client'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Oak Dining Set',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Dining Room',
      description: 'Handcrafted solid oak dining table with matching chairs for a luxury home.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Premium walnut executive desk and storage solutions for corporate headquarters.',
      year: '2024'
    },
    {
      id: 3,
      title: 'Modern Living Room Set',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Contemporary furniture collection featuring clean lines and premium materials.',
      year: '2023'
    },
    {
      id: 4,
      title: 'Master Bedroom Collection',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Elegant bedroom suite with custom headboard and matching nightstands.',
      year: '2023'
    },
    {
      id: 5,
      title: 'Kitchen Cabinet System',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Kitchen',
      description: 'Custom kitchen cabinetry with soft-close mechanisms and premium hardware.',
      year: '2023'
    },
    {
      id: 6,
      title: 'Restaurant Furniture',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Durable and stylish restaurant seating and tables for high-traffic venues.',
      year: '2024'
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-portfolio">
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-wood-900 mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of custom furniture projects, each telling a unique story 
            of craftsmanship and design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-wood-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-wood-900 mb-2 sm:mb-3 group-hover:text-wood-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio