import React from 'react';
import Section from './Section';

const sections = [
  {
    title: 'First programming language',
    paras: [`I had my first real experience with a modern programming language during college
    when I had an internship at the U.S. Army Research Laboratory. There was a three
    month period during which I had to learn about a formulation of continuum
    mechanics called peridynamics, some graduate level mathematics, and C
    programming.`,
    `During the semester prior to the internship, there was a project in heat
    transfer which required students to write a program. Since I hadn't learned C
    yet, I completed the assignment in MathCAD. After completing the internship, I
    redid the assignment in C, and was very happy with the reduced solution that it
    enabled.`,
    `Initially after moving to New York, I struggled with the noise level; extremely
    loud music from cars bothered me and made me unable to sleep well at night.
    After some experimentation in Excel, I used C to write a simulation of a
    microphone array which could pinpoint offending noise polluters.`]
  }, {
    title: 'Visual Basic for Applications',
    paras: [`I started working at the American Society of Mechanical Engineers (ASME) shortly
    after moving to New York. There were documents that required continuous
    maintenance and summarizations. I realized that I could write a program to create
    the summaries based on the document layout, so that's what I did using Visual
    Basicfor Applications.`,
    `New York can be a rough place sometimes and, when my neighbor started harrassing
    me, I became interested in fitness as a way to cope. This interest in fitness lead
    to an interest in nutrition. Being an engineer, I like numbers, so I started tracking and
    analyzing my diet in regards to macronutrients, but it was hard to get exactly the
    right combinations. I solved this problem by creating a VBA tool in Excel to determine the
    exact quatities of foods to eat to reach macronutrient goals.`]
  }, {
    title: 'PHP, MySQL, and vanilla JavaScript',
    paras: []
  }
];

const AboutMe = () => {
  return (
    <div className="container">
      <h3>My Background</h3>
      <hr/> {sections.map((section, ix) => (
        <div key={section.title}>
          <Section title={section.title} paras={section.paras}/> {ix < sections.length - 1
            ? <hr/>
            : ''}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
