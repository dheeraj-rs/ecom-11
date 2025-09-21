'use client'

import { useState } from 'react'
import { ShoppingCart, Heart, Eye } from 'lucide-react'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const products = [
    {
      id: 1,
      name: 'Royal Oak Dining Table',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Dining Room',
      description: 'Solid oak dining table with live edge finish',
      isNew: true,
      discount: 17
    },
    {
      id: 2,
      name: 'Executive Walnut Desk',
      price: 1899,
      image: 'https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Premium walnut executive desk with built-in storage',
      isNew: false
    },
    {
      id: 3,
      name: 'Modern Coffee Table',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Contemporary glass-top coffee table with oak base',
      isNew: false,
      discount: 25
    },
    {
      id: 4,
      name: 'Platform Bed Frame',
      price: 1299,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Minimalist platform bed with integrated nightstands',
      isNew: true
    },
    {
      id: 5,
      name: 'Kitchen Island Cabinet',
      price: 3299,
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Kitchen',
      description: 'Custom kitchen island with granite top and storage',
      isNew: false
    },
    {
      id: 6,
      name: 'Bookshelf Unit',
      price: 1599,
      image: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Floor-to-ceiling modular bookshelf system',
      isNew: false
    },
    {
      id: 7,
      name: 'Upholstered Armchair',
      price: 1199,
      originalPrice: 1399,
      image: 'https://images.pexels.com/photos/586763/pexels-photo-586763.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Luxury leather armchair with solid wood frame',
      isNew: false,
      discount: 14
    },
    {
      id: 8,
      name: 'Wardrobe System',
      price: 2799,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Custom wardrobe with sliding doors and organizers',
      isNew: true
    },
  ]

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office', 'Kitchen']

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section id="catalog" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-wood-900 mb-4 sm:mb-6">
            Product Catalog
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive collection of premium furniture pieces, 
            each designed and crafted to the highest standards.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-wood-800 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-wood-100 hover:text-wood-800 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {product.category}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="bg-white p-2 rounded-full hover:bg-wood-100 transition-colors">
                      <Eye className="h-4 w-4 text-wood-800" />
                    </button>
                    <button className="bg-white p-2 rounded-full hover:bg-wood-100 transition-colors">
                      <Heart className="h-4 w-4 text-wood-800" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-wood-900 mb-2 group-hover:text-wood-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-wood-900">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <button className="bg-wood-800 hover:bg-wood-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sm:hidden">Add to Cart</span>
                    <span className="hidden sm:inline">Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog