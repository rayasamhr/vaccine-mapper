import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

import Navigation from '../Navigation/Navigation';
import SignInPage from '../SignIn/SignIn';
import FormPage from '../Home/Form';
import MapPage from '../Home/Map';

import * as ROUTES from '../../Routes'
import { Container } from 'semantic-ui-react';

const App = () => (
  <Router>
    <Navigation />
    <Container fluid>
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.FORM} component={FormPage} />
      <Route path={ROUTES.MAP} component={MapPage} />
    </Container>
  </Router>
);

export default App;