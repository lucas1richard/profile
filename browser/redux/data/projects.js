import {AngularV16, AWS, Bootstrap, ExpressJS, FitbitAPI, GoogleChromeExtension, GoogleLocationAPI, Heroku, HTMLCanvas, ReactJS, Redux, NodeJS, OAuth, PassportJS, PostgreSQL, ReactRouter, Sequelize, socketio} from '../constants';

export default [{
  name: 'Airport Nautical Miles',
  url: 'rjlnauticalmiles.herokuapp.com',
  img: 'nautical-miles.png',
  technologies: [
    ReactJS,
    Redux,
    GoogleLocationAPI,
    NodeJS,
    ExpressJS,
    Bootstrap,
    PostgreSQL,
    Sequelize,
    Heroku
  ],
  summary: `This is a coding challenge which took approximately one day to complete. Create a web app that calculates the distance (in nautical miles) between two airports. The app should autocomplete the airports and should feature all airports in the U.S. only. Bonus: plot the trip on Google maps. If you are using npm, please do not include your node_modules folder and make sure that all your requirements are in package.json.`
}, {
  name: 'C&S Connect Overlay',
  img: 'csconnect-overlay.png',
  url: 'https://github.com/lucas1richard/CS-Connect-Overlay',
  technologies: [
    GoogleChromeExtension,
    Bootstrap,
    'chrome storage',
    AngularV16
  ],
  summary: `Google Chrome extension to improve the online tool C&S Connect used by ASME staff. It streamlines common tasks making them take only a fraction of the time they require without the extension. There is an options page which uses AngularJS to set defaults for the overlay and quickly create reports normally created manually by staff.`
}, {
  name: 'Know Your Macros',
  img: 'kym.png',
  url: 'knowyourmacros.io',
  technologies: [
    FitbitAPI,
    PassportJS,
    OAuth,
    Bootstrap,
    NodeJS,
    ExpressJS,
    ReactJS,
    ReactRouter,
    Redux,
    PostgreSQL,
    Sequelize,
    AWS
  ],
  summary: `Online diet planner with emphasis on macronutrient calculations to allow users to correctly time their protein, carbohydrate, and fat intake. It uses an iterative method to determine the correct quantities of foods to reach macronutrient goals within 0.1 gram. The Fitbit API is used to compare the overall calories burned throughout the day to the calories consumed by the user. The database contains almost 9000 foods, taken from the USDA food database as well as manual entry. This was the second project for which I was team lead. I maintained daily contact with my two other teammates, coordinated our efforts, ensured code quality, and delegated tasks.`
}, {
  name: 'War Game',
  url: 'rjlwargame.herokuapp.com',
  img: 'war-action-cropped.png',
  technologies: [
    socketio,
    HTMLCanvas,
    NodeJS,
    ExpressJS,
    PostgreSQL,
    Sequelize,
    Heroku
  ],
  summary: `This is based on a game I used to play as a young student, where the board was drawn by hand and each player took turns firing at each other's enemy pieces. In the original game, you would put your pencil on one of your pieces with your finger at the top of the pencil, tilt it toward an enemy piece, and press down. If the shot hit an enemy piece, you successfully destroyed it.`
}, {
  name: 'Grace Frames',
  img: 'grace-frames.png',
  url: 'rjlgraceframes.herokuapp.com',
  technologies: [
    ReactJS,
    ReactRouter,
    Redux,
    PostgreSQL,
    Sequelize,
    Heroku,
    Bootstrap,
    NodeJS,
    ExpressJS
  ],
  summary: `Shopping application for glasses. I used web scraping to seed the database with 950 glasses and designed the filter. This the first project for which I was the team lead. There were three other developers on the team. We cooperatively planned the application, and I delegated specific tasks and maintained daily contact with my teammates. If any of the team members needed help with a component they were building, I would meet them and pair program with them.`
}, {
  name: 'Code Highlight',
  img: 'codehighlight.png',
  url: 'rjlcodehighlight.herokuapp.com',
  technologies: [
    ReactJS,
    Redux,
    Bootstrap,
    NodeJS,
    ExpressJS
  ],
  summary: `This is a code challenge which took one day to complete. Allow users to enter the URL of a public webpage. From the browser, fetch the page and display the raw (not rendered) source to the users. When the users click on the name of an html element in the displayed source, highlight every element matching that name e.g. clicking on a tag causes that and all similar tags to be highlighted. For the front-end, please use HTML/Javascript. You can use any back-end technology you want, as long as it can be executed in a Unix environment.`
}];
