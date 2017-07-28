import React from 'react';
import Panel from '../reuse/Panel';
import Skills from './Skills';

const Resume = () => {
  return (
    <div className="container">
      <div>
        <h3>Resume</h3>
        <p className="pull-right">Last Updated: 8 April 2017</p>
        <p>
          <a href="files/LucasResume_12_18_2016.pdf" download>Download the PDF</a>
        </p>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <Panel title="Education">
                  <a href="https://www.fullstackacademy.com/" target="_blank" rel="noopener noreferrer">
                    <img src="img/fa-logo.png" alt="Fullstack Academy" height="35" />
                  </a>
                  {' '}
                  <small>(June 2017)</small>
                  <ul>
                    <li>Web software development</li>
                  </ul>
                  <a href="https://www.olemiss.edu/" target="_blank"  rel="noopener noreferrer">
                    <img
                      src="img/olemiss-logo.png"
                      alt="The University of Mississippi"
                      height="35" />
                  </a>
                  {' '}
                  <small>(2012)</small>
                  <ul>
                    <li>Mechanical Engineering, Mandarin</li>
                    <li>Engineer-in-Training (E.I.T.) Designation</li>
                  </ul>
                </Panel>
              </div>
              <div className="col-md-6">
                <Panel title="Recent Projects">
                  <p>
                    (2016) {' '}
                    <img src="img/csconnect-logo.jpg" height="35" />
                    ASME C&amp;S Connect Overlay
                    <br />
                    (2015) {' '}
                    <a
                      href="https://www.asme.org/about-asme/news/asme-news/thought-leaders-convene-help-focus-technology"
                    >Voting System for ASME Staff</a>
                    <br />
                    (2014) {' '}
                    <a href="http://www.knowyourmacros.com" target="_blank" rel="noopener noreferrer">www.knowyourmacros.com</a>
                  </p>
                </Panel>
              </div>
            </div>
            <Panel title="Professional Experience">
                <p className="clear-fix">
                  <a className="pull-right" href="http://www.asme.org" target="_blank" rel="noopener noreferrer">
                    <img src="img/asme-logo.png" height="35" />
                  </a>
                  <b>American Society of Mechanical Engineers</b>
                  <br />
                </p>
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
                <hr />
                <div className="clear-fix">
                  <b>
                    <a
                      className="pull-right"
                      href="https://www.arl.army.mil/www/default.cfm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/ARL-logo.jpg" alt="U.S. Army Research Laboratory" height="35" />
                    </a>
                    U.S. Army Research Laboratory</b>
                  <br />
                </div>
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
                <hr />
                <p className="clear-fix">
                  <b><img
                    className="pull-right"
                    src="img/olemiss-me-logo.png"
                    alt="Ole Miss Student Body"
                    height="35"
                  />
                    The University of Mississippi</b>
                  <br />
                </p>
                Engineering Student Body Tutor <small>(2010 - 2012)</small>
                <ul>
                  <li>
                    <p>
                      Physics, Mechanics of Materials, Calculus, Pre-Calculus
                    </p>
                  </li>
                </ul>
              </Panel>
              <Panel title="Honors and Activities">
                <p>
                  ASME Spot Recognition Award <small>(2016)</small>
                  <br />
                  ASME Fiscal Year 2016 Year-End Recognition Award <small>(2016)</small>
                  <br />
                  Dean’s Honor Roll <small>(2009, 2011, 2012)</small>
                  <br />
                  Chancellor’s Honor Roll <small>(2010, 2011, 2012)</small>
                  <br />
                  ASME Student Design Competition
                  <br />
                  Pi Mu Epsilon National Honorary Mathematics Society
                  <br />
                  The National Society of Leadership and Success
                  <br />
                  Sigma Alpha Lambda National Leadership and Honors Organization
                </p>
              </Panel>
              <Panel title="Publication">
                <p>
                  <i>An Assessment of Peridynamics for Pre and Post Failure Deformation</i>.
                  Richard Becker, Richard Lucas. Army Research Laboratory. Internal Publication.
                  2011.
                  <a href="http://www.dtic.mil/cgi-bin/GetTRDoc?AD=ADA553977">Download from www.dtic.mil</a>
                </p>
              </Panel>
          </div>
          <div className="col-md-3">
            <Panel title="Skills">
              <Skills />
            </Panel>
            <Panel title="Contact">
              <div>
                <span><b>Email:</b> lucas1richard@gmail.com</span>
                <hr />
                <span><b>Personal Cell:</b> (205) 540-1043</span>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
