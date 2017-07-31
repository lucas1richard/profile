import React from 'react';

const Section = ({title, paras}) => {
  return (
    <div>
      <h4>{title}</h4>
      {paras.map(para => (
        <p key={para}>
          {para}
        </p>
      ))}
    </div>
  );
};

export default Section;
