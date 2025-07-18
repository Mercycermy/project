import React from 'react';
import { FileText, Shirt, Gift, Coffee, Palette, Briefcase, BookOpen, Package, Printer, Zap } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

const Services = () => {
  const serviceCategories = [
    {
      icon: Package,
      title: 'Paper & Packaging',
      description: 'Complete paper printing and packaging solutions for all your business needs.',
      color: 'bg-blue-500',
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
      icon: Shirt,
      title: 'Textile Printing',
      description: 'Custom textile printing on various materials with vibrant colors and durable quality.',
      color: 'bg-green-500',
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
      icon: Zap,
      title: 'Promotional Items',
      description: 'Eye-catching promotional materials to boost your brand visibility and marketing efforts.',
      color: 'bg-red-500',
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
      icon: Coffee,
      title: 'Drinkware',
      description: 'Custom drinkware solutions perfect for corporate gifts and promotional campaigns.',
      color: 'bg-yellow-500',
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
      icon: Palette,
      title: 'Design Services',
      description: 'Creative design solutions that bring your brand vision to life with professional expertise.',
      color: 'bg-green-500',
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
      icon: Briefcase,
      title: 'Gift Materials',
      description: 'Unique and personalized gift items perfect for corporate events and special occasions.',
      color: 'bg-red-500',
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
      icon: BookOpen,
      title: 'School & Office Supply',
      description: 'Essential office and school supplies customized with your branding and specifications.',
      color: 'bg-blue-500',
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

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your needs, requirements, and vision for the project.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates designs and plans the production process.'
    },
    {
      step: '03',
      title: 'Production',
      description: 'We use high-quality materials and advanced printing technology.'
    },
    {
      step: '04',
      title: 'Quality Control',
      description: 'Every item undergoes rigorous quality checks before delivery.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'On-time delivery with excellent customer service and support.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Printer className="h-16 w-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Printing Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive printing and design solutions for every need. From traditional printing 
            to modern digital solutions, we deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <Section title="What We Offer" subtitle="Comprehensive printing and design solutions for every need">
        <div className="grid lg:grid-cols-2 gap-12">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`${category.color} p-6`}>
                <div className="flex items-center text-white">
                  <category.icon className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-white/90 mt-2">{category.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-2 h-2 ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section title="Our Process" subtitle="How we deliver exceptional results" background="blue">
        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-600 transition-colors">
                <span className="text-white font-bold text-lg">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Our Services */}
      <Section title="Why Choose Our Services?" background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
            <p className="text-gray-600">Premium materials and cutting-edge printing technology</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
              <Shirt className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customization</h3>
            <p className="text-gray-600">Fully customizable options for size, color, and design</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick turnaround times without compromising quality</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Professional guidance throughout your project</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+251935854117" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;