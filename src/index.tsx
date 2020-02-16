import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainContainer from './components/main_container';
import People from './components/people';

import * as serviceWorker from './serviceWorker';

import './global/styles/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route exact path='/people' component={People} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
