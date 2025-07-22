import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" icon={Home} className="w-full">
              Go to Homepage
            </Button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center w-full px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need help? Contact us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+251935854117" 
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              +251-935-85-4117
            </a>
            <a 
              href="mailto:MaledaMaledal4@gmail.com" 
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              MaledaMaledal4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;