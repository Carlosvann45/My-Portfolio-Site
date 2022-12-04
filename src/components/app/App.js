import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import NotFound from '../not-found/NotFound';
import About from '../about/About';

/**
 * Runs browser router to specific webpage.
 *
 * @returns page for user to view
 */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => {}} />
      <Route exact path="/about" render={() => <About />} />
      <Route render={() => <NotFound />} />
    </Switch>
  </BrowserRouter>
);

export default App;
