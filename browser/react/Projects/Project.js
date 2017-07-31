import React from 'react';

const Project = ({project}) => {
  if (project.url.slice(0, 7) !== 'http://' && project.url.slice(0, 8) !== 'https://') {
    project.url = 'http://' + project.url;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div>
            <img src={`img/${project.img}`} alt="Project Image" className="image" style={{minHeight: '50px'}} />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <div className="text outline-text">{project.name}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-8">
          {project
            .technologies
            .sort()
            .map(technology => (
              <span key={technology}>
                <span className="label label-default">{technology}</span>
                {' '}
              </span>
            ))}
          <p style={{ marginTop: '15px' }}>
            {project.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
