import React from 'react';
import { FaRss, FaSearch, FaTags, FaCalendarAlt } from 'react-icons/fa';

const Blog = () => {
  // Placeholder blog posts for future implementation
  const comingSoonFeatures = [
    {
      icon: FaRss,
      title: 'Regular Updates',
      description: 'Fresh content about web development, technology trends, and personal insights.'
    },
    {
      icon: FaSearch,
      title: 'Search Functionality',
      description: 'Easily find articles by keywords, tags, or categories.'
    },
    {
      icon: FaTags,
      title: 'Categorized Content',
      description: 'Organized articles by topics like React, Node.js, career advice, and more.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Archive System',
      description: 'Browse articles by date and track my learning journey over time.'
    }
  ];

  const upcomingTopics = [
    'Java',
    'Spring Boot',
    'Microservices',
    'Agentic Architecture',
    'MCP Servers',
    'System Design'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-width">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Thoughts, tutorials, and insights about web development, technology, and career growth.
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Coming Soon</span>
            </div>

            {/* Main Illustration */}
            <div className="max-w-lg mx-auto">
              <div className="card p-12 bg-gradient-to-br from-primary-50 to-purple-50">
                <div className="text-8xl mb-6">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Blog is Under Construction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  I'm working on bringing you quality content about web development, 
                  technology insights, and my professional journey. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Features and functionality that will be available when the blog launches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div key={index} className="card p-8 space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-primary-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Upcoming Topics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A preview of the articles and tutorials I'm planning to write
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingTopics.map((topic, index) => (
              <div key={index} className="card p-6 text-center">
                <h3 className="font-medium text-gray-900">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated</h2>
              <p className="text-xl text-primary-100">
                Be the first to know when new articles are published. 
                Get notified about the latest posts and insights.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-primary-200 text-sm mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Let's Connect While You Wait
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow me on social media for quick updates, tech insights, and behind-the-scenes content.
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-blue-500 text-2xl mb-2">🐦</div>
                <p className="font-medium text-gray-900">Twitter</p>
                <p className="text-sm text-gray-600">Daily thoughts</p>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-blue-700 text-2xl mb-2">💼</div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <p className="text-sm text-gray-600">Professional updates</p>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="text-gray-900 text-2xl mb-2">⚡</div>
                <p className="font-medium text-gray-900">GitHub</p>
                <p className="text-sm text-gray-600">Code & projects</p>
              </a>
            </div>

            <div className="max-w-2xl mx-auto card p-8 bg-gradient-to-r from-primary-50 to-purple-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Have a Topic Suggestion?
              </h3>
              <p className="text-gray-600 mb-6">
                I'd love to hear what you'd like me to write about. Send me your ideas and questions!
              </p>
              <a
                href="/contact"
                className="btn-primary inline-block"
              >
                Suggest a Topic
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 