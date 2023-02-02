import React, { useState } from 'react';
import Project from "../components/project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'profile-image',
      description: 'MERN Stack',
      link: "https://bjbci.github.io/projectOne/",
      repo: "https://github.com/bjbci/projectOne"
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://shroomies.herokuapp.com/",
      repo: "https://github.com/eric-simmons/shroomies"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://kyle188.github.io/multiple-choice-coding-quiz/",
      repo: "https://github.com/kyle188/multiple-choice-coding-quiz"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row"><p>!!!!!!!</p>
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
