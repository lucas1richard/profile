import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';


class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const projectArr = props.projects.filter(proj => proj.name === props.params.project);
    if (projectArr.length) {
      this.project = projectArr[0];
    }
  }

  render() {
    if (!this.project) {
      return (
        <div className="alert alert-danger">
          Project <strong>{this.props.params.project}</strong> Not Found
        </div>
      );
    }

    const { project } = this;
    return (
      <div>
        <h3>Project Detail</h3>
         <h4>{project.name}</h4>
         <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Carousel showArrows={true}>
              <div>
                <img src={`img/${project.img}`} />
                <p className="legend">Firing</p>
              </div>
              <div>
                <img src={`img/war-game/war-action.gif`} />
                <p className="legend">Legend 1</p>
              </div>
            </Carousel>
          </div>
        </div>
        <div>
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
    );
  }
}

const mapStateToProps = ({projects}) => ({
  projects
});

export default connect(mapStateToProps)(ProjectDetail);
