import React from 'react';
import ProjectModal from './Project';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  render() {
    return (
      <div className="main-section col-xs-12">
        <h2>Projects</h2>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
          { this.state.projects.map((project, i) => (
            <ProjectModal key={i} project={project}/>
          )) }
        </div>
      </div>
    );
  }
}

export default Projects;
