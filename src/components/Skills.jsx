import React from 'react';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      fsSkills: [
        ['name', 'class']
      ]
    };
  }

  render() {
    return (
      <div className="main-section">
        List of Skills Go Here
      </div>
    );
  }
}

export default Skills;
