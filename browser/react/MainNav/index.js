import React from 'react';
import LinkItem from './LinkItem';
import Nav from '../Styled/Nav';

class MainNav extends React.Component {

  constructor() {
    super();
    this.state = {
      extended: false
    };

    this.updateExtended = this.updateExtended.bind(this);
  }

  updateExtended() {
    this.setState({extended: !this.state.extended});
  }

  render() {
    return (
      <Nav className={this.state.extended ? 'responsive' : null} primary>
        <a>Richard Lucas Portfolio</a>
        <LinkItem path="/">Resume</LinkItem>
        <LinkItem path="/about">About Me</LinkItem>
        <LinkItem path="/projects">Projects</LinkItem>
        <a className="icon" onClick={this.updateExtended}>&#9776;</a>
      </Nav>
    );
  }
}

export default MainNav;
