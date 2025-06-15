import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaTrophy } from 'react-icons/fa';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-width">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Work Experience</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in software development, highlighting key roles, 
              achievements, and the technologies I've mastered along the way.
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">2</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">5+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A chronological overview of my career progression and key achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={job.id} className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="card p-8 space-y-6">
                      {/* Job Header */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-primary-600">
                          <FaBriefcase />
                          <span className="font-medium">{job.endDate === 'Present' ? 'Current Position' : 'Previous Role'}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                        <p className="text-xl text-primary-600 font-semibold">{job.company}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt size={14} />
                            <span>{job.startDate} - {job.endDate}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt size={14} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Job Description */}
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <FaTrophy className="text-yellow-500" />
                          <h4 className="font-semibold text-gray-900">Key Achievements</h4>
                        </div>
                        <div className="space-y-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                              <p className="text-gray-700">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Skills Development Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How my technical skills have evolved throughout my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Early Career</h3>
              <p className="text-gray-600">
                Started with HTML, CSS, and JavaScript. Learned the fundamentals of web development
                and gained experience with jQuery and basic server-side programming.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'jQuery'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-2xl">📈</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Growth Phase</h3>
              <p className="text-gray-600">
                Expanded into modern frameworks like React and Vue.js. Started building full-stack
                applications with Node.js and learned about databases and API development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Advanced Expertise</h3>
              <p className="text-gray-600">
                Mastered TypeScript, cloud technologies, and advanced development practices.
                Now focusing on architecture, performance optimization, and team leadership.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['TypeScript', 'AWS', 'Docker', 'GraphQL', 'Next.js'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Career Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notable achievements and milestones in my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card p-6 text-center space-y-4">
              <div className="text-3xl">⚡</div>
              <h3 className="font-semibold text-gray-900">Performance Optimization</h3>
              <p className="text-gray-600 text-sm">
                Improved application performance by up to 60%
              </p>
            </div>

            <div className="card p-6 text-center space-y-4">
              <div className="text-3xl">🎓</div>
              <h3 className="font-semibold text-gray-900">Knowledge Sharing</h3>
              <p className="text-gray-600 text-sm">
                Conducted workshops and training sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-width text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Add Value to Your Team?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and challenges. 
            Let's explore how my experience can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 