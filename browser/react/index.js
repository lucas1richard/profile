import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import {hashHistory, IndexRoute, Router, Route} from 'react-router';
import Main from './Main';
import Projects from './Projects';
import AboutMe from './AboutMe';
import ProjectDetail from './Project-Detail';
import { Provider } from 'react-redux';
import store from '../redux/store';
import theme from './Styled/theme';
import {ThemeProvider} from 'styled-components';

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Resume} />
          <Route path="projects" component={Projects} />
          <Route path="project-detail/:project" component={ProjectDetail} />
          <Route path="about" component={AboutMe} />
        </Route>
      </Router>
    </Provider>
  </ThemeProvider>
);


ReactDOM.render(app, document.getElementById('main'));
