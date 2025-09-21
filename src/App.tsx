import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star, Users, Award, Hammer } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const portfolioItems = [
    {
      id: 1,
      title: 'Custom Oak Dining Set',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Dining Room',
      description: 'Handcrafted solid oak dining table with matching chairs for a luxury home.',
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Premium walnut executive desk and storage solutions for corporate headquarters.',
    },
    {
      id: 3,
      title: 'Modern Living Room Set',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Contemporary furniture collection featuring clean lines and premium materials.',
    },
    {
      id: 4,
      title: 'Master Bedroom Collection',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Elegant bedroom suite with custom headboard and matching nightstands.',
    },
    {
      id: 5,
      title: 'Kitchen Cabinet System',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Kitchen',
      description: 'Custom kitchen cabinetry with soft-close mechanisms and premium hardware.',
    },
    {
      id: 6,
      title: 'Restaurant Furniture',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      description: 'Durable and stylish restaurant seating and tables for high-traffic venues.',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Oak Dining Table',
      price: 2499,
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Dining Room',
      description: 'Solid oak dining table with live edge finish',
    },
    {
      id: 2,
      name: 'Executive Walnut Desk',
      price: 1899,
      image: 'https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Premium walnut executive desk with built-in storage',
    },
    {
      id: 3,
      name: 'Modern Coffee Table',
      price: 899,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Contemporary glass-top coffee table with oak base',
    },
    {
      id: 4,
      name: 'Platform Bed Frame',
      price: 1299,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Minimalist platform bed with integrated nightstands',
    },
    {
      id: 5,
      name: 'Kitchen Island Cabinet',
      price: 3299,
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Kitchen',
      description: 'Custom kitchen island with granite top and storage',
    },
    {
      id: 6,
      name: 'Bookshelf Unit',
      price: 1599,
      image: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Office',
      description: 'Floor-to-ceiling modular bookshelf system',
    },
    {
      id: 7,
      name: 'Upholstered Armchair',
      price: 1199,
      image: 'https://images.pexels.com/photos/586763/pexels-photo-586763.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room',
      description: 'Luxury leather armchair with solid wood frame',
    },
    {
      id: 8,
      name: 'Wardrobe System',
      price: 2799,
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom',
      description: 'Custom wardrobe with sliding doors and organizers',
    },
  ];

  const categories = ['All', 'Living Room', 'Bedroom', 'Dining Room', 'Office', 'Kitchen', 'Commercial'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-900">Royalwood</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-900 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-900 transition-colors">About</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-amber-900 transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('catalog')} className="text-gray-700 hover:text-amber-900 transition-colors">Catalog</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-900 transition-colors">Contact</button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-900 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-amber-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-amber-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-700 hover:text-amber-900 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('catalog')} className="block px-3 py-2 text-gray-700 hover:text-amber-900 transition-colors">Catalog</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-amber-900 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-amber-50 to-orange-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Crafting
                <span className="text-amber-900"> Excellence</span>
                <br />
                Since 1985
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Royalwood creates bespoke furniture pieces that blend traditional craftsmanship 
                with contemporary design, delivering heirloom quality for discerning clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('catalog')}
                  className="bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center group"
                >
                  View Catalog
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-amber-900 text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 hover:text-white transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Luxury furniture showroom" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-amber-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Award Winning</p>
                    <p className="text-gray-600">Design Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Craftsmanship Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For nearly four decades, Royalwood has been synonymous with exceptional 
              furniture craftsmanship, combining time-honored techniques with innovative design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Heritage of Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 1985 by master craftsman Robert Royalwood, our company began as a small 
                workshop dedicated to creating custom furniture pieces for local families. Today, 
                we've grown into a renowned manufacturer serving clients across the nation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every piece that leaves our workshop represents our commitment to quality, 
                sustainability, and timeless design. We source only the finest materials and 
                employ skilled artisans who share our passion for perfection.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="font-bold text-2xl text-gray-900">500+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Hammer className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="font-bold text-2xl text-gray-900">2000+</p>
                  <p className="text-gray-600">Pieces Crafted</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-amber-900" />
                  </div>
                  <p className="font-bold text-2xl text-gray-900">15</p>
                  <p className="text-gray-600">Design Awards</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/5974937/pexels-photo-5974937.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Craftsman at work" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/6634286/pexels-photo-6634286.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Wood workshop" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of custom furniture projects, each telling a unique story 
              of craftsmanship and design excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Catalog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive collection of premium furniture pieces, 
              each designed and crafted to the highest standards.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900">${product.price.toLocaleString()}</span>
                    <button className="bg-amber-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create your dream furniture? Contact us today for a consultation 
              and let's bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-600">Mon - Fri: 8AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@royalwoodfurniture.com</p>
                  <p className="text-gray-600">quotes@royalwoodfurniture.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Showroom & Workshop</h3>
                  <p className="text-gray-600">1234 Craftsman Lane</p>
                  <p className="text-gray-600">Woodville, NY 12345</p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Visit Our Showroom</h3>
                <p className="text-gray-600">
                  Experience our craftsmanship in person. Schedule a private appointment 
                  to explore our full collection and discuss custom projects.
                </p>
              </div>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent">
                  <option>Select a category</option>
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Dining Room</option>
                  <option>Office</option>
                  <option>Kitchen</option>
                  <option>Commercial</option>
                  <option>Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Royalwood</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Creating exceptional furniture pieces since 1985. Our commitment to quality 
                craftsmanship and timeless design continues to set us apart in the industry.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-400">5.0 (127 reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-white transition-colors">Catalog</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@royalwoodfurniture.com</li>
                <li>1234 Craftsman Lane<br />Woodville, NY 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Royalwood Furniture Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;