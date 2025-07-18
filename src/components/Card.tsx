import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  className = '',
  children,
  hover = true
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${
      hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
    } ${className}`}>
      {image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {Icon && (
          <div className="flex items-center mb-4">
            <Icon className="h-8 w-8 text-blue-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
        )}
        
        {!Icon && (
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        )}
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {children}
      </div>
    </div>
  );
};

export default Card;