import React from 'react';
import { Code2, Palette, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
              With expertise in both frontend and backend technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg">
              <Code2 className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, scalable solutions</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <Palette className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Design Focus</h3>
              <p className="text-gray-600">Creating beautiful user interfaces</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg md:col-span-2">
              <Brain className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-gray-600">Turning complex problems into simple solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}