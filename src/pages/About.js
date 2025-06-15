import React from 'react';
import { personalInfo, skills, education } from '../data/portfolioData';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                  <span className="font-semibold text-gray-700 text-sm lg:text-base">Location:</span>
                  <span className="text-gray-600 text-sm lg:text-base">{personalInfo.location}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                  <span className="font-semibold text-gray-700 text-sm lg:text-base">Email:</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors text-sm lg:text-base break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                  <span className="font-semibold text-gray-700 text-sm lg:text-base">Phone:</span>
                  <span className="text-gray-600 text-sm lg:text-base">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-3xl transform -rotate-3 lg:-rotate-6"></div>
                <div className="relative bg-white p-1.5 lg:p-2 rounded-3xl shadow-2xl">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[500px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Technical Skills</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {skills.technical.map((skillGroup, index) => (
              <div key={index} className="card p-4 lg:p-6 space-y-3 lg:space-y-4">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm lg:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center space-y-4 mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Soft Skills</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Personal qualities that help me collaborate effectively
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {skills.soft.map((skill, index) => (
              <div key={index} className="card p-3 lg:p-4 text-center">
                <span className="text-gray-700 font-medium text-sm lg:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Education</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              My academic background and continuous learning journey
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="card p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-primary-600 font-medium text-sm lg:text-base">{edu.institution}</p>
                    <p className="text-gray-600 text-sm lg:text-base">{edu.location}</p>
                    <p className="text-xs lg:text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
                    {edu.gpa && (
                      <p className="text-xs lg:text-sm text-gray-600">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {edu.coursework && (
                      <>
                        <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, index) => (
                            <span key={index} className="px-2 lg:px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs lg:text-sm">
                              {course}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                    {edu.projects && (
                      <>
                        <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Projects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.projects.map((project, index) => (
                            <span key={index} className="px-2 lg:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm">
                              {project}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {edu.activities && (
                      <>
                        <h4 className="font-semibold text-gray-900 text-sm lg:text-base">Activities:</h4>
                        <div className="space-y-1">
                          {edu.activities.map((activity, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 text-xs lg:text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">When I'm Not Coding</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Personal interests and hobbies that keep me inspired
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="card p-6 lg:p-8 text-center space-y-4">
              <div className="text-3xl lg:text-4xl">📚</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Reading</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                I love reading about technology trends, personal development, and science fiction.
              </p>
            </div>
            
            <div className="card p-6 lg:p-8 text-center space-y-4">
              <div className="text-3xl lg:text-4xl">🏃‍♂️</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Fitness</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Regular exercise keeps me energized and helps me maintain focus during long coding sessions.
              </p>
            </div>
            
            <div className="card p-6 lg:p-8 text-center space-y-4 md:col-span-2 lg:col-span-1">
              <div className="text-3xl lg:text-4xl">🎵</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Music</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Music is my constant companion while coding. I enjoy discovering new artists and genres.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 