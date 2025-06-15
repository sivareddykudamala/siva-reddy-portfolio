import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 animate-slide-in-left order-2 lg:order-1">
              <div className="space-y-3 lg:space-y-4">
                <p className="text-primary-600 font-medium text-base lg:text-lg">
                  Hello, I'm
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text">
                  {personalInfo.title}
                </h2>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center justify-center space-x-2 py-3 px-6"
                >
                  <HiMail />
                  <span>Get In Touch</span>
                  <FaArrowRight className="ml-2" size={14} />
                </Link>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center space-x-2 py-3 px-6"
                >
                  <FaDownload />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 lg:space-x-6">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-primary-50 rounded-lg"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-primary-50 rounded-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="animate-slide-in-right order-1 lg:order-2">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-3xl transform rotate-3 lg:rotate-6 opacity-90"></div>
                
                {/* Image container */}
                <div className="relative bg-white p-1.5 lg:p-2 rounded-3xl shadow-2xl">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[500px] object-cover rounded-2xl"
                    loading="eager"
                  />
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 rounded-full opacity-40 animate-pulse hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center space-y-2 p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600">4+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2 p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600">5+</div>
              <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center space-y-2 p-4 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600">15+</div>
              <div className="text-sm sm:text-base text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">What I Do</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              I specialize in building scalable backend systems and enterprise-grade applications with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="card p-6 lg:p-8 text-center space-y-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-xl lg:text-2xl">⚙️</div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Backend Development</h3>
              <p className="text-sm lg:text-base text-gray-600">
                Building robust APIs and microservices using Java, Spring Boot, and modern database technologies.
              </p>
            </div>

            <div className="card p-6 lg:p-8 text-center space-y-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-xl lg:text-2xl">🏗️</div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Microservices Architecture</h3>
              <p className="text-sm lg:text-base text-gray-600">
                Designing and implementing scalable microservices solutions for enterprise-grade applications.
              </p>
            </div>

            <div className="card p-6 lg:p-8 text-center space-y-4 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-xl lg:text-2xl">🚀</div>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Performance Optimization</h3>
              <p className="text-sm lg:text-base text-gray-600">
                Optimizing system performance and implementing efficient data migration solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width text-center space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4">Ready to Start Your Project?</h2>
          <p className="text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto px-4">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 lg:px-8 rounded-lg transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 