'use client'

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-wood-900 to-wood-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-wood-100 max-w-3xl mx-auto leading-relaxed">
            Ready to create your dream furniture? Contact us today for a consultation 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Phone</h3>
                <p className="text-wood-200 mb-1">(555) 123-4567</p>
                <p className="text-wood-300 text-sm">Mon - Fri: 8AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                <p className="text-wood-200 mb-1">info@royalwoodfurniture.com</p>
                <p className="text-wood-200">quotes@royalwoodfurniture.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Showroom & Workshop</h3>
                <p className="text-wood-200 mb-1">1234 Craftsman Lane</p>
                <p className="text-wood-200">Woodville, NY 12345</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 p-3 rounded-full flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Business Hours</h3>
                <p className="text-wood-200 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-wood-200 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-wood-200">Sunday: By appointment only</p>
              </div>
            </div>

            <div className="bg-amber-500/10 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
              <h3 className="font-semibold text-white text-lg mb-2">Visit Our Showroom</h3>
              <p className="text-wood-200 leading-relaxed">
                Experience our craftsmanship in person. Schedule a private appointment 
                to explore our full collection and discuss custom projects with our design team.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-wood-300 backdrop-blur-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-wood-300 backdrop-blur-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-wood-300 backdrop-blur-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-wood-300 backdrop-blur-sm"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Project Type</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white backdrop-blur-sm">
                <option value="" className="text-gray-900">Select a category</option>
                <option value="living-room" className="text-gray-900">Living Room</option>
                <option value="bedroom" className="text-gray-900">Bedroom</option>
                <option value="dining-room" className="text-gray-900">Dining Room</option>
                <option value="office" className="text-gray-900">Office</option>
                <option value="kitchen" className="text-gray-900">Kitchen</option>
                <option value="commercial" className="text-gray-900">Commercial</option>
                <option value="custom" className="text-gray-900">Custom Project</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Budget Range</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white backdrop-blur-sm">
                <option value="" className="text-gray-900">Select budget range</option>
                <option value="under-1000" className="text-gray-900">Under $1,000</option>
                <option value="1000-5000" className="text-gray-900">$1,000 - $5,000</option>
                <option value="5000-10000" className="text-gray-900">$5,000 - $10,000</option>
                <option value="10000-25000" className="text-gray-900">$10,000 - $25,000</option>
                <option value="over-25000" className="text-gray-900">Over $25,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-wood-300 backdrop-blur-sm resize-none"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 transform hover:scale-105 duration-200"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact