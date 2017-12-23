import React from 'react';

class Cover extends React.Component {
  constructor() {
    super();
    this.state = {
      bgUrl: 'images/jumbotron.png',
    };
  }

  render() {
    return (
      <div className="cover jumbotron text-center main-section col-xs-12 no-gutter">
        <div className="jumbotron text-center col-xs-12">
          <h1>Shweta Patra<span className="chari">chari</span></h1>
        </div>
      </div>
    );
  }
}

export default Cover;
