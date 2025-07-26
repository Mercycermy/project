import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust scroll threshold here
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true); // always solid for non-home pages
    }
  }, [isHome]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-6 w-full z-50">
  <div className="relative h-[72px]">
    {/* Gradient Background from center to right with curved left */}
    <div className="absolute top-0 left-1/2 w-1/2 h-full rounded-l-full bg-gradient-to-r from-[#ffd25b] via-[#fff078] to-[#f8b13d]"></div>

    {/* Logo only on homepage - floating outside */}
    {isHome && (
  <div className="absolute top-12 left-12 -translate-y-1/2 z-20">
    <Link to="/" className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Maleda Printing Logo"
        className="sm:w-14 md:w-16 object-contain drop-shadow-lg"
      />
    </Link>
  </div>
)}


    {/* Main Nav Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
      <div className="hidden md:flex space-x-6 pr-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-white px-4 py-2 rounded-full font-medium transition duration-200 ${
              location.pathname === item.href
                ? 'bg-white text-[#f8b13d] font-bold'
                : 'hover:bg-white/30'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isOpen && (
    <div className="md:hidden bg-gradient-to-r from-[#fff078] via-[#ffd25b] to-[#f8b13d] text-white">
      <div className="px-4 py-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className="block text-base font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
