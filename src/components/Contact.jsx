import React from 'react';

const Contact = (props) => (
  <div className="main-section contact col-xs-12">
    <h2 className="text-center">Contact Me</h2>
    <form action="https://formspree.io/shwetachari@gmail.com" method="POST" className="col-md-10 col-md-offset-1 col-xs-12">
      <div className="form-group">
        <label for="name" className="control-label">Name</label>
        <input type="text" className="form-control" name="name"/>
      </div>
      <div className="form-group">
        <label for="_replyto" className="control-label">Your Email</label>
        <input type="email" className="form-control" name="_replyto"/>
      </div>
      <div className="form-group">
        <label for="message" className="control-label">Message</label>
        <textarea rows="4" className="form-control" name="message"/>
      </div>
      <div className="form-group">
        <input type="submit" className="form-control" value="Send"/>
      </div>
    </form>
  </div>
);

export default Contact;
