import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import NotFound from '../not-found/NotFound';
import About from '../about/About';
import PageLayout from '../layouts/PageLayout';
import AdminLayout from '../layouts/AdminLayout';
import Home from '../home/Home';

/**
 * @name App
 * @description Runs browser router to specific webpage.
 * @returns page for user to view
 */
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route exact path="/admin/login" element={<Home />} />
        <Route path="/admin/*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
