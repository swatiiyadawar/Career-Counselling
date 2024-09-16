import React from 'react';
import Navbar from './Navbar';

function Mentorship() {
  return (
    <>
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Mentorship in Career Counseling</h1>
          
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Mentorship plays a crucial role in shaping one's career by providing valuable guidance and advice.
              Here are some key advantages of having a mentor during your career journey:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Personalized Guidance</h2>
              <p className="text-gray-600">
                Mentors provide tailored advice based on your unique career goals and challenges.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Industry Knowledge</h2>
              <p className="text-gray-600">
                Mentors offer valuable insights about industry trends, roles, and career paths.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Skill Development</h2>
              <p className="text-gray-600">
                Get help developing the skills needed for your career success, both technical and soft.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Networking Opportunities</h2>
              <p className="text-gray-600">
                Leverage your mentor’s network to expand your professional connections.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Boosted Confidence</h2>
              <p className="text-gray-600">
                Constructive feedback and encouragement from mentors help increase your confidence.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">Career Advancement</h2>
              <p className="text-gray-600">
                Mentors assist in setting and achieving long-term career goals.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 mt-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Find a Mentor Today!</h3>
            <p className="text-gray-700 mb-6">
              Discover how mentorship can transform your career. Connect with experienced professionals in your field and gain invaluable advice.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-500 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Mentorship;
