import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import statesJson from './states.json';
import Map from './Map';
import StepSlider from './StepSlider';
import './App.css';
import styled from 'styled-components';

function randint(end) {
  return Math.floor(Math.random() * end);
}

const colors = colorbrewer.Blues[9];

class App extends Component {
  state = {
    stateId: null,
    value: 6,
    minValue: 1,
    maxValue: 12,
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
        <SliderContainer>
          <SliderStartLabel>January</SliderStartLabel>
          <StepSlider
            value={this.state.value}
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            onSlide={(_, value) => this.setState({ value })}
          />
          <SliderEndLabel>December</SliderEndLabel>
        </SliderContainer>
        <div>
          {this.state.stateId}
        </div>
      </div>
    );
  }
}

const SliderStartLabel = styled.div`
  position: absolute;
  left: 0;
  transform: translate(-50%, -50%);
`;

const SliderEndLabel = styled.div`
  position: absolute;
  right: 0;
  transform: translate(50%, -50%);
`;

const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  width: 70%;
`;

export default App;
