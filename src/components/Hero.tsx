import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Your Name</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-8 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-colors"
          >
            View Work
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}