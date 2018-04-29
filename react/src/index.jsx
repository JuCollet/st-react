import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import './styles/styles.less';

import Home from './scenes/Home/Home';
import App from './scenes/App/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app/stats" component={App} />
      <Route path="/app" component={App} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root'),
);
