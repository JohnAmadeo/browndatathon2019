import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './Map';
import './App.css';

class App extends Component {
  state = {
    stateId: null,
  };

  render() {
    return (
      <div className="App">
        {/* <img src={us2} alt="us map" /> */}
        <Map 
          colors={{ 'CA': 'papayawhip' }}
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
