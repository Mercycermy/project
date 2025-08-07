import { useState } from 'react';
import { Filter, Eye, ExternalLink, Calendar, User } from 'lucide-react';
import Section from '../components/Section';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'paper', name: 'Paper & Packaging' },
    { id: 'textile', name: 'Textile Printing' },
    { id: 'promotional', name: 'Promotional Items' },
    { id: 'design', name: 'Design Services' },
    { id: 'gifts', name: 'Gift Materials' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Corporate Magazine Design',
      category: 'paper',
      description: 'Professional magazine design and printing for a major corporation with premium paper quality and stunning visuals.',
      image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Midroc Investment Group',
      date: 'March 2024',
      details: {
        challenge: 'Create a professional quarterly magazine that reflects the company\'s premium brand image.',
        solution: 'Designed a 32-page magazine with high-quality paper (180g cover, 100g internal) featuring corporate achievements and industry insights.',
        results: 'Increased brand visibility and employee engagement by 40%.',
        specifications: '32 pages, A4 size, 180g cover paper, 100g internal paper, Full-color printing'
      }
    },
    {
      id: 2,
      title: 'Hotel Uniform Printing',
      category: 'textile',
      description: 'Custom uniform printing for luxury hotel staff with premium fabric and durable printing.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Inter Luxury Hotel',
      date: 'February 2024',
      details: {
        challenge: 'Design and print professional uniforms for 200+ hotel staff members.',
        solution: 'Created custom polo shirts and aprons with embroidered logos using premium cotton fabric.',
        results: 'Enhanced professional appearance and brand consistency across all departments.',
        specifications: 'Polo shirts (S-XXL), Premium cotton fabric, Embroidered logos, Machine washable'
      }
    },
    {
      id: 3,
      title: 'Marketing Banner Campaign',
      category: 'promotional',
      description: 'Large-scale banner printing for comprehensive marketing campaign across multiple locations.',
      image: 'https://images.pexels.com/photos/4992816/pexels-photo-4992816.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Switch Technologies',
      date: 'January 2024',
      details: {
        challenge: 'Create eye-catching banners for a city-wide technology conference.',
        solution: 'Designed and printed 50+ banners in various sizes with weather-resistant materials.',
        results: 'Increased event attendance by 60% and enhanced brand recognition.',
        specifications: 'Various sizes (2x1m to 6x3m), Weather-resistant vinyl, UV-resistant inks'
      }
    },
    {
      id: 4,
      title: 'School Branding Package',
      category: 'design',
      description: 'Complete branding package including logo design, stationery, and marketing materials.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Abune Samuel School',
      date: 'December 2023',
      details: {
        challenge: 'Develop a complete brand identity for a growing educational institution.',
        solution: 'Created logo, letterheads, business cards, and promotional materials with consistent branding.',
        results: 'Established strong brand recognition and increased enrollment by 25%.',
        specifications: 'Logo design, Letterhead printing, Business cards, Brochures, Signage'
      }
    },
    {
      id: 5,
      title: 'Premium Business Cards',
      category: 'paper',
      description: 'Premium business card printing with special finishes and high-quality materials.',
      image: 'https://images.pexels.com/photos/6344231/pexels-photo-6344231.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Various Clients',
      date: 'Ongoing',
      details: {
        challenge: 'Create memorable business cards that stand out in professional settings.',
        solution: 'Used premium 300g paper with matte finish and spot UV coating for logos.',
        results: 'Improved client networking success and brand memorability.',
        specifications: '3.5x2 inch, 300g premium paper, Matte finish, Spot UV coating'
      }
    },
    {
      id: 6,
      title: 'Promotional T-Shirts',
      category: 'textile',
      description: 'Custom t-shirt printing for corporate events and promotional campaigns.',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600',
      client: 'Corporate Events',
      date: 'Multiple Projects',
      details: {
        challenge: 'Produce high-quality promotional t-shirts for various corporate events.',
        solution: 'Screen printing on premium cotton t-shirts with vibrant, long-lasting colors.',
        results: 'Enhanced event branding and participant satisfaction.',
        specifications: 'Premium cotton, Screen printing, Various sizes (S-3XL), Colorfast inks'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  interface ProjectDetails {
    challenge: string;
    solution: string;
    results: string;
    specifications: string;
  }

  interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    client: string;
    date: string;
    details: ProjectDetails;
  }

  interface ProjectModalProps {
    project: Project;
    onClose: () => void;
  }

  const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
            <span className="px-3 py-1 bg-primary-300 text-primary-50 rounded-full text-sm font-medium capitalize">
              {project.category}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold">{project.date}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Challenge</h3>
              <p className="text-gray-700 leading-relaxed">{project.details.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-200">Solution</h3>
              <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Results</h3>
              <p className="text-gray-700 leading-relaxed">{project.details.results}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary-300">Specifications</h3>
              <p className="text-gray-700 leading-relaxed">{project.details.specifications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-surface text-primary-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore our diverse range of completed projects showcasing our expertise in printing, 
            design, and advertising solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <Section>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center mr-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <span className="text-gray-600 font-medium">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-primary-200 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-primary-100 font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Client: {project.client}</span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-primary-100 hover:text-primary-200 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="What Our Clients Say" className='bg-primary-50'>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Excellent quality and professional service. They delivered exactly what we needed 
                for our hotel branding and uniforms."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">IH</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Inter Luxury Hotel</p>
                <p className="text-sm text-gray-600">Hospitality Industry</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Outstanding design work and printing quality. Their attention to detail 
                and creative approach exceeded our expectations."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">MI</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Midroc Investment</p>
                <p className="text-sm text-gray-600">Investment Group</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="flex text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Great partnership for our school's branding needs. Professional, 
                reliable, and always delivers on time."
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AS</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Abune Samuel School</p>
                <p className="text-sm text-gray-600">Educational Institution</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className='bg-#F5F1E9'>
        <div className="text-center text-primary-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Next Project?
          </h2>
          <p className="text-xl mb-8 ">
            Let's discuss how we can bring your vision to life with our expertise and creativity.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </Section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;