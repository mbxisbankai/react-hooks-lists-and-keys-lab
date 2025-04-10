import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectMapper = projects.map((project, i) => {
    return <ProjectItem key={i} name={project.name} about={project.about} technologies={project.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
          {projectMapper}        
      </div>
    </div>
  );
}

export default ProjectList;
