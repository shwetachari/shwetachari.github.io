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
        ['Photoshop', 'icon-tech-photoshop']
      ],
    };
  }

  render() {
    return (
      <div className="main-section col-xs-12">
        List of Skills Go Here
        <ul className="skillsList">
          { this.state.icons.map((icon, i) => (
            <li key={i} className="text-center col-sm-2 col-xs-3">
              <i className={`skillIcon ${icon[1]} col-xs-12 text-center`}></i>
              <div className="skillName col-xs-12 text-center">{icon[0]}</div>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}

export default Skills;
