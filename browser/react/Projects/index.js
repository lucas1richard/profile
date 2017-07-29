import React from 'react';
import Project from './Project';

const projects = [{
    name: 'War Game',
    url: 'rjlwargame.herokuapp.com',
    img: 'war-action-cropped.png',
    technologies: [
      'socket.io',
      'HTML Canvas',
      'NodeJS',
      'ExpressJS',
      'PostgreSQL',
      'Sequelize',
      'Heroku'
    ],
    summary: `This is based on a game I used to play as a young student, where the board was drawn by hand and each player took 
    turns firing at each other's enemy pieces. In the original game, you would put your pencil on one of your pieces with your
    finger at the top of the pencil, tilt it toward an enemy piece, and press down. If the shot hit an enemy piece, you
    successfully destroyed it.`
  }, {
    name: 'Airport Nautical Miles',
    url: 'rjlnauticalmiles.herokuapp.com',
    img: 'nautical-miles.png',
    technologies: [
      'ReactJS',
      'Redux',
      'Google Location API',
      'NodeJS',
      'ExpressJS',
      'Bootstrap',
      'PostgreSQL',
      'Sequelize',
      'Heroku'
    ],
    summary: `This is a coding challenge which took approximately one day to complete.
    Create a web app that calculates the distance (in nautical miles) between two airports. The app should autocomplete the
    airports and should feature all airports in the U.S. only. Bonus: plot the trip on Google maps. If you are using npm,
    please do not include your node_modules folder and make sure that all your requirements are in package.json.`
  }, {
    name: 'C&S Connect Overlay',
    img: 'csconnect-overlay.png',
    url: 'https://github.com/lucas1richard/CS-Connect-Overlay',
    technologies: [
      'Google Chrome extension',
      'Bootstrap',
      'chrome storage',
      'Angular 1.5'
    ],
    summary: `Google Chrome extension to improve the online tool C&S Connect used by ASME staff. It streamlines common tasks
    making them take only a fraction of the time they require without the extension. There is an options page which uses AngularJS
    to set defaults for the overlay and quickly create reports normally created manually by staff.`
  }, {
    name: 'Know Your Macros',
    img: 'kym.png',
    url: 'knowyourmacros.io',
    technologies: [
      'Fitbit API',
      'PassportJS',
      'OAuth',
      'Bootstrap',
      'NodeJS',
      'ExpressJS',
      'ReactJS',
      'React-Router',
      'Redux',
      'PostgreSQL',
      'Sequelize',
      'AWS'
    ],
    summary: `Online diet planner with emphasis on macronutrient calculations to allow users to correctly time their protein,
    carbohydrate, and fat intake. It uses an iterative method to determine the correct quantities of foods to reach macronutrient
    goals within 0.1 gram. The Fitbit API is used to compare the overall calories burned throughout the day to the calories
    consumed by the user. The database contains almost 9000 foods, taken from the USDA food database as well as manual entry.`
  }];

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: projects,
      filtered: projects,
      filter: ''
    };

    this.updateFilter = this.updateFilter.bind(this);
    this.updateFilteredState = this.updateFilteredState.bind(this);
  }

  updateFilteredState() {
    const filter = this.state.filter.toLowerCase();
    const filtered = this.state.initial.filter(project => {
      const technology = project.technologies.filter(tech => {
        return tech.toLowerCase().indexOf(filter) >  -1;
      }).length > 0;
      const name = project.name.toLowerCase().indexOf(filter) > -1;
      const summary = project.summary.toLowerCase().indexOf(filter) > -1
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

export default Projects;
