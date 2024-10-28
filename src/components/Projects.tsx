import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using AI models",
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "TensorFlow", "React"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.liveLink} className="p-2 bg-white rounded-full hover:bg-gray-100">
                    <ExternalLink className="h-5 w-5 text-gray-900" />
                  </a>
                  <a href={project.githubLink} className="p-2 bg-white rounded-full hover:bg-gray-100">
                    <Github className="h-5 w-5 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}