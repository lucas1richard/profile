import React from 'react';
import MainNav from './MainNav';

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <MainNav />
        <div style={{ marginTop: '65px' }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Main;
