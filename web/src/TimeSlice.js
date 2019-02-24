import React, { Component } from 'react';
import colorbrewer from 'colorbrewer';
import rawTimeSliceJson from './time_slice.json';
import Map from './Map';
import StepSlider from './StepSlider';
import './App.css';
import styled from 'styled-components';

let timeSliceJson = {}
for (let monthStr of Object.keys(rawTimeSliceJson)) {
  timeSliceJson[Number(monthStr)] = rawTimeSliceJson[monthStr];
}

class TimeSlice extends Component {
  state = {
    colorPalette: colorbrewer.Blues[8],
    stateName: 'California',
    month: 6,
    minMonth: 1,
    maxMonth: 12,
    // TODO: Hardcoding dataset min/max in component! This is bad :(
    minScore: 0,
    maxScore: 8,
  }

  render() {
    const stateScores = timeSliceJson[this.state.month];
    let colors = {};
    for (let state of Object.keys(stateScores)) {
      colors[state] = this.state.colorPalette[Math.floor(stateScores[state])];
    }
    console.log(colors);

    return (
      <div className="App">
        <Panel>
          <div>
            {`${this.state.stateName} / ${this.state.month}`}
          </div>
          {stateScores[this.state.stateName]}
        </Panel>

        <MapContainer>
          <Map
            colors={colors}
            onMouseOverState={stateName => this.setState({ stateName })}
            onMouseOutState={() => {}}
          />
        </MapContainer>

        <SliderContainer>
          <SliderStartLabel>January</SliderStartLabel>
          <StepSlider
            value={this.state.month}
            minValue={this.state.minMonth}
            maxValue={this.state.maxMonth}
            onSlide={(_, month) => this.setState({ month })}
          />
          <SliderEndLabel>December</SliderEndLabel>
        </SliderContainer>
      </div>
    );
  }
}


const Panel = styled.div`
  background: white;
  box-shadow: 4px 13px 27px -5px rgba(50,50,93,.25), 4px 8px 16px -8px rgba(0,0,0,.3), 4px -6px 16px -6px rgba(0,0,0,.025);
  font-family: 'Lato', serif;
  font-weight: 700;
  height: 450px;
  padding: 18px;
  position: fixed;
  right: 3%;
  text-align: left;
  top: 60px;
  width: 300px;
`;

const MapContainer = styled.div`
  margin: 0 3%;
  width: 70%;
`;

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

export default TimeSlice;
