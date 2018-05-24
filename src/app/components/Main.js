import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js';
import NoPage404 from './NoPage404.js';
import Test from './Test.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/404" component={NoPage404} />
      <Redirect from="*" to="404" />
    </Switch>
  </main>
);

export default Main;
