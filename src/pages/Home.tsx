import { ArrowRight, Award, Clock, Users, Star, Palette, Package, Shirt, Gift } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import homeHeroImg from '../assets/home.png'; 

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
      color: 'bg-primary-200'
    },
    {
      title: 'Textile Printing',
      description: 'Custom t-shirts, uniforms, caps, reflective vests, and premium textile solutions.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Shirt,
      color: 'bg-primary-300'
    },
    {
      title: 'Promotional Items',
      description: 'Eye-catching banners, rollups, flags, umbrellas, and branded promotional materials.',
      image: 'https://images.pexels.com/photos/4992816/pexels-photo-4992816.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Gift,
      color: 'bg-primary-400'
    },
    {
      title: 'Design Services',
      description: 'Creative logo design, branding, digital advertising, and complete visual identity solutions.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: Palette,
      color: 'bg-primary-500'
    }
  ];

  const clients = [
    { name: 'Inter Luxury Hotel', logo: '🏨' },
    { name: 'Midroc Investment', logo: '🏢' },
    { name: 'Abune Samuel School', logo: '🎓' },
    { name: 'Switch Technologies', logo: '💻' }
  ];

  return (
    <div>    
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={homeHeroImg}
          alt="Maleda Printing Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 z-10 w-full">
          <div className="text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="text-primary-700">We are the</span>
              <span className="text-primary-50">Rising!</span>
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed text-primary-50">
              Your trusted partner for all printing needs. From business cards to large format banners, we deliver quality and service that stands out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/services">
                <Button size="sm" className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 text-base font-semibold">
                  Explore Services
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="sm" className="border-2 border-primary-400 text-primary-600 hover:bg-primary-600 hover:text-primary-50 px-6 py-3 text-base font-semibold">
                  Get Free Quote
                </Button>
              </Link>
            </div>
            
            {/* Printing Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-sm mt-8">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">500+</div>
        <div className="opacity-80">Happy Clients</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2000+</div>
        <div className="opacity-80">Projects Printed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">15+</div>
        <div className="opacity-80">Years Experience</div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">24/7</div>
        <div className="opacity-80">Support</div>
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
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-400 transition-colors">
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
                  <Button variant="outline" size="sm" className="border-primary-500 text-primary-300 hover:bg-primary-400 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted Clients */}
      <Section title="Trusted by Leading Companies" className='bg-primary-100' >
        <div className="grid md:grid-cols-4 gap-8 ">
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
              <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
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
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-primary-300 hover:text-gray-900 px-8 py-4 text-lg font-semibold">
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