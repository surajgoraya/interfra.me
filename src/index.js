import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './core/css/anim.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Redirector from './components/Redirector';

ReactDOM.render(
  <React.StrictMode>
    <Router>``
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/ewbok">
          <Redirector href={'https://fanlink.to/ewbok'}/>
        </Route>
        <Route exact path="/flowers">
          <Redirector href={'https://distrokid.com/hyperfollow/jeikatsu/flowers-feat-interframe'}/>
        </Route>
        <Route exact path="*">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
