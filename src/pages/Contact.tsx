import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={3} placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
