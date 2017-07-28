import React from 'react';
import LinkItem from './LinkItem';

const MainNav = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" style={{zIndex: '100'}}>
      <div className="container-fluid">
        <div className="navbar-header">
          <img src="img/richard.jpg" style={{height: '50px'}} />
        </div>
        <div className="navbar-header">
          <a className="navbar-brand">Richard Lucas</a>
        </div>
        <ul className="nav navbar-nav">
          <LinkItem path="/">Resume</LinkItem>
        </ul>

        {/* Media Links */}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="https://www.linkedin.com/in/richardlucaskym/" style={{height: '20px'}}>
              <i className="fa fa-linkedin-square" style={{fontSize: '20px'}} />
            </a>
          </li>
          <li>
            <a href="https://github.com/lucas1richard/profile" style={{paddingRight: '15px', height: '20px'}}>
              <i className="fa fa-github" style={{fontSize: '20px'}} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
