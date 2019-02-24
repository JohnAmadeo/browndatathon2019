import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import statesJson from './states.json';
import Map from './Map';
import './App.css';

function randint(end) {
  return Math.floor(Math.random() * end);
}

const colors = colorbrewer.Blues[9];

class App extends Component {
  state = {
    stateId: null,
  }

  render() {
    return (
      <div className="App">
        {/* <img src={us2} alt="us map" /> */}
        <Map 
          colors={{}}
          onMouseOverState={stateId => this.setState({ stateId })}
          onMouseOutState={_ => this.setState({ stateId: null })}
        />
        <div>
          {this.state.stateId}
        </div>
      </div>
    );
  }
}

export default App;
