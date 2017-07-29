import React from 'react';

const Project = ({project}) => {
  if (project.url.slice(0, 7) !== 'http://' && project.url.slice(0, 8) !== 'https://') {
    project.url = 'http://' + project.url;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div>
            <img src={`img/${project.img}`} alt="Project Image" className="image" style={{minHeight: '50px'}} />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="overlay">
                <div className="text">{project.name}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-9">
          {project
            .technologies
            .map(technology => (
              <span key={technology}>
                <span className="label label-default">{technology}</span>
                {' '}
              </span>
            ))}
          <p>
            {project.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
