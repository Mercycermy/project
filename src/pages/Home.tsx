import React from 'react';
import { ArrowRight, Award, Clock, Users, Star, Printer, Palette, Package, Shirt, Gift } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Section from '../components/Section';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'State-of-the-art printing technology with premium materials for exceptional results.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality. We understand your deadlines matter.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of printing and design expertise.'
    },
    {
      icon: Star,
      title: 'Customer First',
      description: 'Exceptional service and support throughout your printing journey.'
    }
  ];

  const services = [
    {
      title: 'Paper & Packaging',
      description: 'Professional magazines, books, brochures, business cards, and custom packaging solutions.',
      image: 'https://images.pexels.com/photos/6344231/pexels-photo-6344231.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Textile Printing',
      description: 'Custom t-shirts, uniforms, caps, reflective vests, and premium textile solutions.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Shirt,
      color: 'bg-green-500'
    },
    {
      title: 'Promotional Items',
      description: 'Eye-catching banners, rollups, flags, umbrellas, and branded promotional materials.',
      image: 'https://images.pexels.com/photos/4992816/pexels-photo-4992816.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Gift,
      color: 'bg-red-500'
    },
    {
      title: 'Design Services',
      description: 'Creative logo design, branding, digital advertising, and complete visual identity solutions.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Palette,
      color: 'bg-yellow-500'
    }
  ];

  const clients = [
    { name: 'Inter Luxury Hotel', logo: '🏨' },
    { name: 'Midroc Investment', logo: '🏢' },
    { name: 'Abune Samuel School', logo: '🎓' },
    { name: 'Switch Technologies', logo: '💻' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-4 border-yellow-400/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-red-500/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-green-500/20 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Printer className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-yellow-400">We are the</span>
              <br />
              <span className="text-white">Rising!</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Premium printing solutions that bring your vision to life. From concept to creation, 
              we deliver exceptional quality that makes your brand stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/services">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold">
                  Explore Services
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                  Get Free Quote
                </Button>
              </Link>
            </div>
            
            {/* Printing Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-sm md:text-base opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">2000+</div>
                <div className="text-sm md:text-base opacity-90">Projects Printed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-sm md:text-base opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm md:text-base opacity-90">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section title="Why Choose Maleda Printing?" background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section title="Our Printing Services" subtitle="Complete printing solutions for all your business needs">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 p-3 ${service.color} rounded-full`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link to="/services">
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted Clients */}
      <Section title="Trusted by Leading Companies" background="blue">
        <div className="grid md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{client.logo}</div>
              <h3 className="font-semibold text-gray-900">{client.name}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Printing Process */}
      <Section title="Our Printing Process" subtitle="From concept to delivery, we ensure quality at every step">
        <div className="grid md:grid-cols-5 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'Understanding your vision' },
            { step: '02', title: 'Design', desc: 'Creative concept development' },
            { step: '03', title: 'Production', desc: 'High-quality printing' },
            { step: '04', title: 'Quality Check', desc: 'Rigorous inspection' },
            { step: '05', title: 'Delivery', desc: 'On-time completion' }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                {process.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{process.title}</h3>
              <p className="text-gray-600 text-sm">{process.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Print Your Success?
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join hundreds of satisfied clients who trust us with their printing needs. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <a href="tel:+251935854117">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
                  Call Now: +251-935-85-4117
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;