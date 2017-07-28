import React from 'react';

const skills = [
  {level: 'advanced', name: 'AngularJS (1.6)'},
  {level: 'advanced', name: 'Bootstrap'},
  {level: 'intermediate', name: 'C'},
  {level: 'advanced', name: 'CSS'},
  {level: 'advanced', name: 'ExpressJS'},
  {level: 'intermediate', name: 'Git'},
  {level: 'intermediate', name: 'HTTP'},
  {level: 'advanced', name: 'JavaScript (ES5/ES6)'},
  {level: 'advanced', name: 'jQuery'},
  {level: 'intermediate', name: 'Linux'},
  {level: 'intermediate', name: 'Mandarin'},
  {level: 'advanced', name: 'MS Office'},
  {level: 'advanced', name: 'Mocha'},
  {level: 'advanced', name: 'MySQL'},
  {level: 'advanced', name: 'NodeJS'},
  {level: 'intermediate', name: 'PHP'},
  {level: 'advanced', name: 'PostgreSQL'},
  {level: 'advanced', name: 'React/Redux'},
  {level: 'advanced', name: 'Sequelize'},
  {level: 'intermediate', name: 'socket.io'},
  {level: 'intermediate', name: 'Test Driven Development'},
  {level: 'intermediate', name: 'Webpack'},
];

const Skills = () => {
  return (
    <p className="skills">
      { skills.map(skill => <span key={skill.name} className={skill.level}>{skill.name}</span>) }
    </p>
  );
};

export default Skills;
