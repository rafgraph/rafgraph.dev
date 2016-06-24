import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import Code from './components/Code';
import Contact from './components/Contact';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="code" component={Code} />
    <Route path="contact" component={Contact} />
    <Route path="*" onEnter={(nextState, replace) => replace({ pathname: '/' })} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
