import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <h2>Our Projects</h2>
      <p>Here is a showcase of our completed projects in wall treatment, waterproofing, and dampness prevention.</p>
      <div className="row">
        <div className="col-md-4 my-3">
          <div className="card">
            <img src="/assets/images/project1.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Wall treatment for a residential building.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card">
            <img src="/assets/images/project2.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Waterproofing for a commercial complex.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card">
            <img src="/assets/images/project3.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Dampness prevention in a heritage building.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
