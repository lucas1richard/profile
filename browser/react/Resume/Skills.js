import React from 'react';
import {AngularV16, Bootstrap, ExpressJS, jQuery, Linux, MySQL, NodeJS, PostgreSQL, ReactJS, Redux, Sequelize, TDD, Webpack, advanced, intermediate, socketio} from '../../redux/constants';
import Label from '../Styled/Label';

const skills = [
  {level: advanced, name: AngularV16},
  {level: advanced, name: Bootstrap},
  {level: intermediate, name: 'C'},
  {level: advanced, name: 'CSS'},
  {level: advanced, name: ExpressJS},
  {level: intermediate, name: 'Git'},
  {level: intermediate, name: 'HTTP'},
  {level: advanced, name: 'JavaScript (ES5/ES6)'},
  {level: advanced, name: jQuery},
  {level: intermediate, name: Linux},
  {level: intermediate, name: 'Mandarin'},
  {level: advanced, name: 'MS Office'},
  {level: advanced, name: 'Mocha'},
  {level: advanced, name: MySQL},
  {level: advanced, name: NodeJS},
  {level: intermediate, name: 'PHP'},
  {level: advanced, name: PostgreSQL},
  {level: advanced, name: ReactJS},
  {level: advanced, name: Redux},
  {level: advanced, name: Sequelize},
  {level: intermediate, name: socketio},
  {level: intermediate, name: TDD},
  {level: intermediate, name: Webpack},
];

const Skills = () => {
  return (
    <p className="skills">
      { skills.map(skill => (
        <Label
          key={skill.name}
          success={skill.level === advanced}
          warning={skill.level === intermediate}>
          {skill.name}
        </Label>)) }
    </p>
  );
};

export default Skills;
