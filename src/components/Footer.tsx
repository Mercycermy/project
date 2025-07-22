import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-100">Maleda Printing & Advertising</h3>
            <p className="text-primary-200 mb-4">
              Your trusted partner for high-quality printing solutions, design services, and advertising materials.
              With years of experience and commitment to excellence, we deliver exceptional results for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-200 hover:text-primary-100 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-primary-200 hover:text-primary-100 transition-colors">Services</a></li>
              <li><a href="/portfolio" className="text-primary-200 hover:text-primary-100 transition-colors">Portfolio</a></li>
              <li><a href="/contact" className="text-primary-200 hover:text-primary-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-100">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-100 mt-0.5" />
                <div>
                  <p className="text-primary-200">Arat Kilo, Where Angla Burger is located</p>
                  <p className="text-primary-200">Off no M-001, Addis Ababa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-100" />
                <div>
                  <p className="text-primary-200">+251-935-85-4117</p>
                  <p className="text-primary-200">+251-919-18-6908</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-100" />
                <p className="text-primary-200">MaledaMaledal4@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-8 pt-8 text-center">
          <p className="text-primary-300">
            © 2024 Maleda Printing & Advertising. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;