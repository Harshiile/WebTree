import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, Clock, Phone, Mail, MapPin, Star, Users, Trophy, ChevronRight } from 'lucide-react';

interface Theme1Props {
  content: any;
}

const Theme_1: React.FC<Theme1Props> = ({ content }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ 
            opacity: 0.2,
            backgroundImage: `url('${content.hero.backgroundImage}')`
          }}
        />

        <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Car className="h-8 w-8" />
            <span className="text-2xl font-bold">{content.companyName}</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Features', 'Services', 'Testimonials', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-200"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.hero.title}
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.hero.description}
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.services.map((service: any, index: number) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <ChevronRight className="text-blue-600 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Select Package
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...fadeInUp}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer id="contact" className="bg-blue-900 text-white py-12">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">{content.companyName}</span>
              </div>
              <p className="text-blue-200">Making your car shine since 2008</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{content.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>{content.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{content.contact.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-blue-200">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 {content.companyName}. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Theme_1;
