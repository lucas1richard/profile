import React from 'react';
import Panel from '../reuse/Panel';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Awards from './Awards';
import Publications from './Publications';
import Contact from './Contact';

const Resume = () => {
  return (
    <div className="container">
      <div>
        <h3>Resume</h3>
        <p className="pull-right">Last Updated: 2 September 2017</p>
        <p>
          <a href="files/LucasResume_12_18_2016.pdf" download>Download the PDF</a>
        </p>
        <div className="row">
          <div className="col-md-9">
            <div>
              <h3 style={{borderBottom: '1px solid #dedede'}}>Education</h3>
              <Education />
            </div>
            <div>
              <h3 style={{borderBottom: '1px solid #dedede'}}>Professional Experience</h3>
              <Experience />
            </div>
            <div>
              <h3 style={{borderBottom: '1px solid #dedede'}}>Awards</h3>
              <Awards />
            </div>
              <h3 style={{borderBottom: '1px solid #dedede'}}>Publication</h3>
              <Publications />
          </div>
          <div className="col-md-3">
            <h3 style={{borderBottom: '1px solid #dedede'}}>Skills</h3>
            <Skills />
            <h3 style={{borderBottom: '1px solid #dedede'}}>Contact</h3>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
