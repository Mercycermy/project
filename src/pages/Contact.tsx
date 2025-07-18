import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (static for now)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Arat Kilo, Where Angla Burger is located', 'Off no M-001, Addis Ababa, Ethiopia']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+251-935-85-4117', '+251-919-18-6908']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['MaledaMaledal4@gmail.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your project? Get in touch with our team for a free consultation 
            and personalized quote. We're here to help bring your vision to life.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="paper">Paper & Packaging</option>
                    <option value="textile">Textile Printing</option>
                    <option value="promotional">Promotional Items</option>
                    <option value="design">Design Services</option>
                    <option value="gifts">Gift Materials</option>
                    <option value="office">Office Supplies</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button type="submit" size="lg" icon={Send} className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+251935854117"
                className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +251-935-85-4117
              </a>
              <a
                href="mailto:MaledaMaledal4@gmail.com"
                className="flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Find Us</h2>
          <p className="text-gray-600">
            Visit our office in Arat Kilo, Addis Ababa for consultations and project discussions.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Arat Kilo, Where Angla Burger is located<br />
                Off no M-001, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What is your typical turnaround time?</h3>
              <p className="text-gray-600 mb-4">
                Our turnaround time varies depending on the project scope and complexity. 
                Simple projects like business cards can be completed in 2-3 days, while 
                larger projects may take 1-2 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer design services?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer comprehensive design services including logo design, 
                branding, marketing materials, and custom artwork creation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What file formats do you accept?</h3>
              <p className="text-gray-600 mb-4">
                We accept various file formats including PDF, AI, PSD, JPG, PNG, 
                and many others. Our team can work with you to ensure proper file preparation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you provide delivery services?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer delivery services within Addis Ababa and surrounding areas. 
                Delivery charges may apply depending on location and order size.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;