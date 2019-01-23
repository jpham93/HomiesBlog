import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD:homies-blog/src/index.js

import HomePage from './components/HomePage';
import Navbar from './components/Navbar'

=======
import { HomePage, BlogPost, BlogFeed } from './components';
>>>>>>> 4fa9dd88fe1477491d9954370900f0f0e2cdd07c:client/homies-blog/src/index.js
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/feed" component={BlogFeed} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
