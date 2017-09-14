import React, { Component } from 'react';

import EarthquakeList from './EarthquakeList';
import EarthquakeInfo from './EarthquakeInfo';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
            <div className="my-header">
                Earthquakes!
            </div>
        </div>
        <div>
            <EarthquakeInfo/>
            <EarthquakeList/>
        </div>
      </div>
    );
  }
}

export default App;
