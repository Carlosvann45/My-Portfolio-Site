import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import NotFound from '../not-found/NotFound';
import PatientPage from '../patients-page/PatientPage';

/**
 * Runs browser router to specific webpage.
 *
 * @returns page for user to view
 */
const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" render={() => <PatientPage />} />
      <Route render={() => <NotFound />} />
    </Switch>
  </BrowserRouter>
);

export default App;
