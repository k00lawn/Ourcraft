import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App =() =>{

  const PlayGround = lazy(() => import('../src/containers/PlayGround'));

  return (
      <Router >
      <Suspense fallback={<div className="loader centerLoader" />}>
          <Switch>
          <Route exact path="/" component={PlayGround} />
          </Switch>
        </Suspense>
      </Router>
  )
}
export default App;
