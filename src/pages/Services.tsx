import { Shirt, Coffee, Palette, Briefcase, BookOpen, Package, Printer, Zap, ChevronDown } from 'lucide-react';
import Section from '../components/Section';
import { useState } from 'react';

const Services = () => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (categoryIndex: number, serviceIndex: number): void => {
    const key = `${categoryIndex}-${serviceIndex}`;
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const serviceCategories = [
    {
      icon: Package,
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
      icon: Shirt,
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
      icon: Zap,
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
      icon: Coffee,
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
      icon: Palette,
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
      icon: Briefcase,
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
      icon: BookOpen,
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

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-surface to-secondary  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Printer className="h-16 w-16 text-primary-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Printing Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive printing and design solutions for every need. From traditional printing 
            to modern digital solutions, we deliver exceptional results.
          </p>
        </div>
      </section>

      <Section title="What We Offer" subtitle="Comprehensive printing and design solutions for every need">
        <div className="grid lg:grid-cols-2 gap-12">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`${category.color} p-6`}>
                <div className="flex items-center text-white">
                  <category.icon className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-white/90 mt-2">{category.description}</p>
              </div>
              <div className="p-6 border-t">
                <div className="rounded-xl border border-gray-100 shadow-inner">
                  {category.services.map((service, serviceIndex) => {
                    const key = `${catIndex}-${serviceIndex}`;
                    const isOpen = openDropdowns[key];
                    return (
                      <div key={serviceIndex} className="border-b last:border-none">
                        <button
                          onClick={() => toggleDropdown(catIndex, serviceIndex)}
                          className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 ${category.color} rounded-full mt-1`}></div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-8 pb-6 pt-2 text-sm text-gray-700 transition-all duration-300 ease-in-out space-y-3">
                            <p className="text-gray-600">{service.desc}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
