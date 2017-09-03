import React from 'react';

const Education = () => {
  return (
  <div className="row">
    <div className="col-md-6">
      <a href="https://www.fullstackacademy.com/" target="_blank" rel="noopener noreferrer">
        <img
          className="no-small"
          src="img/fa-logo.png"
          alt="Fullstack Academy"
          height="35"
        />
        <h4 className="no-large">Fullstack Academy of Code</h4>
      </a>
      <br className="no-small" />
      June 2017
      Web software development
    </div>
    <div className="col-md-6">
      <a href="https://www.olemiss.edu/" target="_blank"  rel="noopener noreferrer">
        <img
          className="no-small"
          src="img/olemiss-logo.png"
          alt="The University of Mississippi"
          height="35"
        />
        <h4 className="no-large">University of Mississippi</h4>
      </a>
      <br className="no-small" />
      May 2012
      Mechanical Engineering, Mandarin
      Engineer-in-Training (E.I.T.) Designation
    </div>
  </div>
  );
};

export default Education;
