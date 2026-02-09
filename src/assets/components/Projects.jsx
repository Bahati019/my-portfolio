import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import weatherAppImg from '../Images/weather-app.jpeg';
import klissCosmeticsImg from '../Images/kliss-cosmetics.png';
import recipeFinderImg from '../Images/recipe-finder.jpg';

function Projects() {
  const projectList = [
    {
      title: 'Weather App',
      description: 'A user-friendly application providing real-time weather updates utilizing the OpenWeatherMap API.',
      image: weatherAppImg,
      // demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/Bahati019/App.git'
    },
    {
      title: 'Kliss-cosmetics',
      description: 'A modern e-commerce interface designed for a cosmetics brand, featuring a clean and responsive UI.',
      image: klissCosmeticsImg,
      demoLink: 'https://kliss-cosmetics.onrender.com',
      codeLink: 'https://github.com/Bahati019/Kliss-cosmetics.git'
    },
    {
      title: 'Recipe-Finder',
      description: 'A cross-platform mobile application allowing users to discover recipes based on available ingredients, built with React Native and TypeScript.',
      image: recipeFinderImg,
      // demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/Bahati019/Recipe-Finder.git'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 px-4">
        {projectList.map((project, index) => (
          <div
            className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 flex flex-col"
            key={index}
          >
            <div className="overflow-hidden h-[200px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl mb-2 text-slate-50 font-semibold">{project.title}</h3>
              <p className="text-slate-400 text-[0.95rem] leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 py-2 px-4 rounded-md bg-blue-500/10 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                >
                  <FaExternalLinkAlt className="text-lg" /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 py-2 px-4 rounded-md bg-blue-500/10 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                >
                  <FaGithub className="text-lg" /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
