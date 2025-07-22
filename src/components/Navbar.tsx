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

  const navBg = isHome && !scrolled ? 'bg-transparent' : 'bg-primary-50 shadow-md';

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isHome && !scrolled ? 'mt-14 md:mt-18 h-36' : 'h-16'}`}>
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Maleda Printing Logo"
              className={`transition-all duration-300 ease-in-out ${
  isHome
    ? scrolled
      ? "h-10 w-10"
      : "h-36 w-24"
    : "h-14 w-14"
}`}

            />
            <span className={`text-xl font-bold ${isHome && !scrolled ? "text-primary-700 drop-shadow-lg" : "text-primary-700"}`}>
              Maleda Printing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? (isHome && !scrolled ? 'text-primary-50 bg-primary-400/20 font-semibold' : 'text-primary-400 bg-primary-100 font-semibold')
                      : (isHome && !scrolled ? 'text-primary-50 hover:text-primary-200 hover:bg-primary-400/10' : 'text-primary-600 hover:text-primary-400 hover:bg-primary-100')
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isHome && !scrolled ? "text-primary-50 hover:text-primary-200" : "text-primary-600 hover:text-primary-400"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isHome && !scrolled ? "bg-primary-400/80" : "bg-white"} border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? (isHome && !scrolled ? 'text-primary-50 bg-primary-400/40 font-semibold' : 'text-primary-400 bg-primary-100 font-semibold')
                    : (isHome && !scrolled ? 'text-primary-50 hover:text-primary-200 hover:bg-primary-400/20' : 'text-primary-600 hover:text-primary-400 hover:bg-primary-100')
                }`}
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
