import React from 'react';
import LinkItem from './LinkItem';

const MainNav = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" style={{zIndex: '100'}}>
      <div className="navbar-header">
        <img src="img/richard.jpg" style={{height: '50px'}} />
      </div>
      <div className="navbar-header">
        <a className="navbar-brand">Richard Lucas</a>
      </div>
      <ul className="nav navbar-nav">
        <LinkItem path="/">Resume</LinkItem>
      </ul>
    </nav>
  );
};

export default MainNav;
