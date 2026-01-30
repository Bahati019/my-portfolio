import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import weatherAppImg from '../Images/weather-app.jpeg';
// import ticTacToeImg from '../images/tic-tac-toe.png';
import recipeFinderImg from '../Images/recipe-finder.jpg';

import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Weather App',
      description: 'A simple weather app using OpenWeatherMap API.',
      image: weatherAppImg,
      // demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/Bahati019/App.git'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A React-based Tic Tac Toe game with clean UI.',
      image: '/images/tic-tac-toe.png',
      // demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/your-repo-link'
    },
        {
      title: 'Recipe-Finder',
      description: 'A TypeScript React Native app that lets users find recipes based on ingredients.',
      image: recipeFinderImg,
      // demoLink: 'https://your-demo-link.com',
      codeLink: 'https://github.com/Bahati019/Recipe-Finder.git'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="icon" /> Live Demo
              </a> */}
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
