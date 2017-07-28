import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import {hashHistory, IndexRoute, Router, Route} from 'react-router';
import Main from './Main';

const app = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Resume} />
    </Route>
  </Router>
);


ReactDOM.render(app, document.getElementById('main'));
