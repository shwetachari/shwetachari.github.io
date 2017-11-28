import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="main-section col-xs-12">
        <div className="paragraph">
          I’ve always been amazed at how fast-paced the world of tech is, and I strongly believe that it’s the driving force of change in the modern world. There are always new problems to be solved, more things to be built. As a cog in this machine of a world, I’ve learned technologies that can empower me in building creative solutions for technical challenges.
        </div>
        <div className="paragraph">
          <span className="toolbeltText">My toolbelt</span> includes experience in back-end development, which enables me to draw important connections concerning optimization, persistence, and latency between a client-facing application and server-side logic. I am proficient in managing SQL and NoSQL databases with supplemented flexibility in data handling from ORMs. I am able to build, maintain, and scale REST API servers, taking advantage of the asynchronous nature of Node.js to maximize efficiency and ensuring modularity using the Express and Express Router modules.
        </div>
        <div className="paragraph">
          <span className="toolbeltText">My toolbelt</span> includes experience in front-end development, which allows me to receive and translate user interaction with an application into meaningful events that persist through the the back-end. I maintain a separation of concerns in terms of functionality using MVC/MV* frameworks, with additional power in DOM manipulation from integration with jQuery, jQuery-UI, and D3.js.
        </div>
        <div className="paragraph">
          <span className="toolbeltText">My toolbelt</span> includes experience in developing graphics (predominantly in Adobe CC), both in vector and raster formats. My approach when constructing the client-facing portions of an application focuses around a minimal, responsive, and practicality-oriented design aesthetic. I make thorough use of bootstrap and CSS media queries to ensure consistent quality of design across various platforms.
        </div>
      </div>
    );
  }
}

export default About;
