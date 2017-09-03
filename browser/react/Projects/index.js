import React from 'react';
import Project from './Project';
import {connect} from 'react-redux';

class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filtered: props.projects.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        }
        return 0;
      }),
      filter: ''
    };

    this.updateFilter = this.updateFilter.bind(this);
    this.updateFilteredState = this.updateFilteredState.bind(this);
    this.projects = props.projects;
  }

  updateFilteredState() {
    const filter = this.state.filter.toLowerCase();
    const filtered = this.projects.filter(project => {
      const technology = project.technologies.filter(tech => {
        return tech.toLowerCase().indexOf(filter) >  -1;
      }).length > 0;
      const name = project.name.toLowerCase().indexOf(filter) > -1;
      const summary = project.summary.toLowerCase().indexOf(filter) > -1;
      return technology || name || summary;
    });

    this.setState({filtered});
  }

  updateFilter(ev) {
    this.setState({filter: ev.target.value}, this.updateFilteredState);
  }

  render() {
    const { filtered } = this.state;

    return (
      <div className="container">
        <h3>Projects</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Filter"
          value={this.state.filter}
          onChange={this.updateFilter}
        />
        <hr />
        {filtered.map((project, ix) => (
          <div key={project.name}>
            <Project
              project={project}
            />
            { ix < (filtered.length - 1) && <hr />}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({projects}) => ({
  projects
});

export default connect(mapStateToProps)(Projects);
