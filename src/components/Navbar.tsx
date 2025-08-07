import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) return;
      const scrollTop = window.scrollY > 50;
      document.body.classList.toggle('scrolled', scrollTop);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const renderLink = (item: { name: string; href: string }) => {
    const isHashLink = item.href.includes('#');
    const isActive =
      (isHashLink && location.hash === `#${item.href.split('#')[1]}`) ||
      (!isHashLink && location.pathname === item.href);

    const baseClass = `px-4 py-2 rounded-full transition duration-200`;
    const activeClass =
      'text-[#d62828] font-extrabold text-lg underline underline-offset-4';
    const inactiveClass = 'text-white hover:bg-white/30 font-medium';

    const className = `${baseClass} ${isActive ? activeClass : inactiveClass}`;

    const commonProps = {
      className,
      onClick: () => setIsOpen(false),
    };

    return isHashLink ? (
      <HashLink smooth to={item.href} {...commonProps} key={item.name}>
        {item.name}
      </HashLink>
    ) : (
      <Link to={item.href} {...commonProps} key={item.name}>
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="relative h-[72px] flex items-center justify-center px-6">
        {/* Desktop Nav */}
        <div className="hidden md:flex rounded-full px-12 py-10 bg-gradient-to-r from-[#ffd25b] via-[#fff078] to-[#f8b13d] shadow-lg w-[600px] justify-center">
          <div className="flex space-x-6">
            {navigation.map(renderLink)}
          </div>
        </div>

        {/* Logo */}
        {isHome && (
          <div className="absolute top-16 left-12 -translate-y-1/2 z-20">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Maleda Printing Logo"
                className="w-10 sm:w-18 md:w-18 object-contain drop-shadow-lg"
              />
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6 z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-gradient-to-r from-[#fff078] via-[#ffd25b] to-[#f8b13d] p-2 rounded-full shadow-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#fff078] via-[#ffd25b] to-[#f8b13d] text-white">
          <div className="px-4 py-4 space-y-2">
            {navigation.map(renderLink)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
