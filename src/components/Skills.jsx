import React from 'react';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      icons: [
        ['Agile', 'icon-tech-agile'],
        ['JavaScript', 'icon-tech-javascript'],
        ['SQL', 'icon-tech-sql'],
        ['NoSQL', 'icon-tech-nosql'],
        ['MVC', 'icon-tech-mvc'],
        ['Node.js', 'icon-tech-nodejs'],
        ['Express.js', 'icon-tech-expressjs'],
        ['PostgreSQL', 'icon-tech-postgres'],
        ['mySQL', 'icon-tech-mysql'],
        ['Redis', 'icon-tech-redis'],
        ['MongoDB', 'icon-tech-mongo'],
        ['React', 'icon-tech-react'],
        ['jQuery', 'icon-tech-jquery'],
        ['D3', 'icon-tech-d3'],
        ['Angular', 'icon-tech-angular'],
        ['Backbone', 'icon-tech-backbone'],
        ['HTML5', 'fa fa-html5'],
        ['CSS3', 'fa fa-css3'],
        ['Bootstrap', 'icon-tech-bootstrap'],
        ['Bower', 'icon-tech-bower'],
        ['Docker', 'icon-tech-docker'],
        ['Heroku', 'icon-tech-heroku'],
        ['AWS', 'icon-tech-aws'],
        ['Git', 'icon-tech-git'],
        ['Bash', 'icon-tech-bash'],
        ['Illustrator', 'icon-tech-illustrator'],
      ],
    };
  }

  render() {
    return (
      <div className="main-section col-xs-12">
        <h2 className="text-center">Skills</h2>
        <ul className="skillsList text-center col-md-10 col-md-offset-1 col-xs-12">
          { this.state.icons.map((icon, i) => (
            <li key={i} className="skill text-center">
              <div className="skillContent">
                <i className={`skillIcon ${icon[1]}`}></i>
                <div className="skillName">{icon[0]}</div>
              </div>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}

export default Skills;
