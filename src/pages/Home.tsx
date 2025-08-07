import { useState } from 'react';
import { ArrowRight, Award, Clock, Users, Star } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import homeHeroImg from '../assets/home.png';
import Modal from '../components/Modal';


interface Service {
  name: string;
  desc: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  color: string;
  services: Service[];
}

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

  const [modalContent, setModalContent] = useState<ServiceCategory | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

    const serviceCategories = [
    {
      title: 'Paper & Packaging',
      description: 'Complete paper printing and packaging solutions for all your business needs.',
      color: 'bg-primary-200',
      services: [
        { name: 'Magazines', desc: 'Professional magazine printing with various paper types (60g-300g+)' },
        { name: 'Books', desc: 'High-quality book printing with custom covers and binding' },
        { name: 'Calendars', desc: 'Custom calendar printing for promotional and business use' },
        { name: 'Brochures', desc: 'Eye-catching brochure design and printing' },
        { name: 'Flyers', desc: 'Vibrant flyer printing for marketing campaigns' },
        { name: 'Letterheads', desc: 'Professional letterhead printing for corporate identity' },
        { name: 'Business Cards', desc: 'Premium business cards (3.5 x 2 inch, 250g+ paper)' },
        { name: 'Paper Boxes', desc: 'Custom packaging boxes for products' },
        { name: 'Paper Bags', desc: 'Eco-friendly branded paper bags' }
      ]
    },
    {
      title: 'Textile Printing',
      description: 'Custom textile printing on various materials with vibrant colors and durable quality.',
      color: 'bg-primary-300',
      services: [
        { name: 'T-shirts', desc: 'Custom t-shirt printing (S-3XL sizes available)' },
        { name: 'Polo Shirts', desc: 'Professional polo shirt printing with custom logos' },
        { name: 'Caps & Hats', desc: 'Customized caps and hats with embroidery or printing' },
        { name: 'Reflective Vests & Uniforms', desc: 'Safety wear and uniform printing' },
        { name: 'Aprons', desc: 'Custom apron printing for restaurants and businesses' },
        { name: 'Scarves', desc: 'Personalized scarf printing with custom designs' },
        { name: 'Pillows', desc: 'Custom pillow printing for home and office' }
      ]
    },
    {
      title: 'Promotional Items',
      description: 'Eye-catching promotional materials to boost your brand visibility and marketing efforts.',
      color: 'bg-primary-400',
      services: [
        { name: 'Light Boxes', desc: 'Illuminated advertising displays for maximum visibility' },
        { name: 'Rollup Banners', desc: 'Portable rollup banners for events and exhibitions' },
        { name: 'Banners', desc: 'Large format banner printing for outdoor advertising' },
        { name: 'Umbrellas', desc: 'Branded umbrellas for promotional campaigns' },
        { name: 'Flags', desc: 'Custom flag printing for events and branding' },
        { name: 'Stickers', desc: 'High-quality sticker printing in various sizes' },
        { name: 'Key Chains', desc: 'Custom keychain printing and manufacturing' }
      ]
    },
    {
      title: 'Drinkware',
      description: 'Custom drinkware solutions perfect for corporate gifts and promotional campaigns.',
      color: 'bg-primary-500',
      services: [
        { name: 'Smart Thermos', desc: 'High-tech thermos with temperature control' },
        { name: 'Ceramic Cups', desc: 'Custom ceramic mug printing with logos' },
        { name: 'Magic Cups', desc: 'Color-changing mugs with heat-sensitive printing' },
        { name: 'Travel Mugs', desc: 'Insulated travel mugs for on-the-go branding' },
        { name: 'Water Bottles', desc: 'Custom water bottle printing and branding' },
        { name: 'Glass Cups', desc: 'Premium glass printing for corporate gifts' }
      ]
    },
    {
      title: 'Design Services',
      description: 'Creative design solutions that bring your brand vision to life with professional expertise.',
      color: 'bg-primary-600',
      services: [
        { name: 'Logo Design', desc: 'Professional logo creation for brand identity' },
        { name: 'Brand Identity', desc: 'Complete branding packages and guidelines' },
        { name: 'Digital Advertising Posters', desc: 'Eye-catching digital ad designs' },
        { name: 'Book & Magazine Covers', desc: 'Creative cover design for publications' },
        { name: 'Interior Design', desc: 'Space planning and interior design services' },
        { name: 'Marketing Materials', desc: 'Complete marketing collateral design' }
      ]
    },
    {
      title: 'Gift Materials',
      description: 'Unique and personalized gift items perfect for corporate events and special occasions.',
      color: 'bg-primary-100',
      services: [
        { name: 'Custom Watches', desc: 'Personalized watches with company branding' },
        { name: 'Magic Pillows', desc: 'Color-changing pillows with custom designs' },
        { name: 'Puzzles', desc: 'Custom puzzle printing with personal photos' },
        { name: 'USB Flash Drives', desc: 'Branded USB drives with custom shapes' },
        { name: 'Executive Gifts', desc: 'Premium corporate gift solutions' },
        { name: 'Branded Accessories', desc: 'Various promotional accessories' }
      ]
    },
    {
      title: 'School & Office Supply',
      description: 'Essential office and school supplies customized with your branding and specifications.',
      color: 'bg-primary-600',
      services: [
        { name: 'Agendas & Notebooks', desc: 'Custom notebook and agenda printing' },
        { name: 'Pens & Pen Holders', desc: 'Branded writing instruments and holders' },
        { name: 'Business Card Holders', desc: 'Professional card holder printing' },
        { name: 'Mouse Pads', desc: 'Custom mouse pad printing with logos' },
        { name: 'Desk Accessories', desc: 'Various office accessories with branding' },
        { name: 'Custom Stationery', desc: 'Complete stationery sets for businesses' }
      ]
    }
  ];
  const clients = [
    { name: 'Inter Luxury Hotel', logo: '🏨' },
    { name: 'Midroc Investment', logo: '🏢' },
    { name: 'Abune Samuel School', logo: '🎓' },
    { name: 'Switch Technologies', logo: '💻' }
  ];

  const openModal = (category: ServiceCategory) => {
    setModalContent(category);
    setShowModal(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? serviceCategories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === serviceCategories.length - 1 ? 0 : prev + 1));
  };

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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="text-white">We are the </span>
              <span className="text-primary-700">Rising!</span>
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed text-white">
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
                <Button variant="outline" size="sm" className="border-2 border-primary-300 text-white hover:bg-primary-600 hover:text-primary-50 px-6 py-3 text-base font-semibold">
                  Our Products
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-sm mt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="opacity-80 text-white">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2000+</div>
                <div className="opacity-80 text-white">Projects Printed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">1500+</div>
                <div className="opacity-80 text-white">Custom Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="opacity-80 text-white">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section title={<span className='text-primary-700'>Why Choose Maleda Printing?</span>} background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-400 transition-colors">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-light">{feature.title}</h3>
              <p className="text-white leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Carousel */}
      <Section id="services" title="Our Services" subtitle="Explore a wide range of customized solutions">
        <div className="relative w-full">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 z-20"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 z-20"
          >
            →
          </button>

          <div className="flex justify-center space-x-4 overflow-hidden px-12">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + serviceCategories.length) % serviceCategories.length;
              const service = serviceCategories[index];
              const isCenter = offset === 0;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300
                    ${isCenter ? 'scale-105 shadow-2xl' : 'scale-90 opacity-70'}
                    flex-shrink-0 w-64 md:w-72`}
                >
                  <div className={`relative h-48 overflow-hidden ${service.color}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl text-white opacity-20">📄</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <button
                      className="border border-primary-500 text-primary-300 hover:bg-primary-400 hover:text-white rounded px-4 py-2 text-sm font-semibold"
                      onClick={() => openModal(service)}
                    >
                      See More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {showModal && modalContent && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
          <p className="text-gray-700 mb-4">{modalContent.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {modalContent.services.map((service, idx) => (
              <li key={idx}>
                <strong>{service.name}:</strong> {service.desc}
              </li>
            ))}
          </ul>
        </Modal>
      )}

      {/* Trusted Clients */}
      <Section title="Trusted by Leading Companies">
        <div className="grid md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-light rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
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
      <Section className='bg-#F5F1E9'>
        <div className="text-center text-primary-400">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Print Your Success?
            </h2>
            <p className="text-xl mb-8 text- leading-relaxed">
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
                <Button variant="outline" size="lg" className="border-2 border-white  hover:bg-primary-300 hover:text-gray-900 px-8 py-4 text-lg font-semibold">
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
