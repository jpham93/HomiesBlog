import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, BlogPost, BlogFeed, Navbar, Events, PostForm } from './components';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Events />
      <Switch>
        <Route path='/post' component={PostForm} />
        <Route path="/feed" component={BlogFeed} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
