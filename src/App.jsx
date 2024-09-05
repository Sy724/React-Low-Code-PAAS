import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '@/router';
import './App.css'

const App = () => (
  <Router>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Router>
);

export default App;
