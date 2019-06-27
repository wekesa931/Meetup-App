import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Meetup from './components/Meetup/meetup';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/meetups/:id" exact component={Meetup}/>
    </Switch>
  );
}

export default App;
