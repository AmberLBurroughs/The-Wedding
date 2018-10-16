import React, { Component } from 'react';
import './App.css';

import Media from './components/Media';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Dates from './components/Dates';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Accomidations from './components/Accomidations';
import Attire from './components/Attire';
import Travel from './components/Travel';
import Transportation from './components/Transportation';
import Recommendations from './components/Recommendations';
import Gifts from './components/Gifts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Media id="media" />
        <Navigation id="navigation" />
        <Hero id="hero" />
        <Welcome id="welcome" />
        <Dates id="dates" />
        <Events id="events" />
        <RSVP id="rsvp" />
        <Accomidations id="accomidatiosn" />
        <Attire id="attire" />
        <Travel id="travel" />
        <Transportation id="transportation" />
        <Recommendations id="recommendations" />
        <Gifts id="gifts" />
      </div>
    );
  }
}

export default App;
