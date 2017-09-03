import React from 'react';

const Experience = () => {
  return (
  <div>
    <div className="row">
      <div className="col-md-3">
        <a href="http://www.asme.org" target="_blank" rel="noopener noreferrer">
          <img className="no-small" src="img/asme-logo.png" style={{width: '100%'}} />
          <h4 className="no-large">American Society of Mechanical Engineers</h4>
        </a>
      </div>
      <div className="col-md-9">
        <p>
          Project Engineer <small>(August 2016 - Present)</small>
          <br />
        </p>
        Standards and Certifications Engineer <small>(September 2012 - August 2016)</small>
        <ul>
          <li>Managing the development process for new and existing standards by working
            with volunteer members that are experts in their field, the public, and with
            other ASME staff.</li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <a
          href="https://www.arl.army.mil/www/default.cfm"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="img/ARL-logo.jpg"
            style={{width: '100%'}}
            className="no-small"
            alt="U.S. Army Research Laboratory"
          />
          <h4 className="no-large">U.S. Army Research Laboratory</h4>
        </a>
      </div>
      <div className="col-md-9">
      Summer Intern <small>(2011, 2012)</small>
      <ul>
        <li>
          <p>
            Analyzed
            {' '}
            <a href="http://www.sandia.gov/~sasilli/" target="_blank" rel="noopener noreferrer">peridynamics</a>
            {' '}
            to determine the domain of applicability
          </p>
          <p>
            I was responsible for generating specific grid patterns on which to test if
            peridynamics will give inaccurate results. I found that a commonly used pattern
            of densifying the grid produced lateral stresses with a perpendicular force. I
            also found a special case where it would be expected that there would be lateral
            stresses, but none were observed. These findings were included in the
            publication listed below.
          </p>
        </li>
        <li>
          Used LAMMPS, characterized and quantified damage in molecular dynamics
          simulations</li>
      </ul>
      </div>
    </div>
  </div>
  );
};

export default Experience;
