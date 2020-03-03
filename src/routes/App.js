import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Thanks from '../containers/Thanks';

const App = () => (
  <BrowserRouter basename={'/carnet'}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gracias" component={Thanks} />
    </Switch>
  </BrowserRouter>
)

export default App;