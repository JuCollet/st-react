import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Statistics from './components/views/Statistics/Statistics';
import Calculator from './components/views/Calculator/Calculator';
import Send from './components/views/Send/Send';
import Keep from './components/views/Keep/Keep';

const App = () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <Switch>
      <Route path="/app/stats" component={Statistics} />
      <Route path="/app/calc" component={Calculator} />
      <Route path="/app/send" component={Send} />
      <Route path="/app/keep" component={Keep} />
    </Switch>
  </div>
);

export default App;
