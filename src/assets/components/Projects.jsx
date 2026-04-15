import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import weatherAppImg from '../Images/weather-app.jpeg';
import klissCosmeticsImg from '../Images/kliss-cosmetics.png';
import recipeFinderImg from '../Images/recipe-finder.jpg';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projectList = [
    {
      title: 'Weather App',
      description: 'A user-friendly application providing real-time weather updates utilizing the OpenWeatherMap API.',
      image: weatherAppImg,
      codeLink: 'https://github.com/Bahati019/App.git',
      technologies: ['React', 'API', 'JavaScript']
    },
    {
      title: 'Kliss-cosmetics',
      description: 'A modern e-commerce interface designed for a cosmetics brand, featuring a clean and responsive UI.',
      image: klissCosmeticsImg,
      demoLink: 'https://kliss-cosmetics.onrender.com',
      codeLink: 'https://github.com/Bahati019/Kliss-cosmetics.git',
      technologies: ['React', 'CSS', 'E-commerce']
    },
    {
      title: 'Recipe-Finder',
      description: 'A cross-platform mobile application allowing users to discover recipes based on available ingredients, built with React Native and TypeScript.',
      image: recipeFinderImg,
      codeLink: 'https://github.com/Bahati019/Recipe-Finder.git',
      technologies: ['React Native', 'TypeScript', 'Mobile']
    }
  ];

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set();
    projectList.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, []);

  // Filter projects based on selected filter and search query
  const filteredProjects = useMemo(() => {
    return projectList.filter(project => {
      const matchesFilter = selectedFilter === 'All' || project.technologies.includes(selectedFilter);
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>

      {/* Filter & Search Controls */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-50 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          />
        </div>

        {/* Technology Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedFilter === tech
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 px-4"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 flex flex-col"
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

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-[0.95rem] leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-auto">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-blue-400 py-2 px-4 rounded-md bg-blue-500/10 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
                      >
                        <FaExternalLinkAlt className="text-lg" /> Live Demo
                      </a>
                    )}
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
