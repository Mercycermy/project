import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'dark';
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  background = 'white'
}) => {
  const backgrounds = {
    white: 'bg-primary-50',
    gray: 'bg-primary-100',
    blue: 'bg-primary-200',
    dark: 'bg-primary-600'
  };

  const textColors = {
    white: 'text-primary-600',
    gray: 'text-primary-600',
    blue: 'text-primary-600',
    dark: 'text-primary-50'
  };

  return (
    <section className={`py-16 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColors[background]}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${background === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;