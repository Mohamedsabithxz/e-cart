// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{marginTop:'100px'}} className="bg-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-3">
              <i className="fas fa-truck text-white text-2xl mr-2"></i>
              <h3 className="text-xl font-bold">E cart</h3>
            </div>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li><a href="#landing" className="hover:underline">Landing Page</a></li>
              <li><a href="#home" className="hover:underline">Home Page</a></li>
              <li><a href="#watch-history" className="hover:underline">Watch History Page</a></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Guides</h4>
            <ul className="space-y-2">
              <li><a href="#react" className="hover:underline">React</a></li>
              <li><a href="#react-bootstrap" className="hover:underline">React Bootstrap</a></li>
              <li><a href="#react-router" className="hover:underline">React Router</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email here"
                className="p-2 rounded-l bg-white text-black placeholder-gray-500 w-full"
              />
              <button className="p-2 bg-purple-700 rounded-r">
                <span className="text-white">→</span>
              </button>
            </div>
            <div className="flex space-x-3">
              <a href="#twitter" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#facebook" className="text-white hover:text-gray-300"><i className="fab fa-facebook"></i></a>
              <a href="#linkedin" className="text-white hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
              <a href="#github" className="text-white hover:text-gray-300"><i className="fab fa-github"></i></a>
              <a href="#phone" className="text-white hover:text-gray-300"><i className="fas fa-phone"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>Copyright © June 2024 Batch, E Cart. Built with React Redux.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;