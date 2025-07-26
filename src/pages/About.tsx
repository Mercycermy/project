import { Target, Eye, Trophy, Heart, Users, Award } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer Intelligence.',
      description: 'We believe our customers are intelligent and deserve respect, transparency, and honest communication in all our interactions.'
    },
    {
      icon: Trophy,
      title: 'Create, Don\'t Just Fulfill',
      description: 'We don\'t just fulfill demands - we create solutions that exceed expectations and add value to your business.'
    },
    {
      icon: Heart,
      title: 'Always Creative',
      description: 'Creativity is at the heart of everything we do. We constantly innovate and find new ways to solve challenges.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Recognized for establishing competitive standards in printing and advertising excellence.'
    },
    {
      icon: Target,
      title: 'Cost Efficiency',
      description: 'Helping businesses reduce overseas printing costs by providing high-quality services locally.'
    },
    {
      icon: Eye,
      title: 'Creative Innovation',
      description: 'Building new creative capabilities in design, printing, and advertising solutions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section className="bg-primary-50">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Maleda Printing & Advertising
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We are a leading provider of printing solutions for businesses of all sizes. 
            With years of experience and a team of skilled professionals, we are committed to 
            delivering high-quality printing services that meet the needs of our clients.
          </p>
        </div>
      </Section>

      {/* Vision, Mission, Goals */}
      <Section title="Our Foundation">
        <div className="grid lg:grid-cols-3 gap-8">
          <Card
            title="Our Vision"
            description="To be the best and the first choice of customers in the printing industry. We aim to expand our branches and products to be available everywhere our customers need us."
            icon={Eye}
          />
          <Card
            title="Our Mission"
            description="To boost the printing sector's competitiveness and provide new value to our clients through innovative solutions and exceptional service quality."
            icon={Target}
          />
          <Card
            title="Our Goals"
            description="To establish competitive excellence in printing and advertising both domestically and abroad, while reducing costs and building creative capabilities."
            icon={Trophy}
          />
        </div>
      </Section>

      {/* Core Values */}
      <Section title="Our Core Values" subtitle="The principles that guide our work and relationships" className='bg-primary-50'>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="Our Achievements" subtitle="What we're proud of and what drives us forward">
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose Us?" className='bg-primary-50'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
            <p className="text-gray-600">Premium materials and cutting-edge printing technology</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">Competitive pricing without compromising on quality</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customization Options</h3>
            <p className="text-gray-600">Tailored solutions to meet your specific needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">Fast delivery times to meet your deadlines</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
            <p className="text-gray-600">Exceptional support throughout your project</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">Eco-friendly materials and responsible practices</p>
          </div>
        </div>
      </Section>

      {/* Customer Support */}
      <Section title="Customer Support" className='bg-light'>
        <div className="text-center text-primary-400 max-w-4xl mx-auto">
          <p className="text-xl mb-8">
            Our team of customer support professionals are always on hand to answer any questions 
            and provide guidance throughout the printing process. We believe that strong relationships 
            are key to our success, and we strive to build long-lasting partnerships with each of our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">24/7</h3>
              <p>Customer Support</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">500+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;