import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import classes from './App.module.css';
import NotFound from '../not-found/NotFound';
import About from '../about/About';
import Header from '../header/Header';

/**
 * @name App
 * @description Runs browser router to specific webpage.
 * @returns page for user to view
 */
const App = () => (
  <BrowserRouter>
    <div className={classes.siteContainer}>
      <Header />
      <div className={classes.pageContainer}>
        <Switch>
          <Route exact path="/" render={() => {}} />
          <Route exact path="/about" render={() => <About />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
