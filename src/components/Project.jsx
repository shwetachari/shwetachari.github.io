import React from 'react';

// props:
// props.projects = { title, description, tech, repoLink, image }

const ProjectModal = (props) => (
  <div className="col-xs-12 col-sm-4 col-md-3">
    <h4>{ props.project.title }</h4>
    <div className="project-image" style={{ backgroundImage: props.project.image }}></div>
    <div className="info col-xs-12">
      <div className="description">{ props.project.description }</div>
      <div className="tech">{ props.project.tech }</div>
      <div className="repo">{ props.project.repoLink }</div>
    </div>
  </div>
);

export default ProjectModal;
