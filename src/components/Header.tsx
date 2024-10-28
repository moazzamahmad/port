import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Portfolio
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
          <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Skills</a>
          <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Projects</a>
          <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
        </div>
      </div>
    </header>
  );
}